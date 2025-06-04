import { supabase } from './supabase'
import type { Database } from './database.types'

type SiteContent = Database['public']['Tables']['site_content']['Row']
type InstagramPost = Database['public']['Tables']['instagram_posts']['Row']

// Get site content by page name
export async function getSiteContent(pageName: string): Promise<SiteContent | null> {
  const { data, error } = await supabase
    .from('site_content')
    .select('*')
    .eq('page_name', pageName)
    .single()

  if (error) {
    console.error('Error fetching site content:', error)
    return null
  }

  return data
}

// Update site content
export async function updateSiteContent(
  pageName: string,
  content: any,
  images?: any,
  metaData?: any
): Promise<boolean> {
  const { error } = await supabase
    .from('site_content')
    .upsert({
      page_name: pageName,
      content,
      images: images || {},
      meta_data: metaData || {},
      updated_at: new Date().toISOString()
    })

  if (error) {
    console.error('Error updating site content:', error)
    return false
  }

  return true
}

// Get active Instagram posts
export async function getInstagramPosts(): Promise<InstagramPost[]> {
  const { data, error } = await supabase
    .from('instagram_posts')
    .select('*')
    .eq('active', true)
    .order('position', { ascending: true })

  if (error) {
    console.error('Error fetching Instagram posts:', error)
    return []
  }

  return data || []
}

// Current static content to migrate
export const STATIC_CONTENT = {
  home: {
    hero: {
      title: "Welcome to Free Rein Pilates",
      subtitle: "Professional Pilates instruction in a supportive environment",
      cta: "Book Your Session",
      image: "/client-content/home page banner.webp"
    },
    about: {
      title: "About Erin",
      content: "With years of experience in Pilates instruction, Erin brings expertise and passion to every session.",
      image: "/client-content/erin 2.webp"
    }
  },
  services: {
    mat: {
      title: "Mat Pilates Courses",
      description: "Build strength and flexibility with our comprehensive mat-based classes",
      image: "/client-content/Mat Pilates Courses.webp",
      price: "£15 per class"
    },
    studio: {
      title: "1-2-1 Studio Pilates",
      description: "Personalised sessions on professional equipment",
      image: "/client-content/1-2-1- Studio Pilates.webp",
      price: "£60 per session"
    },
    equestrian: {
      title: "Equestrian Pilates Sessions",
      description: "Specialised Pilates for horse riders",
      image: "/client-content/Equestrian Pilates Sessions .webp",
      price: "£50 per session"
    },
    therapy: {
      title: "Sports Therapy Sessions",
      description: "Therapeutic approach for injury recovery",
      image: "/client-content/ Sports Therapy Sessions .webp",
      price: "£70 per session"
    }
  },
  retreats: {
    centerParcs: {
      title: "Center Parcs Woburn Day Retreats",
      description: "Relaxing day retreats in beautiful surroundings",
      image: "/client-content/Center Parcs Woburn Day Retreats.webp",
      price: "£120 per day"
    },
    wrestPark: {
      title: "Wrest Park Day Retreats",
      description: "Historic gardens provide the perfect backdrop",
      image: "/client-content/Wrest Park Day Retreats.webp",
      price: "£110 per day"
    }
  },
  contact: {
    email: "info@freereinpilates.com",
    phone: "0333 050 4262",
    address: "Unit 2C, Old Hall Farmyard, Priory Lane, Little Wymondley, Hitchin, Herts, SG4 7BL",
    hours: {
      monday: "9:00 AM - 8:00 PM",
      tuesday: "9:00 AM - 8:00 PM",
      wednesday: "9:00 AM - 8:00 PM",
      thursday: "9:00 AM - 8:00 PM",
      friday: "9:00 AM - 6:00 PM",
      saturday: "9:00 AM - 4:00 PM",
      sunday: "Closed"
    }
  }
}

// Function to migrate all static content to database
export async function migrateStaticContent(): Promise<boolean> {
  try {
    // Migrate home page content
    await updateSiteContent('home', STATIC_CONTENT.home)
    
    // Migrate services content
    await updateSiteContent('services', STATIC_CONTENT.services)
    
    // Migrate retreats content
    await updateSiteContent('retreats', STATIC_CONTENT.retreats)
    
    // Migrate contact content
    await updateSiteContent('contact', STATIC_CONTENT.contact)
    
    console.log('Content migration completed successfully')
    return true
  } catch (error) {
    console.error('Content migration failed:', error)
    return false
  }
}