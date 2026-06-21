import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import news    from './sanity/schemas/news'
import program from './sanity/schemas/program'
import report  from './sanity/schemas/report'
import event   from './sanity/schemas/event'

export default defineConfig({
  name:      'kwasaca',
  title:     'KWASACA CMS',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID!,
  dataset:   process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  basePath:  '/studio',
  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('KWASACA Content')
          .items([
            S.listItem().title('News & Press Releases').schemaType('news').child(S.documentTypeList('news')),
            S.listItem().title('Programs').schemaType('program').child(S.documentTypeList('program')),
            S.listItem().title('Reports & Publications').schemaType('report').child(S.documentTypeList('report')),
            S.listItem().title('Events').schemaType('event').child(S.documentTypeList('event')),
          ]),
    }),
  ],
  schema: { types: [news, program, report, event] },
})
