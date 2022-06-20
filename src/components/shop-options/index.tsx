import { Icon } from '@iconify/react'
import React, { useState } from 'react'
import { shopOptions, viewModes } from './data'
import {
  Container,
  IconContainer,
  Option,
  OptionItem,
  OptionName,
  Options,
  OptionsContainer,
  Select,
  ViewMode
} from './styles'

const ShopOptions = () => {
  const [viewMode, setViewMode] = useState(viewModes)
  const handleViewMode = (index: number) => {
    const tempIcons = viewMode
    tempIcons.forEach((tempIcon, index2) => {
      if (index !== index2) {
        tempIcon.active = false
      }
    })
    tempIcons[index].active = true || false
    setViewMode([...tempIcons])
  }

  return (
    <Container>
      <OptionsContainer>
        <Options>
          {shopOptions.map((item, index) => (
            <OptionItem key={index}>
              <OptionName>{item.option}</OptionName>
              <Select>
                {item.select.map((item, index) => (
                  <Option key={index}>{item.options}</Option>
                ))}
              </Select>
            </OptionItem>
          ))}
        </Options>
        <ViewMode>
          View as:
          {viewModes.map((item, index) => (
            <IconContainer onClick={() => handleViewMode(index)} key={index}>
              <Icon
                icon={item.viewMode}
                className={`${viewMode[index].active ? 'icon active' : 'icon'}`}
              />
            </IconContainer>
          ))}
        </ViewMode>
      </OptionsContainer>
    </Container>
  )
}

export default ShopOptions
