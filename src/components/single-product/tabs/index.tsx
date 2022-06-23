import React from 'react'
import { tabsData } from './data'
import {
  Container,
  NavTabs,
  ProductTabs,
  ReviewCustomer,
  TabContent,
  TabDescription,
  TabDetails,
  TabReviews
} from './styles'

const Tabs: React.FC = () => {
  return (
    <Container>
      {tabsData.map((item, index) => (
        <ProductTabs key={index}>
          <NavTabs>
            <li>{item.title}</li>
          </NavTabs>
          <TabContent>
            <TabDescription>{item.description}</TabDescription>
            <TabDetails>
              <h3>{item.subTitle}</h3>
              {item.table?.map((item, tableIndex) => (
                <tr key={tableIndex}>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </TabDetails>
            <TabReviews>
              {item.reviews?.map((item, reviewIndex) => (
                <ReviewCustomer key={reviewIndex}>
                  <h5>{item.customer}</h5>
                  <h6>{item.date}</h6>
                  <p>{item.review}</p>
                </ReviewCustomer>
              )) }
            </TabReviews>
          </TabContent>
        </ProductTabs>
      ))}
    </Container>
  )
}

export default Tabs
