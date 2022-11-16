// Import the functions you need from the SDKs you need
import * as firebase from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBBHGSLgiOS7fK0ax1TZzvJgTGqSNZPsxo',
  authDomain: 'improving-login.firebaseapp.com',
  projectId: 'improving-login',
  storageBucket: 'improving-login.appspot.com',
  messagingSenderId: '1029288888598',
  appId: '1:1029288888598:web:2046661fd958c5443ba837',
};

// Initialize Firebase
let app;
app =
  firebase.apps.length === 0
    ? firebase.initializeApp(firebaseConfig)
    : firebase.app();
const auth = firebase.auth();

export {auth};
