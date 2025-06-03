#!/usr/bin/env node

// Free Rein Pilates - Supabase Setup Script
// This script helps set up the Supabase connection

const fs = require('fs')
const path = require('path')

console.log('🏛️ Free Rein Pilates - Supabase Setup')
console.log('=======================================')
console.log()
console.log('This script will help you configure Supabase for your Free Rein Pilates project.')
console.log()

const envPath = path.join(__dirname, '.env')
const envExamplePath = path.join(__dirname, '.env.example')

// Check if .env already exists
if (fs.existsSync(envPath)) {
  console.log('✅ .env file already exists')
  console.log('   Please update it with your Supabase credentials')
} else {
  // Copy .env.example to .env
  if (fs.existsSync(envExamplePath)) {
    fs.copyFileSync(envExamplePath, envPath)
    console.log('✅ Created .env file from .env.example')
  } else {
    // Create basic .env file
    const envContent = `# Supabase Configuration\nVITE_SUPABASE_URL=your_supabase_project_url\nVITE_SUPABASE_ANON_KEY=your_supabase_anon_key\n\n# Add your other environment variables here\n`
    fs.writeFileSync(envPath, envContent)
    console.log('✅ Created basic .env file')
  }
}

console.log()
console.log('📋 Next Steps:')
console.log('1. Create a Supabase project at https://supabase.com')
console.log('2. Get your project URL and anon key from Settings > API')
console.log('3. Update the .env file with your credentials')
console.log('4. Run the database schema:')
console.log('   - Copy the contents of docs/DATABASE-SCHEMA.sql')
console.log('   - Paste and run it in your Supabase SQL editor')
console.log('5. Run the migration script to populate data:')
console.log('   - npm run migrate-content')
console.log()
console.log('🎯 After setup, your website will load content from Supabase!')
console.log('   The admin can then update content through the database.')
console.log()