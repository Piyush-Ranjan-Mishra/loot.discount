// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore} from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyARGB-WIua5uK2o1yfyC32x1P8B-CQihz4",
  authDomain: "loot-77aa3.firebaseapp.com",
  projectId: "loot-77aa3",
  storageBucket: "loot-77aa3.appspot.com",
  messagingSenderId: "744349466313",
  appId: "1:744349466313:web:3986ceb4788f86a696d718",
  measurementId: "G-66HCYY1RS6",
};

// Initialize Firebase

firebase.initializedApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;

