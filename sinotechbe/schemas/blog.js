export default {
    name: 'blog',
    title: 'Bài viết',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Tựa đề',
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
        {
            name: 'description',
            title: 'Mô tả chung',
            type: 'blockContent',
        },
    ],
    preview: {
        select: {
            title: 'title',
            media: 'logo',
        },
    },
}
