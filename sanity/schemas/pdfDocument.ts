import { defineType } from 'sanity'

export const pdfDocument = defineType({
  name: 'pdfDocument',
  title: 'PDF Document',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Document Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 3,
      description: 'Brief description of the PDF content',
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'About Us', value: 'about' },
          { title: 'Sermons', value: 'sermons' },
          { title: 'Events', value: 'events' },
          { title: 'Ministry', value: 'ministry' },
          { title: 'General', value: 'general' },
        ],
      },
      initialValue: 'general',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'pdfFile',
      title: 'PDF File',
      type: 'file',
      options: {
        accept: '.pdf',
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'htmlContent',
      title: 'HTML Content',
      type: 'text',
      rows: 10,
      description: 'HTML content extracted from the PDF (will be auto-generated)',
    },
    {
      name: 'thumbnail',
      title: 'Thumbnail Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      description: 'Optional thumbnail image for the PDF',
    },
    {
      name: 'isActive',
      title: 'Active',
      type: 'boolean',
      initialValue: true,
      description: 'Show this PDF on the website',
    },
    {
      name: 'displayOrder',
      title: 'Display Order',
      type: 'number',
      initialValue: 0,
      description: 'Order in which to display PDFs (lower numbers first)',
    },
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'thumbnail',
    },
    prepare({ title, subtitle, media }) {
      return {
        title,
        subtitle: `${subtitle} PDF`,
        media: media,
      }
    },
  },
  orderings: [
    {
      title: 'Display Order',
      name: 'displayOrderAsc',
      by: [
        { field: 'displayOrder', direction: 'asc' },
        { field: 'title', direction: 'asc' },
      ],
    },
  ],
})
