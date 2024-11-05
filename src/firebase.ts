// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRjtNiETmgWkmefqayv3wWwvKO7vCb7gM",
    authDomain: "householdtypescript-65054.firebaseapp.com",
    projectId: "householdtypescript-65054",
    storageBucket: "householdtypescript-65054.firebasestorage.app",
    messagingSenderId: "373220388130",
    appId: "1:373220388130:web:ef775afb003c16e3da497b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };