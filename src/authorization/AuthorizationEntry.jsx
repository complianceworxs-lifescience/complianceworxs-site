import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AuthorizationEntry() {
  const navigate = useNavigate();
  return (
    <div style={{ padding: "100px", textAlign: "center", backgroundColor: "#f8fafc", minHeight: "60vh" }}>
      <h2 style={{ fontSize: "2.5rem", color: "#0a1a36" }}>Decision Defensibility Review</h2>
      <p style={{ fontSize: "1.2rem", margin: "20px 0" }}>Initializing secure audit ledger connection...</p>
      <button 
        onClick={() => navigate('/ddr/start')}
        style={{ padding: "15px 40px", backgroundColor: "#0a1a36", color: "#fff", border: "none", fontWeight: "bold", cursor: "pointer" }}
      >
        Begin Review
      </button>
    </div>
  );
}
