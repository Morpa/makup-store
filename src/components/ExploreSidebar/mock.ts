export default [
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
    type: 'radio',
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
