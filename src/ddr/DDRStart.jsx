import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function DDRStart() {
  const navigate = useNavigate();
  
  // State for Step 1 Inputs
  const [system, setSystem] = useState("");
  const [lifecycle, setLifecycle] = useState([]);
  const [exposure, setExposure] = useState("");
  const [complianceState, setComplianceState] = useState("");
  const [recommendation, setRecommendation] = useState(null);

  // Recommendation Dictionary (The Friction-Fixer)
  const RECOMMENDATIONS = {
    "Data Integrity": "DDR Logic Gate: Authorization requires a validated Audit Trail. Ensure ALCOA+ protocols are defined before proceeding.",
    "Change Control": "DDR Logic Gate: Impact Assessment logic not detected. Regulatory relevance must be established to move to 'Verified'.",
    "Validation": "DDR Logic Gate: System state is 'Unverified'. Documentation must meet 21 CFR Part 11 requirements for electronic signatures.",
    "Training": "DDR Logic Gate: Ownership gap. Accountability records must be mapped to specific roles for authorization.",
    "CAPA": "DDR Logic Gate: Risk high. Root cause logic must be deterministic before proof generation is permitted.",
    "Document Control": "DDR Logic Gate: Versioning control logic missing. Access rights must be governed by the DDR engine."
  };

  const handleLifecycleChange = (area) => {
    if (lifecycle.includes(area)) {
      setLifecycle(lifecycle.filter(item => item !== area));
    } else {
      setLifecycle([...lifecycle, area]);
    }
  };

  const handleIncreaseConfidence = () => {
    // Check for friction point: User hasn't selected enough info or is in a "Blocked" state
    if (!complianceState || complianceState === "Select current state" || complianceState === "incomplete") {
      const primaryArea = lifecycle[0] || "Data Integrity";
      setRecommendation(RECOMMENDATIONS[primaryArea] || "Please select a Lifecycle Area and Compliance State to receive your path to authorization.");
      return;
    }

    // Success Path: Move to Step 2 - Decision Context
    // FIXED: Changed from /assessment/summary to /ddr/context
    navigate("/ddr/context");
  };

  return (
    <div className="ddr-page">
      <div className="container">
        <header className="ddr-header">
          <h1>Audit Readiness Assessment</h1>
          <p>Complete this assessment to identify compliance gaps and get actionable recommendations.</p>
        </header>

        {/* STEPPER UI */}
        <div className="ddr-stepper">
          <div className="step active"><span>0</span><p>Free<br/><small>Identify gaps</small></p></div>
          <div className="step"><span><i className="lock-icon">🔒</i></span><p>Verified<br/><small>Context captured</small></p></div>
          <div className="step"><span><i className="lock-icon">🔒</i></span><p>Executable<br/><small>Action plan ready</small></p></div>
          <div className="step"><span><i className="lock-icon">🔒</i></span><p>Authorized<br/><small>Full monitoring</small></p></div>
        </div>

        {/* MAIN ASSESSMENT CARD */}
        <div className="assessment-card">
          <h2>Get Started</h2>
          <p className="subtext">Answer a few questions to receive your personalized compliance assessment.</p>

          <div className="form-group">
            <label>System/Process Being Assessed</label>
            <input 
              type="text" 
              placeholder="e.g., Quality Management System, LIMS, Manufacturing" 
              value={system}
              onChange={(e) => setSystem(e.target.value)}
            />
          </div>

          <div className="form-group">
            <label>Lifecycle Areas (select all that apply)</label>
            <div className="checkbox-grid">
              {Object.keys(RECOMMENDATIONS).map((area) => (
                <label key={area} className="checkbox-label">
                  <input 
                    type="checkbox" 
                    checked={lifecycle.includes(area)} 
                    onChange={() => handleLifecycleChange(area)} 
                  /> {area}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Exposure Window</label>
            <select value={exposure} onChange={(e) => setExposure(e.target.value)}>
              <option>Select exposure timeline</option>
              <option value="current">Current Ops Only</option>
              <option value="12">12 Months</option>
              <option value="24">24 Months</option>
            </select>
          </div>

          <div className="form-group">
            <label>Current Compliance State</label>
            <select value={complianceState} onChange={(e) => setComplianceState(e.target.value)}>
              <option value="">Select current state</option>
              <option value="incomplete">Incomplete / Manual</option>
              <option value="digitized">Digitized / Not Verified</option>
              <option value="verified">Verified / Ready</option>
            </select>
          </div>

          {/* RECOMMENDATION ENGINE OUTPUT */}
          {recommendation && (
            <div className="recommendation-alert">
              <p><strong>Recommendation for Advancing:</strong></p>
              <p>{recommendation}</p>
            </div>
          )}

          <button 
            className="btn-increase-confidence" 
            onClick={handleIncreaseConfidence}
          >
            Increase Confidence →
          </button>
        </div>
      </div>
    </div>
  );
}
