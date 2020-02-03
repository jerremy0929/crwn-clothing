import { ShopActionTypes } from './shop.types'

export const fetchCollectionsStart = () => ({
  type: ShopActionTypes.FATCH_COLLECTIONS_START,
})

export const fetchCollectionsSuccess = collectionsMap => ({
  type: ShopActionTypes.FATCH_COLLECTIONS_SUCCESS,
  payload: collectionsMap,
})

export const fetchCollectionsFailure = errorMessage => ({
  type: ShopActionTypes.FATCH_COLLECTIONS_FAILURE,
  payload: errorMessage,
})
