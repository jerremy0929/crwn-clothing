import React, { Component } from 'react'

import './sign-in.style.scss'

import FormInput from '../form-input/form-input.component'
import CustomBbutton from '../custom-button/custom-button.component'

import { signInWithGoogle } from '../../firebase/firebase.utils'

export class SignIn extends Component {
  state = {
    email: '',
    password: '',
  }

  handleSubmit = evt => {
    evt.preventDefault()

    this.setState({ email: '', password: '' })
  }

  handleChange = evt => {
    const { name, value } = evt.target
    this.setState({ [name]: value })
  }

  render() {
    const { email, password } = this.state
    return (
      <div className="sign-in">
        <h2>I already have an account</h2>
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
          <div className="buttons">
            <CustomBbutton type="submit">sign in</CustomBbutton>
            <CustomBbutton isGoogleSignIn onClick={signInWithGoogle}>
              sign in with Google
            </CustomBbutton>
          </div>
        </form>
      </div>
    )
  }
}

export default SignIn
