# Free Rein Pilates - Technical Architecture Document

## Project Overview
Complete commercial e-commerce and booking system for Free Rein Pilates, integrating content management, online shop, class booking, and retreat reservations.

## Technology Stack

### Frontend
- **Framework**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Routing**: React Router v6
- **State Management**: Zustand (for cart/booking state)
- **Forms**: React Hook Form with Zod validation
- **Animations**: Framer Motion (existing)

### Backend
- **Database**: Supabase (PostgreSQL)
- **Authentication**: Supabase Auth
- **Storage**: Supabase Storage
- **Real-time**: Supabase Realtime
- **Edge Functions**: Supabase Functions (for Stripe webhooks)

### Integrations
- **Payments**: Stripe API (SCA compliant)
- **Calendar**: Google Calendar API
- **Email**: Resend API
- **Analytics**: Google Analytics 4
- **Monitoring**: Sentry

### Development Tools (MCPs)
- **Supabase MCP**: Database operations during development
- **Google Calendar MCP**: Calendar integration setup
- **Resend MCP**: Email template development
- **Image optimization**: Sharp/Cloudinary

## System Architecture

```
┌─────────────────┐     ┌─────────────────┐     ┌─────────────────┐
│                 │     │                 │     │                 │
│  React Frontend │────▶│  Supabase API   │────▶│   PostgreSQL    │
│                 │     │                 │     │                 │
└─────────────────┘     └─────────────────┘     └─────────────────┘
         │                       │                        
         │                       │                        
         ▼                       ▼                        
┌─────────────────┐     ┌─────────────────┐              
│                 │     │                 │              
│   Stripe API    │     │ Google Calendar │              
│                 │     │                 │              
└─────────────────┘     └─────────────────┘              
```

## Database Schema

### Core Tables

#### site_content
- id (uuid, primary key)
- page_name (text, unique)
- content (jsonb) - stores all page content
- images (jsonb) - image references
- meta_data (jsonb)
- updated_at (timestamp)
- updated_by (uuid, references auth.users)

#### products
- id (uuid, primary key)
- name (text)
- description (text)
- price (decimal)
- images (jsonb)
- inventory (integer)
- category (text)
- active (boolean)
- created_at (timestamp)
- updated_at (timestamp)

#### classes
- id (uuid, primary key)
- name (text)
- description (text)
- type (enum: 'mat', 'studio', 'equestrian', 'therapy')
- duration_minutes (integer)
- max_capacity (integer)
- price (decimal)
- recurring_schedule (jsonb) - days/times
- active (boolean)

#### class_sessions
- id (uuid, primary key)
- class_id (uuid, references classes)
- start_time (timestamp)
- end_time (timestamp)
- capacity_remaining (integer)
- google_event_id (text)
- status (enum: 'scheduled', 'completed', 'cancelled')

#### bookings
- id (uuid, primary key)
- customer_id (uuid, references customers)
- session_id (uuid, references class_sessions)
- status (enum: 'pending', 'confirmed', 'cancelled')
- payment_intent_id (text)
- created_at (timestamp)

#### retreats
- id (uuid, primary key)
- name (text)
- description (text)
- start_date (date)
- end_date (date)
- location (text)
- max_capacity (integer)
- price (decimal)
- includes (jsonb) - what's included
- itinerary (jsonb)
- active (boolean)

#### customers
- id (uuid, primary key)
- auth_user_id (uuid, references auth.users)
- email (text, unique)
- name (text)
- phone (text)
- emergency_contact (jsonb)
- medical_notes (text, encrypted)
- created_at (timestamp)

#### orders
- id (uuid, primary key)
- customer_id (uuid, references customers)
- items (jsonb)
- subtotal (decimal)
- tax (decimal)
- shipping (decimal)
- total (decimal)
- stripe_payment_intent_id (text)
- status (enum: 'pending', 'paid', 'shipped', 'completed')
- shipping_address (jsonb)
- created_at (timestamp)

#### instagram_posts
- id (uuid, primary key)
- embed_code (text)
- position (integer)
- active (boolean)
- created_at (timestamp)

## Security Implementation

### Row Level Security (RLS)
- All tables have RLS enabled
- Customers can only view their own data
- Admin role can manage all data
- Public can view active products/classes/retreats

### Authentication Flow
1. Customer signs up/logs in via Supabase Auth
2. JWT token stored securely
3. All API requests include auth token
4. RLS policies enforce data access

### Payment Security
- Stripe handles all card data (PCI compliant)
- Strong Customer Authentication (SCA) enabled
- Webhooks verify payment completion
- No card data stored in our database

## API Design

### Public Endpoints
- GET /api/products - List active products
- GET /api/classes - List available classes
- GET /api/retreats - List upcoming retreats
- GET /api/availability/:classId - Check class availability

### Authenticated Endpoints
- POST /api/bookings - Create new booking
- GET /api/bookings/me - Get user's bookings
- POST /api/orders - Create new order
- GET /api/orders/me - Get user's orders

### Admin Endpoints
- All CRUD operations on all tables
- Accessed via Supabase Admin UI
- Custom admin dashboard for daily operations

## Deployment Architecture

### Production Environment
- **Frontend**: Netlify (existing setup)
- **Backend**: Supabase Cloud (UK region)
- **Domain**: Custom domain with SSL
- **CDN**: Netlify Edge for static assets

### Development Workflow
1. Feature branches for new development
2. Staging environment for testing
3. Pull requests with review
4. Automated deployment on merge to main

## Monitoring & Analytics

### Application Monitoring
- Sentry for error tracking
- Google Analytics for user behavior
- Stripe Dashboard for payment metrics
- Supabase Dashboard for database metrics

### Business Metrics
- Booking conversion rates
- Popular class times
- Revenue by service type
- Customer retention rates

## Backup & Recovery

### Data Backup
- Daily automated Supabase backups
- 30-day retention period
- Point-in-time recovery available

### Disaster Recovery
- Database replication enabled
- Static site cached on CDN
- Stripe data as backup payment records

## Scalability Considerations

### Current Capacity
- 10,000 monthly active users
- 1,000 concurrent bookings
- 100GB storage

### Growth Path
- Upgrade Supabase plan as needed
- Add caching layer if required
- Consider dedicated server at 50k MAU

## Compliance

### GDPR Requirements
- Privacy policy page
- Cookie consent banner
- Data export capability
- Right to erasure implementation

### UK Business Requirements
- VAT calculation for UK/EU
- Distance selling regulations
- Consumer rights compliance

## Documentation

All technical documentation maintained in `/docs` folder:
- API documentation
- Database schema
- Deployment guides
- Admin user guides
- Security procedures