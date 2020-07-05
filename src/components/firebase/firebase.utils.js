import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBmFPqsryfu0ZzcALOAmWaVZiVoaD6i8uY",
    authDomain: "crwn-db-b2826.firebaseapp.com",
    databaseURL: "https://crwn-db-b2826.firebaseio.com",
    projectId: "crwn-db-b2826",
    storageBucket: "crwn-db-b2826.appspot.com",
    messagingSenderId: "541471957175",
    appId: "1:541471957175:web:5051d9aed924933212ed32",
    measurementId: "G-JS1PPEC85X"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;