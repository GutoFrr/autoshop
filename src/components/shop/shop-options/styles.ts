import styled from 'styled-components'

export const Container = styled.div`
`

export const OptionsContainer = styled.div`
  width: 850px;
  height: 70px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  margin-bottom: 50px;
  border: 1px solid ${props => props.theme.colors.shopOptionsBorder};
  border-radius: 2px;
`

export const Options = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 30px;
  list-style: none;
`

export const OptionItem = styled.li`
  height: 30px;
  display: flex;
  align-items: center;
  column-gap: 15px;
`

export const OptionName = styled.h5`
  font: 700 15px 'Ubuntu', sans-serif;
  color: ${props => props.theme.colors.shopOptionsTitle};
`

export const Select = styled.select`
  font: 400 12px 'Open Sans', sans-serif;
  color: ${props => props.theme.colors.shopOptionsSelect};
  display: flex;
  width: 134px;
  height: 30px;
  border-radius: 1px;
  border: 1px solid ${props => props.theme.colors.shopOptionsSelectBorder};
  padding-inline: 7px;
  cursor: pointer;
`

export const Option = styled.option``

export const ViewMode = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 15px;
  font: 700 15px 'Ubuntu', sans-serif;
  color: ${props => props.theme.colors.shopOptionsTitle};
`

export const IconContainer = styled.div`
  width: 30px;
  height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border: 1px solid ${props => props.theme.colors.shopOptionsGridBorder};

  .icon {
    font-size: 13px;
    color: ${props => props.theme.colors.shopOptionsGrid};
  }

  .icon.active {
    color: ${props => props.theme.colors.primary};
  }
`
