import React from 'react'
import styled from 'styled-components'

import Carousel, { Dots } from '@brainhubeu/react-carousel';
import '@brainhubeu/react-carousel/lib/style.css';

import Hero1 from '../images/Hero1.jpg'
import Hero1Mobile from '../images/Hero1Mobile.jpg'



const Slide = styled.div`
  position: relative;
  img {
    object-fit: cover;
  }
  @media screen and (max-width: 900px) {
  & .desktop {
    display: none;
  }
  }
  @media screen and (min-width: 901px) {
  & .mobile {
    display: none;
  }
  }

`

const CarouselContainer = styled.div`
  position: relative;
  width: 100%!important;
`

const HeroText = styled.div`
  position: absolute;
  top: 35%;
  left: 10%;
  transform: translateY (-50%);
  color: ${props => props.theme.colors.light};
  font-size: 2em;
  p {
    margin: 20px 0;
  }
  button {
    background: ${props => props.theme.colors.dark}!important;
  }
  @media screen and (max-width:900px) {
    font-size: 1em;
    top: 30%;
    p {
      margin: 10px 0;
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
          <img className="desktop" src={Hero1} alt="Hero 1" />
          <img className="mobile" src={Hero1Mobile} alt="Hero 1 Mobile"/>
          <HeroText>
          <h2>Title Goes Here</h2>
          <p>Tagline will go right here.</p>
          <button>Shop Now</button>
          </HeroText>
         </Slide>),
        (<Slide>
          <img className="desktop" src={Hero1} alt="Hero 2" />
          <img className="mobile" src={Hero1Mobile} alt="Hero 2 Mobile" />
          <HeroText>
          <h2>Title Goes Here</h2>
          <p>Tagline will go right here.</p>
          <button>Shop Now</button>
          </HeroText>
         </Slide>),
        (<Slide>
          <img className="desktop" src={Hero1} alt="Hero 3" />
          <img className="mobile" src={Hero1Mobile} alt="Hero 3 Mobile" />
          <HeroText>
          <h2>Title Goes Here</h2>
          <p>Tagline will go right here.</p>
          <button>Shop Now</button>
          </HeroText>
         </Slide>),
         (<Slide>
          <img className="desktop" src={Hero1} alt="Hero 4"/>
          <img className="mobile" src={Hero1Mobile} alt="Hero 4 Mobile" />
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
