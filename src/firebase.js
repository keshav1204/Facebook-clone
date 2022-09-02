// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase, { firestore } from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyB8YobgufVpTlHL_KOTDO5rFYgoZNRBrM4",
    authDomain: "facebook-clone-81008.firebaseapp.com",
    databaseURL: "https://facebook-clone-81008.firebaseio.com",
    projectId: "facebook-clone-81008",
    storageBucket: "facebook-clone-81008.appspot.com",
    messagingSenderId: "494678999293",
    appId: "1:494678999293:web:fbac8eba8caf76762ffe94",
    measurementId: "G-CKSWQMJRL4"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;