import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DecisionContext() {
  const navigate = useNavigate();
  const [decisionType, setDecisionType] = useState("");
  const [regulatoryFramework, setRegulatoryFramework] = useState([]);
  const [businessImpact, setBusinessImpact] = useState("");

  const frameworks = [
    "21 CFR Part 11",
    "21 CFR Part 210/211",
    "EU GMP Annex 11",
    "GAMP 5",
    "ISO 13485",
    "GDPR"
  ];

  const handleFrameworkToggle = (framework) => {
    if (regulatoryFramework.includes(framework)) {
      setRegulatoryFramework(regulatoryFramework.filter(f => f !== framework));
    } else {
      setRegulatoryFramework([...regulatoryFramework, framework]);
    }
  };

  const handleContinue = () => {
    if (!decisionType || regulatoryFramework.length === 0) {
      alert("Please select a decision type and at least one regulatory framework.");
      return;
    }
    navigate("/ddr/evidence");
  };

  return (
    <div className="ddr-page">
      <div className="container">
        <div className="assessment-card">
          <h2>Step 2: Decision Context</h2>
          <p className="subtext">Define the regulatory and business context for this decision.</p>

          <div className="form-group">
            <label>Decision Type</label>
            <select value={decisionType} onChange={(e) => setDecisionType(e.target.value)}>
              <option value="">Select decision type</option>
              <option value="validation">System Validation</option>
              <option value="change">Change Control</option>
              <option value="deviation">Deviation Investigation</option>
              <option value="capa">CAPA Implementation</option>
              <option value="risk">Risk Assessment</option>
            </select>
          </div>

          <div className="form-group">
            <label>Applicable Regulatory Frameworks</label>
            <div className="checkbox-grid">
              {frameworks.map((framework) => (
                <label key={framework} className="checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={regulatoryFramework.includes(framework)}
                    onChange={() => handleFrameworkToggle(framework)}
                  /> {framework}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Business Impact</label>
            <select value={businessImpact} onChange={(e) => setBusinessImpact(e.target.value)}>
              <option value="">Select impact level</option>
              <option value="critical">Critical - Product release blocker</option>
              <option value="high">High - Affects GMP operations</option>
              <option value="medium">Medium - Quality system impact</option>
              <option value="low">Low - Administrative only</option>
            </select>
          </div>

          <div className="cta-row" style={{ marginTop: '32px', display: 'flex', gap: '16px' }}>
            <button onClick={() => navigate('/ddr/start')} className="button-secondary">
              ← Back
            </button>
            <button onClick={handleContinue} className="button-primary">
              Continue to Evidence →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
