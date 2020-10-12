import React from 'react'
import styled from 'styled-components'

import { MdMenu, MdShoppingCart, MdClose } from 'react-icons/md'

const Bar = styled.div`
  background: ${props => props.theme.colors.highlight};
  color: ${props => props.theme.colors.light};
  padding: 10px;
  position: relative;
  @media screen and (min-width: 900px) {
    padding: 15px;
  }
  `

 const Nav = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  h2 {
  	font-size: 2em;
  	margin-right: 20px;
  	padding-bottom: 10px;
  }
  li {
  	display: none;
   }
  @media screen and (min-width: 900px) {
    li {
      display: block;
      padding: 0 10px;
      font-size: 1.1em;
      cursor: pointer;

    }
  }
  `


const Hamburger = styled.div`
  position: absolute;
  top: 20px;
  left: 10px;
  color: #ffffff;
  font-size: 1.4em;
  @media screen and (min-width: 900px) {
    display: none;
  }
`

const Cart = styled.div`
  position: absolute;
  top: 20px;
  right: 10px;
  color: #ffffff;
  font-size: 1.4em;
  @media screen and (min-width: 900px) {
    display: none;
  }
`

const Close = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
  color: ${props => props.theme.colors.light};
  font-size: 1.2em;
`

const MobileMenu = styled.div`
  position: absolute;
  top: 0px;
  left: 0px;
  width: 90%;
  height: 100vh;
  background: rgba(0,0,0,.7);
  padding: 30px 15px;
  li {
    margin-top: 10px;
    font-size: 1.5em;
  }
  color: ${props => props.theme.colors.light};
  display ${props => (props.visible ? 'block' : 'none')};
  z-index: 999;
`

class Menu extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      showMobileMenu: false,
    }
  }

  openMobileMenu = () => {
    this.setState({ showMobileMenu: true })
  }

  closeMobileMenu = () => {
    this.setState({ showMobileMenu: false })
  }

  render() {
  return (
  <Bar>
    <Nav>
    <h2>logo</h2>
    <li>Women's</li>
    <li>Men's</li>
    <li>Accessories</li>
    <li>Sale!</li>
    </Nav>
    <Hamburger onClick={this.openMobileMenu}><MdMenu /></Hamburger>
    <Cart><MdShoppingCart /></Cart>
    <MobileMenu visible={this.state.showMobileMenu}>
      <Close onClick={this.closeMobileMenu}><MdClose /></Close>
      <li>Women's</li>
      <li>Men's</li>
      <li>Accessories</li>
      <li>Sale!</li>
    </MobileMenu>
  </Bar>
  )
 }
}

export default Menu