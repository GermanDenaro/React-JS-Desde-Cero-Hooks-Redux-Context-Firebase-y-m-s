import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/storage'

const firebaseConfig = {
    apiKey: "AIzaSyBR-wX8_F8ixkRP1PEzkvsbWswYMKifgAk",
    authDomain: "auth-82179.firebaseapp.com",
    projectId: "auth-82179",
    storageBucket: "auth-82179.appspot.com",
    messagingSenderId: "522144252321",
    appId: "1:522144252321:web:af1ae06791352362928be0"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const db = firebase.firestore();
const storage = firebase.storage();

export {auth, firebase, db, storage}