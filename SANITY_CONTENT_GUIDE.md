# Sanity Studio Content Creation Guide

## Step-by-Step Instructions

### 1. Access Your Sanity Studio
- Go to: `https://your-project-id.sanity.studio`
- Replace `your-project-id` with your actual Project ID from Sanity

### 2. Create Footer Content Document
1. **Click "Create"** button
2. **Select "Footer Content"** from the document types
3. **Fill in the form** with the following information:

### 3. Content to Fill In

#### **Language**
- Set to: `en`

#### **Church Name**
- **Main Name**: `GOSPEL OF PEACE`
- **Subtitle**: `CHURCH GLASGOW`

#### **Description**
```
A welcoming community of faith in Glasgow, dedicated to worship, fellowship, and serving our community.
```

#### **Quick Links** (Add 4 items)
1. **Title**: `About Us` | **URL**: `/aboutus`
2. **Title**: `Sermons` | **URL**: `/sermon`
3. **Title**: `Events` | **URL**: `/events`
4. **Title**: `Contact` | **URL**: `/contact`

#### **Contact Information**
- **Address**: `4 Elibank Street, Glasgow`
- **Service Time**: `Sundays at 11:00 AM`
- **Email**: `info@gospelofpeaceglasgow.org.uk`

#### **Copyright**
```
Gospel of Peace Church. All rights reserved.
```

### 4. Save and Publish
- Click **"Publish"** to make the content live
- Your footer will now pull this content from Sanity

## Troubleshooting
- If you don't see "Footer Content" document type, make sure your schema is properly configured
- Check that your Project ID is correct in `.env.local`
- Restart your development server after making changes

## Current Status
Your footer component is already set up to use this content. Once you create the document in Sanity Studio, it will automatically appear on your website.

