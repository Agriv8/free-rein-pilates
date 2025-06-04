import { createClient } from '@supabase/supabase-js'
import type { Database } from './database.types'

const supabaseUrl = import.meta.env.VITE_SUPABASE_DATABASE_URL || import.meta.env.VITE_SUPABASE_URL || ''
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ''

// Create a dummy client if credentials are missing to prevent crashes
export const supabase = (!supabaseUrl || !supabaseAnonKey) 
  ? null as any
  : createClient<Database>(supabaseUrl, supabaseAnonKey)

// Auth helpers
export const auth = supabase?.auth

// Storage helpers  
export const storage = supabase?.storage