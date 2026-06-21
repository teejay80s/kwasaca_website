export default {
  name: 'report',
  title: 'Reports & Publications',
  type: 'document',
  fields: [
    { name:'title',       title:'Report Title',  type:'string',  validation:(r:any)=>r.required() },
    { name:'year',        title:'Year',          type:'number',  validation:(r:any)=>r.required() },
    { name:'category',    title:'Category',      type:'string',
      options:{ list:['Annual Report','Quarterly Report','Fact Sheet','Program Report','National Guideline','Strategic Framework'] } },
    { name:'description', title:'Description',   type:'text', rows:2 },
    { name:'fileUrl',     title:'PDF File URL',  type:'url', description:'Upload PDF to Supabase Storage and paste URL here' },
    { name:'coverImage',  title:'Cover Image',   type:'image', options:{ hotspot:true } },
  ],
  orderings:[{ title:'Year, New', name:'yearDesc', by:[{ field:'year', direction:'desc' }] }],
  preview:{ select:{ title:'title', subtitle:'year' } },
}
