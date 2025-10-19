import { defineType } from 'sanity'

export const sermonContent = defineType({
  name: 'sermonContent',
  title: 'Sermon Content',
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
      initialValue: 'Sermons',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'content',
      title: 'Sermon Content',
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
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'language',
    },
  },
})
