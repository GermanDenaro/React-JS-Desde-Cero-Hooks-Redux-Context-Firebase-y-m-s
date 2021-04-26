import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBS-bNqTjVKGUpMYbX0aWCJtxhxjxAxa9Y",
  authDomain: "autentificacion-4394c.firebaseapp.com",
  projectId: "autentificacion-4394c",
  storageBucket: "autentificacion-4394c.appspot.com",
  messagingSenderId: "846893379502",
  appId: "1:846893379502:web:3f15bc277d8217598ea23f",
  measurementId: "G-VCML64C4G8"
}
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();
  const auth = firebase.auth();

  export {db, auth};