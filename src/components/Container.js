import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'

const Wrapper = styled.section`
  margin: 0;
  width: 100%;
  padding: 0;
  flex-grow: 1;
`

const Container = props => {
  return <Layout><Wrapper>{props.children}</Wrapper></Layout>
}

export default Container
