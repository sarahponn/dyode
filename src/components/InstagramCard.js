import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  min-width: 18%;
  margin: 1%;
  @media screen and (max-width: 900px) {
    min-width: 31%;
  }
`

const InstagramCard = props => {
  return <Card>
  <img src={props.image} alt={props.key}/>
  </Card>
}

export default InstagramCard
