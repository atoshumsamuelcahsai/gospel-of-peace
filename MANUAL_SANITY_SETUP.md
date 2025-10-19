# Manual Sanity Project Setup

## Step 1: Create Sanity Project Online
1. Go to https://sanity.io/manage
2. Sign up/login with Google, GitHub, or email
3. Click "Create new project"
4. Name it "Gospel of Peace Church"
5. Choose "Production" dataset
6. Copy your Project ID (it looks like: abc123def)

## Step 2: Update Environment Variables
Edit your `.env.local` file and replace `your-project-id` with your actual Project ID:

```bash
# .env.local
NEXT_PUBLIC_SANITY_PROJECT_ID=your-actual-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

## Step 3: Create Content Schema
Your Sanity schema is already set up in `sanity/schemas/index.ts` with:
- Footer content structure
- Multi-language support (currently English)
- All the fields your footer needs

## Step 4: Create Content
1. Go to https://your-project-id.sanity.studio
2. Create a new "Footer Content" document
3. Set language to "en"
4. Fill in your church information:
   - Church Name: "GOSPEL OF PEACE"
   - Subtitle: "CHURCH GLASGOW"
   - Description: Your church description
   - Quick Links: About Us, Sermons, Events, Contact
   - Contact Info: Address, service time, email
   - Copyright: Your copyright text

## Step 5: Test Your Setup
1. Restart your development server: `npm run dev`
2. Check your footer - it should now pull content from Sanity
3. If Sanity is unavailable, it will show fallback content

## Current Status
✅ Sanity configuration files ready
✅ Footer component integrated with Sanity
✅ Environment variables set up
✅ Schema defined for footer content
⏳ Need to create Sanity project and get Project ID
⏳ Need to create content in Sanity Studio

Your footer is ready for Sanity CMS! Just complete steps 1-4 above.

