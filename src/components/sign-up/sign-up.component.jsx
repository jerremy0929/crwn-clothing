import React, { Component } from 'react'
import { connect } from 'react-redux'

import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'

import { SignUpContainer, SignUpTitle } from './sign-up.styles'

import { signUpStart } from '../../redux/user/user.actions'

export class SignUp extends Component {
  constructor() {
    super()

    this.state = {
      displayName: '',
      email: '',
      password: '',
      confirmPassword: '',
    }
  }

  handleSubmit = async evt => {
    evt.preventDefault()

    const { displayName, email, password, confirmPassword } = this.state
    const { signUpStart } = this.props

    if (password !== confirmPassword) {
      alert("password don't match")
      return
    }

    signUpStart({ email, password, displayName })
  }

  handleChange = evt => {
    const { name, value } = evt.target

    this.setState({ [name]: value })
  }

  render() {
    const { displayName, email, password, confirmPassword } = this.state
    return (
      <SignUpContainer>
        <SignUpTitle>I do not have an account</SignUpTitle>
        <span>Sign up with your email and password</span>
        <form className="sign-up-form" onSubmit={this.handleSubmit}>
          <FormInput
            type="text"
            name="displayName"
            value={displayName}
            label="Display Name"
            required="required"
            onChange={this.handleChange}
          />
          <FormInput
            type="email"
            name="email"
            value={email}
            label="Email"
            required="required"
            onChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="password"
            value={password}
            label="Password"
            required="required"
            onChange={this.handleChange}
          />
          <FormInput
            type="password"
            name="confirmPassword"
            value={confirmPassword}
            label="Confirm Password"
            required="required"
            onChange={this.handleChange}
          />
          <CustomButton type="submit">SIGN UP</CustomButton>
        </form>
      </SignUpContainer>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  signUpStart: userCredential => dispatch(signUpStart(userCredential)),
})

export default connect(null, mapDispatchToProps)(SignUp)
