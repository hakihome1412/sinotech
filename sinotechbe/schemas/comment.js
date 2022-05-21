export default {
    name: 'comment',
    title: 'Bình Luận',
    type: 'document',
    fields: [
        {
            name: 'title',
            title: 'Tựa đề',
            type: 'string',
        },
        {
            name: 'name',
            title: 'Họ và tên',
            type: 'string',
        },
        {
            name: 'email',
            title: 'Email',
            type: 'string',
        },
        {
            name: 'comment',
            title: 'Bình luận',
            type: 'text',
        },
        {
            name: 'approval',
            title: 'Duyệt',
            type: 'boolean',
            description: "Bình luận này sẽ không được hiện ở trên blog nếu chưa được duyệt"
        },
        {
            name: 'blog',
            title: 'Thuộc blog',
            type: 'reference',
            to: { type: "blog" }
        },
    ],
}
