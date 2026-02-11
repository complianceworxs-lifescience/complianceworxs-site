import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc, collection, addDoc, serverTimestamp } from "firebase/firestore";

// TODO: Replace the placeholder values below with your actual config from the Firebase Console:
// Project Settings -> General -> Your Apps -> SDK Setup and Configuration
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_PROJECT_ID.appspot.com",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore (The Ledger)
export const db = getFirestore(app);

/**
 * Log Revenue to the Firebase Ledger
 * @param {number} amount - The transaction amount (e.g., 199)
 * @returns {string} - The generated Transaction ID
 */
export const logRevenue = async (amount) => {
  try {
    // We create a reference to the 'ledger' collection
    const ledgerRef = collection(db, "ledger");
    
    // We add a new document with the amount and a server-side timestamp
    const docRef = await addDoc(ledgerRef, {
      amount: amount,
      currency: "USD",
      status: "Authorized",
      source: "DDR Assessment",
      createdAt: serverTimestamp()
    });

    console.log("Revenue logged with ID: ", docRef.id);
    return `CW-${docRef.id.slice(0, 6).toUpperCase()}`; // Returns a clean ID for the UI
  } catch (e) {
    console.error("Error adding document: ", e);
    throw e;
  }
};
