import React from 'react'
import styled from 'styled-components'

const List = styled.ul`
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  padding: 0;
  margin: 0 auto;
  & .desktop {
    display:none;
  }
  @media screen and (min-width: 900px) {
  & .mobile {
  	display:none;
  }
  & .desktop {
    display:block;
  }
  }
`

const CardList = props => {
  return <List>{props.children}</List>
}

export default CardList
