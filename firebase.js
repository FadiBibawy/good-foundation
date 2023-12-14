// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAFmCwPrFLEA0wsETwXTtjF1fqLG4stAo4',
  authDomain: 'good-foundation-75793.firebaseapp.com',
  projectId: 'good-foundation-75793',
  storageBucket: 'good-foundation-75793.appspot.com',
  messagingSenderId: '171969313849',
  appId: '1:171969313849:web:071fbb6f3e938fe0bea1e8',
  measurementId: 'G-53F7JK0T0L',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
