import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// With Vite, public env vars require VITE_ prefix and are accessed via import.meta.env
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

// Validate that all required config values are present
const requiredConfigKeys = [
  "apiKey",
  "authDomain",
  "projectId",
  "storageBucket",
  "messagingSenderId",
  "appId",
];

const missingKeys = requiredConfigKeys.filter((key) => !firebaseConfig[key]);
if (missingKeys.length > 0) {
  console.error("Missing Firebase configuration keys:", missingKeys);
  console.error(
    "Make sure your .env file contains all required VITE_FIREBASE_* variables"
  );
}

import { getApps } from "firebase/app";
let app, auth, db;
let analytics = null;

try {
  if (!getApps().length) {
    app = initializeApp(firebaseConfig);
  } else {
    app = getApps()[0];
  }
  auth = getAuth(app);
  db = getFirestore(app);
} catch (error) {
  console.error("Firebase initialization failed:", error);
  console.error(
    "This usually means environment variables are missing or invalid"
  );
  // Create mock objects to prevent app crashes
  auth = { currentUser: null };
  db = {};
}

// Initialize Analytics conditionally - DISABLED DUE TO API KEY ISSUES
// Re-enable when API key restrictions are properly configured
/*
try {
  if (typeof window !== "undefined" && app) {
    isSupported().then((supported) => {
      if (supported) {
        analytics = getAnalytics(app);
      }
    });
  }
} catch (error) {
  console.warn("Analytics not supported:", error);
}
*/

export { auth, db, analytics };
export default app;
