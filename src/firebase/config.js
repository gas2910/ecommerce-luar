
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDre-aHcXpL1ngGOFwP6TZ8Z7McorwU8fc",
  authDomain: "ecommerce-luar.firebaseapp.com",
  projectId: "ecommerce-luar",
  storageBucket: "ecommerce-luar.appspot.com",
  messagingSenderId: "377221058598",
  appId: "1:377221058598:web:dde48fd2faace37dc356e7"
};

const app = initializeApp(firebaseConfig);

export default function getFirestoreApp() {
    return app
} 