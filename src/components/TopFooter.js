import React from 'react'
import styled from 'styled-components'
import SubscribeForm from '../components/SubscribeForm'

import Email from '../images/Email.png'

const Bar = styled.div`
  background: ${props => props.theme.colors.highlight};
  color: ${props => props.theme.colors.light};
  padding: 5% 10%;
  display: flex;
  align-items: center;
  width: 100%;
  flex-flow: row wrap;
`

const Text = styled.div`
  width: 50%;
  font-weight: 400;
  line-height: 1.4;
  @media screen and (max-width: 900px) {
  	width:100%;
  	text-align:center;
  	margin-bottom: 20px;
  	font-size: .8em;
  }
`

const Form = styled.div`
  width: 50%;
  @media screen and (max-width: 900px) {
  	width:100%;
  }
`

const Heading = styled.div`
  color: ${props => props.theme.colors.light};
  font-size: 1.5em;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 100%;
  margin-bottom: 35px;
  img {
  	max-width: 25px;
  	margin-right: 15px;
  }
  @media screen and (max-width: 900px) {
  	font-size: 1em;
  }
`


const TopFooter = () => {
  return <Bar>
  <Heading>
  	<img src={Email} alt="Contact Us" />
  	<h2>Sign up & Stay Connected</h2>
  </Heading>
  <Text>
  	Sign up for the newsletter and get 20% off! Gain access to exclusive offers 
  	and be the first to know when new stuff drops!
  </Text>
  <Form>
  	<SubscribeForm />
  </Form>
  </Bar>
}

export default TopFooter