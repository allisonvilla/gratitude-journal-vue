import { initializeApp } from 'firebase/app';
import { getDatabase } from 'firebase/database';

// Firebase configuration
const firebaseConfig = {
	apiKey: import.meta.env.VITE_FIREBASE,
	authDomain: 'gratitude-journal-fcdd0.firebaseapp.com',
	projectId: 'gratitude-journal-fcdd0',
	storageBucket: 'gratitude-journal-fcdd0.appspot.com',
	messagingSenderId: '834152423685',
	appId: '1:834152423685:web:f1acdbc2da901042ea576c',
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const database = getDatabase(firebase); 

export default database; 