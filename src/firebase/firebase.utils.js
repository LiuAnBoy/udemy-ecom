import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBpEGYRdZh1pB94muf31W6Ep2Fbp66Astc',
  authDomain: 'crwn-db-udemy666.firebaseapp.com',
  databaseURL: 'https://crwn-db-udemy666.firebaseio.com',
  projectId: 'crwn-db-udemy666',
  storageBucket: 'crwn-db-udemy666.appspot.com',
  messagingSenderId: '439666116989',
  appId: '1:439666116989:web:5334c06b7644d2011a6414',
  measurementId: 'G-4PN7MF835N',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;