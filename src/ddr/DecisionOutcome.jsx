import React, { useState } from "react";

export default function DecisionOutcome() {
  const [decision, setDecision] = useState("");
  const [justification, setJustification] = useState("");
  const [approver, setApprover] = useState("");

  return (
    <div className="ddr-page">
      <div className="container">
        <div className="assessment-card">
          <h2>Step 5: Decision Outcome</h2>
          <p className="subtext">Document the defendable decision and its justification.</p>

          {/* PRESERVED: Decision Authority Panel */}
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
              style={{ width: '100%', padding: '12px', borderRadius: '6px', border: '1px solid rgba(255, 255, 255, 0.2)', backgroundColor: 'rgba(255, 255, 255, 0.05)', color: '#fff' }}
            />
          </div>

          <div className="form-group" style={{ marginTop: '20px', marginBottom: '40px' }}>
            <label>Approver / Decision Owner</label>
            <input 
              type="text"
              value={approver}
              onChange={(e) => setApprover(e.target.value)}
              style={{ width: '100%', padding: '12px', borderRadius: '6px' }}
            />
          </div>

          {/* NEW: Monetization Button */}
          <div style={{ textAlign: 'center', borderTop: '1px solid #eee', paddingTop: '32px' }}>
             <button
                onClick={() => window.location.href = 'https://buy.stripe.com/your_live_link_here'}
                disabled={!decision || justification.length < 100 || !approver}
                style={{
                  backgroundColor: '#F2B233',
                  color: '#0B1F2A',
                  padding: '20px 40px',
                  borderRadius: '8px',
                  border: 'none',
                  fontSize: '18px',
                  fontWeight: '800',
                  cursor: 'pointer',
                  width: '100%',
                  opacity: (!decision || justification.length < 100 || !approver) ? 0.5 : 1
                }}
              >
                Generate Authorization Record →
              </button>
          </div>
        </div>
      </div>
    </div>
  );
}
