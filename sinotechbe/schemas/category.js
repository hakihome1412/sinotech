export default {
  name: 'category',
  title: 'Loại Sản Phẩm',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tên loại sản phẩm',
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
      name: 'description',
      title: 'Mô tả chung',
      type: 'text',
    },
    {
      name: 'parents',
      title: 'Các loại sản phẩm cha',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'category'}],
        },
      ],
    },
  ],
}
