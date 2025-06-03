import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyANdCoJuTQ6GGIGL_emc0kBtx2JNC6h_mw",
  authDomain: "sg-tensiles.firebaseapp.com",
  projectId: "sg-tensiles",
  storageBucket: "sg-tensiles.appspot.com",
  messagingSenderId: "374161068767",
  appId: "1:374161068767:web:37d306c6b7321ebdc10f6a",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);