import React from 'react'
import styled from 'styled-components'

import ArrowLeft from '../images/ArrowLeft.png'
import ArrowRight from '../images/ArrowRight.png'

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
`

const Arrow = styled.div`
  display: ${props => props.visible ? 'block' : 'none'};
  img {
    max-width: 20px;
  }
`

const List = styled.ul`
  display: flex;
  justify-content: start;
  align-items: center;
  padding: 0;
  margin: 20px auto;
  width: ${props => props.narrow ? '90%' : '100%'};
  white-space:nowrap;
  -webkit-overflow-scrolling: touch;
  overflow-x: auto;
  overflow-y: hidden;
`

const ScrollList = props => {
  return <Container>
  <Arrow visible={props.products}><img src={ArrowLeft} alt="Arrow Left" /></Arrow>
  <List narrow={props.products}>{props.children}</List>
  <Arrow visible={props.products}><img src={ArrowRight} alt="Arrow Right" /></Arrow>
  </Container>
}

export default ScrollList
