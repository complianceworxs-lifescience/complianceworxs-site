import React from "react";
import { useNavigate } from "react-router-dom";

export default function Summary() {
  const navigate = useNavigate();

  return (
    <div className="ddr-page">
      <div className="container">
        <header className="ddr-header">
          <h1>Decision Summary</h1>
          <p>Review the deterministic signals before authorizing proof generation.</p>
        </header>

        <div className="assessment-card">
          <div className="summary-section">
            <h3 style={{color: '#003366'}}>Defensibility Verdict: <span style={{color: '#ffcc00'}}>Conditional</span></h3>
            <p>The system has identified gaps that require human-in-the-loop rationale before this decision can be "Authorized."</p>
          </div>

          <hr style={{margin: '20px 0', border: '0', borderTop: '1px solid #e1e8ed'}} />

          <div className="form-group">
            <label>Decision Rationale</label>
            <textarea 
              placeholder="Explain why this decision is defensible despite the identified gaps..."
              style={{width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid #d1d9e0', minHeight: '120px'}}
            ></textarea>
          </div>

          <div className="form-group">
            <label>Accountable Owner</label>
            <input type="text" placeholder="Enter name of the Decision Authority" />
          </div>

          <button 
            className="btn-increase-confidence" 
            onClick={() => navigate("/success")}
            style={{backgroundColor: '#0052cc'}}
          >
            Authorize Proof Generation →
          </button>
          
          <button 
            onClick={() => navigate("/")}
            style={{width: '100%', background: 'none', border: 'none', color: '#667c89', marginTop: '15px', cursor: 'pointer'}}
          >
            ← Back to Assessment
          </button>
        </div>
      </div>
    </div>
  );
}
