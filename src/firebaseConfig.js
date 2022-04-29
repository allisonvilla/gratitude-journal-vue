import { initializeApp } from 'firebase/app';

// Firebase configuration
const firebaseConfig = {
	apiKey: process.env.VITE_FIREBASE,
	authDomain: 'gratitude-journal-fcdd0.firebaseapp.com',
	projectId: 'gratitude-journal-fcdd0',
	storageBucket: 'gratitude-journal-fcdd0.appspot.com',
	messagingSenderId: '834152423685',
	appId: '1:834152423685:web:f1acdbc2da901042ea576c',
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

export default firebase;