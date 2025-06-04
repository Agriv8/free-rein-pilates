#!/usr/bin/env node
import { Server } from '@modelcontextprotocol/sdk/server/index.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { createClient } from '@supabase/supabase-js';
import { CallToolRequestSchema, ListToolsRequestSchema } from '@modelcontextprotocol/sdk/types.js';

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseServiceKey = process.env.SUPABASE_ANON_KEY;
const COMM_KEY = process.env.COMM_KEY;
const FARM_ID = process.env.FARM_ID || 'free-rein-pilates-001';
const PROJECT_UUID = process.env.PROJECT_UUID || 'b14675a3-f935-44b1-b2dc-73758495e966';

const supabase = createClient(supabaseUrl, supabaseServiceKey);

const server = new Server({
  name: 'free-rein-pilates-comms',
  version: '1.0.0',
}, {
  capabilities: { tools: {} },
});

server.setRequestHandler(ListToolsRequestSchema, async () => ({
  tools: [
    {
      name: 'send_to_master',
      description: 'Send a message to Master Claude (AIDAN-GM-001)',
      inputSchema: {
        type: 'object',
        properties: {
          message: { type: 'string', description: 'The message to send' },
          messageType: { type: 'string', enum: ['update', 'question', 'request', 'complete', 'blocked'] },
          metadata: { type: 'object', description: 'Additional metadata' }
        },
        required: ['message']
      }
    },
    {
      name: 'check_messages',
      description: 'Check for new messages from Master Claude',
      inputSchema: { type: 'object', properties: {} }
    }
  ]
}));

server.setRequestHandler(CallToolRequestSchema, async (request) => {
  switch (request.params.name) {
    case 'send_to_master': {
      try {
        const { message, messageType = 'update', metadata = {} } = request.params.arguments;
        
        const { data, error } = await supabase
          .from('mcs_bridge_messages')
          .insert({
            sender_id: PROJECT_UUID,
            recipient_id: '3d808879-19a8-4cf1-b640-369dae084cec', // AIDAN-GM-001
            content: {
              message: message,
              subject: `Message from ${FARM_ID}`,
              project_id: FARM_ID
            },
            message_type: messageType,
            metadata: {
              ...metadata,
              sent_via: 'comms-mcp',
              comm_key_used: true
            },
            status: 'pending'
          })
          .select()
          .single();

        if (error) throw error;

        return {
          content: [{
            type: 'text',
            text: `✅ Message sent to Master Claude\nID: ${data.id}\nType: ${messageType}`
          }]
        };
      } catch (error) {
        return {
          content: [{
            type: 'text',
            text: `❌ Failed to send message: ${error.message}`
          }]
        };
      }
    }

    case 'check_messages': {
      try {
        const { data: messages, error } = await supabase
          .from('mcs_bridge_messages')
          .select('*')
          .eq('recipient_id', PROJECT_UUID)
          .eq('status', 'pending')
          .order('created_at', { ascending: false })
          .limit(10);

        if (error) throw error;

        if (!messages || messages.length === 0) {
          return {
            content: [{
              type: 'text',
              text: '📭 No new messages from Master Claude'
            }]
          };
        }

        // Mark as read
        await supabase
          .from('mcs_bridge_messages')
          .update({ status: 'delivered', delivered_at: new Date().toISOString() })
          .in('id', messages.map(m => m.id));

        const messageList = messages.map(msg => 
          `📨 From: ${msg.sender_id}\n` +
          `Type: ${msg.message_type}\n` +
          `Content: ${JSON.stringify(msg.content, null, 2)}\n` +
          `Time: ${new Date(msg.created_at).toLocaleString()}`
        ).join('\n---\n');

        return {
          content: [{
            type: 'text',
            text: `📬 ${messages.length} new message(s):\n\n${messageList}`
          }]
        };
      } catch (error) {
        return {
          content: [{
            type: 'text',
            text: `❌ Failed to check messages: ${error.message}`
          }]
        };
      }
    }

    default:
      return {
        content: [{
          type: 'text',
          text: `Unknown tool: ${request.params.name}`
        }]
      };
  }
});

async function main() {
  const transport = new StdioServerTransport();
  await server.connect(transport);
  console.log('Free Rein Pilates Communication MCP is running');
}

main().catch(console.error);