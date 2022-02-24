import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp = firebase.initializeApp({
  apiKey: 'AIzaSyDx8dkGt9KBsfRQpXrod9y_MZHNlbE5Q8I',
  authDomain: 'linkedin-clone-b9662.firebaseapp.com',
  projectId: 'linkedin-clone-b9662',
  storageBucket: 'linkedin-clone-b9662.appspot.com',
  messagingSenderId: '891586945445',
  appId: '1:891586945445:web:e850b30caa6c9096e8884c',
  measurementId: 'G-JL4NSQ2XRF',
});

//connects to database
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
