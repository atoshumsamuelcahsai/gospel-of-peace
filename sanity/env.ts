export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2024-01-01'

// Provide safe fallbacks to avoid build-time crashes when env vars are not present.
// In production, make sure to set these in your hosting provider (e.g., Vercel).
export const dataset =
  process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const projectId =
  process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || ''

if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
  // Warn rather than throw to allow builds to proceed; runtime fetches will fall back.
  console.warn(
    'Sanity projectId is missing. Set NEXT_PUBLIC_SANITY_PROJECT_ID to enable content fetching.'
  )
}
