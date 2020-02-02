import styled from 'styled-components'

export const SpinnerOverlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60vh;
`

export const SpinnerContainer = styled.div`
  display: inline-block;
  width: 50px;
  height: 50px;
  border: 3px solid rgba(195, 195, 195, 0.6);
  border-top-color: #636767;
  border-radius: 50%;
  animation: spin 1s ease-in-out infinite;

  @keyframes spin {
    100% {
      transform: rotate(360deg);
    }
  }
`
