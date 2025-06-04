#!/usr/bin/env node

/**
 * MCP Bug Fix Script
 * Fixes common issues with MCP (Model Context Protocol) integration
 */

const fs = require('fs');
const path = require('path');

console.log('🔧 Running MCP Bug Fix...\n');

// Fix 1: Ensure .claude directory exists
const claudeDir = path.join(__dirname, '.claude');
if (!fs.existsSync(claudeDir)) {
  console.log('✅ Creating .claude directory...');
  fs.mkdirSync(claudeDir, { recursive: true });
}

// Fix 2: Update or create settings.local.json
const settingsPath = path.join(claudeDir, 'settings.local.json');
const mcpSettings = {
  "mcpServers": {
    "demo-styles": {
      "command": "node",
      "args": ["../demo-styles/build/index.js"],
      "cwd": "../demo-styles"
    },
    "pexels-image-provider": {
      "command": "node",
      "args": ["../pexels-image-provider/build/index.js"],
      "cwd": "../pexels-image-provider",
      "env": {
        "PEXELS_API_KEY": process.env.PEXELS_API_KEY || "YOUR_PEXELS_API_KEY"
      }
    }
  }
};

try {
  console.log('✅ Writing MCP settings...');
  fs.writeFileSync(settingsPath, JSON.stringify(mcpSettings, null, 2));
  console.log('   Created/updated:', settingsPath);
} catch (error) {
  console.error('❌ Error writing settings:', error.message);
}

// Fix 3: Check for common navigation issues
console.log('\n🔍 Checking for navigation issues...');

// Check if React Router is properly installed
try {
  require.resolve('react-router-dom');
  console.log('✅ React Router DOM is installed');
} catch (e) {
  console.log('❌ React Router DOM not found. Run: npm install react-router-dom');
}

// Fix 4: Clear any cached data that might cause issues
console.log('\n🧹 Clearing potential cache issues...');

// Clear localStorage keys that might cause navigation issues
const cleanupScript = `
// Add this to your browser console if navigation issues persist:
localStorage.clear();
sessionStorage.clear();
console.log('✅ Browser storage cleared');
`;

console.log('If navigation issues persist, run this in browser console:');
console.log(cleanupScript);

// Fix 5: Environment variable check
console.log('\n🔐 Checking environment variables...');

const envFile = path.join(__dirname, '.env.local');
if (!fs.existsSync(envFile)) {
  console.log('⚠️  No .env.local file found');
  console.log('   Creating template .env.local file...');
  
  const envTemplate = `# Supabase Configuration
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_anon_key

# Pexels API (for MCP)
PEXELS_API_KEY=your_pexels_api_key
`;
  
  fs.writeFileSync(envFile, envTemplate);
  console.log('✅ Created .env.local template');
} else {
  console.log('✅ .env.local file exists');
}

// Fix 6: Package.json scripts check
console.log('\n📦 Checking package.json scripts...');

const packageJsonPath = path.join(__dirname, 'package.json');
const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

const recommendedScripts = {
  "dev": "vite",
  "build": "tsc && vite build",
  "preview": "vite preview",
  "type-check": "tsc --noEmit",
  "lint": "eslint . --ext .ts,.tsx",
  "fix-mcp": "node run-mcp-bug-fix.js"
};

let scriptsUpdated = false;
Object.entries(recommendedScripts).forEach(([key, value]) => {
  if (!packageJson.scripts[key]) {
    packageJson.scripts[key] = value;
    scriptsUpdated = true;
    console.log(`✅ Added script: ${key}`);
  }
});

if (scriptsUpdated) {
  fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));
  console.log('   Updated package.json');
}

console.log('\n✨ MCP Bug Fix Complete!\n');
console.log('Next steps:');
console.log('1. Run "npm run dev" to start the development server');
console.log('2. Check browser console for any error messages');
console.log('3. Try clicking the shopping cart icon');
console.log('4. Check console logs for navigation events');
console.log('\nIf issues persist, check the browser console for detailed error logs.');