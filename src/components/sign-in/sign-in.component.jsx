import React, { Component } from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomBbutton from '../custom-button/custom-button.component'

import {
  googleSignInStart,
  emailSignInStart,
} from '../../redux/user/user.actions'

import {
  SignInContainer,
  SignInTitle,
  ButtonsBarContainer,
} from './sign-in.styles'

export class SignIn extends Component {
  state = {
    email: '',
    password: '',
  }

  handleSubmit = async evt => {
    evt.preventDefault()
    const { email, password } = this.state
    const { emailSignInStart } = this.props

    emailSignInStart(email, password)
  }

  handleChange = evt => {
    const { name, value } = evt.target
    this.setState({ [name]: value })
  }

  render() {
    const { email, password } = this.state
    const { googleSignInStart } = this.props
    return (
      <SignInContainer>
        <SignInTitle>I already have an account</SignInTitle>
        <span>Sign in with your email and password</span>

        <form onSubmit={this.handleSubmit}>
          <FormInput
            required
            type="email"
            name="email"
            label="email"
            value={email}
            handleChange={this.handleChange}
          />
          <FormInput
            required
            type="password"
            name="password"
            label="password"
            value={password}
            handleChange={this.handleChange}
          />
          <ButtonsBarContainer>
            <CustomBbutton type="submit">SIGN IN</CustomBbutton>
            <CustomBbutton
              type="button"
              isGoogleSignIn
              onClick={googleSignInStart}
            >
              SIGN IN WITH GOOGLE
            </CustomBbutton>
          </ButtonsBarContainer>
        </form>
      </SignInContainer>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
})

export default connect(null, mapDispatchToProps)(SignIn)
