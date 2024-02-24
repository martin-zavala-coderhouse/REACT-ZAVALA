import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import "./estilo.css";



// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZOs5kYichy8EKQFRxb2BUJVvPV7uFQDM",
  authDomain: "react005-005.firebaseapp.com",
  projectId: "react005-005",
  storageBucket: "react005-005.appspot.com",
  messagingSenderId: "1057157473034",
  appId: "1:1057157473034:web:2e338019eabdcc2ab8d0f3"
};

// Initialize Firebase
initializeApp(firebaseConfig);







ReactDOM.createRoot(document.getElementById('root')).render(<App />)
