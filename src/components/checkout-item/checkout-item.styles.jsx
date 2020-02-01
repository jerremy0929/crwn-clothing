import styled from 'styled-components'

export const CheckoutItemContainer = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: 100px;
  padding: 15px 0;
  font-size: 20px;
  border-bottom: 1px solid darkgrey;
`

export const ImageContainer = styled.div`
  width: 23%;
  padding-right: 15px;

  img {
    width: 100%;
    height: 100%;
  }
`

export const TextContainer = styled.span`
  width: 23%;
`

export const QuantityContainer = styled(TextContainer)`
  display: flex;

  span {
    margin: 0 10px;
  }

  div {
    cursor: pointer;
  }
`

export const RemoveButtonContainer = styled.div`
  padding-left: 12px;
  cursor: pointer;
`
