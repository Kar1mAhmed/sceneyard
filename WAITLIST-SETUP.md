# Waitlist Setup Guide

## ✅ What's Been Implemented

### 1. **DemoSection Updates**
- ✅ Updated to 5 videos (from 4)
- ✅ Added support for vertical videos (9:16 aspect ratio)
- ✅ Removed `posterUrl` - videos now load without poster images
- ✅ Grid layout changed to `lg:grid-cols-5` for 5 videos

### 2. **Multi-Step Waitlist Form**
- ✅ Progressive form with 5 steps
- ✅ Progress bar showing completion percentage
- ✅ Bonus reward banner (10 extra credits)
- ✅ Auto-save on each step
- ✅ Skip button for optional questions
- ✅ Back navigation between steps

**Questions:**
1. Email + Referral Code (optional)
2. Features (choose up to 3)
3. Pricing Style preference
4. Demo Rating (1-10)
5. Monthly Budget

### 3. **Database (D1)**
- ✅ Migration file created: `migrations/0001_create_waitlist.sql`
- ✅ Table: `waitlist_responses`
- ✅ Stores partial and complete responses
- ✅ Tracks completion status

### 4. **API Endpoint**
- ✅ `/api/waitlist` - POST and GET methods
- ✅ Saves progress field-by-field
- ✅ Updates existing users or creates new ones
- ✅ Returns all responses for admin view

### 5. **Admin Dashboard**
- ✅ Protected page: `/admin/responses`
- ✅ Login with username/password
- ✅ View all waitlist responses
- ✅ Export to CSV
- ✅ Refresh data
- ✅ Shows completion status

## 🚀 Setup Instructions

### Step 1: Run Database Migration

```bash
# Apply the migration to your D1 database
npx wrangler d1 migrations apply sceneyard --remote
```

### Step 2: Update Video URLs

Edit `components/DemoSection.tsx` and replace placeholder URLs with your actual R2 video links:

```typescript
const demoTemplates: DemoTemplate[] = [
  {
    id: '3',
    title: 'Social Media Story',
    videoUrl: 'YOUR_R2_VIDEO_URL_HERE',
    downloadUrl: 'YOUR_R2_DOWNLOAD_URL_HERE',
    aeVersion: 'AE 2020+',
    duration: '1080p',
    tags: ['Instagram', 'TikTok'],
    isVertical: true, // For vertical videos
  },
  // ... update other templates
];
```

### Step 3: Configure Admin Credentials

Admin credentials are in `wrangler.jsonc`:

```json
"vars": { 
  "ADMIN_USERNAME": "admin",
  "ADMIN_PASSWORD": "sceneyard2025"
}
```

**⚠️ IMPORTANT:** Change these before deploying to production!

### Step 4: Deploy

```bash
npm run build
npx wrangler pages deploy
```

## 📊 Admin Access

1. Navigate to: `https://your-domain.com/admin/responses`
2. Login with:
   - Username: `admin`
   - Password: `sceneyard2025`
3. View all responses, export to CSV, or refresh data

## 🗄️ Database Schema

```sql
CREATE TABLE waitlist_responses (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  email TEXT UNIQUE NOT NULL,
  referral_code TEXT,
  features TEXT, -- JSON array
  pricing_style TEXT,
  demo_rating INTEGER,
  monthly_budget TEXT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  updated_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  completed BOOLEAN DEFAULT 0
);
```

## 🔄 How It Works

1. **User enters email** → Saved to DB immediately
2. **User answers each question** → Progress saved after each step
3. **User can skip questions** → Partial data is saved
4. **User completes form** → `completed` flag set to `true`
5. **Admin views responses** → All data visible in dashboard

## 📝 Features

### Multi-Step Form Features:
- ✅ Progress tracking (Question X of 5)
- ✅ Percentage completion bar
- ✅ Bonus reward incentive
- ✅ Field-by-field auto-save
- ✅ Skip functionality
- ✅ Back navigation
- ✅ Smooth animations
- ✅ Mobile responsive

### Admin Dashboard Features:
- ✅ Password protection
- ✅ View all responses
- ✅ Filter by completion status
- ✅ Export to CSV
- ✅ Refresh data
- ✅ Responsive table design

## 🎨 Customization

### Change Questions

Edit `components/MultiStepWaitlistForm.tsx`:

```typescript
const FEATURES_OPTIONS = [
  'Your custom feature 1',
  'Your custom feature 2',
  // ...
];
```

### Change Admin Credentials

Edit `wrangler.jsonc`:

```json
"vars": { 
  "ADMIN_USERNAME": "your_username",
  "ADMIN_PASSWORD": "your_secure_password"
}
```

### Styling

All components use Tailwind CSS and follow your existing design system with:
- Accent color for primary actions
- Rounded corners (rounded-xl, rounded-2xl)
- Smooth transitions
- Hover effects

## 🔒 Security Notes

1. **Admin credentials** are stored in `wrangler.jsonc` - change before production
2. **Client-side auth** is basic - consider server-side auth for production
3. **No rate limiting** - add if needed
4. **CORS** - configure if needed for API access

## 📦 Files Created/Modified

### New Files:
- ✅ `migrations/0001_create_waitlist.sql`
- ✅ `components/MultiStepWaitlistForm.tsx`
- ✅ `app/api/waitlist/route.ts`
- ✅ `app/admin/responses/page.tsx`
- ✅ `WAITLIST-SETUP.md` (this file)

### Modified Files:
- ✅ `components/DemoSection.tsx` (5 videos, vertical support)
- ✅ `components/WaitlistSection.tsx` (uses new form)
- ✅ `wrangler.jsonc` (admin credentials)

## ✨ Next Steps

1. Run the migration
2. Update video URLs
3. Change admin password
4. Test the form locally
5. Deploy to production
6. Access admin dashboard

## 🐛 Troubleshooting

**Database not configured error:**
- Make sure D1 binding name matches: `SCENERYARD_DB`
- Run migration: `npx wrangler d1 migrations apply sceneyard --remote`

**Admin login not working:**
- Check credentials in `wrangler.jsonc`
- Verify vars are deployed

**Form not saving:**
- Check browser console for errors
- Verify API endpoint is accessible
- Check D1 database connection

## 📞 Support

For issues or questions, check:
- D1 Database docs: https://developers.cloudflare.com/d1/
- Wrangler docs: https://developers.cloudflare.com/workers/wrangler/
- Next.js Edge Runtime: https://nextjs.org/docs/app/api-reference/edge
