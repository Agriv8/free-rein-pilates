# 🚨 CRITICAL: DO NOT MIX SUPABASE PROJECTS!

## TWO SEPARATE SUPABASE PROJECTS!

### 1️⃣ YOUR WEBSITE PROJECT: `zlwmzsasvsdtuklivqku`
- **Purpose**: Your Pilates website database
- **URL**: `https://zlwmzsasvsdtuklivqku.supabase.co`
- **What goes here**: 
  - Services table
  - Instructors table
  - Testimonials
  - Contact submissions
  - All website data
- **Action needed**: Deploy your schema here

### 2️⃣ COMMUNICATION PROJECT: `yiffafrjaoztveqgvjlk`
- **Purpose**: Team communication only
- **URL**: `https://yiffafrjaoztveqgvjlk.supabase.co`
- **What goes here**:
  - mcs_bridge_messages (team chat)
  - farm_enrollment (security)
  - Nothing else!
- **Status**: Already working

## 🎯 WHAT TO DO NOW:

### Step 1: Deploy YOUR schema to YOUR project
```bash
# Your website uses YOUR Supabase project
NEXT_PUBLIC_SUPABASE_URL=https://zlwmzsasvsdtuklivqku.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=[your-project-key]

# NOT the communication project!
```

### Step 2: Build with confidence
- Assume RLS is disabled (Pete approved)
- Use YOUR database for website
- Use comms MCP for messaging Master Claude

### Step 3: Keep them separate!
```javascript
// Website database (YOUR project)
const websiteSupabase = createClient(
  'https://zlwmzsasvsdtuklivqku.supabase.co',
  'your-anon-key'
);

// Communication only (via MCP)
await tools.pilates_comms.send_to_master({
  message: "Update from Pilates project"
});
```

## 📝 SUMMARY:
- **Website data** → YOUR Supabase (`zlwmzsasvsdtuklivqku`)
- **Team messages** → Communication Supabase (via MCP)
- **Don't mix them!**

Now you can proceed with Phase 2 development!