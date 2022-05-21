export default {
  name: 'product',
  title: 'Sản Phẩm',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Tên sản phẩm',
      type: 'string',
    },
    {
      name: 'idProduct',
      title: 'Mã sản phẩm',
      type: 'string',
    },
    {
      name: 'insurance',
      title: 'Bảo hành',
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
      title: 'Giá tiền',
      name: 'price',
      type: 'number',
    },
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
    },
    {
      name: 'images',
      title: 'Hình ảnh',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
    },
    {
      title: 'Tags',
      name: 'tags',
      type: 'array',
      of: [
        {
          type: 'string',
        },
      ],
      options: {
        layout: 'tags',
      },
    },
    {
      name: 'vendor',
      title: 'Nhà cung cấp',
      type: 'reference',
      to: { type: 'vendor' },
    },
    {
      name: 'blurb',
      title: 'Lời quảng cáo (nổi bật)',
      // type: 'localeString',
      type: 'string',
    },
    {
      name: 'categories',
      title: 'Loại sản phẩm',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: { type: 'category' },
        },
      ],
    },
    {
      name: 'description',
      title: 'Mô tả',
      type: 'object',
      fields: [
        {
          title: 'Tổ hợp',
          name: 'overview',
          type: 'object',
          fields: [{
            title: 'Thương hiệu',
            name: 'brand',
            // type: 'reference',
            // to: { type: 'vendor' },
            type: 'string',
          },
          {
            title: 'Model',
            name: 'model',
            type: 'string',
          },
          {
            title: 'Xuất xứ',
            name: 'origin',
            type: 'string',
          },
          {
            title: 'Tiêu chuẩn quản lý chất lượng',
            name: 'qualityManagementStandards',
            type: 'string',
          },
          {
            title: 'Tiêu chuẩn quản lý môi trường',
            name: 'environmentManagementStandards',
            type: 'string',
          },
          {
            title: 'Tiêu chuẩn chất lượng chế tạo',
            name: 'manufacturingQualityStandards',
            type: 'string',
          },
          {
            title: 'Prime (kVA/kW)',
            name: 'prime',
            type: 'string',
          },
          {
            title: 'Standby (kVA/kW)',
            name: 'standby',
            type: 'string',
          },
          {
            title: 'Điện áp',
            name: 'voltage',
            type: 'string',
          },
          {
            title: 'Kích thước: ( Dài x rộng x cao )',
            name: 'size',
            type: 'string',
          },
          {
            title: 'Trọng lượng máy',
            name: 'weight',
            type: 'number',
          },
          {
            title: 'Tiêu hao nhiên liệu mức: 50% tải ( L/h )',
            name: 'fuelConsumption50',
            type: 'number',
          },
          {
            title: 'Tiêu hao nhiên liệu mức: 75% tải ( L/h )',
            name: 'fuelConsumption75',
            type: 'number',
          },
          {
            title: 'Tiêu hao nhiên liệu mức: 100% tải ( L/h )',
            name: 'fuelConsumption100',
            type: 'number',
          },]
        },
        {
          title: 'Động cơ',
          name: 'engine',
          type: 'object',
          fields: [{
            title: 'Hãng sản xuất',
            name: 'brand',
            // type: 'reference',
            // to: { type: 'vendor' },
            type: 'string',
          },
          {
            title: 'Model',
            name: 'model',
            type: 'string',
          },
          {
            title: 'Tiêu chuẩn quản lý chất lượng',
            name: 'qualityManagementStandards',
            type: 'string',
          },
          {
            title: 'Kiểu',
            name: 'typeEngine',
            type: 'string',
          },
          {
            title: 'Hệ thống khởi động',
            name: 'startingSystem',
            type: 'string',
          },
          {
            title: 'Tốc độ vòng quay',
            name: 'rotationSpeed',
            type: 'string',
          },
          {
            title: 'Điện áp',
            name: 'voltage',
            type: 'string',
          },
          {
            title: 'Số xy lanh',
            name: 'numbersOfCylinder',
            type: 'string',
          },
          {
            title: 'Khoang chạy piton',
            name: 'pistonRunningCompartment',
            type: 'string',
          },
          {
            title: 'Dung tích xilanh',
            name: 'cylinderCapacity',
            type: 'string',
          },

          {
            title: 'Hệ thống làm mát',
            name: 'coolingSystem',
            type: 'string',
          },
          {
            title: 'Cơ cấu Bộ điều tốc',
            name: 'acceleratorStructure',
            type: 'string',
          }
          ]
        },
        {
          title: 'Đầu phát',
          name: 'player',
          type: 'object',
          fields: [{
            title: 'Hãng sản xuất',
            name: 'brand',
            // type: 'reference',
            // to: { type: 'vendor' },
            type: 'string',
          },
          {
            title: 'Model',
            name: 'model',
            type: 'string',
          },
          {
            title: 'Tiêu chuẩn quản lý chất lượng',
            name: 'qualityManagementStandards',
            type: 'string',
          },
          {
            title: 'Tiêu chuẩn sản xuất',
            name: 'productionStandard',
            type: 'string',
          },
          {
            title: 'Hệ số nhiễu sóng vô tuyến',
            name: 'radioInterferenceCoefficient',
            type: 'string',
          },
          {
            title: 'Kiểu đầu phát',
            name: 'typePlayer',
            type: 'string',
          },
          {
            title: 'Điện áp',
            name: 'voltage',
            type: 'string',
          },
          {
            title: 'Cơ cấu điều chỉnh điện áp (V)',
            name: 'voltageRegulatorMechanism',
            type: 'string',
          },
          {
            title: 'Số pha',
            name: 'numbersOfPhase',
            type: 'string',
          },
          {
            title: 'Hệ số quy đổ',
            name: 'conversionCoefficient',
            type: 'string',
          },

          {
            title: 'Cấp bảo vệ',
            name: 'protectionLevel',
            type: 'string',
          },
          {
            title: 'Cấp cách điện (Isulation)',
            name: 'isulation',
            type: 'string',
          }
          ]
        },
        {
          title: 'Bộ điều khiển',
          name: 'remoteControl',
          type: 'object',
          fields: [{
            title: 'Xuất xứ',
            name: 'origin',
            type: 'string',
          },
          {
            title: 'Tiêu chuẩn quản lý chất lượng',
            name: 'qualityManagementStandards',
            type: 'string',
          },
          {
            title: 'Tiêu chuẩn sản xuất',
            name: 'productionStandard',
            type: 'string',
          },
          {
            title: 'Chức năng',
            name: 'option',
            type: 'string',
          }
          ]
        },
      ]
    },
    {
      name: 'body',
      title: 'Nội dung',
      type: 'blockContent',
    },
  ],

  preview: {
    select: {
      title: 'title',
      manufactor: 'manufactor.title',
      media: 'logo',
    },
  },

  initialValue: {
    price: 0
  }
}
