import React from 'react'
import styled from 'styled-components'

import Carousel, { Dots } from '@brainhubeu/react-carousel'
import '@brainhubeu/react-carousel/lib/style.css'
import Img from "react-webp-image"

import Hero1 from '../images/Hero1.jpg'
import Hero1Webp from '../images/Hero1.webp'
import Hero1Mobile from '../images/Hero1Mobile.jpg'
import Hero1MobileWebp from '../images/Hero1Mobile.webp'



const Slide = styled.div`
  position: relative;
  img {
    object-fit: cover;
  }
  & .desktop {
    display: none;
  }
  @media screen and (min-width: 900px) {
  & .mobile {
    display: none;
  }
  & .desktop {
    display: block;
  }
  }

`

const CarouselContainer = styled.div`
  position: relative;
  width: 100%!important;
`

const HeroText = styled.div`
  position: absolute;
  left: 10%;
  transform: translateY (-50%);
  color: ${props => props.theme.colors.light};
  button {
    background: ${props => props.theme.colors.dark}!important;
  }
  font-size: 1em;
  top: 30%;
    p {
      margin: 10px 0;
    }
  @media screen and (min-width:900px) {
    font-size: 2em;
    top: 35%;
     p {
      margin: 20px 0;
    }
  }
`


class HeaderCarousel extends React.Component {
  constructor() {
    super()
    this.state = {
      value: 0,
      slides: [
        (<Slide>
          <Img className="desktop" src={Hero1} webp={Hero1Webp} alt="Hero 1" />
          <Img className="mobile" src={Hero1Mobile} webp={Hero1MobileWebp} alt="Hero 1 Mobile"/>
          <HeroText>
          <h2>Title Goes Here</h2>
          <p>Tagline will go right here.</p>
          <button>Shop Now</button>
          </HeroText>
         </Slide>),
        (<Slide>
          <Img className="desktop" src={Hero1} webp={Hero1Webp} alt="Hero 2" />
          <Img className="mobile" src={Hero1Mobile} webp={Hero1MobileWebp} alt="Hero 2 Mobile"/>
          <HeroText>
          <h2>Title Goes Here</h2>
          <p>Tagline will go right here.</p>
          <button>Shop Now</button>
          </HeroText>
         </Slide>),
        (<Slide>
          <Img className="desktop" src={Hero1} webp={Hero1Webp} alt="Hero 3" />
          <Img className="mobile" src={Hero1Mobile} webp={Hero1MobileWebp} alt="Hero 3 Mobile"/>
          <HeroText>
          <h2>Title Goes Here</h2>
          <p>Tagline will go right here.</p>
          <button>Shop Now</button>
          </HeroText>
         </Slide>),
         (<Slide>
          <Img className="desktop" src={Hero1} webp={Hero1Webp} alt="Hero 4" />
          <Img className="mobile" src={Hero1Mobile} webp={Hero1MobileWebp} alt="Hero 4 Mobile"/>
          <HeroText>
          <h2>Title Goes Here</h2>
          <p>Tagline will go right here.</p>
          <button>Shop Now</button>
          </HeroText>
         </Slide>),
      ],
    }
    this.onchange = this.onchange.bind(this);
  }


  onchange(value) {
    this.setState({ value });
  }

  render() {
    return (
    <CarouselContainer>
      <Carousel
        value={this.state.value}
        slides={this.state.slides}
        onChange={this.onchange}
      />
      <Dots value={this.state.value} onChange={this.onchange} number={this.state.slides.length} />
    </CarouselContainer>
    );
  }
}

export default HeaderCarousel
