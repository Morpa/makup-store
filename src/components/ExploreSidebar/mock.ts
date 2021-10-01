export default [
  {
    title: 'Price',
    name: 'price',
    type: 'checkbox',
    fields: [
      {
        label: 'Under $50',
        name: 'under-50'
      },
      {
        label: 'Under $100',
        name: 'under-100'
      },
      {
        label: 'Under $150',
        name: 'under-150'
      },
      {
        label: 'Under $200',
        name: 'under-200'
      }
    ]
  },
  {
    title: 'Sort by',
    name: 'sort_by',
    type: 'radio',
    fields: [
      {
        label: 'High to low',
        name: 'high-to-low'
      },
      {
        label: 'Low to high',
        name: 'low-to-high'
      }
    ]
  },
  {
    title: 'Product Types',
    name: 'types',
    type: 'checkbox',
    fields: [
      {
        label: 'Vegan',
        name: 'vegan'
      },
      {
        label: 'Canadian',
        name: 'canadian'
      },
      {
        label: 'Organic',
        name: 'organic'
      },
      {
        label: 'Natural',
        name: 'natural'
      }
    ]
  }
]
