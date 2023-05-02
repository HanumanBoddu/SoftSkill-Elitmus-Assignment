// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "../firebaseConfig";
firebase.initializeApp(firebaseConfig);
const firebaseConfig = {
  apiKey: "AIzaSyCtNpOj1Z_668IPZtsTKMiAe-uN9WhmOKQ",
  authDomain: "elitmus-assignment-ed83f.firebaseapp.com",
  databaseURL: "https://elitmus-assignment-ed83f-default-rtdb.firebaseio.com",
  projectId: "elitmus-assignment-ed83f",
  storageBucket: "elitmus-assignment-ed83f.appspot.com",
  messagingSenderId: "480781317416",
  appId: "1:480781317416:web:8a0d789ff5c6119c478c1d"
};

firebase.initializeApp(firebaseConfig);
// Get elements
var email = document.getElementById('email');
var passwoSrd = document.getElementById('password');
var confirmPassword = document.getElementById('confirm-password');
var signUpBtn = document.getElementById('signup');

// Add sign up event
if (signUpBtn) {
  signUpBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const userEmail = email.value;
    const userPassword = password.value;
    const userConfirmPassword = confirmPassword.value;

    if (userPassword !== userConfirmPassword) {
      alert('Passwords do not match');
      return;
    }

    // Sign up user with Firebase authentication
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
      .then((userCredential) => {
        // User is signed up
        console.log('User signed up:', userCredential);
        window.location.replace('level1.html');
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error('Sign up error:', errorCode, errorMessage);
        alert(errorMessage);
      });
  });
}
