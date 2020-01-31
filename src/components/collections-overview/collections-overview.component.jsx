import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import './collections-overview.style.scss'

import CollectionPreview from '../collection-preview/collection-preview.component'

import { selectCollectionsForPreviews } from '../../redux/shop/shop.selector'

const CollectionOverview = ({ collections, match }) => {
  return (
    <div className="collections-overview">
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreviews,
})

export default connect(mapStateToProps)(CollectionOverview)
