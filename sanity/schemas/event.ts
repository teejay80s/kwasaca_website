export default {
  name: 'event',
  title: 'Events',
  type: 'document',
  fields: [
    { name:'title',            title:'Event Title',        type:'string',   validation:(r:any)=>r.required() },
    { name:'date',             title:'Event Date & Time',  type:'datetime', validation:(r:any)=>r.required() },
    { name:'location',         title:'Location',           type:'string'    },
    { name:'description',      title:'Description',        type:'text', rows:3 },
    { name:'registrationLink', title:'Registration Link',  type:'url'       },
    { name:'coverImage',       title:'Cover Image',        type:'image', options:{ hotspot:true } },
  ],
  orderings:[{ title:'Date, Upcoming', name:'dateAsc', by:[{ field:'date', direction:'asc' }] }],
  preview:{ select:{ title:'title', subtitle:'date' } },
}
