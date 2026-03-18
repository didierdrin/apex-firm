import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAVT4h6lCxEBzbIute3cuZyX4dc0Dxm3F4",
  authDomain: "apex-fund.firebaseapp.com",
  projectId: "apex-fund",
  storageBucket: "apex-fund.firebasestorage.app",
  messagingSenderId: "553844680664",
  appId: "1:553844680664:web:4183c9f12d8e25221274ad",
  measurementId: "G-JPEB574VY4"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
