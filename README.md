# Gratitude Journal

### [Live Link](https://gratitude-av.netlify.app/ "Live link")

## About
This is a simple community-driven gratitude journal I built to help teach myself [Vue](https://vuejs.org/) and [Tailwind CSS](https://tailwindcss.com/). 

Anonymously post something you feel grateful for today and look at other entries submitted by fellow grateful users.

## Dependencies
- Vue 3
- Vue Router
- Firebase
- Vite
- Tailwind CSS

## Run this project locally
1. Clone this repository
2. In your terminal, `cd` into the directory where you cloned this repository
3. Install dependencies - in your terminal, run `npm install`
4. Create a [Firebase app](https://firebase.google.com/)
5. In your Firebase app, create a Realtime Database
6. Within the `/src` folder of the project directory, create `firebaseConfig.js`

```js
// firebaseConfig.js

import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    // your Firebase config details here
};

// Initialize Firebase
const firebase = initializeApp(firebaseConfig);

const database = getDatabase(firebase); 

export default database; 
```
7. Within the root folder of the project directory, create a `.env` file
8. Within the `.env` file, create an environment variable called `VITE_FIREBASE` and store the API key from your Firebase config in it 
```env
VITE_FIREBASE=1234 # your actual Firebase API key here
```
9. Within `firebaseConfig.js`, replace your API key with `import.meta.env.VITE_FIREBASE` 
```js
// firebaseConfig.js

const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE,

    // The rest of your config here
};
```
10. Within your terminal, run `npm run dev` to run the app on your local server