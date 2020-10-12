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
import MensWebp from '../images/Mens.webp'
import Womens from '../images/Womens.jpg'
import WomensWebp from '../images/Womens.webp'
import Accessories from '../images/Accessories.jpg'
import AccessoriesWebp from '../images/Accessories.webp'
import AccessoriesMobile from '../images/AccessoriesMobile.jpg'
import AccessoriesMobileWebp from '../images/AccessoriesMobile.webp'

import Social1 from '../images/Social1.jpg'
import Social1Webp from '../images/Social1.webp'
import Social2 from '../images/Social2.jpg'
import Social2Webp from '../images/Social2.webp'
import Social3 from '../images/Social3.jpg'
import Social3Webp from '../images/Social3.webp'
import Social4 from '../images/Social4.jpg'
import Social4Webp from '../images/Social4.webp'
import Social5 from '../images/Social5.jpg'
import Social5Webp from '../images/Social5.webp'

const Heading = styled.h2`
  font-size: 1.5em;
  text-align: center;
  margin: 30px 10px 10px 10px;
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
      <CategoryCard key="1" image={Womens} webp={WomensWebp} title="Women's" />
      <CategoryCard key="2" image={Mens} webp={MensWebp} title="Men's" />
      <CategoryCard key="3" type="desktop" image={Accessories} webp={AccessoriesWebp} title="Accessories" />
      <CategoryCard type="mobile" image={AccessoriesMobile} webp={AccessoriesMobileWebp} title="Accessories" />
    </CardList>
    <Heading>New Arrivals</Heading>
    <ScrollList products>
    {[...Array(8)].map((el, i) => (<ProductCard key={i} />))}
    </ScrollList>
    <Hero />
    <Heading>Follow Us On Instagram!</Heading>
    <ScrollList>
      <InstagramCard key="Social1" title="Social1" image={Social1} webp={Social1Webp} />
      <InstagramCard key="Social2" title="Social2" image={Social2} webp={Social2Webp} />
      <InstagramCard key="Social3" title="Social3" image={Social3} webp={Social3Webp} />
      <InstagramCard key="Social4" title="Social4" image={Social4} webp={Social4Webp} />
      <InstagramCard key="Social5" title="Social5" image={Social5} webp={Social5Webp} />
    </ScrollList>
    <TopFooter />
    <BottomFooter />
    </Container>
  </>
  )
}}

export default Home