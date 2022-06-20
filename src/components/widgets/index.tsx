import React from 'react'
import { widgetData } from './data'
import {
  BestSellers,
  Brands,
  Categories,
  Container,
  Price,
  ProductTitle,
  RecentItems,
  Widget,
  WidgetList,
  WidgetTitle
} from './styles'

const Widgets = () => {
  return (
    <Container>
      {widgetData.map((item, index) => (
        <Widget key={index}>
          <WidgetTitle>{item.title}</WidgetTitle>
          <WidgetList>
            {item.categories?.map((item, categoriesIndex) => (
              <Categories key={categoriesIndex}>
                {item.brand}
                <span> {item.inventory}</span>
              </Categories>
            ))}
            {item.recentItems?.map((item, recentIndex) => (
              <RecentItems key={recentIndex}>
                <img src={item.image} alt="" />
                <span>
                  <ProductTitle>{item.title}</ProductTitle>
                  <Price>${item.price}</Price>
                </span>
              </RecentItems>
            ))}
            {item.brands?.map((item, brandsIndex) => (
              <Brands key={brandsIndex}>
                <form>
                  <input type="checkbox" name="brands" id={item.brand} />
                  <label htmlFor={item.brand}>
                    {item.brand}
                    <span> {item.inventory}</span>
                  </label>
                </form>
              </Brands>
            ))}
            {item.bestSellers?.map((item, sellersIndex) => (
              <BestSellers key={sellersIndex}>
                <img src={item.image} alt="" />
                <ProductTitle>{item.title}</ProductTitle>
                <Price>${item.price}</Price>
              </BestSellers>
            ))}
          </WidgetList>
        </Widget>
      ))}
    </Container>
  )
}

export default Widgets
