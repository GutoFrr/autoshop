import frontLightning from '../../public/widgets/front-lightning.jpg'
import thermalFan from '../../public/widgets/thermal-fan.jpg'
import coldAirSystem from '../../public/widgets/cold-air-system.jpg'
import beltCarEngine from '../../public/widgets/belt-car-engine.jpg'
import wheel from '../../public/widgets/wheel.jpg'
import oilFilter from '../../public/widgets/oil-filter.jpg'

export const widgetData = [
  {
    title: 'categories',
    categories: [
      {
        brand: 'Opel',
        inventory: '(5)'
      },
      {
        brand: 'Subaru',
        inventory: '(77)'
      },
      {
        brand: 'BMW',
        inventory: '(6)'
      },
      {
        brand: 'Toyota',
        inventory: '(11)'
      },
      {
        brand: 'Audi',
        inventory: '(54)'
      },
      {
        brand: 'Chevrolet',
        inventory: '(22)'
      }
    ]
  },
  {
    title: 'recent items',
    recentItems: [
      {
        image: frontLightning,
        title: 'front lightning',
        price: '13.99'
      },
      {
        image: thermalFan,
        title: 'thermal fan',
        price: '15.99'
      },
      {
        image: coldAirSystem,
        title: 'cold air system',
        price: '11.99'
      }
    ]
  },
  {
    title: 'filter by price'
  },
  {
    title: 'brands',
    brands: [
      {
        brand: 'Opel',
        inventory: '(5)'
      },
      {
        brand: 'Subaru',
        inventory: '(77)'
      },
      {
        brand: 'BMW',
        inventory: '(6)'
      },
      {
        brand: 'Toyota',
        inventory: '(11)'
      },
      {
        brand: 'Audi',
        inventory: '(54)'
      },
      {
        brand: 'Chevrolet',
        inventory: '(22)'
      }
    ]
  },
  {
    title: 'best sellers',
    bestSellers: [
      {
        image: beltCarEngine,
        title: 'belt car engine',
        price: '180.00'
      },
      {
        image: wheel,
        title: 'wheels',
        price: '68.00'
      },
      {
        image: oilFilter,
        title: 'oil filter',
        price: '40.00'
      }
    ]
  }
]
