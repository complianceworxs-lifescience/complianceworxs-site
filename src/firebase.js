import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

// Configuration for your compliance-dashboard-79b41 project
const firebaseConfig = {
  apiKey: "AIzaSyC3Dxdd7twwLk0ix2MPZu9-yyNC3z5yxzQ",
  authDomain: "compliance-dashboard-79b41.firebaseapp.com",
  projectId: "compliance-dashboard-79b41",
  storageBucket: "compliance-dashboard-79b41.appspot.com",
  messagingSenderId: "270255439527",
  appId: "G-PX3GB3K1TC", // Note: If errors occur, replace this with the long appId from Firebase Settings
  measurementId: "G-PX3GB3K1TC" // This is where the G- ID actually belongs
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

/**
 * Logs the full DDR assessment details and revenue in one go
 * Hits both 'assessment_runs' and 'event_ledger' collections
 */
export const logAssessmentAndRevenue = async (data) => {
  try {
    // 1. Log the session metadata to 'assessment_runs'
    const assessmentRef = collection(db, "assessment_runs");
    await addDoc(assessmentRef, {
      system: data.system || "Unknown System",
      lifecycleAreas: data.lifecycle || [],
      state: data.complianceState || "incomplete",
      timestamp: serverTimestamp()
    });

    // 2. Log the $199 revenue to 'event_ledger'
    const ledgerRef = collection(db, "event_ledger");
    const docRef = await addDoc(ledgerRef, {
      amount: 199,
      currency: "USD",
      status: "APPROVED",
      email: "complianceworxs@gmail.com",
      type: "DDR_FEE",
      createdAt: serverTimestamp()
    });

    // Return a formatted confirmation ID for the Success page
    return `CW-${docRef.id.slice(0, 6).toUpperCase()}`;
  } catch (e) {
    console.error("Firebase Logic Error: ", e);
    throw e;
  }
};
