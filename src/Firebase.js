// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { getStorage } from 'firebase/storage';
import {getFirestore} from "@firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBqd-TYpTD2KIWC66gJDsDMEB1pDk1Vn4E",
  authDomain: "taskdeploy9.firebaseapp.com",
  databaseURL: "https://taskdeploy9-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "taskdeploy9",
  storageBucket: "taskdeploy9.appspot.com",
  messagingSenderId: "634807762681",
  appId: "1:634807762681:web:8ae15407455f1639f6ec28",
  measurementId: "G-QHYV9JCV2N"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
export const db = getFirestore(app); 
export const storage = getStorage(app);
export const firestoreDb = app;  // or whatever you want to export
export const imageDb = storage;
export default app;