import firebase from 'firebase';

firebase.initializeApp({
  apiKey: 'AIzaSyDbotNLkc_l7ZD7q0B-FTnivrxujNfCnd0',
  authDomain: 'floorfiller-39c12.firebaseapp.com',
  databaseURL: 'https://floorfiller-39c12.firebaseio.com',
  storageBucket: 'floorfiller-39c12.appspot.com',
  messagingSenderId: '738635969486'
});

export const ref = firebase.database().ref();
