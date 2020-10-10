import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 0;
  margin: 0 auto;
  @media screen and (min-width: 901px) {
  & .mobile {
  	display:none;
  }
  }
  @media screen and (max-width: 900px) {
  & .desktop {
  	display:none;
  }
  }
`

const CardList = props => {
  return <List>{props.children}</List>
}

export default CardList
