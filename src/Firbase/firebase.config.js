// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC7Vq7hAwsbjAPONcFOy6uvZLS6-oPJIiE",
  authDomain: "car-mechanics-a6f77.firebaseapp.com",
  projectId: "car-mechanics-a6f77",
  storageBucket: "car-mechanics-a6f77.appspot.com",
  messagingSenderId: "1042616042354",
  appId: "1:1042616042354:web:987db11bd5c7e31597d3eb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app