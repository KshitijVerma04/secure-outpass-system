// Import Firebase modules
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDlLBIM5PUP9ZbbpwumTM_70aG7iCuLDpM",
  authDomain: "outpass-management-syste-d4cf2.firebaseapp.com",
  projectId: "outpass-management-syste-d4cf2",
  storageBucket: "outpass-management-syste-d4cf2.firebasestorage.app",
  messagingSenderId: "1034911898101",
  appId: "1:1034911898101:web:e3c74885c2cf6575e1a8bc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export services
export const auth = getAuth(app);
export const db = getFirestore(app);
