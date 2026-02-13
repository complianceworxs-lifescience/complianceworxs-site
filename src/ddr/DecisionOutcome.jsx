import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DecisionOutcome() {
  const navigate = useNavigate();
  const [decision, setDecision] = useState("");
  const [justification, setJustification] = useState("");
  const [approver, setApprover] = useState("");

  const handleContinue = () => {
    if (!decision || !justification || !approver) {
      alert("Please complete all decision outcome fields.");
      return;
    }
    navigate("/ddr/traceability");
  };

  return (
    <div className="ddr-page">
      <div className="container">
        <div className="assessment-card">
          <h2>Step 5: Decision Outcome</h2>
          <p className="subtext">Document the defendable decision and its justification.</p>

          <div className="panel panel-authorized" style={{ 
            marginBottom: '24px', 
            backgroundColor: 'rgba(255, 184, 0, 0.05)', 
            padding: '20px', 
            borderRadius: '8px',
            borderLeft: '4px solid #FFB800'
          }}>
            <h3 className="panel-title" style={{ color: '#FFB800' }}>Decision Authority</h3>
            <p className="panel-body">
              This is the critical moment: your decision must be defendable under regulatory scrutiny. 
              The DDR engine will verify logic consistency before allowing authorization.
            </p>
          </div>

          <div className="form-group">
            <label>Decision</label>
            <select value={decision} onChange={(e) => setDecision(e.target.value)}>
              <option value="">Select decision outcome</option>
              <option value="approve">Approve - No Exceptions</option>
              <option value="approve-conditional">Approve - With Conditions</option>
              <option value="defer">Defer - Additional Evidence Required</option>
              <option value="reject">Reject - Does Not Meet Requirements</option>
            </select>
          </div>

          <div className="form-group" style={{ marginTop: '20px' }}>
            <label>Justification (minimum 100 characters)</label>
            <textarea 
              value={justification}
              onChange={(e) => setJustification(e.target.value)}
              rows="6"
              placeholder="Provide a detailed regulatory justification for this decision..."
              style={{
                width: '100%',
                padding: '12px',
                borderRadius: '6px',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                color: '#fff',
                fontFamily: 'inherit',
                fontSize: '1rem'
              }}
            />
            <small style={{ color: justification.length < 100 ? '#FFB800' : '#10b981' }}>
              {justification.length} / 100 characters minimum
            </small>
          </div>

          <div className="form-group" style={{ marginTop: '20px' }}>
            <label>Approver / Decision Owner</label>
            <input 
              type="text"
              value={approver}
              onChange={(e) => setApprover(e.target.value)}
              placeholder="Name and role of decision authority"
            />
          </div>

          <div className="cta-row" style={{ marginTop: '32px', display: 'flex', gap: '16px' }}>
            <button onClick={() => navigate('/ddr/risk')} className="button-secondary">
              ← Back
            </button>
            <button onClick={handleContinue} className="button-primary">
              Continue to Review →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
