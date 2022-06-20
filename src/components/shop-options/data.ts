export const shopOptions = [
  {
    option: 'Sort By:',
    select: [
      { options: 'Product Name' },
      { options: 'Newest Items' },
      { options: 'Oldest Items' },
      { options: 'Hot Items' },
      { options: 'Highest Price' },
      { options: 'Lowest Price' }
    ]
  },
  {
    option: 'Show:',
    select: [
      { options: '10 items / page' },
      { options: '25 items / page' },
      { options: '50 items / page' },
      { options: '100 items / page' }
    ]
  }
]

export const viewModes = [
  {
    viewMode: 'fa:th-large',
    active: true
  },
  {
    viewMode: 'fa:th-list',
    active: false
  }
]
