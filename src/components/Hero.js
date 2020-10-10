import React from 'react'
import styled from 'styled-components'


import Hero2 from '../images/Hero2.jpg'
import Hero2Mobile from '../images/Hero2Mobile.jpg'

const HeroContainer = styled.div`
  position: relative;
  @media screen and (min-width:901px) {
  	& .mobile {
  		display:none;
  	}
  }
  @media screen and (max-width:900px) {
  	& .desktop {
  		display:none;
  	}
  }
`

const HeroText = styled.div`
  position: absolute;
  top: 40%;
  right: 10%;
  transform: translateY (-50%);
  color: ${props => props.theme.colors.light};
  font-size: 2.2em;
  p {
  	margin: 20px 0;
  }
  @media screen and (max-width:900px) {
  	font-size: 1em;
  	top: 35%;
  	p {
  		margin: 10px 0;
  	}
  }
`


const Hero = props => {
  return <HeroContainer>
  <img src={Hero2} className="desktop" alt="Hero" />
  <img src={Hero2Mobile} className="mobile" alt="Hero Mobile" />
  <HeroText>
  	<h2>Title Goes Here</h2>
  	<p>Tagline will go right here.</p>
  	<button>Shop Now</button>
  </HeroText>
  </HeroContainer>
}

export default Hero
