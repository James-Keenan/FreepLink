import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyAcKQSoWL9mGfVUm-kQBXNln2jk1nmmnxI",
    authDomain: "freeplink-83c62.firebaseapp.com",
    projectId: "freeplink-83c62",
    storageBucket: "freeplink-83c62.firebasestorage.app",
    messagingSenderId: "117595277379",
    appId: "1:117595277379:web:b788af95364a0ec2ac6cf6",
    measurementId: "G-2S5B3J53CM"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
export default app;
