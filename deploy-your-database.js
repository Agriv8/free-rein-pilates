#!/usr/bin/env node

// Free Rein Pilates - Deploy Your Own Database
// Use this to deploy schema to YOUR Supabase project

const { createClient } = require('@supabase/supabase-js');
const fs = require('fs');
const path = require('path');

// YOUR database credentials (update these)
const SUPABASE_URL = 'https://zlwmzsasvsdtuklivqku.supabase.co';
const SUPABASE_SERVICE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpsd216c2FzdnNkdHVrbGl2cWt1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0OTAxNzUwNiwiZXhwIjoyMDY0NTkzNTA2fQ.-TxJotiCxc_zEuy0UZjXjrjgTLWk6iJCBdARfVwLUSA';

async function deploySchema() {
  console.log('🚀 Free Rein Pilates - Database Deployment');
  console.log('==========================================');
  
  if (SUPABASE_SERVICE_KEY === 'YOUR_SERVICE_KEY_HERE') {
    console.log('❌ Please update your SUPABASE_SERVICE_KEY in this file!');
    console.log('📍 Get it from: https://supabase.com/dashboard/project/zlwmzsasvsdtuklivqku/settings/api');
    process.exit(1);
  }

  const supabase = createClient(SUPABASE_URL, SUPABASE_SERVICE_KEY);

  try {
    // Read your database schema
    const schemaPath = path.join(__dirname, 'docs', 'DATABASE-SCHEMA.sql');
    const schema = fs.readFileSync(schemaPath, 'utf8');
    
    console.log(`📄 Reading schema: ${schemaPath}`);
    console.log(`🚀 Executing SQL (${schema.length} characters)...`);

    // Execute your schema
    const { data, error } = await supabase.rpc('exec_sql', { sql: schema });

    if (error) {
      console.log('❌ SQL Error:', error);
    } else {
      console.log('✅ Schema deployed successfully to YOUR database!');
      console.log('📊 Result:', data);
      
      // Test connection
      const { data: products, error: testError } = await supabase
        .from('products')
        .select('count');
        
      if (testError) {
        console.log('⚠️  Tables created but need RLS policies configured');
      } else {
        console.log('✅ Database fully operational!');
      }
    }
    
  } catch (err) {
    console.error('💥 Deployment failed:', err);
  }
}

deploySchema();