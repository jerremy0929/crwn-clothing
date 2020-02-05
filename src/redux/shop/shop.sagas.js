import { takeEvery, call, put, all } from 'redux-saga/effects'

import { ShopActionTypes } from './shop.types'
import {
  firestore,
  covertCollectionsSnapshotToMap,
} from '../../firebase/firebase.utils'

import {
  fetchCollectionsSuccess,
  fetchCollectionsFailure,
} from './shop.actions'

export function* fetchCollectionsAsync() {
  try {
    const collectionsRef = firestore.collection('collections')
    const snapshop = yield collectionsRef.get()
    const collectionsMap = yield call(covertCollectionsSnapshotToMap, snapshop)
    yield put(fetchCollectionsSuccess(collectionsMap))
  } catch (error) {
    yield put(fetchCollectionsFailure(error.message))
  }
}

export function* fetchCollectionsStart() {
  yield takeEvery(
    ShopActionTypes.FATCH_COLLECTIONS_START,
    fetchCollectionsAsync,
  )
}

export function* shopSagas() {
  yield all([call(fetchCollectionsStart)])
}
