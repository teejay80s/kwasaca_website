export default {
  name: 'news',
  title: 'News & Events',
  type: 'document',
  fields: [
    { name:'title',       title:'Title',        type:'string',   validation: (r: any) => r.required() },
    { name:'slug',        title:'Slug (URL)',   type:'slug',     options:{ source:'title' }, validation: (r: any) => r.required() },
    { name:'publishedAt', title:'Published At', type:'datetime', validation: (r: any) => r.required() },
    { name:'category',    title:'Category',     type:'string',
      options:{ list:['Press Release','Event','Report','Program Update','Partnership','Announcement'] } },
    { name:'author',      title:'Author',       type:'string'    },
    { name:'excerpt',     title:'Excerpt',      type:'text',     rows: 3 },
    { name:'coverImage',  title:'Cover Image',  type:'image',    options:{ hotspot: true } },
    { name:'body',        title:'Body',         type:'array',
      of: [{ type:'block' }, { type:'image', options:{ hotspot:true } }] },
  ],
  orderings: [{ title:'Published Date, New', name:'publishedAtDesc', by:[{ field:'publishedAt', direction:'desc' }] }],
  preview: { select:{ title:'title', subtitle:'publishedAt', media:'coverImage' } },
}
