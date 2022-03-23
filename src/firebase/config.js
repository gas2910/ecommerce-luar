// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDre-aHcXpL1ngGOFwP6TZ8Z7McorwU8fc",
  authDomain: "ecommerce-luar.firebaseapp.com",
  projectId: "ecommerce-luar",
  storageBucket: "ecommerce-luar.appspot.com",
  messagingSenderId: "377221058598",
  appId: "1:377221058598:web:dde48fd2faace37dc356e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirestore() {
    return app
} 