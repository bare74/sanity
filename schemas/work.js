export default {
  name: 'work',
  type: 'document',
  title: 'Arbeidsplass',
  fields: [
    {
      name: 'company',
      type: 'string',
      title: 'Firma navn',
    },
    {
      name: 'title',
      type: 'string',
      title: 'Stillings tittel',
    },
    {
      name: 'text',
      type: 'string',
      title: 'Arbeids erfaring',
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
