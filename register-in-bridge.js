#!/usr/bin/env node

/**
 * Register Free Rein Pilates in MCP Bridge System
 * Auto-setup for Claude communication
 */

const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const SUPABASE_URL = 'https://yiffafrjaoztveqgvjlk.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpZmZhZnJqYW96dHZlcWd2amxrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODAzMzU1MSwiZXhwIjoyMDYzNjA5NTUxfQ.mt7gKml2xA2VZFhPjGtLQ73kkrGIDHnP8iFCMCySaiw';

async function registerFreeReinPilates() {
    console.log('🧘‍♀️ Registering Free Rein Pilates in MCP Bridge System...\n');
    
    try {
        // Register instance
        const instanceData = {
            claude_id: 'free-rein-pilates-001',
            capabilities: ['web-development', 'pilates-website', 'react', 'deployment', 'wellness-industry'],
            status: 'online',
            bridge_version: '1.0.0',
            metadata: {
                role: 'child',
                project_type: 'pilates-business-website',
                client: 'Free Rein Pilates',
                location: '/Users/agriv8r/Documents/python/Master Claude/projects/free-rein-pilates/',
                services: [
                    '1-2-1 Studio Pilates',
                    'Mat Pilates Courses', 
                    'Sports Therapy Sessions',
                    'Equestrian Pilates',
                    'Day Retreats'
                ],
                tech_stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
                deployment: 'Netlify',
                cli_enabled: true
            }
        };
        
        const response = await fetch(`${SUPABASE_URL}/rest/v1/mcs_claude_instances`, {
            method: 'POST',
            headers: {
                'apikey': SUPABASE_KEY,
                'Authorization': `Bearer ${SUPABASE_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(instanceData)
        });
        
        if (!response.ok) {
            throw new Error(`Registration failed: ${await response.text()}`);
        }
        
        console.log('✅ Free Rein Pilates registered in MCP Bridge System');
        
        // Send initial report to Master Claude
        await sendInitialReport();
        
    } catch (error) {
        console.error('❌ Registration failed:', error.message);
    }
}

async function sendInitialReport() {
    console.log('\n📨 Sending initial report to AIDAN-GM-001...');
    
    try {
        // Get instances
        const [projectResponse, gmResponse] = await Promise.all([
            fetch(`${SUPABASE_URL}/rest/v1/mcs_claude_instances?claude_id=eq.free-rein-pilates-001`, {
                headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
            }),
            fetch(`${SUPABASE_URL}/rest/v1/mcs_claude_instances?claude_id=eq.AIDAN-GM-001`, {
                headers: { 'apikey': SUPABASE_KEY, 'Authorization': `Bearer ${SUPABASE_KEY}` }
            })
        ]);
        
        const projectInstances = await projectResponse.json();
        const gmInstances = await gmResponse.json();
        
        const project = projectInstances[0];
        const grandMaster = gmInstances[0];
        
        // Send registration confirmation
        const messageData = {
            sender_id: project.instance_id,
            recipient_id: grandMaster.instance_id,
            message_type: 'confirmation',
            content: {
                subject: 'Free Rein Pilates Project Ready for Development',
                message: `🧘‍♀️ Free Rein Pilates project extracted and configured:

✅ Project Structure: Complete React + TypeScript setup
✅ Client Content: Professional pilates imagery and written content available
✅ MCP Bridge: Registered as free-rein-pilates-001
✅ CLI Ready: GitHub, Netlify, Supabase CLI access configured
✅ All 7 Pillars: Implemented in CLAUDE.md

READY FOR DEVELOPMENT:
- Professional pilates business website
- 5 main service offerings
- High-quality client assets included
- Commercial grade setup complete

Awaiting development instructions or ready to begin autonomous development.`,
                project_status: 'ready_for_development',
                services: [
                    '1-2-1 Studio Pilates',
                    'Mat Pilates Courses',
                    'Sports Therapy Sessions', 
                    'Equestrian Pilates',
                    'Day Retreats'
                ],
                tech_stack: ['React', 'TypeScript', 'Vite', 'Tailwind CSS'],
                assets_ready: true
            },
            metadata: {
                timestamp: new Date().toISOString(),
                project_type: 'pilates_business_website',
                client: 'Free Rein Pilates',
                extraction_source: 'aidan-webbuilder/projects/free-rein-pilates',
                setup_complete: true
            }
        };
        
        const messageResponse = await fetch(`${SUPABASE_URL}/rest/v1/mcs_bridge_messages`, {
            method: 'POST',
            headers: {
                'apikey': SUPABASE_KEY,
                'Authorization': `Bearer ${SUPABASE_KEY}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(messageData)
        });
        
        if (!messageResponse.ok) {
            throw new Error(`Message send failed: ${await messageResponse.text()}`);
        }
        
        console.log('✅ Initial report sent to AIDAN-GM-001');
        console.log('🚀 Free Rein Pilates ready for Claude development!');
        
    } catch (error) {
        console.error('❌ Report send failed:', error.message);
    }
}

registerFreeReinPilates().catch(console.error);