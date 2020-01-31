import React from 'react'

import './checkout-item.style.scss'

const CheckoutItem = ({ cartItem: { name, price, quantity, imageUrl } }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img src={imageUrl} alt="item" />
      </div>
      <span className="name">{name}</span>
      <span className="quantity">{price}</span>
      <span className="price">{quantity}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  )
}

export default CheckoutItem
