import React from 'react'
import styled from 'styled-components'


const Form = styled.form`
  max-width: ${props => props.theme.sizes.maxWidthCentered};
  margin: 0 auto;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  align-items: center;
    &::-moz-placeholder {
      color: gray;
      font-size: 9px;
    }
    &:-ms-input-placeholder {
      color: gray;
      font-size: 9px;
    }
    &:-moz-placeholder {
      color: gray;
      font-size: 9px;
    }
    &:required {
      box-shadow: none;
    }
    &:focus {
      outline: none;
    }
  }
  &::before {
    content: '';
    background: black;
    height: 100%;
    width: 100%;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    transition: 0.2s all;
    opacity: ${props => (props.overlay ? '.8' : '0')};
    visibility: ${props => (props.overlay ? 'visible' : 'hidden')};
  }
`

const Email = styled.input`
  margin-right: 1em;
  width: 50%;
  height: 35px;
  padding-left: 15px;
`

const Submit = styled.input`
  color: ${props => props.theme.colors.light};
  background: none;
  font-weight: 700;
  cursor: pointer;
  font-family: pacifico;
  transition: 0.2s;
  padding: 0 25px;
  height: 35px;
  border: 2px solid ${props => props.theme.colors.light};
  &:hover {
    background: ${props => props.theme.colors.dark};
  }
`

const Modal = styled.div`
  background: ${props => props.theme.colors.light};
  color: ${props => props.theme.colors.dark};
  font-weight: 400;
  text-align: center;
  padding: 2em;
  border-radius: 2px;
  position: fixed;
  min-width: 75%;
  bottom: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
  margin: 0 auto;
  z-index: 99;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  transition: 0.2s all;
  opacity: ${props => (props.visible ? '1' : '0')};
  visibility: ${props => (props.visible ? 'visible' : 'hidden')};
`

const Button = styled.div`
  font-size: 1em;
  background: ${props => props.theme.colors.highlight};
  margin: 15px auto;
  border: none;
  outline: none;
  cursor: pointer;
  color: ${props => props.theme.colors.light};
  padding: .5em;
  border-radius: 2px;
  text-decoration: none;
  transition: 0.2s;
  z-index: 99;
  &:focus {
    outline: none;
  }
  &:hover {
    background: ${props => props.theme.colors.dark};
  }
`

const encode = data => {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')
}

class Phone extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      showModal: false,
    }
  }

  handleInputChange = event => {
    const target = event.target
    const value = target.value
    const name = target.name
    this.setState({
      [name]: value,
    })
  }

  handleSubmit = event => {
    fetch('/?no-cache=1', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({ 'form-name': "Dyode Subscribe", ...this.state }),
    })
      .then(this.handleSuccess)
      .catch(error => alert(error))
    event.preventDefault()
  }

  handleSuccess = () => {
    this.setState({
      email: '',
      showModal: true,
    })
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  render() {

    return (
      <Form
        name="Dyode Subscribe"
        onSubmit={this.handleSubmit}
        data-netlify="true"
        data-netlify-honeypot="bot"
        overlay={this.state.showModal}
        onClick={this.closeModal}
      >
        <input type="hidden" name="form-name" value="Dyode Subscribe"  />
        <p hidden>
          <label>
            Don’t fill this out:{' '}
            <input name="bot" onChange={this.handleInputChange} />
          </label>
        </p>
        <Email
          name="email"
          type="email"
          placeholder="Your Email Address"
          value={this.state.email}
          onChange={this.handleInputChange}
          required
        />
        <Submit name="submit" type="submit" value="Subscribe" />

        <Modal visible={this.state.showModal}>
          <p>
            We will keep you posted with all of the latest updates!
          </p>
          <Button onClick={this.closeModal}>OK</Button>
        </Modal>
      </Form>
    )
  }
}

export default Phone