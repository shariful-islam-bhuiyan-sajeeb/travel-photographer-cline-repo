// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBt5oVZBXQeF0exBvc8sjz0ydpyq6oLTjk",
    authDomain: "tours-and-travels-93d9e.firebaseapp.com",
    projectId: "tours-and-travels-93d9e",
    storageBucket: "tours-and-travels-93d9e.appspot.com",
    messagingSenderId: "123961314009",
    appId: "1:123961314009:web:a3b0b087cf6ebf7eca8cc8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;