
import firebase from 'firebase/compat/app';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// Import the functions you need from the SDKs you need
// eslint-disable-next-line
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLx7E41fuORu3cTEV7XHCMQ78iuR5_DEs",
  authDomain: "scouts-2021.firebaseapp.com",
  projectId: "scouts-2021",
  storageBucket: "scouts-2021.appspot.com",
  messagingSenderId: "570168251907",
  appId: "1:570168251907:web:2b2392b0af51c234d4a036"
};

// Initialize Firebase
// eslint-disable-next-line
// const app = initializeApp(firebaseConfig);

firebase.initializeApp(firebaseConfig);
firebase.firestore().settings({ experimentalForceLongPolling: true, merge: true  });
// eslint-disable-next-line
var db = firebase.firestore();

const projectStorage = firebase.storage();
const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectStorage, projectFirestore, timestamp};
