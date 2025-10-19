import { defineType } from 'sanity'

export const aboutUsContent = defineType({
  name: 'aboutUsContent',
  title: 'About Us Content',
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
      name: 'title',
      title: 'Page Title',
      type: 'string',
      initialValue: 'About Gospel of Peace',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'content',
      title: 'About Us Content',
      type: 'array',
      of: [
        {
          type: 'block',
          styles: [
            { title: 'Normal', value: 'normal' },
            { title: 'H1', value: 'h1' },
            { title: 'H2', value: 'h2' },
            { title: 'H3', value: 'h3' },
            { title: 'H4', value: 'h4' },
            { title: 'Quote', value: 'blockquote' },
          ],
          lists: [
            { title: 'Bullet', value: 'bullet' },
            { title: 'Number', value: 'number' },
          ],
          marks: {
            decorators: [
              { title: 'Strong', value: 'strong' },
              { title: 'Emphasis', value: 'em' },
              { title: 'Code', value: 'code' },
            ],
            annotations: [
              {
                title: 'URL',
                name: 'link',
                type: 'object',
                fields: [
                  {
                    title: 'URL',
                    name: 'href',
                    type: 'url',
                  },
                ],
              },
            ],
          },
        },
        {
          type: 'image',
          options: { hotspot: true },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
              description: 'Important for SEO and accessibility.',
            },
          ],
        },
      ],
      initialValue: [
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
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'language',
    },
  },
})
