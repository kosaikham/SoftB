import * as firebase from 'firebase';

// Optionally import the services that you want to use
import 'firebase/auth';
import 'firebase/database';
//import "firebase/firestore";
//import "firebase/functions";
//import "firebase/storage";

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyDhAgfJlqxHOW7Y_iN8aTYRVeptrgwPJcw',
  authDomain: 'softb-24fe5.firebaseapp.com',
  databaseURL: 'https://softb-24fe5.firebaseio.com',
  projectId: 'softb-24fe5',
  storageBucket: 'softb-24fe5.appspot.com',
};

firebase.initializeApp(firebaseConfig);

export default firebase;
