# 🎯 Supabase Setup Needed for Free Rein Pilates

## Project Details
- **Project ID**: zlwmzsasvsdtuklivqku
- **Project URL**: https://zlwmzsasvsdtuklivqku.supabase.co
- **Status**: Created but empty (no tables)

## 🔴 URGENT: What I Need From Master Claude

### 1. Deploy Database Schema
```sql
-- File location: docs/DATABASE-SCHEMA.sql
-- Contains all tables for:
-- - Content management (site_content, instagram_posts)
-- - E-commerce (products, orders, customers, payments)
-- - Booking system (classes, class_sessions, bookings)
-- - Retreats (retreats, retreat_bookings)
-- - Admin settings and audit logs
```

### 2. Enable Row Level Security
After schema deployment, RLS needs to be enabled on all tables.
The schema file includes the policies, but they may need to be verified.

### 3. Create Storage Bucket
```sql
-- Create a public bucket for product images
INSERT INTO storage.buckets (id, name, public)
VALUES ('products', 'products', true);
```

### 4. Create Admin User (Optional)
If you want to create an initial admin user:
```sql
-- This would need to be done through Supabase Auth
-- Email: admin@freereinpilates.com
-- Role: admin (in user metadata)
```

## 🎯 Why This Is Urgent

1. **Client Approved**: Site is approved, they want e-commerce NOW
2. **Phase 2 Blocked**: Cannot build admin features without tables
3. **Revenue Impact**: Shop will generate immediate sales
4. **12 Hour Delivery**: Can complete Phase 2 quickly after schema

## ✅ What's Ready On My End

- Supabase client configured and tested
- Admin login/dashboard pages built
- Content management hooks ready
- Migration scripts prepared
- Full documentation complete

## 🚀 Next Steps After Schema

```bash
# 1. Run content migration
npm run migrate-content

# 2. Test admin features
npm run dev
# Visit http://localhost:5173/admin/login

# 3. Continue Phase 2 build
# - Content editor
# - Product management
# - Booking system
```

---

**Please deploy the schema ASAP so I can complete the commercial features!**