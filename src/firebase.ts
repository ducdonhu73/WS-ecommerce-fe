// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCu2wfjFfSlg8gYvkcID4mlHSykby7Ebgk",
  authDomain: "btl-ws-n7.firebaseapp.com",
  projectId: "btl-ws-n7",
  storageBucket: "btl-ws-n7.appspot.com",
  messagingSenderId: "728201611938",
  appId: "1:728201611938:web:a6ae7ba9b8d6df796665fb",
  measurementId: "G-0EBTM06X3C",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
