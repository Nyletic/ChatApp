import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCHNYSLOZ0v1yAidGUi7bp5TYxCzjMWvOk",
  authDomain: "fyrechat-f8355.firebaseapp.com",
  projectId: "fyrechat-f8355",
  storageBucket: "fyrechat-f8355.appspot.com",
  messagingSenderId: "873355012280",
  appId: "1:873355012280:web:1714bf95f16e29d3fcec4d",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
