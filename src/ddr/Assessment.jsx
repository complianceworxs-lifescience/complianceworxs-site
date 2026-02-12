import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Overview from "./Overview";
import Context from "./Context";
import Risk from "./Risk";
import Outcome from "./Outcome";
import Evidence from "./Evidence";
import Traceability from "./Traceability";

export default function Assessment({ ddrRecord, currentRole }) {
  if (!ddrRecord) return <div>Loading assessment…</div>;

  const { authorization_outcome } = ddrRecord;

  return (
    <Routes>
      <Route path="overview" element={<Overview ddrRecord={ddrRecord} />} />
      <Route path="context" element={<Context ddrRecord={ddrRecord} />} />
      <Route path="risk" element={<Risk ddrRecord={ddrRecord} />} />
      <Route path="outcome" element={<Outcome ddrRecord={ddrRecord} />} />
      <Route path="evidence" element={<Evidence ddrRecord={ddrRecord} currentRole={currentRole} />} />
      <Route
        path="traceability"
        element={
          authorization_outcome.authorization_state === "blocked" ||
          currentRole === "auditor" ||
          currentRole === "compliance"
            ? <Traceability ddrRecord={ddrRecord} currentRole={currentRole} />
            : <Navigate to="../outcome" replace />
        }
      />

      {/* Default entry */}
      <Route path="*" element={<Navigate to="overview" replace />} />
    </Routes>
  );
}
