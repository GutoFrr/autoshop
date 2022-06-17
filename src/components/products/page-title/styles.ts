import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.sectionTitleBackground};
`

export const SectionTitle = styled.div`
  width: 1170px;
  height: 135px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const Title = styled.h1`
  text-transform: uppercase;
  font: 800 35px 'Raleway', sans-serif;
  color: ${props => props.theme.colors.sectionTitle};
  line-height: 1;
`

export const BreadCrumb = styled.div`
  font: 400 13px 'Ubuntu', sans-serif;
  color: ${props => props.theme.colors.breadcrumb};
`
