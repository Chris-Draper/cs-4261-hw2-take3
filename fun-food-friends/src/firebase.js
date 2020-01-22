// src/firebase.js
import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyBayY2eItEpf_nHrVIt94ETd27jEmHXni4",
    authDomain: "fun-food-friends-ca7d8.firebaseapp.com",
    databaseURL: "https://fun-food-friends-ca7d8.firebaseio.com",
    projectId: "fun-food-friends-ca7d8",
    storageBucket: "fun-food-friends-ca7d8.appspot.com",
    messagingSenderId: "769478071208",
};

firebase.initializeApp(config);
export default firebase;