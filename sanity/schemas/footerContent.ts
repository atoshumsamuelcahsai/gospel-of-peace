import { defineType } from 'sanity'

export const footerContent = defineType({
  name: 'footerContent',
  title: 'Footer Content',
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
      name: 'churchName',
      title: 'Church Name',
      type: 'object',
      fields: [
        {
          name: 'main',
          title: 'Main Name',
          type: 'string',
          initialValue: 'GOSPEL OF PEACE',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'subtitle',
          title: 'Subtitle',
          type: 'string',
          initialValue: 'CHURCH GLASGOW',
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      initialValue: 'A welcoming community of faith in Glasgow, dedicated to worship, fellowship, and serving our community.',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'quickLinks',
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
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'url',
            },
          },
        },
      ],
      initialValue: [
        { title: 'About Us', url: '/aboutus' },
        { title: 'Sermons', url: '/sermon' },
        { title: 'Events', url: '/events' },
        { title: 'Contact', url: '/contact' },
      ],
    },
    {
      name: 'contactInfo',
      title: 'Contact Information',
      type: 'object',
      fields: [
        {
          name: 'address',
          title: 'Address',
          type: 'string',
          initialValue: '4 Elibank Street, Glasgow',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'serviceTime',
          title: 'Service Time',
          type: 'string',
          initialValue: 'Sundays at 11:00 AM',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'email',
          title: 'Email',
          type: 'string',
          initialValue: 'info@gospelofpeaceglasgow.org.uk',
          validation: (Rule: any) => Rule.required().email(),
        },
      ],
    },
    {
      name: 'copyright',
      title: 'Copyright Text',
      type: 'string',
      initialValue: 'Gospel of Peace Church. All rights reserved.',
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'churchName.main',
      subtitle: 'language',
    },
  },
})
