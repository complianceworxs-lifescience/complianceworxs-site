import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function RiskExposure() {
  const navigate = useNavigate();
  const [severity, setSeverity] = useState("");
  const [probability, setProbability] = useState("");
  const [detectability, setDetectability] = useState("");

  const calculateRiskLevel = () => {
    const severityVal = parseInt(severity) || 0;
    const probabilityVal = parseInt(probability) || 0;
    const detectabilityVal = parseInt(detectability) || 0;
    const rpn = severityVal * probabilityVal * detectabilityVal;

    if (rpn === 0) return { level: "Not Calculated", color: "#999" };
    if (rpn >= 100) return { level: "High Risk", color: "#B23B3B" };
    if (rpn >= 40) return { level: "Medium Risk", color: "#E3A23C" };
    return { level: "Low Risk", color: "#5F7D6B" };
  };

  const risk = calculateRiskLevel();

  const handleContinue = () => {
    if (!severity || !probability || !detectability) {
      alert("Please complete all risk assessment fields.");
      return;
    }
    navigate("/ddr/outcome");
  };

  return (
    <div className="ddr-page">
      <div className="container">
        <div className="assessment-card">
          <h2>Step 4: Risk & Exposure Assessment</h2>
          <p className="subtext">Evaluate the risk profile of this decision using FMEA methodology.</p>

          <div className="grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginTop: '24px' }}>
            <div className="form-group">
              <label>Severity (1-10)</label>
              <select value={severity} onChange={(e) => setSeverity(e.target.value)}>
                <option value="">Select severity</option>
                <option value="1">1 - Negligible</option>
                <option value="3">3 - Minor</option>
                <option value="5">5 - Moderate</option>
                <option value="7">7 - Serious</option>
                <option value="10">10 - Critical</option>
              </select>
            </div>

            <div className="form-group">
              <label>Probability (1-10)</label>
              <select value={probability} onChange={(e) => setProbability(e.target.value)}>
                <option value="">Select probability</option>
                <option value="1">1 - Remote</option>
                <option value="3">3 - Low</option>
                <option value="5">5 - Possible</option>
                <option value="7">7 - Likely</option>
                <option value="10">10 - Almost Certain</option>
              </select>
            </div>
          </div>

          <div className="form-group" style={{ marginTop: '20px' }}>
            <label>Detectability (1-10)</label>
            <select value={detectability} onChange={(e) => setDetectability(e.target.value)} style={{ width: '100%' }}>
              <option value="">Select detectability</option>
              <option value="1">1 - Almost Certain Detection</option>
              <option value="3">3 - High Detection</option>
              <option value="5">5 - Moderate Detection</option>
              <option value="7">7 - Low Detection</option>
              <option value="10">10 - Almost No Detection</option>
            </select>
          </div>

          {risk.level !== "Not Calculated" && (
            <div className="panel" style={{ 
              borderLeft: `4px solid ${risk.color}`, 
              marginTop: '24px', 
              padding: '20px', 
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              borderRadius: '0 8px 8px 0'
            }}>
              <h3 className="panel-title">Risk Priority Number (RPN)</h3>
              <p className="panel-body">
                <strong style={{ fontSize: '2.5rem', color: risk.color }}>
                  {parseInt(severity) * parseInt(probability) * parseInt(detectability)}
                </strong>
                <br />
                Risk Level: <strong style={{ color: risk.color, textTransform: 'uppercase' }}>{risk.level}</strong>
              </p>
            </div>
          )}

          <div className="cta-row" style={{ marginTop: '32px', display: 'flex', gap: '16px' }}>
            <button onClick={() => navigate('/ddr/evidence')} className="button-secondary">
              ← Back
            </button>
            <button onClick={handleContinue} className="button-primary">
              Continue to Decision Outcome →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
