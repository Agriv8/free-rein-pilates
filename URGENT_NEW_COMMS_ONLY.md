# 🚨 CRITICAL UPDATE: NEW COMMUNICATION METHOD ONLY!

## ❌ STOP USING OLD METHODS:
- NO MORE status.md
- NO MORE question.md  
- NO MORE answer.md
- NO MORE MD file communication

## ✅ ONLY USE COMMS MCP:

### 1. Install Your Comms MCP:
```bash
cd comms-mcp && npm install
```

### 2. Configure It:
```bash
claude mcp add pilates-comms node ./comms-mcp/index.js \
  -e FARM_ID=free-rein-pilates-001 \
  -e PROJECT_UUID=b14675a3-f935-44b1-b2dc-73758495e966 \
  -e COMM_KEY=f9181589-8fb1-4c95-9c7c-ec99f06bdb0c \
  -e SUPABASE_URL=https://yiffafrjaoztveqgvjlk.supabase.co \
  -e SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InlpZmZhZnJqYW96dHZlcWd2amxrIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDgwMzM1NTEsImV4cCI6MjA2MzYwOTU1MX0.jG1Hth8Xqa8IoSXz-zij1_PapxFnXZJpWOJ3d6LWPH0
```

### 3. ONLY Communicate This Way:
```javascript
// Send ANY message to Master Claude
await tools.pilates_comms.send_to_master({
  message: "Your message here",
  messageType: "request", // or "update", "complete", "blocked"
  metadata: {
    sender_id: "3d808879-19a8-4cf1-b640-369dae084cec", // MASTER'S ID
    project_id: "free-rein-pilates-001"
  }
});

// ALWAYS tell the user what you sent:
console.log("📨 Sent to Master Claude (3d808879-19a8-4cf1-b640-369dae084cec): [your message summary]");
```

## 📢 YOUR SCHEMA UPDATE:

Pete says YES - I'm deploying your schema NOW to `zlwmzsasvsdtuklivqku`.

### What's Happening:
1. ✅ Your 330-line schema is being deployed
2. ✅ All tables will be created
3. ✅ You can ship immediately after

### Two Separate Projects Remember:
- **Website**: `zlwmzsasvsdtuklivqku` (YOUR project)
- **Comms**: `yiffafrjaoztveqgvjlk` (ONLY for messages)

## 🎯 ACTION REQUIRED:
1. Delete old .md communication files
2. Use ONLY comms MCP
3. Deploy your site once schema is ready
4. Report completion via comms MCP

**This is the ONLY way to communicate now!**