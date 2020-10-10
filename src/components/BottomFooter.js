import React from 'react'
import styled from 'styled-components'
import AccordionMenu from '../components/AccordionMenu'

import Facebook from '../images/Facebook.png'
import IG from '../images/IG.png'
import Twitter from '../images/Twitter.png'

const Bar = styled.div`
  background: ${props => props.theme.colors.dark};
  color: ${props => props.theme.colors.light};
  padding: 3%;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  width: 100%;
`

const Nav = styled.div`
  width: 85%;
  font-weight: 400;
  line-height: 1.4;
  display: flex;
  @media screen and (max-width: 900px) {
    display: none;
  }

`

const MobileNav = styled.div`
  width: 100%;
  font-weight: 400;
  line-height: 1.4;
  margin: 20px;
  @media screen and (min-width: 901px) {
    display: none;
  }

`

const List = styled.ul`
  font-weight: 400;
  margin: 0 40px;
  h2 {
    margin-bottom: 10px;
  }
  li {
    font-weight: 100;
    font-size: .9em;
    padding-top: 10px;
    cursor: pointer;
  }
`

const Social = styled.div`
  width: 15%;
  @media screen and (max-width: 900px) {
    width: 100%;
    margin: 20px;
  }


`

const Icons = styled.div`
  display: flex;
  align-items: center;
  margin-top: 10px;
  img {
    margin: 4px;
    max-height: 20px;
    width: auto;
  }

`


const BottomFooter = () => {
  const CustomerService = ['Accessibility', 'Contact Us', 'Return Policy', 'FAQ', 'Gift Certificates', 'Wishlist']
  const Company = ['About Us', 'Careers', 'Press', 'Affiliates']

  return <Bar>
  <Nav>
  	<List>
      <h2>Customer Service</h2>
      {CustomerService.map((e) => (
         <li>{e}</li>
      ))}
    </List>
    <List>
      <h2>Company</h2>
      {Company.map((e) => (
         <li>{e}</li>
      ))}
    </List>
  </Nav>
  <MobileNav>
    <AccordionMenu title="Customer Service" menu={CustomerService} />
    <AccordionMenu title="Company" menu={Company} />
  </MobileNav>
  <Social>
    <h2>Follow Us</h2>
    <Icons>
      <img src={Facebook} alt="Facebook" />
      <img src={IG} alt="Instagram" />
      <img src={Twitter} alt="Twitter" />
    </Icons>
  </Social>
  </Bar>
}

export default BottomFooter