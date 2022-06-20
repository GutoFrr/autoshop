import React, { useState } from 'react'
import { paginationData } from './data'
import { Container, NextPage, PaginationItem, PaginationList } from './styles'
import { Icon } from '@iconify/react'

const Pagination = () => {
  const [pageNavigation, setPageNavigation] = useState(paginationData)
  const handlePageNavigation = (index: number) => {
    const tempNavigation = pageNavigation
    tempNavigation.forEach((tempIcon, index2) => {
      if (index !== index2) {
        tempIcon.active = false
      }
    })
    tempNavigation[index].active = true || false
    setPageNavigation([...tempNavigation])
  }

  return (
    <Container>
      <PaginationList>
        {paginationData.map((item, index) => (
          <PaginationItem
            onClick={() => handlePageNavigation(index)}
            className={`${pageNavigation[index].active ? 'active' : ''}`}
            key={index}
          >
            {item.pagination}
          </PaginationItem>
        ))}
        <NextPage>
          <Icon icon="fa:angle-right" />
        </NextPage>
      </PaginationList>
    </Container>
  )
}

export default Pagination
