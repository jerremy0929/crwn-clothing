import React from 'react'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import CollectionPreview from '../collection-preview/collection-preview.component'

import { selectCollectionsForPreviews } from '../../redux/shop/shop.selector'
import { CollectionOverviewContainer } from './collections-overview.styles'

const CollectionOverview = ({ collections, match }) => {
  return (
    <CollectionOverviewContainer>
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </CollectionOverviewContainer>
  )
}

const mapStateToProps = createStructuredSelector({
  collections: selectCollectionsForPreviews,
})

export default connect(mapStateToProps)(CollectionOverview)
