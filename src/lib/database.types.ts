export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      site_content: {
        Row: {
          id: string
          page_name: string
          content: Json
          images: Json
          meta_data: Json
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          id?: string
          page_name: string
          content?: Json
          images?: Json
          meta_data?: Json
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          id?: string
          page_name?: string
          content?: Json
          images?: Json
          meta_data?: Json
          updated_at?: string
          updated_by?: string | null
        }
      }
      instagram_posts: {
        Row: {
          id: string
          embed_code: string
          position: number
          active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          embed_code: string
          position: number
          active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          embed_code?: string
          position?: number
          active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      products: {
        Row: {
          id: string
          name: string
          description: string | null
          price: number
          sale_price: number | null
          images: Json
          inventory: number
          category: string
          tags: string[]
          active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          price: number
          sale_price?: number | null
          images?: Json
          inventory?: number
          category: string
          tags?: string[]
          active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          price?: number
          sale_price?: number | null
          images?: Json
          inventory?: number
          category?: string
          tags?: string[]
          active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      customers: {
        Row: {
          id: string
          auth_user_id: string | null
          email: string
          name: string
          phone: string | null
          address: Json
          emergency_contact: Json
          medical_notes: string | null
          preferences: Json
          stripe_customer_id: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          auth_user_id?: string | null
          email: string
          name: string
          phone?: string | null
          address?: Json
          emergency_contact?: Json
          medical_notes?: string | null
          preferences?: Json
          stripe_customer_id?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          auth_user_id?: string | null
          email?: string
          name?: string
          phone?: string | null
          address?: Json
          emergency_contact?: Json
          medical_notes?: string | null
          preferences?: Json
          stripe_customer_id?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      classes: {
        Row: {
          id: string
          name: string
          description: string | null
          type: 'mat' | 'studio' | 'equestrian' | 'therapy'
          duration_minutes: number
          max_capacity: number
          price: number
          recurring_schedule: Json
          location: string | null
          instructor_notes: string | null
          active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          type: 'mat' | 'studio' | 'equestrian' | 'therapy'
          duration_minutes?: number
          max_capacity?: number
          price: number
          recurring_schedule?: Json
          location?: string | null
          instructor_notes?: string | null
          active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          type?: 'mat' | 'studio' | 'equestrian' | 'therapy'
          duration_minutes?: number
          max_capacity?: number
          price?: number
          recurring_schedule?: Json
          location?: string | null
          instructor_notes?: string | null
          active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      class_sessions: {
        Row: {
          id: string
          class_id: string
          start_time: string
          end_time: string
          capacity_remaining: number
          google_event_id: string | null
          instructor_notes: string | null
          status: 'scheduled' | 'completed' | 'cancelled'
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          class_id: string
          start_time: string
          end_time: string
          capacity_remaining: number
          google_event_id?: string | null
          instructor_notes?: string | null
          status?: 'scheduled' | 'completed' | 'cancelled'
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          class_id?: string
          start_time?: string
          end_time?: string
          capacity_remaining?: number
          google_event_id?: string | null
          instructor_notes?: string | null
          status?: 'scheduled' | 'completed' | 'cancelled'
          created_at?: string
          updated_at?: string
        }
      }
      retreats: {
        Row: {
          id: string
          name: string
          description: string | null
          start_date: string
          end_date: string
          location: string
          max_capacity: number
          capacity_remaining: number
          price: number
          deposit_amount: number | null
          includes: Json
          itinerary: Json
          images: Json
          google_event_id: string | null
          active: boolean
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          name: string
          description?: string | null
          start_date: string
          end_date: string
          location: string
          max_capacity: number
          capacity_remaining: number
          price: number
          deposit_amount?: number | null
          includes?: Json
          itinerary?: Json
          images?: Json
          google_event_id?: string | null
          active?: boolean
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          name?: string
          description?: string | null
          start_date?: string
          end_date?: string
          location?: string
          max_capacity?: number
          capacity_remaining?: number
          price?: number
          deposit_amount?: number | null
          includes?: Json
          itinerary?: Json
          images?: Json
          google_event_id?: string | null
          active?: boolean
          created_at?: string
          updated_at?: string
        }
      }
      bookings: {
        Row: {
          id: string
          customer_id: string
          class_session_id: string | null
          retreat_id: string | null
          status: 'pending' | 'confirmed' | 'cancelled' | 'completed'
          payment_intent_id: string | null
          amount_paid: number | null
          google_event_id: string | null
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          customer_id: string
          class_session_id?: string | null
          retreat_id?: string | null
          status?: 'pending' | 'confirmed' | 'cancelled' | 'completed'
          payment_intent_id?: string | null
          amount_paid?: number | null
          google_event_id?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          customer_id?: string
          class_session_id?: string | null
          retreat_id?: string | null
          status?: 'pending' | 'confirmed' | 'cancelled' | 'completed'
          payment_intent_id?: string | null
          amount_paid?: number | null
          google_event_id?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      orders: {
        Row: {
          id: string
          order_number: string
          customer_id: string
          items: Json
          subtotal: number
          tax: number
          shipping: number
          total: number
          status: 'pending' | 'paid' | 'processing' | 'shipped' | 'completed' | 'refunded'
          stripe_payment_intent_id: string | null
          shipping_address: Json | null
          billing_address: Json | null
          tracking_number: string | null
          notes: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          order_number: string
          customer_id: string
          items: Json
          subtotal: number
          tax?: number
          shipping?: number
          total: number
          status?: 'pending' | 'paid' | 'processing' | 'shipped' | 'completed' | 'refunded'
          stripe_payment_intent_id?: string | null
          shipping_address?: Json | null
          billing_address?: Json | null
          tracking_number?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          order_number?: string
          customer_id?: string
          items?: Json
          subtotal?: number
          tax?: number
          shipping?: number
          total?: number
          status?: 'pending' | 'paid' | 'processing' | 'shipped' | 'completed' | 'refunded'
          stripe_payment_intent_id?: string | null
          shipping_address?: Json | null
          billing_address?: Json | null
          tracking_number?: string | null
          notes?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      payments: {
        Row: {
          id: string
          customer_id: string
          booking_id: string | null
          order_id: string | null
          stripe_payment_intent_id: string
          amount: number
          currency: string
          status: 'pending' | 'succeeded' | 'failed' | 'refunded'
          payment_method: Json | null
          metadata: Json
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: string
          customer_id: string
          booking_id?: string | null
          order_id?: string | null
          stripe_payment_intent_id: string
          amount: number
          currency?: string
          status?: 'pending' | 'succeeded' | 'failed' | 'refunded'
          payment_method?: Json | null
          metadata?: Json
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          customer_id?: string
          booking_id?: string | null
          order_id?: string | null
          stripe_payment_intent_id?: string
          amount?: number
          currency?: string
          status?: 'pending' | 'succeeded' | 'failed' | 'refunded'
          payment_method?: Json | null
          metadata?: Json
          created_at?: string
          updated_at?: string
        }
      }
      admin_settings: {
        Row: {
          id: string
          key: string
          value: Json
          description: string | null
          updated_at: string
          updated_by: string | null
        }
        Insert: {
          id?: string
          key: string
          value: Json
          description?: string | null
          updated_at?: string
          updated_by?: string | null
        }
        Update: {
          id?: string
          key?: string
          value?: Json
          description?: string | null
          updated_at?: string
          updated_by?: string | null
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}