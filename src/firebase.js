// import firebase from 'firebase/app';
// import { getStorage } from "firebase/storage";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";
// // import { getFirestore,getAuth,getStorage } from "./firebase";
// const firebaseConfig = {
//   apiKey: "AIzaSyA7a5DifsvjpDm_bjzx5bcxIG18je4Xtmc",
//   authDomain: "luvsi-dating-app.firebaseapp.com",
//   projectId: "luvsi-dating-app",
//   storageBucket: "luvsi-dating-app.appspot.com",
//   messagingSenderId: "423847662247",
//   appId: "1:423847662247:web:ea26d023ef7e84d6a24182",
//   measurementId: "G-LNE1Y4T7GL",
// };
// const firebaseApp = firebase.initializApp(firebaseConfig);
//   const auth = getAuth();
//   const storage = getStorage();
//   const database = getFirestore();
//  export {auth,storage,database}







// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyA7a5DifsvjpDm_bjzx5bcxIG18je4Xtmc",
  authDomain: "luvsi-dating-app.firebaseapp.com",
  projectId: "luvsi-dating-app",
  storageBucket: "luvsi-dating-app.appspot.com",
  messagingSenderId: "423847662247",
  appId: "1:423847662247:web:ea26d023ef7e84d6a24182",
  measurementId: "G-LNE1Y4T7GL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const database = getFirestore(app)




