// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgLQbG8rij13pGW7pv8wB5VCoD9GVOx6w",
  authDomain: "medical-learning-242e9.firebaseapp.com",
  projectId: "medical-learning-242e9",
  storageBucket: "medical-learning-242e9.appspot.com",
  messagingSenderId: "404442606711",
  appId: "1:404442606711:web:f8da70481dcbdff46c6a72",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
export const auth = getAuth(app);
