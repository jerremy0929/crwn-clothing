import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyBuqDS8yMz4TdnehpXZbgXzYpKjVIrfleg',
  authDomain: 'crwn-db-16573.firebaseapp.com',
  databaseURL: 'https://crwn-db-16573.firebaseio.com',
  projectId: 'crwn-db-16573',
  storageBucket: 'crwn-db-16573.appspot.com',
  messagingSenderId: '856714901461',
  appId: '1:856714901461:web:756afee0aa8a7500ea6f5c',
}

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapshot = await userRef.get()

  console.log(snapshot)

  if (!snapshot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      })
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }

  return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
