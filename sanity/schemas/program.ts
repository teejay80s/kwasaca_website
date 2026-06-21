export default {
  name: 'program',
  title: 'Programs',
  type: 'document',
  fields: [
    { name:'title',         title:'Program Title',   type:'string',  validation:(r:any)=>r.required() },
    { name:'order',         title:'Display Order',   type:'number'   },
    { name:'icon',          title:'Emoji Icon',      type:'string',  description:'Single emoji e.g. 🛡️' },
    { name:'summary',       title:'Short Summary',   type:'string'   },
    { name:'description',   title:'Full Description',type:'text', rows:4 },
    { name:'activities',    title:'Key Activities',  type:'array', of:[{type:'string'}] },
    { name:'lgas',          title:'LGAs Covered',    type:'array', of:[{type:'string'}] },
    { name:'contactPerson', title:'Contact Person',  type:'string'   },
  ],
  preview:{ select:{ title:'title', subtitle:'summary' } },
}
