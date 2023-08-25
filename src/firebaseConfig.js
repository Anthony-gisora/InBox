import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyAWoBI0dh5FxP_RoAeOeXI2q7hkhBE6mDw",
  authDomain: "inbox-76043.firebaseapp.com",
  projectId: "inbox-76043",
  storageBucket: "inbox-76043.appspot.com",
  messagingSenderId: "934170370109",
  appId: "1:934170370109:web:0cc15a71b7208cc5b40a54",
  measurementId: "G-327F0PJDQV"
};

// Initialize Firebase
const app = initializeApp( firebaseConfig );
export const auth = getAuth(app)