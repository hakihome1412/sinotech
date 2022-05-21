export default {
  name: 'vendor',
  title: 'Nhà Cung Cấp',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tên nhà cung cấp',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'blurb',
      title: 'Mô tả nổi bật',
      type: 'text',
    },
  ]
}
