import React, { Component } from 'react'

import CollectionPreview from '../../components/preview-collection/collection-preview.component'
import SHOP_DATA from './shop.data'

export class ShopPage extends Component {
  constructor() {
    super()

    this.state = {
      collections: SHOP_DATA,
    }
  }
  render() {
    return (
      <div className="shop-page">
        {this.state.collections.map(({ id, ...otherProps }) => (
          <CollectionPreview key={id} {...otherProps} />
        ))}
      </div>
    )
  }
}

export default ShopPage
