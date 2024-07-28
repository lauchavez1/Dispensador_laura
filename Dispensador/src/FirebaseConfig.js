// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
 const FirebaseConfig = {
  apiKey: "AIzaSyAO4X9FU8o-eQHLelFyKVfXfr-tHZ8FNek",
  authDomain: "domo-ut-a50a6.firebaseapp.com",
  projectId: "domo-ut-a50a6",
  storageBucket: "domo-ut-a50a6.appspot.com",
  messagingSenderId: "602138230684",
  appId: "1:602138230684:web:d80eb70df6936cb28cd259"
};

// Initialize Firebase
const app = initializeApp(FirebaseConfig);
const bd = getFirestore(app);

export default {
  app,bd
}