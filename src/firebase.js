import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    //your api
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth}
