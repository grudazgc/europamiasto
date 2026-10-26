import { config, collection, fields } from '@keystatic/core';

export default config({
  storage: { kind: 'local' },
  collections: {
    aktualnosci: collection({
      label: 'Aktualności',
      slugField: 'tytul',
      path: 'content/aktualnosci/*',
      format: { contentField: 'tresc' },
      schema: {
        tytul: fields.slug({ name: { label: 'Tytuł', validation: { isRequired: true } } }),
        data: fields.date({ label: 'Data publikacji', validation: { isRequired: true } }),
        zajawka: fields.text({ label: 'Zajawka', multiline: true }),
        zrodla: fields.array(fields.text({ label: 'Źródło (link lub opis)' }), {
          label: 'Źródła',
          itemLabel: (props) => props.value,
        }),
        tresc: fields.document({
          label: 'Treść',
          formatting: true,
          links: true,
          dividers: true,
        }),
      },
    }),
    strony: collection({
      label: 'Strony statyczne',
      slugField: 'tytul',
      path: 'content/strony/*',
      format: { contentField: 'tresc' },
      schema: {
        tytul: fields.slug({ name: { label: 'Tytuł', validation: { isRequired: true } } }),
        tresc: fields.document({
          label: 'Treść',
          formatting: true,
          links: true,
          dividers: true,
        }),
      },
    }),
  },
});
