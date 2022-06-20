import React from 'react'
import { footerCompanies, footerCopyright, footerInfo, footerWidget, widgetAbout } from './data'
import {
  Container,
  FooterBar,
  FooterBarContainer,
  FooterCopyright,
  FooterInfo,
  FooterPayment,
  FooterWidget,
  PanelIcon,
  PanelInfo,
  Widget,
  WidgetAbout,
  WidgetSocials
} from './styles'
import { Icon } from '@iconify/react'

const Footer = () => {
  return (
    <Container>
      <FooterInfo>
        {footerInfo.map((item, index) => (
          <PanelInfo key={index}>
            <PanelIcon>
              <Icon icon={item.icon} className="panel-icon" />
            </PanelIcon>
            <h4>{item.title}</h4>
            <p>{item.description}</p>
          </PanelInfo>
        ))}
      </FooterInfo>
      <FooterWidget>
        <WidgetAbout>
          <h5>{widgetAbout.title}</h5>
          <p>{widgetAbout.description}</p>
          <WidgetSocials>
            {widgetAbout.socials.map((item, index) => (
              <li key={index}>
                <Icon icon={item.icon} className="social-icon" />
              </li>
            ))}
          </WidgetSocials>
        </WidgetAbout>
        {footerWidget.map((item, index) => (
          <Widget key={index}>
            <h5>{item.title}</h5>
            <ul>
              {item.links.map((item, index2) => (
                <li key={index2}>{item.link}</li>
              ))}
            </ul>
          </Widget>
        ))}
      </FooterWidget>
      <FooterBar>
        <FooterBarContainer>
          <FooterCopyright>
            <p>
              JVM © All Rights Reserved. With Made With Love By{' '}
              <span>Gustavo</span>
            </p>
            <ul>
              {footerCopyright.map((item, index) => (
                <li key={index}>{item.title}</li>
              ))}
            </ul>
          </FooterCopyright>
          <FooterPayment>
            {footerCompanies.map((item, index) => (
              <li key={index}>
                <Icon icon={item.icon} className="companie-icon" />
              </li>
            ))}
          </FooterPayment>
        </FooterBarContainer>
      </FooterBar>
    </Container>
  )
}

export default Footer
