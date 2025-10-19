import { client } from '@/sanity/lib/client'

const isDevelopment = process.env.NODE_ENV === 'development'

export const getHeaderContent = async (language: string = 'en') => {
  // Optimized query: only fetch fields we actually need
  const query = `*[_type == "headerContent" && language == $language][0]{
    churchName,
    logo,
    navigationLinks[]{title, url, isButton}
  }`
  
  try {
    const data = await client.fetch(query, { language }, {
      cache: isDevelopment ? 'no-store' : undefined,
      next: isDevelopment ? undefined : { revalidate: 60 }
    })
    
    if (!data) {
      console.warn('No header content found in Sanity for language:', language)
      return getHeaderFallbackData()
    }
    
    return data
  } catch (error) {
    console.error('Error fetching header content from Sanity:', error)
    return getHeaderFallbackData()
  }
}

function getHeaderFallbackData() {
  return {
    churchName: {
      main: 'GOSPEL OF PEACE',
      subtitle: 'CHURCH GLASGOW'
    },
    logo: {
      path: '/hero/logochurch.png',
      alt: 'Gospel of Peace Logo'
    },
    navigationLinks: [
      { title: 'Sermons', url: '/sermon', isButton: false },
      { title: 'Events', url: '/events', isButton: false },
      { title: 'Team', url: '/teams', isButton: false },
      { title: 'About', url: '/aboutus', isButton: false },
      { title: 'Connect', url: '/contact', isButton: true },
    ]
  }
}

export const getHomePageContent = async (language: string = 'en') => {
  // Optimized query: only fetch fields we actually need
  const query = `*[_type == "homePageContent" && language == $language][0]{
    carouselSection,
    heroSection,
    statsSection,
    liveStreamSection,
    quickLinksSection,
    ctaSection
  }`
  
  try {
    const data = await client.fetch(query, { language }, {
      cache: isDevelopment ? 'no-store' : undefined,
      next: isDevelopment ? undefined : { revalidate: 60 }
    })
    
    if (!data) {
      console.warn('No home page content found in Sanity for language:', language)
      return getHomePageFallbackData()
    }
    
    return data
  } catch (error) {
    console.error('Error fetching home page content from Sanity:', error)
    return getHomePageFallbackData()
  }
}

function getHomePageFallbackData() {
  return {
    carouselSection: {
      slides: [
        { mobileSrc: '/hero/two.png', desktopSrc: '/hero/two.png', alt: 'Congregation gathering' },
        { mobileSrc: '/hero/one.png', desktopSrc: '/hero/one.png', alt: 'Worship Service' },
      ]
    },
    heroSection: {
      title: 'Gospel of Peace',
      subtitle: 'A Welcoming Community of Faith in Glasgow',
      description: 'Experience authentic worship, powerful teaching, and genuine community. Join us as we discover God\'s purpose together.',
      serviceTime: 'Sundays · 11:00 AM',
      ctaButtons: [
        { title: 'Discover Our Story', url: '/aboutus', style: 'primary' },
        { title: 'Plan Your Visit', url: '/contact', style: 'secondary' },
      ]
    },
    statsSection: {
      stats: [
        { number: '100+', label: 'Community Members', icon: '👥' },
        { number: '15+', label: 'Years Serving', icon: '⏰' },
        { number: '50+', label: 'Weekly Programs', icon: '📅' },
        { number: '100%', label: 'Love & Grace', icon: '❤️' },
      ]
    },
    liveStreamSection: {
      badge: '🔴 LIVE STREAMING',
      title: 'Join Us From Anywhere',
      description: 'Can\'t make it in person? Experience our services live online and be part of our community from the comfort of your home.',
      streamUrl: 'https://www.facebook.com/share/1BJyhjBtP1/?mibextid=wwXIfr'
    },
    quickLinksSection: {
      title: 'Explore Our Ministry',
      description: 'Discover the many ways you can connect, grow, and serve in our community.',
      links: [
        { title: 'Sermons', url: '/sermon', description: 'Inspiring messages', icon: '📖' },
        { title: 'Events', url: '/events', description: 'Community gatherings', icon: '🙌' },
        { title: 'Our Team', url: '/teams', description: 'Meet our leaders', icon: '👥' },
        { title: 'Connect', url: '/contact', description: 'Get in touch', icon: '💬' },
      ]
    },
    ctaSection: {
      title: 'Ready to Take the Next Step?',
      description: 'Whether you\'re exploring faith for the first time or looking for a church home, we\'d love to welcome you into our community.',
      onlineDescription: 'Join our online community and stay updated with everything happening at Gospel of Peace.',
      address: {
        line1: '4 Elibank Street',
        city: 'Glasgow',
        mapsUrl: 'https://maps.google.com/?q=4+Elibank+Street+Glasgow'
      }
    }
  }
}

export const getPdfDocuments = async (category?: string) => {
  const query = `*[_type == "pdfDocument" && isActive == true${category ? ' && category == $category' : ''}] | order(displayOrder asc, title asc) {
    _id,
    title,
    description,
    category,
    htmlContent,
    pdfFile {
      asset->{
        _id,
        url,
        originalFilename
      }
    },
    thumbnail {
      asset->{
        _id,
        url
      }
    }
  }`

  try {
    const data = await client.fetch(query, category ? { category } : {}, {
      cache: isDevelopment ? 'no-store' : undefined,
      next: isDevelopment ? undefined : { revalidate: 60 }
    })

    return data || []
  } catch (error) {
    console.error('Error fetching PDF documents from Sanity:', error)
    return []
  }
}

export const getEventsContent = async (language: string = 'en') => {
  const query = `*[_type == "eventsContent" && language == $language][0]{
    title,
    content
  }`

  try {
    const data = await client.fetch(query, { language }, {
      cache: isDevelopment ? 'no-store' : undefined,
      next: isDevelopment ? undefined : { revalidate: 60 }
    })

    if (!data) {
      console.warn('No events content found in Sanity for language:', language)
      return getEventsFallbackData()
    }

    return data
  } catch (error) {
    console.error('Error fetching events content from Sanity:', error)
    return getEventsFallbackData()
  }
}

function getEventsFallbackData() {
  return {
    title: 'Events',
    content: [
      {
        _type: 'block',
        _key: 'intro',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'intro-text',
            text: 'Check back soon for upcoming events!',
          },
        ],
      },
    ],
  }
}

export const getSermonContent = async (language: string = 'en') => {
  const query = `*[_type == "sermonContent" && language == $language][0]{
    title,
    content
  }`

  try {
    const data = await client.fetch(query, { language }, {
      cache: isDevelopment ? 'no-store' : undefined,
      next: isDevelopment ? undefined : { revalidate: 60 }
    })

    if (!data) {
      console.warn('No sermon content found in Sanity for language:', language)
      return getSermonFallbackData()
    }

    return data
  } catch (error) {
    console.error('Error fetching sermon content from Sanity:', error)
    return getSermonFallbackData()
  }
}

function getSermonFallbackData() {
  return {
    title: 'Sermons',
    content: [
      {
        _type: 'block',
        _key: 'intro',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'intro-text',
            text: 'Check back soon for sermon recordings and transcripts!',
          },
        ],
      },
    ],
  }
}

export const getAboutUsContent = async (language: string = 'en') => {
  const query = `*[_type == "aboutUsContent" && language == $language][0]{
    title,
    content
  }`

  try {
    const data = await client.fetch(query, { language }, {
      cache: isDevelopment ? 'no-store' : undefined,
      next: isDevelopment ? undefined : { revalidate: 60 }
    })

    if (!data) {
      console.warn('No about us content found in Sanity for language:', language)
      return getAboutUsFallbackData()
    }

    return data
  } catch (error) {
    console.error('Error fetching about us content from Sanity:', error)
    return getAboutUsFallbackData()
  }
}

function getAboutUsFallbackData() {
  return {
    title: 'About Gospel of Peace',
    content: [
      {
        _type: 'block',
        _key: 'intro',
        style: 'h2',
        children: [
          {
            _type: 'span',
            _key: 'intro-text',
            text: 'Welcome to Gospel of Peace Church',
          },
        ],
      },
      {
        _type: 'block',
        _key: 'description',
        style: 'normal',
        children: [
          {
            _type: 'span',
            _key: 'desc-text',
            text: 'We are a welcoming community of faith in Glasgow, dedicated to worship, fellowship, and serving our community. Join us as we discover God\'s purpose together.',
          },
        ],
      },
    ],
  }
}

export const getFooterContent = async (language: string = 'en') => {
  // Optimized query: only fetch fields we actually need
  const query = `*[_type == "footerContent" && language == $language][0]{
    churchName,
    description,
    quickLinks[]{title, url},
    contactInfo,
    copyright
  }`
  
  try {
    const data = await client.fetch(query, { language }, {
      // Development: no cache for instant updates
      // Production: cache for 60 seconds to reduce API calls
      cache: isDevelopment ? 'no-store' : undefined,
      next: isDevelopment ? undefined : { revalidate: 60 }
    })
    
    if (!data) {
      console.warn('No footer content found in Sanity for language:', language)
      return getFallbackData()
    }
    
    return data
  } catch (error) {
    console.error('Error fetching footer content from Sanity:', error)
    return getFallbackData()
  }
}

function getFallbackData() {
  return {
    churchName: {
      main: 'GOSPEL OF PEACE',
      subtitle: 'CHURCH GLASGOW'
    },
    description: 'A welcoming community of faith in Glasgow, dedicated to worship, fellowship, and serving our community.',
    quickLinks: [
      { title: 'About Us', url: '/aboutus' },
      { title: 'Sermons', url: '/sermon' },
      { title: 'Events', url: '/events' },
      { title: 'Contact', url: '/contact' }
    ],
    contactInfo: {
      address: '4 Elibank Street, Glasgow',
      serviceTime: 'Sundays at 11:00 AM',
      email: 'info@gospelofpeaceglasgow.org.uk'
    },
    copyright: 'Gospel of Peace Church. All rights reserved.'
  }
}
