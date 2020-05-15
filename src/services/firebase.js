// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";
// Add the Firebase services that you want to use
import "firebase/firestore";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyDaDB2KAvmTReM02MqiQiY0XOG0WNpAYVI",
  authDomain: "novel-reader-250a9.firebaseapp.com",
  databaseURL: "https://novel-reader-250a9.firebaseio.com",
  projectId: "novel-reader-250a9",
  storageBucket: "novel-reader-250a9.appspot.com",
  messagingSenderId: "985891827070",
  appId: "1:985891827070:web:b0af58909bc390be9d172f",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

export default db.collection("novels");
