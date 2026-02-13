import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function EvidenceSet() {
  const navigate = useNavigate();
  const [evidence, setEvidence] = useState([]);

  const evidenceTypes = [
    "Validation Protocol",
    "Test Results",
    "Risk Assessment",
    "Training Records",
    "Audit Trail",
    "Change Control Records",
    "SOPs",
    "Vendor Qualification"
  ];

  const handleEvidenceToggle = (item) => {
    if (evidence.includes(item)) {
      setEvidence(evidence.filter(e => e !== item));
    } else {
      setEvidence([...evidence, item]);
    }
  };

  const handleContinue = () => {
    if (evidence.length === 0) {
      alert("Please select at least one evidence type.");
      return;
    }
    navigate("/ddr/risk");
  };

  return (
    <div className="ddr-page">
      <div className="container">
        <div className="assessment-card">
          <h2>Step 3: Evidence Set</h2>
          <p className="subtext">Document the evidence supporting this decision.</p>

          <div className="panel panel-review" style={{ marginBottom: '24px', backgroundColor: 'rgba(255, 255, 255, 0.05)', padding: '15px', borderRadius: '8px' }}>
            <h3 className="panel-title" style={{ color: '#FFB800' }}>Evidence Requirements</h3>
            <p className="panel-body">
              Select all documentation types that support your decision. The DDR engine requires 
              a complete evidence trail before authorization can be granted.
            </p>
          </div>

          <div className="form-group">
            <label>Available Evidence (select all that apply)</label>
            <div className="checkbox-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '10px' }}>
              {evidenceTypes.map((item) => (
                <label key={item} className="checkbox-label" style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <input 
                    type="checkbox" 
                    checked={evidence.includes(item)}
                    onChange={() => handleEvidenceToggle(item)}
                  /> {item}
                </label>
              ))}
            </div>
          </div>

          {evidence.length > 0 && (
            <div className="recommendation-alert" style={{ marginTop: '20px', padding: '15px', borderLeft: '4px solid #10b981', backgroundColor: 'rgba(16, 185, 129, 0.1)' }}>
              <p><strong>Evidence Captured:</strong></p>
              <p>You have selected {evidence.length} evidence type(s). Ensure all documentation is complete and accessible for review.</p>
            </div>
          )}

          <div className="cta-row" style={{ marginTop: '32px', display: 'flex', gap: '16px' }}>
            <button onClick={() => navigate('/ddr/context')} className="button-secondary">
              ← Back
            </button>
            <button onClick={handleContinue} className="button-primary">
              Continue to Risk Assessment →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
