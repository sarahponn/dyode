import React from 'react'
import styled from 'styled-components'

import Img from "react-webp-image"

import Hero2 from '../images/Hero2.jpg'
import Hero2Webp from '../images/Hero2.webp'
import Hero2Mobile from '../images/Hero2Mobile.jpg'
import Hero2MobileWebp from '../images/Hero2Mobile.webp'


const HeroContainer = styled.div`
  position: relative;
  & .desktop {
      display:none;
   }
  @media screen and (min-width:901px) {
  	& .mobile {
  		display:none;
  	}
    & .desktop {
      display:block;
    }
  }
`

const HeroText = styled.div`
  position: absolute;
  top: 35%;
  right: 10%;
  transform: translateY (-50%);
  color: ${props => props.theme.colors.light};
  font-size: 1em;
  p {
  	margin: 10px 0;
  }
  @media screen and (min-width:900px) {
  	font-size: 2.2em;
  	top: 40%;
  	p {
  		margin: 20px 0;
  	}
  }
`


const Hero = props => {
  return <HeroContainer>
  <Img src={Hero2} webp={Hero2Webp} className="desktop" alt="Hero" />
  <Img src={Hero2Mobile} webp={Hero2MobileWebp} className="mobile" alt="Hero Mobile" />
  <HeroText>
  	<h2>Title Goes Here</h2>
  	<p>Tagline will go right here.</p>
  	<button>Shop Now</button>
  </HeroText>
  </HeroContainer>
}

export default Hero
