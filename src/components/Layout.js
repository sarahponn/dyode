import React from 'react'
import styled from 'styled-components'
import { ThemeProvider } from 'styled-components'
import Helmet from 'react-helmet'
import favicon from '../../static/favicon.ico'
import GlobalStyle from '../styles/global'
import theme from '../styles/theme'
import config from '../utils/siteConfig'


const Viewport = styled(`div`)`
  width: 100%;
`;



const PageContent = styled(`main`)`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  opacity: 1;
  padding-left: 0;
  transition: 0.75s;
  width: 100%;
  will-change: transform;

  &.covered {
    opacity: 0;
    position: fixed;
  }
`;



const Layout = props => {


  return (
    <>
      <Helmet>
        <title>{config.siteTitle}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1,  maximum-scale=1, user-scalable=0" />
        <link rel="icon" href={favicon} />
      </Helmet>

        <ThemeProvider theme={theme}>
        <GlobalStyle/>
        <Viewport>
        <PageContent>
          {props.children}
        </PageContent>
        </Viewport>
       </ ThemeProvider>
      </>
    )
  }

export default Layout