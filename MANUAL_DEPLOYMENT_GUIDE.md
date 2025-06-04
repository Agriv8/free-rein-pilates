# 🚀 MANUAL DATABASE DEPLOYMENT GUIDE

## Pete: Here's How to Deploy the Database Schema

### 🎯 **STEP 1: Access Your Supabase Project**

1. **Go to**: https://supabase.com/dashboard/project/zlwmzsasvsdtuklivqku/sql
2. **Login** with your Supabase account
3. **Navigate** to SQL Editor

### 🎯 **STEP 2: Deploy the Schema**

1. **Open** the file `docs/DATABASE-SCHEMA.sql` in your project
2. **Copy ALL contents** (entire file)
3. **Paste** into Supabase SQL Editor
4. **Execute** the SQL commands

**Result**: Creates all tables needed for the full commercial platform

### 🎯 **STEP 3: Get Service Role Key (For Development)**

1. **Go to**: https://supabase.com/dashboard/project/zlwmzsasvsdtuklivqku/settings/api
2. **Copy** the "service_role" secret key
3. **Add** to your `.env` file temporarily:
   ```
   VITE_SUPABASE_SERVICE_KEY=your_service_key_here
   ```

### 🎯 **STEP 4: Build with Database Features**

Once tables are created, I can immediately activate:

```bash
# Migrate content to database
npm run migrate-content

# Start development with full features
npm run dev
```

### 🎯 **What Gets Activated:**

1. **E-commerce Shop** ✅
   - Product management
   - Shopping cart
   - Stripe checkout

2. **Booking System** ✅
   - Class scheduling
   - Customer bookings
   - Calendar integration

3. **Admin Dashboard** ✅
   - Content management
   - Customer management
   - Order processing

4. **Customer Portal** ✅
   - User accounts
   - Booking history
   - Profile management

### 🎯 **Security Note:**

**Service key is for DEVELOPMENT only!**
- ✅ Use during build to populate data
- 🚨 Remove before production deployment
- ✅ Production uses anon key only

### 🎯 **Expected Timeline:**

- **Schema deployment**: 2 minutes
- **Content migration**: 1 minute
- **Feature activation**: Immediate
- **Full platform live**: 3 minutes total

---

**Pete: Execute the schema deployment and the full commercial platform goes live immediately!**