import { compose } from 'redux'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'

import { selectIsCollectionFetching } from '../../redux/shop/shop.selector'
import CollectionsOverview from '../../components/collections-overview/collections-overview.component'
import WithSpinner from '../../components/with-spinner/with-spinner.component'

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetching,
})

const CollectionsOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner,
)(CollectionsOverview)

export default CollectionsOverviewContainer
