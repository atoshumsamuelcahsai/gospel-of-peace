import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId } from '../env'

const isDevelopment = process.env.NODE_ENV === 'development'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: !isDevelopment, // Use CDN in production for faster response times
  perspective: 'published', // Only fetch published content
  stega: {
    enabled: false, // Disable Visual Editing for better performance
  },
})

// Export a read-only token client for production (if you add a read token later)
export const clientWithToken = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn: false, // Never use CDN with tokens
  token: process.env.SANITY_API_READ_TOKEN, // Optional: for draft content
  perspective: 'published',
  stega: {
    enabled: false,
  },
})
