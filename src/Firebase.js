// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCU6SITtf8deBWTGoJblBWRJsQyNMIe6lE",
  authDomain: "jointly-chat.firebaseapp.com",
  projectId: "jointly-chat",
  storageBucket: "jointly-chat.appspot.com",
  messagingSenderId: "437875596443",
  appId: "1:437875596443:web:032b1ade87d0715b133a3e",
  measurementId: "G-61B499RDFH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app); 