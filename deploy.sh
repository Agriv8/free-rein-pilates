#!/bin/bash

echo "🚀 Deploying Free Rein Pilates to Netlify..."

# Check if dist folder exists
if [ ! -d "dist" ]; then
    echo "❌ No dist folder found. Running build first..."
    npm run build
fi

# Deploy to Netlify
echo "📦 Deploying to Netlify..."
netlify deploy --prod --dir=dist --site=free-rein-pilates

echo "✅ Deployment complete!"
echo "🌐 Visit your site at: https://free-rein-pilates.netlify.app"