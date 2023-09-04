// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDa15OzYjWyS12AoM24X9dAAUCXfaxU-ms",
  authDomain: "realtor-clone-33f48.firebaseapp.com",
  projectId: "realtor-clone-33f48",
  storageBucket: "realtor-clone-33f48.appspot.com",
  messagingSenderId: "231260535108",
  appId: "1:231260535108:web:6c24dac273b56cc1633f11",
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const db = getFirestore()
