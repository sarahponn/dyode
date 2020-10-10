import React from 'react'
import styled from 'styled-components'
import Helmet from 'react-helmet'
import Container from '../components/Container'
import TopBar from '../components/TopBar'
import Menu from '../components/Menu'
import Carousel from '../components/Carousel'
import CardList from '../components/CardList'
import CategoryCard from '../components/CategoryCard'
import ScrollList from '../components/ScrollList'
import ProductCard from '../components/ProductCard'
import Hero from '../components/Hero'
import InstagramCard from '../components/InstagramCard'
import TopFooter from '../components/TopFooter'
import BottomFooter from '../components/BottomFooter'


import Mens from '../images/Mens.jpg'
import Womens from '../images/Womens.jpg'
import Accessories from '../images/Accessories.jpg'
import AccessoriesMobile from '../images/AccessoriesMobile.jpg'

import Social1 from '../images/Social1.jpg'
import Social2 from '../images/Social2.jpg'
import Social3 from '../images/Social3.jpg'
import Social4 from '../images/Social4.jpg'
import Social5 from '../images/Social5.jpg'

const Heading = styled.h2`
  font-size: 1.5em;
  text-align: center;
  margin: 30px 10px 10px 10px;
  @media screen and (max-width:900px) {

  }
 `

class Home extends React.Component {
  render () {
  return (
  <>
    <Helmet>
      <title>Dyode Test</title>
      <meta name="description" content="a mockup test by Sarah Ponn Foreman" />
    </Helmet>
    <Container>
    <TopBar />
    <Menu />
    <Carousel />
    <CardList>
      <CategoryCard key="1" image={Womens} title="Women's" />
      <CategoryCard key="2" image={Mens} title="Men's" />
      <CategoryCard key="3" type="desktop" image={Accessories} title="Accessories" />
      <CategoryCard type="mobile" image={AccessoriesMobile} title="Accessories" />
    </CardList>
    <Heading>New Arrivals</Heading>
    <ScrollList products>
    {[...Array(8)].map((el, i) => (<ProductCard key={i} />))}
    </ScrollList>
    <Hero />
    <Heading>Follow Us On Instagram!</Heading>
    <ScrollList>
      <InstagramCard key="Social1" image={Social1} />
      <InstagramCard key="Social2" image={Social2} />
      <InstagramCard key="Social3" image={Social3} />
      <InstagramCard key="Social4" image={Social4} />
      <InstagramCard key="Social5" image={Social5} />
    </ScrollList>
    <TopFooter />
    <BottomFooter />
    </Container>
  </>
  )
}}

export default Home