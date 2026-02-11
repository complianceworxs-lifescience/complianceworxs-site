import React from "react";
import { useNavigate } from "react-router-dom";

export default function Summary() {
  const navigate = useNavigate();

  return (
    <div className="ddr-page">
      <div className="container">
        {/* Header matches DDR.jsx hierarchy */}
        <header className="ddr-header">
          <h1>Decision Summary</h1>
          <p>Review the deterministic signals before authorizing proof generation.</p>
        </header>

        {/* Reusing the assessment-card class for design consistency */}
        <div className="assessment-card">
          <div className="summary-section">
            <h3 style={{ color: '#003366', marginBottom: '10px' }}>
              Defensibility Verdict: <span style={{ color: '#ffcc00' }}>Conditional</span>
            </h3>
            <p className="subtext">
              The DDR engine has identified logic gaps that require a human-in-the-loop rationale before this decision can be "Authorized."
            </p>
          </div>

          <hr style={{ margin: '20px 0', border: '0', borderTop: '1px solid #e1e8ed' }} />

          <div className="form-group">
            <label>Decision Rationale</label>
            <textarea 
              placeholder="Explain why this decision is defensible despite the identified gaps..."
              className="rationale-input"
              style={{
                width: '100%', 
                padding: '12px', 
                borderRadius: '6px', 
                border: '1px solid #d1d9e0', 
                minHeight: '120px',
                fontFamily: 'inherit'
              }}
            ></textarea>
          </div>

          <div className="form-group">
            <label>Accountable Owner (Decision Authority)</label>
            <input 
              type="text" 
              placeholder="Enter full name for audit log" 
              style={{
                width: '100%', 
                padding: '12px', 
                borderRadius: '6px', 
                border: '1px solid #d1d9e0'
              }}
            />
          </div>

          {/* This button connects Step 2 to the Final Step in your BrowserRouter */}
          <button 
            className="btn-increase-confidence" 
            onClick={() => navigate("/success")}
            style={{ backgroundColor: '#0052cc' }}
          >
            Authorize Proof Generation →
          </button>
          
          <button 
            onClick={() => navigate("/assessment")}
            style={{
              width: '100%', 
              background: 'none', 
              border: 'none', 
              color: '#667c89', 
              marginTop: '15px', 
              cursor: 'pointer',
              fontWeight: '500'
            }}
          >
            ← Return to Assessment
          </button>
        </div>
      </div>
    </div>
  );
}
