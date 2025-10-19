# Environment Variables Setup

## Sanity CMS Configuration

Create a `.env.local` file in your project root with the following variables:

```bash
# Sanity CMS Configuration
NEXT_PUBLIC_SANITY_PROJECT_ID=your-actual-project-id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
```

## How to Get Your Sanity Project ID:

1. **Create a Sanity project:**
   ```bash
   npm install -g @sanity/cli
   sanity init --create-project 'Gospel of Peace Church'
   ```

2. **Get your project ID:**
   - After creating the project, you'll see your project ID in the terminal
   - Or check your Sanity dashboard at https://sanity.io/manage
   - Copy the project ID and replace `your-actual-project-id` in `.env.local`

3. **Example `.env.local`:**
   ```bash
   NEXT_PUBLIC_SANITY_PROJECT_ID=abc123def
   NEXT_PUBLIC_SANITY_DATASET=production
   NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01
   ```

## Important Notes:

- **Never commit `.env.local`** to version control
- **Use `NEXT_PUBLIC_` prefix** for client-side environment variables
- **Restart your development server** after adding environment variables
- **Fallback values** are provided in case environment variables are missing

## Security:

- The `NEXT_PUBLIC_` prefix makes these variables available in the browser
- This is safe for Sanity project IDs as they're meant to be public
- Never put sensitive data (like API keys) in `NEXT_PUBLIC_` variables

