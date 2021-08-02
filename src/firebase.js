import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBzd59x-1FWay9DWLT9hFRkVedvplSkK2A",
    authDomain: "pub-chat-6b067.firebaseapp.com",
    projectId: "pub-chat-6b067",
    storageBucket: "pub-chat-6b067.appspot.com",
    messagingSenderId: "769537015294",
    appId: "1:769537015294:web:544ded4ef3a39cd094d4af"
})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth}