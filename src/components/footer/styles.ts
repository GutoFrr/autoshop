import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: ${props => props.theme.colors.footerBackground};
`

export const FooterInfo = styled.div`
  width: 1170px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  column-gap: 30px;
  padding-top: 100px;
  padding-bottom: 60px;
  border-bottom: 1px solid ${props => props.theme.colors.footerInfoBorder};
`

export const PanelInfo = styled.div`
  width: 25%;
  border-radius: 1px;
  border: 1px solid ${props => props.theme.colors.footerInfoPanelBorder};
  padding: 21px;
  position: relative;

  h4 {
    font: 700 14px 'Ubuntu', sans-serif;
    color: ${props => props.theme.colors.footerInfoTitle};
    line-height: 1;
    text-transform: uppercase;
    margin-bottom: 10px;
  }

  p {
    font: 400 13px 'Open Sans', sans-serif;
    color: ${props => props.theme.colors.footerInfoDescription};
    line-height: 22px;
  }
`

export const PanelIcon = styled.div`
  position: absolute;
  top: -20px;
  right: 21px;
  width: 50px;
  height: 50px;
  display: grid;
  place-items: center;
  border-radius: 2px;
  background-color: ${props => props.theme.colors.primary};

  .panel-icon {
    color: ${props => props.theme.colors.footerInfoIcon};
    font-size: 32px;
  }
`

export const FooterWidget = styled.div`
  width: 1170px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-block: 70px;
`

export const WidgetAbout = styled.div`
  width: 33.333%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  row-gap: 20px;

  h5 {
    font: 700 17px 'Raleway', sans-serif;
    color: ${props => props.theme.colors.footerWidgetTitle};
    text-transform: capitalize;
    line-height: 1;
  }

  p {
    font: 400 13px 'Open Sans', sans-serif;
    color: ${props => props.theme.colors.footerWidgetDescription};
    line-height: 22px;
    max-width: 325px;
  }
`

export const WidgetSocials = styled.ul`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  column-gap: 4px;
  list-style: none;

  li {
    display: grid;
    place-items: center;
    width: 34px;
    height: 34px;
    text-align: center;
    background-color: ${props =>
      props.theme.colors.footerWidgetSocialsBackground};
    cursor: pointer;
    transition: all 0.3s ease;

    .social-icon {
      font-size: 15px;
      color: ${props => props.theme.colors.footerWidgetSocials};
    }

    :nth-child(1) {
      :hover {
        background-color: ${props => props.theme.colors.facebook};

        .social-icon {
          color: ${props => props.theme.colors.footerWidgetSocialsHover};
        }
      }
    }
    :nth-child(2) {
      :hover {
        background-color: ${props => props.theme.colors.googlePlus};

        .social-icon {
          color: ${props => props.theme.colors.footerWidgetSocialsHover};
        }
      }
    }
    :nth-child(3) {
      :hover {
        background-color: ${props => props.theme.colors.twitter};

        .social-icon {
          color: ${props => props.theme.colors.footerWidgetSocialsHover};
        }
      }
    }
    :nth-child(4) {
      :hover {
        background-color: ${props => props.theme.colors.pinterest};

        .social-icon {
          color: ${props => props.theme.colors.footerWidgetSocialsHover};
        }
      }
    }
    :nth-child(5) {
      :hover {
        background-color: ${props => props.theme.colors.vimeo};

        .social-icon {
          color: ${props => props.theme.colors.footerWidgetSocialsHover};
        }
      }
    }
    :nth-child(6) {
      :hover {
        background-color: ${props => props.theme.colors.wifi};

        .social-icon {
          color: ${props => props.theme.colors.footerWidgetSocialsHover};
        }
      }
    }
  }
`

export const Widget = styled.div`
  width: 200px;
  display: flex;
  flex-direction: column;
  padding-inline: 15px;

  h5 {
    font: 700 17px 'Raleway', sans-serif;
    color: ${props => props.theme.colors.footerWidgetTitle};
    text-transform: capitalize;
    line-height: 1;
    margin-bottom: 20px;
  }

  ul {
    padding-left: 12px;
    li {
      width: 165px;
      color: ${props => props.theme.colors.footerWidgetLink};
      font: 400 13px 'Open Sans', sans-serif;
      text-transform: uppercase;
      line-height: 37px;
      border-bottom: 1px solid
        ${props => props.theme.colors.footerWidgetLinkBorder};
      padding-left: 5px;
      cursor: pointer;
      transition: all 0.3s ease;

      ::marker {
        content: url('https://api.iconify.design/fa/angle-double-right.svg?color=%23d22e2e&height=12');
      }

      :last-child {
        border-bottom: none;
      }

      :hover {
        color: ${props => props.theme.colors.primary};
      }
    }
  }
`

export const FooterBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-block: 30px;
  background-color: ${props => props.theme.colors.footerCopyrightBackground};
`

export const FooterBarContainer = styled.div`
  width: 1170px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const FooterCopyright = styled.div`
  p {
    font: 400 13px 'Open Sans', sans-serif;
    color: ${props => props.theme.colors.footerCopyright};
    margin-bottom: 5px;

    span {
      color: ${props => props.theme.colors.primary};
    }
  }

  ul {
    list-style: none;
    display: flex;
    align-items: center;
    column-gap: 12px;
  }

  li {
    font: 400 13px 'Open Sans', sans-serif;
    color: ${props => props.theme.colors.footerCopyrightLink};
    text-transform: capitalize;
    position: relative;
    cursor: pointer;
    transition: all 0.3s ease;

    ::after {
      position: absolute;
      content: '-';
      right: -8px;
      top: 0;
      color: ${props => props.theme.colors.footerCopyrightLink};
    }

    :last-child {
      ::after {
        display: none;
      }
    }

    :hover {
      color: ${props => props.theme.colors.primary};
    }
  }
`

export const FooterPayment = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 10px;
  list-style: none;

  li {
    width: 32px;
    height: 20px;
    display: grid;
    place-items: center;
    background-color: ${props => props.theme.colors.footerCompanies};
    border-radius: 4px;
    cursor: pointer;
    transition: all 0.3s ease;

    .companie-icon {
      font-size: 18px;
      transition: all 0.3s ease;
    }

    :hover {
      background-color: ${props => props.theme.colors.primary};

      .companie-icon {
        color: ${props => props.theme.colors.footerCompaniesIconHover};
      }
    }
  }
`
