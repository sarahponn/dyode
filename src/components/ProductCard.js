import React from 'react'
import styled from 'styled-components'

import Img from "react-webp-image"

import ProductImage from '../images/ProductImage.jpg'
import ProductImageWebp from '../images/ProductImage.webp'

const Card = styled.div`
  min-width: 49%;
  margin: 1%;
  text-align: center;
  cursor: pointer;
  @media screen and (min-width: 900px) {
    min-width: 24%;
  }
`

const Title = styled.p`
  font-weight: 400;
  margin-top: 20px;
`

const Description = styled.p`
  font-weight: 100;
`

const Price = styled.h4`
  color: ${props => props.theme.colors.highlight};
  font-size: 1.2em;
  margin-top: 15px;
`

const ProductCard = props => {
  return <Card>
  <Img src={ProductImage} webp={ProductImageWebp} alt="Product" />
  <Title>Product Title</Title>
  <Description>Women's T-Shirt</Description>
  <Price>$19.99</Price>
  </Card>
}

export default ProductCard
