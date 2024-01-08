// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDPERHLCTdJRy2YfSGxjpVT8wLKPDKNXC8",
  authDomain: "convocrafttejas.firebaseapp.com",
  projectId: "convocrafttejas",
  storageBucket: "convocrafttejas.appspot.com",
  messagingSenderId: "984211122734",
  appId: "1:984211122734:web:6359f755d3c09d6d670dbf",
  measurementId: "G-X0BC9P9Q0J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);