export default {
  name: 'contact',
  type: 'document',
  title: 'Kontakt info',
  fields: [
    {
      name: 'image',
      type: 'image',
      title: 'Bilde',
      options: {
        hotspot: true, // Optional, enables image hotspot
      },
    },
    {
      name: 'firstname',
      type: 'string',
      title: 'Fornavn',
    },
    {
      name: 'lastname',
      type: 'string',
      title: 'Etternavn',
    },
    {
      name: 'adress',
      type: 'string',
      title: 'Adresse',
    },
    {
      name: 'phone',
      type: 'string',
      title: 'Mobil',
    },
    {
      name: 'email',
      type: 'string',
      title: 'E-post',
    },
    {
      name: 'about',
      type: 'text',
      title: 'Om meg',
    },
  ],
}
