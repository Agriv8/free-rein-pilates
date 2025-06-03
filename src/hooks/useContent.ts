import { useState, useEffect } from 'react'
import { getSiteContent, getInstagramPosts, STATIC_CONTENT } from '../lib/content'
import { supabase } from '../lib/supabase'
import type { Database } from '../lib/database.types'

type SiteContent = Database['public']['Tables']['site_content']['Row']
type InstagramPost = Database['public']['Tables']['instagram_posts']['Row']

// Hook to get content for a specific page
export function usePageContent(pageName: string) {
  const [content, setContent] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchContent() {
      try {
        setLoading(true)
        const data = await getSiteContent(pageName)
        
        if (data) {
          setContent(data.content)
        } else {
          // Fallback to static content if no database content exists
          const staticContent = (STATIC_CONTENT as any)[pageName]
          if (staticContent) {
            setContent(staticContent)
          } else {
            setError(`No content found for page: ${pageName}`)
          }
        }
      } catch (err) {
        console.error('Error fetching content:', err)
        setError('Failed to load content')
        
        // Fallback to static content on error
        const staticContent = (STATIC_CONTENT as any)[pageName]
        if (staticContent) {
          setContent(staticContent)
        }
      } finally {
        setLoading(false)
      }
    }

    fetchContent()
  }, [pageName])

  return { content, loading, error }
}

// Hook to get Instagram posts
export function useInstagramPosts() {
  const [posts, setPosts] = useState<InstagramPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPosts() {
      try {
        setLoading(true)
        const data = await getInstagramPosts()
        setPosts(data)
      } catch (err) {
        console.error('Error fetching Instagram posts:', err)
        setError('Failed to load Instagram posts')
      } finally {
        setLoading(false)
      }
    }

    fetchPosts()
  }, [])

  return { posts, loading, error }
}

// Hook to get all site content for admin editing
export function useAllContent() {
  const [content, setContent] = useState<SiteContent[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchAllContent = async () => {
    try {
      setLoading(true)
      const { data, error } = await supabase
        .from('site_content')
        .select('*')
        .order('page_name')

      if (error) throw error
      setContent(data || [])
    } catch (err) {
      console.error('Error fetching all content:', err)
      setError('Failed to load content')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchAllContent()
  }, [])

  return { content, loading, error, refetch: fetchAllContent }
}