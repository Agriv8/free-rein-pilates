# Free Rein Pilates - Setup Instructions

## 🎯 Current Status

**Phase 1 Complete**: Content Management System Foundation

✅ **Implemented**:
- Supabase client configuration with TypeScript types
- Authentication context with admin role support  
- Content management hooks and utilities
- Updated Hero and InstagramFeed components to use database content
- Migration script to populate database with current content
- Setup script for Supabase configuration
- Fallback to static content when database unavailable

🔄 **Next Steps**: Complete database setup and begin Phase 2

## 🚀 Quick Setup Guide

### 1. Install Dependencies
```bash
npm install
```

### 2. Set Up Supabase
```bash
npm run setup-supabase
```
This creates your `.env` file with placeholders.

### 3. Create Supabase Project
1. Go to [supabase.com](https://supabase.com)
2. Create a new project
3. Copy your project URL and anon key from Settings > API
4. Update your `.env` file with the credentials

### 4. Set Up Database Schema
1. Open your Supabase project dashboard
2. Go to SQL Editor
3. Copy the entire contents of `docs/DATABASE-SCHEMA.sql`
4. Paste and run it in the SQL editor

### 5. Migrate Content
```bash
npm run migrate-content
```
This populates your database with the current website content.

### 6. Start Development
```bash
npm run dev
```

## 🔄 How It Works

### Content Loading Strategy
1. **Database First**: Components try to load content from Supabase
2. **Fallback**: If database unavailable, uses static content
3. **Zero Downtime**: Website works even without database connection

### Admin Features (Coming in Phase 2)
- Content editing through admin dashboard
- Real-time content updates
- User management
- Booking system

## 📁 Key Files

### Configuration
- `.env` - Environment variables (create from .env.example)
- `src/lib/supabase.ts` - Supabase client configuration
- `src/lib/database.types.ts` - TypeScript types for database

### Content Management
- `src/hooks/useContent.ts` - Content loading hooks
- `src/lib/content.ts` - Content utilities and static fallbacks
- `src/scripts/migrate-content.ts` - Database migration script

### Authentication
- `src/contexts/AuthContext.tsx` - User authentication context

### Database
- `docs/DATABASE-SCHEMA.sql` - Complete database schema
- `docs/TECHNICAL-ARCHITECTURE.md` - System architecture
- `docs/IMPLEMENTATION-PLAN.md` - Development roadmap

## 🛠️ Available Scripts

```bash
# Development
npm run dev              # Start development server
npm run build            # Build for production
npm run preview          # Preview production build

# Setup & Migration
npm run setup-supabase   # Create .env file
npm run migrate-content  # Populate database

# Code Quality
npm run lint             # Check code quality
npm run test             # Run tests
```

## 🔒 Environment Variables

```bash
# Required for Supabase
VITE_SUPABASE_URL=your_supabase_project_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key

# Optional for future phases
VITE_STRIPE_PUBLISHABLE_KEY=your_stripe_key
VITE_RESEND_API_KEY=your_resend_key
GOOGLE_CLIENT_ID=your_google_client_id
GOOGLE_CLIENT_SECRET=your_google_client_secret
```

## 🎯 Phase 2 Goals

**Admin Dashboard & CMS** (Next Implementation):
- [ ] Admin login system
- [ ] Content editing interface
- [ ] Instagram post management
- [ ] Image upload system
- [ ] Preview functionality
- [ ] Role-based access control

## 🔍 Troubleshooting

### Build Errors
```bash
# Fix TypeScript errors
npm run lint

# Clear cache and rebuild
rm -rf node_modules/.vite
npm run build
```

### Database Connection Issues
1. Check your `.env` file has correct Supabase credentials
2. Verify your Supabase project is active
3. Check browser console for connection errors
4. Ensure RLS policies are set up correctly

### Content Not Loading
1. Website works with static content by default
2. Run `npm run migrate-content` to populate database
3. Check Supabase dashboard for data
4. Verify environment variables in browser dev tools

## 📚 Documentation

- **Technical Architecture**: `docs/TECHNICAL-ARCHITECTURE.md`
- **Implementation Plan**: `docs/IMPLEMENTATION-PLAN.md`
- **Database Schema**: `docs/DATABASE-SCHEMA.sql`
- **MCP Research**: `MCP-INTEGRATION-REPORT.md`

---

**Ready for Phase 2**: Once database is set up, the next step is building the admin dashboard for content management.