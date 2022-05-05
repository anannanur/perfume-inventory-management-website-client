// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDe6sfDuPcfQxnBVaXjssAn2uP1GBiStvo",
    authDomain: "perfume-inventory-system.firebaseapp.com",
    projectId: "perfume-inventory-system",
    storageBucket: "perfume-inventory-system.appspot.com",
    messagingSenderId: "293385595737",
    appId: "1:293385595737:web:833188d16b06169b0b3a48"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;