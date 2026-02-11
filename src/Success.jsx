import React from "react";
import { useNavigate } from "react-router-dom";

export default function Success() {
  const navigate = useNavigate();

  return (
    <div className="ddr-page">
      <div className="container">
        <header className="ddr-header">
          <div style={{ fontSize: '64px', marginBottom: '20px' }}>✔</div>
          <h1>Authorization Confirmed</h1>
          <p>Your Decision-Grade Audit Rationale has been secured.</p>
        </header>

        <div className="assessment-card" style={{ textAlign: 'center' }}>
          <div style={{ backgroundColor: '#f0fdf4', padding: '20px', borderRadius: '8px', border: '1px solid #bbf7d0', marginBottom: '30px' }}>
            <h3 style={{ color: '#166534', margin: '0 0 10px 0' }}>Status: Authorized</h3>
            <p style={{ color: '#166534', fontSize: '0.9rem', margin: 0 }}>
              Transaction ID: CW-{Math.floor(Math.random() * 1000000)}<br />
              Revenue logged to Firebase Ledger.
            </p>
          </div>

          <div style={{ textAlign: 'left', marginBottom: '30px' }}>
            <h4 style={{ marginBottom: '10px' }}>Next Steps:</h4>
            <ul style={{ color: '#667c89', lineHeight: '1.6' }}>
              <li>Download your Audit-Ready Rationale PDF (Available in Portal).</li>
              <li>Decision signals have been propagated to downstream systems.</li>
              <li>Owner notification sent for electronic signature completion.</li>
            </ul>
          </div>

          <button 
            className="btn-increase-confidence" 
            onClick={() => navigate("/")}
            style={{ backgroundColor: '#1a2b3c' }}
          >
            Return to Dashboard
          </button>
        </div>
      </div>
    </div>
  );
}
