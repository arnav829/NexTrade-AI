import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCbRZiU2kOfcQjx4U15uB4SUMpNh-7WpPE",
  authDomain: "tradebot-1-ada2d.firebaseapp.com",
  projectId: "tradebot-1-ada2d",
  storageBucket: "tradebot-1-ada2d.firebasestorage.app",
  messagingSenderId: "1067801311296",
  appId: "1:1067801311296:web:2d73808f04cfa72cdd47a5",
  measurementId: "G-CZ2SHGYNRP"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()