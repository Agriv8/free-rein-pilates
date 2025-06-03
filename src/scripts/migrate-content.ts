// Content Migration Script
// Run this to populate Supabase with current website content

import { migrateStaticContent } from '../lib/content'
import { supabase } from '../lib/supabase'

// Current Instagram embeds from InstagramFeed component
const INSTAGRAM_EMBEDS = [
  {
    embed_code: `<blockquote class="instagram-media" data-instgrm-captioned data-instgrm-permalink="https://www.instagram.com/p/DCylHQztXKJ/?utm_source=ig_embed&amp;utm_campaign=loading" data-instgrm-version="14">Instagram Post 1</blockquote>`,
    position: 1,
    active: true
  }
  // Add the other 5 Instagram embeds here...
]

// Function to migrate Instagram posts
async function migrateInstagramPosts() {
  try {
    for (const post of INSTAGRAM_EMBEDS) {
      const { error } = await supabase
        .from('instagram_posts')
        .upsert(post)
      
      if (error) {
        console.error('Error migrating Instagram post:', error)
      }
    }
    console.log('Instagram posts migrated successfully')
  } catch (error) {
    console.error('Instagram migration failed:', error)
  }
}

// Main migration function
export async function runMigration() {
  console.log('Starting content migration...')
  
  try {
    // Test connection
    const { data: connectionTest } = await supabase
      .from('site_content')
      .select('count')
      .limit(1)
    
    if (!connectionTest) {
      throw new Error('Cannot connect to Supabase. Please check your configuration.')
    }
    
    // Migrate static content
    console.log('Migrating static content...')
    const contentSuccess = await migrateStaticContent()
    
    if (!contentSuccess) {
      throw new Error('Static content migration failed')
    }
    
    // Migrate Instagram posts
    console.log('Migrating Instagram posts...')
    await migrateInstagramPosts()
    
    console.log('✅ Migration completed successfully!')
    console.log('The website will now load content from Supabase')
    
  } catch (error) {
    console.error('❌ Migration failed:', error)
    console.log('The website will continue to use static content as fallback')
  }
}

// Run migration if this file is executed directly
if (typeof window === 'undefined') {
  runMigration()
}