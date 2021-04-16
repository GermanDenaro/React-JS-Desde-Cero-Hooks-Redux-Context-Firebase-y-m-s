import firebase from 'firebase/app';
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCuLfbLwAB2QqW6JD3Zqyg_fg2-M2wggDQ",
    authDomain: "crud-firestore-a561f.firebaseapp.com",
    projectId: "crud-firestore-a561f",
    storageBucket: "crud-firestore-a561f.appspot.com",
    messagingSenderId: "622700538688",
    appId: "1:622700538688:web:267e4884c9f15b3026a8a5"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export {firebase};