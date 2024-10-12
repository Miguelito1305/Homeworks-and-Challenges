// src/firebase.js
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCng7ACGLvYSObCLJPv9OwCIpcZQ8V3kH8",
    authDomain: "autenticacion2-150d4.firebaseapp.com",
    projectId: "autenticacion2-150d4",
    storageBucket: "autenticacion2-150d4.appspot.com",
    messagingSenderId: "384297946439",
    appId: "1:384297946439:web:5680f4e8a337580a83d062",
    measurementId: "G-0X6SFR4X93"
};

// Inicializa Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
