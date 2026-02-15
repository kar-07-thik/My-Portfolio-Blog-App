import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAaSLtGXtJJH2t-M0qn_U2eNVm13a00FZM",
  authDomain: "blog-app-profolio.firebaseapp.com",
  projectId: "blog-app-profolio",
  storageBucket: "blog-app-profolio.firebasestorage.app",
  messagingSenderId: "961984956335",
  appId: "1:961984956335:web:9f19c1c8295917c45fd15a",
  measurementId: "G-664ETFSFV9"
};


const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)