import type {StructureResolver} from 'sanity/structure'

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
  S.list()
    .title('Content')
    .items([
      // Header Content as Singleton (only one document per language)
      S.listItem()
        .title('Header Content')
        .child(
          S.documentTypeList('headerContent')
            .title('Header Content by Language')
            .defaultOrdering([{field: 'language', direction: 'asc'}])
        ),
      // Home Page Content as Singleton (only one document per language)
      S.listItem()
        .title('Home Page Content')
        .child(
          S.documentTypeList('homePageContent')
            .title('Home Page Content by Language')
            .defaultOrdering([{field: 'language', direction: 'asc'}])
        ),
      // Footer Content as Singleton (only one document per language)
      S.listItem()
        .title('Footer Content')
        .child(
          S.documentTypeList('footerContent')
            .title('Footer Content by Language')
            .defaultOrdering([{field: 'language', direction: 'asc'}])
        ),
      // Events Content as Singleton (only one document per language)
      S.listItem()
        .title('Events Content')
        .child(
          S.documentTypeList('eventsContent')
            .title('Events Content by Language')
            .defaultOrdering([{field: 'language', direction: 'asc'}])
        ),
      // Sermon Content as Singleton (only one document per language)
      S.listItem()
        .title('Sermon Content')
        .child(
          S.documentTypeList('sermonContent')
            .title('Sermon Content by Language')
            .defaultOrdering([{field: 'language', direction: 'asc'}])
        ),
      // About Us Content as Singleton (only one document per language)
      S.listItem()
        .title('About Us Content')
        .child(
          S.documentTypeList('aboutUsContent')
            .title('About Us Content by Language')
            .defaultOrdering([{field: 'language', direction: 'asc'}])
        ),
      // Divider
      S.divider(),
      // All other document types
      ...S.documentTypeListItems().filter(
        (listItem) => !['headerContent', 'homePageContent', 'footerContent', 'eventsContent', 'sermonContent', 'aboutUsContent'].includes(listItem.getId() || '')
      ),
    ])
