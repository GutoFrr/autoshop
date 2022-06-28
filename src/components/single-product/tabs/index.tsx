import React, { useState } from 'react'
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
  const [display, setDisplay] = useState(tabsData)
  const handleNavDisplay = (index: number) => {
    const tempDisplay = display
    tempDisplay.forEach((tempDisplay2, index2) => {
      if (index !== index2) {
        tempDisplay2.active = false
      }
    })
    tempDisplay[index].active = !tempDisplay[index].active
    setDisplay([...tempDisplay])
  }

  return (
    <Container>
      <ProductTabs>
        <NavTabs>
          {tabsData.map((item, index) => (
            <li key={index} onClick={() => handleNavDisplay(index)}>
              {item.title}
            </li>
          ))}
        </NavTabs>
        {tabsData.map((item, index) => (
          <TabContent key={index}>
            <TabDescription propDisplay={display}>
              {item.description}
            </TabDescription>
            <TabDetails propDisplay={display}>
              <h3>{item.subtitle}</h3>
              {item.table?.map((item, index) => (
                <tr key={index}>
                  <td>{item.title}</td>
                  <td>{item.description}</td>
                </tr>
              ))}
            </TabDetails>
            <TabReviews propDisplay={display}>
              {item.reviews?.map((item, index) => (
                <ReviewCustomer key={index}>
                  <h5>{item.customer}</h5>
                  <h6>{item.date}</h6>
                  <p>{item.review}</p>
                </ReviewCustomer>
              ))}
            </TabReviews>
          </TabContent>
        ))}
      </ProductTabs>
    </Container>
  )
}

export default Tabs
