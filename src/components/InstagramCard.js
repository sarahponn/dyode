import React from 'react'
import styled from 'styled-components'

import Img from "react-webp-image"

const Card = styled.div`
  min-width: 31%;
  margin: 1%;
  @media screen and (min-width: 900px) {
    min-width: 18%;
  }
`

const InstagramCard = props => {
  return <Card>
  <Img src={props.image} webp={props.webp} alt={props.title}/>
  </Card>
}

export default InstagramCard
