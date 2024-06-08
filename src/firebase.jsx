// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth,GoogleAuthProvider} from 'firebase/auth'
const firebaseConfig = {
  apiKey: "AIzaSyD99OD2lAgCEk7CIpSCd9QlVhaJipMhVSs",
  authDomain: "fuse-470fd.firebaseapp.com",
  projectId: "fuse-470fd",
  storageBucket: "fuse-470fd.appspot.com",
  messagingSenderId: "42255224260",
  appId: "1:42255224260:web:83defc095c78d64d762891",
  measurementId: "G-B8H11EEKK1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
    export const auth = getAuth(app);

