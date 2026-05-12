import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

// Apnar notun shoukhin-f7376 project-er API keys
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyCeXHPpasGX36GQhX0eUAg6xbEDzfgw0NQ",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "shoukhin-f7376.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "shoukhin-f7376",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "shoukhin-f7376.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1032548288414",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1032548288414:web:95f0a81fa10e8e5295b88f"
};

const app = initializeApp(firebaseConfig);

// Database initialization thik kora hoyeche (Default database bebohar korbe)
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;
