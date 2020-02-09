import React from 'react'
import axios from 'axios'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100
  const publishableKey = 'pk_test_0I5cWPGS7PfuNdieaCYSn4pX00oGt43YnX'

  const onToken = token => {
    console.log(token)
    axios({
      method: 'post',
      url: 'payment',
      data: {
        token,
        amount: priceForStripe,
      },
    })
      .then(res => {
        alert('Payment Successful')
      })
      .catch(error => {
        console.log('Payment Error:', JSON.parse(error))
        alert(
          'There was an issue with your payment. Please sure you use provided credit card.',
        )
      })
  }

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image="https://sendeyo.com/up/d/f3eb2117da"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton
