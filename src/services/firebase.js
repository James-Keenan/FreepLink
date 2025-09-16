import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";

// With Vite, public env vars require VITE_ prefix and are accessed via import.meta.env
const env = import.meta?.env || {};

const requiredEnvVars = [
  "VITE_FIREBASE_API_KEY",
  "VITE_FIREBASE_AUTH_DOMAIN",
  "VITE_FIREBASE_PROJECT_ID",
  "VITE_FIREBASE_STORAGE_BUCKET",
  "VITE_FIREBASE_MESSAGING_SENDER_ID",
  "VITE_FIREBASE_APP_ID",
  "VITE_FIREBASE_MEASUREMENT_ID",
];

const missingVars = requiredEnvVars.filter((varName) => !env[varName]);

if (missingVars.length > 0) {
  console.warn(
    "Firebase environment variables missing (running in degraded mode):",
    missingVars
  );
}

const firebaseConfig = {
  apiKey: env.VITE_FIREBASE_API_KEY || "missing-api-key",
  authDomain: env.VITE_FIREBASE_AUTH_DOMAIN || "missing-auth-domain",
  projectId: env.VITE_FIREBASE_PROJECT_ID || "missing-project-id",
  storageBucket: env.VITE_FIREBASE_STORAGE_BUCKET || "missing-storage-bucket",
  messagingSenderId:
    env.VITE_FIREBASE_MESSAGING_SENDER_ID || "missing-sender-id",
  appId: env.VITE_FIREBASE_APP_ID || "missing-app-id",
  measurementId: env.VITE_FIREBASE_MEASUREMENT_ID || undefined,
};

let app, auth, db;
let analytics = null;

try {
  app = initializeApp(firebaseConfig);
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

// Initialize Analytics conditionally
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

export { auth, db, analytics };
export default app;
