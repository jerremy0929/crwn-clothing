import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route } from 'react-router-dom'

import { updateCollections } from '../../redux/shop/shop.actions'

import {
  firestore,
  covertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils'

import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import CollectionPage from '../collection/collection.component'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

const CollectionsOvervieWithSpinner = WithSpinner(CollectionsOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

export class ShopPage extends Component {
  state = {
    loading: true,
  }

  unsubscribeFromSnapshot = null

  componentDidMount() {
    const { updateCollections } = this.props
    const collectionsRef = firestore.collection('collections')

    collectionsRef.onSnapshot(async snapshot => {
      const collectionsMap = covertCollectionsSnapshotToMap(snapshot)
      updateCollections(collectionsMap)
      this.setState({ loading: false })
    })
  }

  render() {
    const { loading } = this.state
    const { match } = this.props

    return (
      <div>
        <Route
          exact
          path={`${match.path}`}
          render={routeProps => (
            <CollectionsOvervieWithSpinner
              isLoading={loading}
              {...routeProps}
            />
          )}
        />
        <Route
          path={`${match.path}/:collectionId`}
          render={routeProps => (
            <CollectionPageWithSpinner isLoading={loading} {...routeProps} />
          )}
        />
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => ({
  updateCollections: collections => dispatch(updateCollections(collections)),
})

export default connect(null, mapDispatchToProps)(ShopPage)
