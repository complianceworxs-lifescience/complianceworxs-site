import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AssessmentEntry() {
  const navigate = useNavigate();

  // Signal capture only (NOT DDR logic)
  const [system, setSystem] = useState("");
  const [lifecycle, setLifecycle] = useState([]);
  const [exposure, setExposure] = useState("");
  const [complianceState, setComplianceState] = useState("");
  const [signal, setSignal] = useState(null);

  // Non-binding signal guidance
  const SIGNALS = {
    "Data Integrity": "Audit trail maturity unclear. Authorization friction likely.",
    "Change Control": "Impact assessment linkage not evident.",
    "Validation": "System appears unverified.",
    "Training": "Role accountability signals incomplete.",
    "CAPA": "Root cause determinism not demonstrated.",
    "Document Control": "Version and access governance weak."
  };

  const toggleLifecycle = (area) => {
    setLifecycle((prev) =>
      prev.includes(area)
        ? prev.filter((item) => item !== area)
        : [...prev, area]
    );
  };

  const proceedToDDR = () => {
    // Soft friction only — no blocking here
    if (!complianceState || complianceState === "incomplete") {
      const primary = lifecycle[0] || "Data Integrity";
      setSignal(
        SIGNALS[primary] ||
          "Additional signals recommended before deterministic review."
      );
      return;
    }

    // HANDOFF TO DDR SPINE
    navigate("/ddr/context", {
      state: {
        system,
        lifecycle,
        exposure,
        complianceState
      }
    });
  };

  return (
    <div className="assessment-page">
      <div className="container">
        <header className="assessment-header">
          <h1>Audit Readiness Assessment</h1>
          <p>Capture decision signals. Deterministic review follows.</p>
        </header>

        <div className="assessment-card">
          <h2>Decision Signals</h2>

          <div className="form-group">
            <label>System / Process</label>
            <input
              type="text"
              value={system}
              onChange={(e) => setSystem(e.target.value)}
              placeholder="e.g., QMS, LIMS, Manufacturing"
            />
          </div>

          <div className="form-group">
            <label>Lifecycle Areas</label>
            <div className="checkbox-grid">
              {Object.keys(SIGNALS).map((area) => (
                <label key={area}>
                  <input
                    type="checkbox"
                    checked={lifecycle.includes(area)}
                    onChange={() => toggleLifecycle(area)}
                  />
                  {area}
                </label>
              ))}
            </div>
          </div>

          <div className="form-group">
            <label>Exposure Window</label>
            <select value={exposure} onChange={(e) => setExposure(e.target.value)}>
              <option value="">Select window</option>
              <option value="current">Current Operations</option>
              <option value="12">12 Months</option>
              <option value="24">24 Months</option>
            </select>
          </div>

          <div className="form-group">
            <label>Current Compliance State</label>
            <select
              value={complianceState}
              onChange={(e) => setComplianceState(e.target.value)}
            >
              <option value="">Select state</option>
              <option value="incomplete">Incomplete / Manual</option>
              <option value="digitized">Digitized / Unverified</option>
              <option value="verified">Verified / Ready</option>
            </select>
          </div>

          {signal && (
            <div className="assessment-signal">
              <strong>Preliminary Signal</strong>
              <p>{signal}</p>
            </div>
          )}

          <button className="btn-primary" onClick={proceedToDDR}>
            Proceed to Deterministic Review →
          </button>
        </div>
      </div>
    </div>
  );
}
