import { defineType } from 'sanity'

export const homePageContent = defineType({
  name: 'homePageContent',
  title: 'Home Page Content',
  type: 'document',
  fields: [
    {
      name: 'language',
      title: 'Language',
      type: 'string',
      initialValue: 'en',
      validation: (Rule: any) => Rule.required(),
      options: {
        list: [
          { title: 'English', value: 'en' },
          { title: 'Spanish', value: 'es' },
          { title: 'French', value: 'fr' },
        ],
      },
    },
    {
      name: 'carouselSection',
      title: 'Hero Carousel',
      type: 'object',
      fields: [
        {
          name: 'slides',
          title: 'Carousel Slides',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'mobileSrc',
                  title: 'Mobile Image Path',
                  type: 'string',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'desktopSrc',
                  title: 'Desktop Image Path',
                  type: 'string',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'alt',
                  title: 'Alt Text',
                  type: 'string',
                  validation: (Rule: any) => Rule.required(),
                },
              ],
              preview: {
                select: {
                  title: 'alt',
                  subtitle: 'mobileSrc',
                },
              },
            },
          ],
          initialValue: [
            { mobileSrc: '/hero/two.png', desktopSrc: '/hero/two.png', alt: 'Congregation gathering' },
            { mobileSrc: '/hero/one.png', desktopSrc: '/hero/one.png', alt: 'Worship Service' },
          ],
        },
      ],
    },
    {
      name: 'heroSection',
      title: 'Hero Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Main Title',
          type: 'string',
          initialValue: 'Gospel of Peace',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          initialValue: 'A Welcoming Community of Faith in Glasgow',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          initialValue: 'We preach the Gospel of Peace through the power of the Holy Spirit, for salvation is our aim. We invite you to join us as we discover God\'s purpose together.',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'serviceTime',
          title: 'Service Time',
          type: 'string',
          initialValue: 'Sundays · 11:00 AM',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'ctaButtons',
          title: 'Call-to-Action Buttons',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Button Text',
                  type: 'string',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'url',
                  title: 'URL',
                  type: 'string',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'style',
                  title: 'Button Style',
                  type: 'string',
                  initialValue: 'primary',
                  options: {
                    list: [
                      { title: 'Primary', value: 'primary' },
                      { title: 'Secondary', value: 'secondary' },
                    ],
                  },
                },
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'url',
                  style: 'style',
                },
                prepare({ title, subtitle, style }) {
                  return {
                    title: `${title} (${style})`,
                    subtitle,
                  }
                },
              },
            },
          ],
          initialValue: [
            { title: 'Discover Our Story', url: '/aboutus', style: 'primary' },
            { title: 'Plan Your Visit', url: '/contact', style: 'secondary' },
          ],
        },
      ],
    },
    {
      name: 'statsSection',
      title: 'Statistics Section',
      type: 'object',
      fields: [
        {
          name: 'stats',
          title: 'Statistics',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'number',
                  title: 'Number',
                  type: 'string',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'label',
                  title: 'Label',
                  type: 'string',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'icon',
                  title: 'Icon (Emoji)',
                  type: 'string',
                  validation: (Rule: any) => Rule.required(),
                },
              ],
              preview: {
                select: {
                  title: 'number',
                  subtitle: 'label',
                  icon: 'icon',
                },
                prepare({ title, subtitle, icon }) {
                  return {
                    title: `${icon} ${title}`,
                    subtitle,
                  }
                },
              },
            },
          ],
          initialValue: [
            { number: '100+', label: 'Community Members', icon: '👥' },
            { number: '15+', label: 'Years Serving', icon: '⏰' },
            { number: '50+', label: 'Weekly Programs', icon: '📅' },
            { number: '100%', label: 'Love & Grace', icon: '❤️' },
          ],
        },
      ],
    },
    {
      name: 'liveStreamSection',
      title: 'Live Stream Section',
      type: 'object',
      fields: [
        {
          name: 'badge',
          title: 'Live Streaming Badge',
          type: 'string',
          initialValue: '🔴 LIVE STREAMING',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Join Us From Anywhere',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          initialValue: 'Can\'t make it in person? Experience our services live online and be part of our community from the comfort of your home.',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'streamUrl',
          title: 'Stream URL',
          type: 'url',
          initialValue: 'https://www.facebook.com/share/1BJyhjBtP1/?mibextid=wwXIfr',
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
    {
      name: 'quickLinksSection',
      title: 'Quick Links Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Explore Our Ministry',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          initialValue: 'Discover the many ways you can connect, grow, and serve in our community.',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'links',
          title: 'Quick Links',
          type: 'array',
          of: [
            {
              type: 'object',
              fields: [
                {
                  name: 'title',
                  title: 'Link Title',
                  type: 'string',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'url',
                  title: 'URL',
                  type: 'string',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'description',
                  title: 'Description',
                  type: 'string',
                  validation: (Rule: any) => Rule.required(),
                },
                {
                  name: 'icon',
                  title: 'Icon (Emoji)',
                  type: 'string',
                  validation: (Rule: any) => Rule.required(),
                },
              ],
              preview: {
                select: {
                  title: 'title',
                  subtitle: 'description',
                  icon: 'icon',
                },
                prepare({ title, subtitle, icon }) {
                  return {
                    title: `${icon} ${title}`,
                    subtitle,
                  }
                },
              },
            },
          ],
          initialValue: [
            { title: 'Sermons', url: '/sermon', description: 'Inspiring messages', icon: '📖' },
            { title: 'Events', url: '/events', description: 'Community gatherings', icon: '🙌' },
            { title: 'Our Team', url: '/teams', description: 'Meet our leaders', icon: '👥' },
            { title: 'Connect', url: '/contact', description: 'Get in touch', icon: '💬' },
          ],
        },
      ],
    },
    {
      name: 'ctaSection',
      title: 'Call-to-Action Section',
      type: 'object',
      fields: [
        {
          name: 'title',
          title: 'Section Title',
          type: 'string',
          initialValue: 'Ready to Take the Next Step?',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'description',
          title: 'Description',
          type: 'text',
          initialValue: 'Whether you\'re exploring faith for the first time or looking for a church home, we\'d love to welcome you into our community.',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'onlineDescription',
          title: 'Online Community Description',
          type: 'text',
          initialValue: 'Join our online community and stay updated with everything happening at Gospel of Peace.',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'address',
          title: 'Church Address',
          type: 'object',
          fields: [
            {
              name: 'line1',
              title: 'Address Line 1',
              type: 'string',
              initialValue: '4 Elibank Street',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'city',
              title: 'City',
              type: 'string',
              initialValue: 'Glasgow',
              validation: (Rule: any) => Rule.required(),
            },
            {
              name: 'mapsUrl',
              title: 'Google Maps URL',
              type: 'url',
              initialValue: 'https://maps.google.com/?q=4+Elibank+Street+Glasgow',
              validation: (Rule: any) => Rule.required(),
            },
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      title: 'heroSection.title',
      subtitle: 'language',
    },
  },
})
