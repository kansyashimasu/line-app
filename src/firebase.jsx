import firebase from "firebase/compat/app";
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyBCtzdyotD6Zj9MWgPv60cKzKclWtG07UU",
    authDomain: "fir-react-login-4cd2a.firebaseapp.com",
    projectId: "fir-react-login-4cd2a",
    storageBucket: "fir-react-login-4cd2a.appspot.com",
    messagingSenderId: "486470480771",
    appId: "1:486470480771:web:1708e01336f09208dffcb6"
});

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };