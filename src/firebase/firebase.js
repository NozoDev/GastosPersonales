// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCxUWldUyxxiV2yXZPBrh_qobQCMxPbfNc",
  authDomain: "aplicativo-gastos.firebaseapp.com",
  projectId: "Raplicativo-gastos",
  storageBucket: "aplicativo-gastos.appspot.com",
  messagingSenderId: "319430943898",
  appId: "1:319430943898:web:53e421f229cd11e0716b23",
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
const db = getFirestore(appFirebase);
const auth = getAuth(appFirebase);
export { appFirebase, db, auth };
