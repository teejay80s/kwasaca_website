import { createClient } from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset   = process.env.NEXT_PUBLIC_SANITY_DATASET || 'production'

export const sanityClient = projectId
  ? createClient({
      projectId,
      dataset,
      apiVersion: '2024-01-01',
      useCdn:     true,
      token:      process.env.SANITY_API_TOKEN,
    })
  : null

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null
export const urlFor = (source: any) => builder?.image(source)

// ─── GROQ Queries ────────────────────────────────────────

export async function getLatestNews(limit = 3) {
  if (!sanityClient) return []
  return sanityClient.fetch(`
    *[_type == "news"] | order(publishedAt desc) [0...$limit] {
      _id, title, slug, publishedAt, category,
      excerpt, coverImage, author
    }
  `, { limit })
}

export async function getAllNews() {
  if (!sanityClient) return []
  return sanityClient.fetch(`
    *[_type == "news"] | order(publishedAt desc) {
      _id, title, slug, publishedAt, category,
      excerpt, coverImage, author
    }
  `)
}

export async function getNewsBySlug(slug: string) {
  if (!sanityClient) return null
  return sanityClient.fetch(`
    *[_type == "news" && slug.current == $slug][0] {
      _id, title, slug, publishedAt, category,
      body, coverImage, author
    }
  `, { slug })
}

export async function getAllPrograms() {
  if (!sanityClient) return []
  return sanityClient.fetch(`
    *[_type == "program"] | order(order asc) {
      _id, title, description, icon, lgas, contactPerson
    }
  `)
}

export async function getAllReports() {
  if (!sanityClient) return []
  return sanityClient.fetch(`
    *[_type == "report"] | order(year desc) {
      _id, title, year, category, fileUrl, description
    }
  `)
}

export async function getUpcomingEvents() {
  if (!sanityClient) return []
  return sanityClient.fetch(`
    *[_type == "event" && date >= now()] | order(date asc) {
      _id, title, date, location, description, registrationLink
    }
  `)
}