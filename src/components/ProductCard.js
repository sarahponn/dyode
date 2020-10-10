import React from 'react'
import styled from 'styled-components'

import ProductImage from '../images/ProductImage.jpg'

const Card = styled.div`
  min-width: 24%;
  margin: 1%;
  text-align: center;
  cursor: pointer;
  @media screen and (max-width: 900px) {
    min-width: 49%;
  }
`

const Title = styled.p`
  font-weight: 400;
  margin-top: 20px;
  @media screen and (max-width: 900px) {

  }
`

const Description = styled.p`
  font-weight: 100;
  @media screen and (max-width: 900px) {

  }
`

const Price = styled.h4`
  color: ${props => props.theme.colors.highlight};
  font-size: 1.2em;
  margin-top: 15px;
  @media screen and (max-width: 900px) {

  }
`

const ProductCard = props => {
  return <Card>
  <img src={ProductImage} alt="Product" />
  <Title>Product Title</Title>
  <Description>Women's T-Shirt</Description>
  <Price>$19.99</Price>
  </Card>
}

export default ProductCard
