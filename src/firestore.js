const firebase = require("firebase");
require("firebase/firestore");

firebase.initializeApp({
  apiKey: "AIzaSyB__CwTvsoGUGIJsRJoXKYhIDMfriAS9ps",
  authDomain: "family-library-84c4f.firebaseapp.com",
  databaseURL: "https://family-library-84c4f.firebaseio.com",
  projectId: "family-library-84c4f",
  storageBucket: "family-library-84c4f.appspot.com",
  messagingSenderId: "704222079422",
  appId: "1:704222079422:web:ad55b54c3c2e74a5"
});

exports.db = firebase.firestore();
