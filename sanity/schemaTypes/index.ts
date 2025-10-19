import { type SchemaTypeDefinition } from 'sanity'
import { footerContent, headerContent, homePageContent, pdfDocument, eventsContent, sermonContent, aboutUsContent } from '../schemas'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [headerContent, footerContent, homePageContent, pdfDocument, eventsContent, sermonContent, aboutUsContent],
}
