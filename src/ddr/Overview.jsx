import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

export default function DDROverview() {
  const navigate = useNavigate();
  // We keep your "Altitude" state logic
  const [role, setRole] = useState('executive'); 

  return (
    <div className="ddr-container">
      {/* PERSPECTIVE TOGGLE - Modernized styling */}
      <div style={{ textAlign: 'center', marginBottom: '30px' }}>
        <p className="badge-sub" style={{ marginBottom: '10px' }}>Tailor your DDR experience:</p>
        <div style={{ display: 'inline-flex', background: 'rgba(255,255,255,0.1)', padding: '5px', borderRadius: '8px' }}>
          <button 
            onClick={() => setRole('operational')}
            className={role === 'operational' ? 'button-primary' : 'button-secondary'}
            style={{ fontSize: '0.8rem', padding: '8px 15px' }}
          >
            Operational
          </button>
          <button 
            onClick={() => setRole('executive')}
            className={role === 'executive' ? 'button-primary' : 'button-secondary'}
            style={{ fontSize: '0.8rem', padding: '8px 15px' }}
          >
            Executive
          </button>
        </div>
      </div>

      <div className="card">
        <h1>{role === 'executive' ? 'Decision Authority & Risk Oversight' : 'Deterministic Decision Workflow'}</h1>
        <p className="lead">
          {role === 'executive' 
            ? 'Identify regulatory exposure and authorize proof generation at scale. Focus on market risk and decision ownership.'
            : 'Execute step-by-step artifact validation. Focus on data integrity and GxP-compliant evidence sets.'}
        </p>

        <div className="grid-two" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '20px' }}>
          <div className="inner-card" style={{ padding: '15px', border: '1px solid rgba(255,184,0,0.3)', borderRadius: '8px' }}>
            <h4 style={{ color: '#FFB800' }}>Fail-Closed</h4>
            <p style={{ fontSize: '0.9rem' }}>If governance is missing, proof cannot proceed.</p>
          </div>
          <div className="inner-card" style={{ padding: '15px', border: '1px solid rgba(255,184,0,0.3)', borderRadius: '8px' }}>
            <h4 style={{ color: '#FFB800' }}>Gate Logic</h4>
            <p style={{ fontSize: '0.9rem' }}>Authorize, Conditional, or Blocked outcomes.</p>
          </div>
        </div>

        <div className="cta-row" style={{ marginTop: '40px', textAlign: 'center' }}>
          <div style={{ color: '#10b981', fontSize: '0.8rem', marginBottom: '15px' }}>
            💾 Progress auto-saves to your Google Cloud secure vault.
          </div>
          <button onClick={() => navigate('/ddr/start')} className="button-primary">
            {role === 'executive' ? 'Enter Risk Assessment →' : 'Begin Decision Context →'}
          </button>
        </div>
      </div>
    </div>
  );
}
