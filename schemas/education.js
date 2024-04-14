export default {
  name: 'education',
  type: 'document',
  title: 'Utdanning',
  fields: [
    {
      name: 'skole',
      type: 'string',
      title: 'Skole',
    },
    {
      name: 'line',
      type: 'string',
      title: 'Linje',
    },
    {
      name: 'fromdate',
      type: 'date',
      title: 'Fra dato',
    },
    {
      name: 'todate',
      type: 'date',
      title: 'Til dato',
    },
  ],
}
