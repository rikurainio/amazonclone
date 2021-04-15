import firebase from "firebase"

// npm i firebase, npm i firebase-tools
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyC2LvkWOjvLhcCl1-fmEViOHplA9o9f8z0",
    authDomain: "netstore-apr21.firebaseapp.com",
    projectId: "netstore-apr21",
    storageBucket: "netstore-apr21.appspot.com",
    messagingSenderId: "1019429900658",
    appId: "1:1019429900658:web:2c3e80f8b989e5fb2dcdeb",
    measurementId: "G-ZV1DXW3P1P"
  });

  const db = firebase.firestore();

  export { db };