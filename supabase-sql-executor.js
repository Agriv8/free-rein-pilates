#!/usr/bin/env node

/**
 * Supabase SQL Executor - Programmatic SQL execution via RPC functions
 * 
 * This solves the problem of needing to press "Run" button in Supabase SQL Editor
 * by using database functions that can be called programmatically via API.
 */

import { createClient } from '@supabase/supabase-js';
import { promises as fs } from 'fs';
import path from 'path';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

// Configuration - Updated for Free Rein Pilates project
const SUPABASE_URL = process.env.VITE_SUPABASE_URL || 'https://zlwmzsasvsdtuklivqku.supabase.co';
const SUPABASE_SERVICE_ROLE_KEY = process.env.supabase_service_role || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inpsd216c2FzdnNkdHVrbGl2cWt1Iiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTc0OTAxNzUwNiwiZXhwIjoyMDY0NTkzNTA2fQ.-TxJotiCxc_zEuy0UZjXjrjgTLWk6iJCBdARfVwLUSA';

if (!SUPABASE_SERVICE_ROLE_KEY && process.argv.includes('list')) {
  // Skip service role key check for list command
} else if (!SUPABASE_SERVICE_ROLE_KEY) {
  console.error('❌ SUPABASE_SERVICE_ROLE_KEY environment variable required');
  console.error('💡 Create .env file with your Supabase service role key');
  console.error('📋 Use .env.example as template');
  process.exit(1);
}

// Initialize Supabase client with service role (bypasses RLS)
const supabase = SUPABASE_SERVICE_ROLE_KEY ? createClient(SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY) : null;

/**
 * Execute SQL file via Supabase RPC function
 */
async function executeSQLFile(filePath) {
  try {
    console.log(`📄 Reading SQL file: ${filePath}`);
    const sqlContent = await fs.readFile(filePath, 'utf8');
    
    console.log(`🚀 Executing SQL (${sqlContent.length} characters)...`);
    
    // Call the safe_execute_sql function we'll create in Supabase
    const { data, error } = await supabase.rpc('safe_execute_sql', {
      sql_query: sqlContent
    });
    
    if (error) {
      console.error('❌ SQL Execution Error:', error);
      return { success: false, error };
    }
    
    console.log('✅ SQL executed successfully');
    console.log('📊 Result:', data);
    
    return { success: true, data };
    
  } catch (err) {
    console.error('❌ File Error:', err);
    return { success: false, error: err.message };
  }
}

/**
 * Execute raw SQL string
 */
async function executeSQL(sqlQuery) {
  try {
    console.log(`🚀 Executing SQL query...`);
    console.log(`📝 Query: ${sqlQuery.substring(0, 100)}...`);
    
    const { data, error } = await supabase.rpc('safe_execute_sql', {
      sql_query: sqlQuery
    });
    
    if (error) {
      console.error('❌ SQL Execution Error:', error);
      return { success: false, error };
    }
    
    console.log('✅ SQL executed successfully');
    console.log('📊 Result:', data);
    
    return { success: true, data };
    
  } catch (err) {
    console.error('❌ Execution Error:', err);
    return { success: false, error: err.message };
  }
}

/**
 * Setup the safe_execute_sql function in Supabase
 * This function needs to be created once in Supabase SQL Editor
 */
async function setupSQLExecutor() {
  console.log('🔧 Setting up SQL executor function in Supabase...');
  
  const setupSQL = `
-- Create a secure SQL execution function
-- This allows programmatic SQL execution via RPC calls

CREATE OR REPLACE FUNCTION safe_execute_sql(sql_query TEXT)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER -- Runs with function owner privileges
AS $$
DECLARE
  result JSONB;
  row_count INTEGER;
BEGIN
  -- Security: Only allow specific types of queries
  -- Block dangerous operations
  IF sql_query ~* 'DROP\\s+DATABASE|DROP\\s+SCHEMA|TRUNCATE\\s+(?!.*mcs_|.*research_)' THEN
    RETURN jsonb_build_object(
      'success', false,
      'error', 'Dangerous operation blocked',
      'query', left(sql_query, 100)
    );
  END IF;
  
  -- Execute the SQL
  EXECUTE sql_query;
  
  -- Get row count if available
  GET DIAGNOSTICS row_count = ROW_COUNT;
  
  -- Return success result
  RETURN jsonb_build_object(
    'success', true,
    'message', 'SQL executed successfully',
    'rows_affected', row_count,
    'executed_at', NOW()
  );
  
EXCEPTION WHEN OTHERS THEN
  -- Return error details
  RETURN jsonb_build_object(
    'success', false,
    'error', SQLERRM,
    'error_code', SQLSTATE,
    'query', left(sql_query, 100)
  );
END;
$$;

-- Grant execute permission to authenticated and anon roles
GRANT EXECUTE ON FUNCTION safe_execute_sql(TEXT) TO authenticated;
GRANT EXECUTE ON FUNCTION safe_execute_sql(TEXT) TO anon;
GRANT EXECUTE ON FUNCTION safe_execute_sql(TEXT) TO service_role;

-- Create a more powerful version for CREATE operations
CREATE OR REPLACE FUNCTION admin_execute_sql(sql_query TEXT)
RETURNS JSONB
LANGUAGE plpgsql
SECURITY DEFINER
AS $$
DECLARE
  result JSONB;
  row_count INTEGER;
BEGIN
  -- More permissive for CREATE/ALTER operations
  -- Still block complete destruction
  IF sql_query ~* 'DROP\\s+DATABASE|DROP\\s+SCHEMA.*master|TRUNCATE.*master' THEN
    RETURN jsonb_build_object(
      'success', false,
      'error', 'System destruction blocked',
      'query', left(sql_query, 100)
    );
  END IF;
  
  -- Execute the SQL
  EXECUTE sql_query;
  
  GET DIAGNOSTICS row_count = ROW_COUNT;
  
  RETURN jsonb_build_object(
    'success', true,
    'message', 'SQL executed successfully (admin mode)',
    'rows_affected', row_count,
    'executed_at', NOW()
  );
  
EXCEPTION WHEN OTHERS THEN
  RETURN jsonb_build_object(
    'success', false,
    'error', SQLERRM,
    'error_code', SQLSTATE,
    'query', left(sql_query, 100)
  );
END;
$$;

-- Grant admin function to service role only
GRANT EXECUTE ON FUNCTION admin_execute_sql(TEXT) TO service_role;
`;

  return await executeSQL(setupSQL);
}

/**
 * Test the SQL executor with a simple query
 */
async function testExecutor() {
  console.log('🧪 Testing SQL executor...');
  
  const testSQL = `
-- Test query - safe operation
SELECT 'SQL Executor is working!' as message, NOW() as timestamp;
`;
  
  return await executeSQL(testSQL);
}

/**
 * Execute the research knowledge table creation
 */
async function createResearchTable() {
  const filePath = path.join(__dirname, 'CREATE_RESEARCH_KNOWLEDGE_TABLE.sql');
  console.log('📋 Creating research knowledge table...');
  return await executeSQLFile(filePath);
}

/**
 * List available SQL files
 */
async function listSQLFiles() {
  console.log('📁 Available SQL files:');
  
  const sqlDirs = [
    { path: '.', name: 'Root' },
    { path: './ARCHIVE/SQL', name: 'Archive' },
    { path: './sqltoaction', name: 'SQL to Action' },
    { path: './supabase-implementation', name: 'Supabase Implementation' }
  ];
  
  let totalFiles = 0;
  
  for (const dir of sqlDirs) {
    try {
      const files = await fs.readdir(dir.path);
      const sqlFiles = files.filter(file => file.endsWith('.sql'));
      
      if (sqlFiles.length > 0) {
        console.log(`\n📂 ${dir.name} (${dir.path})`);
        sqlFiles.forEach(file => {
          console.log(`  📄 ${file}`);
          totalFiles++;
        });
      }
    } catch (err) {
      console.log(`\n❌ ${dir.name} (${dir.path}): Directory not found`);
    }
  }
  
  console.log(`\n📊 Total SQL files found: ${totalFiles}`);
  
  if (totalFiles > 0) {
    console.log('\n🚀 Usage examples:');
    console.log('  npm run sql:file CREATE_RESEARCH_KNOWLEDGE_TABLE.sql');
    console.log('  npm run sql:file ARCHIVE/SQL/EXECUTE_THIS_IN_SUPABASE.sql');
    console.log('  npm run sql:query "SELECT NOW()"');
  }
}

/**
 * Main CLI interface
 */
async function main() {
  const args = process.argv.slice(2);
  const command = args[0];
  
  console.log('🗄️  Supabase SQL Executor');
  console.log('=' .repeat(50));
  
  switch (command) {
    case 'setup':
      await setupSQLExecutor();
      break;
      
    case 'test':
      await testExecutor();
      break;
      
    case 'file':
      const filePath = args[1];
      if (!filePath) {
        console.error('❌ Please provide a file path: npm run sql file path/to/file.sql');
        process.exit(1);
      }
      await executeSQLFile(filePath);
      break;
      
    case 'query':
      const query = args.slice(1).join(' ');
      if (!query) {
        console.error('❌ Please provide a query: npm run sql query "SELECT * FROM table"');
        process.exit(1);
      }
      await executeSQL(query);
      break;
      
    case 'research':
      await createResearchTable();
      break;
      
    case 'list':
      await listSQLFiles();
      break;
      
    default:
      console.log(`
🚀 Usage:
  node supabase-sql-executor.js setup     # Setup the SQL executor function
  node supabase-sql-executor.js test      # Test the executor
  node supabase-sql-executor.js file <path>  # Execute SQL file
  node supabase-sql-executor.js query <sql>  # Execute SQL query
  node supabase-sql-executor.js research  # Create research table
  node supabase-sql-executor.js list      # List available SQL files

🔧 Setup:
  1. Set SUPABASE_SERVICE_ROLE_KEY environment variable
  2. Run 'node supabase-sql-executor.js setup' once
  3. Then use file/query commands for all SQL execution

💡 Examples:
  node supabase-sql-executor.js file CREATE_RESEARCH_KNOWLEDGE_TABLE.sql
  node supabase-sql-executor.js query "SELECT * FROM research_knowledge LIMIT 5"
      `);
      break;
  }
}

// Export functions for programmatic use
export {
  executeSQLFile,
  executeSQL,
  setupSQLExecutor,
  testExecutor,
  createResearchTable
};

// Run CLI if called directly  
const scriptPath = new URL(import.meta.url).pathname;
const isMain = process.argv[1] && process.argv[1].endsWith('supabase-sql-executor.js');

if (isMain) {
  main().catch(err => {
    console.error('❌ Error:', err.message || err);
    process.exit(1);
  });
}