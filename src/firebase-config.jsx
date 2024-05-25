// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyC5IAgtvsYu6-X83ty_c4G7OeG3dFdoU-c",
    authDomain: "leaderboard-62506.firebaseapp.com",
    projectId: "leaderboard-62506",
    storageBucket: "leaderboard-62506.appspot.com",
    messagingSenderId: "73860111923",
    appId: "1:73860111923:web:5ce70561c5b45325df0d46"
  };

export const app = initializeApp(firebaseConfig);
export const database = getFirestore(app)