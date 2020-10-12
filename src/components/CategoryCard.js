import React from 'react'
import styled from 'styled-components'

import Img from "react-webp-image"

const Card = styled.div`
  width: 46%;
  margin: 2%;
  text-align: center;
  position: relative;
  cursor: pointer;
  h3 {
  	background: ${props => props.theme.colors.highlight};
  	color: ${props => props.theme.colors.light};
  	padding: 8px;
  	font-size: .8em;
  	width: 100%;
  	position: absolute;
  	bottom: 0;
  }
   &:last-child {
    width: 100%!important;
    margin-top: 0;
   }
  @media screen and (min-width: 900px) {
    width: 29%;
    h3 {
      font-size: 1.8em;
      padding: 20px 10px;
    }
  	
  }
`

const CategoryCard = props => {
  return <Card className={props.type}>
  <Img src={props.image} webp={props.webp} alt={props.title}/>
  <h3>{props.title}</h3>
  </Card>
}

export default CategoryCard
