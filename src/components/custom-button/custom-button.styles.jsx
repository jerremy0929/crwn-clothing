import styled, { css } from 'styled-components'

const buttonStyles = css`
  color: #fff;
  background-color: #000;
  border: none;

  &:hover {
    color: #000;
    background-color: #fff;
    border: 1px solid #000;
  }
`

const invertedButtonStyles = css`
  color: #000;
  background-color: #fff;
  border: 1px solid #000;

  &:hover {
    color: #fff;
    background-color: #000;
    border: none;
  }
`

const googleSignInButtonStyles = css`
  color: #fff;
  background-color: #4285f4;

  &:hover {
    background-color: #357ae8;
    border: none;
  }
`

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInButtonStyles
  }

  return props.inverted ? invertedButtonStyles : buttonStyles
}

export const CustomButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  min-width: 165px;
  width: auto;
  height: 50px;
  padding: 0 35px;
  font-family: 'Open Sans Condensed';
  font-size: 15px;
  font-weight: bolder;
  line-height: 50px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  cursor: pointer;

  ${getButtonStyles}
`
