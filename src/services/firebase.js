import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';

const firebaseConfig = {
    apiKey: "AIzaSyAcKQSoWL9mGfVUm-kQBXNln2jk1nmmnxI",
    authDomain: "freeplink-83c62.firebaseapp.com",
    projectId: "freeplink-83c62",
    storageBucket: "freeplink-83c62.firebasestorage.app",
    messagingSenderId: "117595277379",
    appId: "1:117595277379:web:32943ecf3562dab3ac6cf6",
    measurementId: "G-9BHBPD4BTT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

// Initialize Analytics conditionally
let analytics = null;
try {
  if (typeof window !== 'undefined') {
    isSupported().then((supported) => {
      if (supported) {
        analytics = getAnalytics(app);
      }
    });
  }
} catch (error) {
  console.warn('Analytics not supported:', error);
}

export { analytics };
export default app;
