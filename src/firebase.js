import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC3Dxdd7twwLk0ix2MPZu9-yyNC3z5yxzQ",
  authDomain: "compliance-dashboard-79b41.firebaseapp.com",
  projectId: "compliance-dashboard-79b41",
  storageBucket: "compliance-dashboard-79b41.appspot.com",
  messagingSenderId: "270255439527",
  // IMPORTANT: Go to Firebase Settings and find the long App ID (1:270255439527:web:...)
  appId: "REPLACE_WITH_YOUR_ACTUAL_APP_ID", 
  measurementId: "G-PX3GB3K1TC"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export const logAssessmentAndRevenue = async (data) => {
  try {
    const assessmentRef = collection(db, "assessment_runs");
    await addDoc(assessmentRef, {
      system: data.system || "Unknown System",
      lifecycleAreas: data.lifecycle || [],
      state: data.complianceState || "incomplete",
      timestamp: serverTimestamp()
    });

    const ledgerRef = collection(db, "event_ledger");
    const docRef = await addDoc(ledgerRef, {
      amount: 199,
      status: "APPROVED",
      email: "complianceworxs@gmail.com",
      type: "DDR_FEE",
      createdAt: serverTimestamp()
    });

    return `CW-${docRef.id.slice(0, 6).toUpperCase()}`;
  } catch (e) {
    console.error("Firebase Logic Error: ", e);
    throw e;
  }
};
