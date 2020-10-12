import React from 'react'
import styled from 'styled-components'

const Bar = styled.div`
  background: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.light};
  text-transform: uppercase;
  padding: 10px;
  text-align: center;
  font-size: .7em;
  @media screen and (min-width: 900px) {
  	font-size: 1em;
  }
`

const TopBar = () => {
  return <Bar>Free shipping on all orders over $75</Bar>
}

export default TopBar