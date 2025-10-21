import { defineType } from 'sanity'

export const headerContent = defineType({
  name: 'headerContent',
  title: 'Header Content',
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
      name: 'logo',
      title: 'Logo Settings',
      type: 'object',
      fields: [
        {
          name: 'path',
          title: 'Logo Image Path',
          type: 'string',
          initialValue: '/hero/logochurch.webq',
          description: 'Path to logo image in /public folder',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'alt',
          title: 'Logo Alt Text',
          type: 'string',
          initialValue: 'Gospel of Peace Logo',
          validation: (Rule: any) => Rule.required(),
        },
      ],
    },
    {
      name: 'navigationLinks',
      title: 'Navigation Links',
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
              name: 'isButton',
              title: 'Display as Button',
              type: 'boolean',
              initialValue: false,
              description: 'Show this link as a button instead of regular link',
            },
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'url',
              isButton: 'isButton',
            },
            prepare({ title, subtitle, isButton }) {
              return {
                title: `${title}${isButton ? ' (Button)' : ''}`,
                subtitle,
              }
            },
          },
        },
      ],
      initialValue: [
        { title: 'Sermons', url: '/sermon', isButton: false },
        { title: 'Events', url: '/events', isButton: false },
        { title: 'Team', url: '/teams', isButton: false },
        { title: 'About', url: '/aboutus', isButton: true },
        { title: 'Connect', url: '/contact', isButton: true },
      ],
    },
  ],
  preview: {
    select: {
      title: 'churchName.main',
      subtitle: 'language',
    },
  },
})

