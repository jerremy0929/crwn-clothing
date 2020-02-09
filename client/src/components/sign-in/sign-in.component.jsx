import React, { useState } from 'react'
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

export const SignIn = ({ googleSignInStart, emailSignInStart }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: '',
  })
  const { email, password } = userCredentials

  const handleSubmit = async evt => {
    evt.preventDefault()

    emailSignInStart(email, password)
  }

  const handleChange = evt => {
    const { name, value } = evt.target
    setUserCredentials({ ...userCredentials, [name]: value })
  }

  return (
    <SignInContainer>
      <SignInTitle>I already have an account</SignInTitle>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit}>
        <FormInput
          required
          type="email"
          name="email"
          label="email"
          value={email}
          handleChange={handleChange}
        />
        <FormInput
          required
          type="password"
          name="password"
          label="password"
          value={password}
          handleChange={handleChange}
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

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) =>
    dispatch(emailSignInStart({ email, password })),
})

export default connect(null, mapDispatchToProps)(SignIn)
