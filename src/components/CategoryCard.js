import React from 'react'
import styled from 'styled-components'

const Card = styled.div`
  width: 29%;
  margin: 2%;
  text-align: center;
  position: relative;
  cursor: pointer;
  h3 {
  	background: ${props => props.theme.colors.highlight};
  	color: ${props => props.theme.colors.light};
  	padding: 20px 10px;
  	font-size: 1.8em;
  	width: 100%;
  	position: absolute;
  	bottom: 0;
  }
  @media screen and (max-width: 900px) {
  	width: 46%;
  	&:last-child {
  	width: 100%!important;
  	margin-top: 0;
  	}
  	h3 {
  		font-size: .8em;
  		padding: 8px;
  	}
  }
`

const CategoryCard = props => {
  return <Card className={props.type}>
  <img src={props.image} alt={props.title}/>
  <h3>{props.title}</h3>
  </Card>
}

export default CategoryCard
