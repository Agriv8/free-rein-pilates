const https = require('https');

function makeRequest(options, data) {
  return new Promise((resolve, reject) => {
    const req = https.request(options, (res) => {
      let body = '';
      res.on('data', (chunk) => body += chunk);
      res.on('end', () => {
        try {
          resolve(JSON.parse(body));
        } catch (e) {
          resolve(body);
        }
      });
    });
    req.on('error', reject);
    if (data) req.write(JSON.stringify(data));
    req.end();
  });
}

async function sendUrgentHelpRequest() {
  const apiKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpZmZhZnJqYW96dHZlcWd2amxrIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0ODAzMzU1MSwiZXhwIjoyMDYzNjA5NTUxfQ.mt7gKml2xA2VZFhPjGtLQ73kkrGIDHnP8iFCMCySaiw';
  
  // Send urgent message to Grand Master
  const urgentMessage = {
    sender_id: '9d59d49b-536f-4f66-a60c-a8ff9fb5f41e', // Our instance ID
    recipient_id: '294c7d13-b93a-4a26-bb05-a59145a8f747', // AIDAN-GM-001
    message_type: 'urgent_help_request',
    content: {
      subject: '🚨 URGENT: Bugfix Specialist Needed - Free Rein Pilates Deployment Issue',
      message: 'Free Rein Pilates website works perfectly in local development but shows empty page on Netlify deployment. Need immediate help from bugfix specialist.',
      details: {
        project: 'Free Rein Pilates',
        location: '/Users/agriv8r/Documents/python/Master Claude/projects/free-rein-pilates/',
        critical_issues: {
          deployment_problem: 'Empty page on Netlify despite successful build',
          local_status: 'Works perfectly on localhost',
          urgency: 'CRITICAL - Client website is down',
          tech_stack: ['React', 'Vite', 'TypeScript', 'Tailwind CSS'],
          deployment_platform: 'Netlify'
        },
        help_needed: [
          'Analyze homepage components for deployment issues',
          'Debug Vite build configuration',
          'Check for missing assets or paths in production',
          'Resolve Netlify deployment showing empty page'
        ],
        request_type: 'BUGFIX_SPECIALIST_URGENT',
        priority: 'CRITICAL'
      }
    },
    status: 'urgent',
    created_at: new Date().toISOString()
  };

  console.log('Sending URGENT help request to Grand Master...');
  
  const messageOptions = {
    hostname: 'yiffafrjaoztveqgvjlk.supabase.co',
    path: '/rest/v1/mcs_messages',
    method: 'POST',
    headers: {
      'apikey': apiKey,
      'Content-Type': 'application/json'
    }
  };

  try {
    const response = await makeRequest(messageOptions, urgentMessage);
    console.log('✅ URGENT help request sent successfully:', response);
    
    // Also broadcast to all online instances
    const broadcastMessage = {
      ...urgentMessage,
      recipient_id: null, // Broadcast to all
      message_type: 'broadcast_urgent_help'
    };
    
    console.log('Broadcasting to all online instances...');
    await makeRequest(messageOptions, broadcastMessage);
    console.log('✅ Broadcast sent to all instances');
    
  } catch (error) {
    console.error('❌ Error sending help request:', error);
  }
}

// Execute immediately
sendUrgentHelpRequest();