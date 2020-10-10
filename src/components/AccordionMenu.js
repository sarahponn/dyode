import React from 'react'
import styled from 'styled-components'
import { FaPlus, FaMinus } from 'react-icons/fa'

const Heading = styled.h2`
  color: ${props => props.theme.colors.light};
  margin-top: 10px;
`

const Content = styled.div`
  opacity: ${props => (props.open ? "1" : "0")};
  max-height: ${props => (props.open ? "100%" : "0")};
  overflow: hidden;
  transition: all 0.3s;
`

const List = styled.ul`
  font-weight: 400;
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

const Plus = styled.span`
  color: ${props => props.theme.colors.light};
  margin-left: 15px;
  display: ${props => (props.visible ? "inline" : "none")};
`



class AccordionMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.toggleOpen = this.toggleOpen.bind(this);
  }

  toggleOpen() {
    this.setState({ open: !this.state.open });
  }

  render() {


    return (
      <>
        <Heading onClick={this.toggleOpen}>
          {this.props.title} 
          <Plus visible={!this.state.open}>
            <FaPlus size={10} />
          </Plus>
          <Plus visible={this.state.open}>
            <FaMinus size={10} />
          </Plus>
        </Heading>
        <Content open={this.state.open}>
          <List>
            {this.props.menu.map((e) => (
               <li>{e}</li>
            ))}
          </List>
        </Content>
      </>
    )
  }
}


export default AccordionMenu
