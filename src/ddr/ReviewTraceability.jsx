import React from "react";
import { useNavigate } from "react-router-dom";

export default function ReviewTraceability() {
  const navigate = useNavigate();

  // In production, this would pull from state/context
  const assessmentSummary = {
    system: "Quality Management System",
    decisionType: "System Validation",
    frameworks: ["21 CFR Part 11", "GAMP 5"],
    evidence: ["Validation Protocol", "Test Results", "Audit Trail"],
    riskLevel: "Low Risk (RPN: 30)",
    decision: "Approve - No Exceptions",
    approver: "John Doe, QA Manager"
  };

  const handleProceedToActivation = () => {
    navigate("/ddr/assessment");
  };

  return (
    <div>
      <h2>Step 6: Review & Traceability</h2>
      <p className="subtext">Verify all requirements before proceeding to final activation.</p>

      <div className="panel panel-review" style={{ marginBottom: '24px' }}>
        <h3 className="panel-title">⚠️ Pre-Activation Checkpoint</h3>
        <p className="panel-body">
          Review the summary below. Once you proceed to activation, a $99 charge will be processed 
          and an immutable record will be written to the BigQuery ledger.
        </p>
      </div>

      <div className="card">
        <h3>Assessment Summary</h3>
        <table style={{ width: '100%', marginTop: '16px', fontSize: '0.95rem' }}>
          <tbody>
            <tr>
              <td style={{ padding: '8px', fontWeight: '600', width: '40%' }}>System/Process:</td>
              <td style={{ padding: '8px' }}>{assessmentSummary.system}</td>
            </tr>
            <tr style={{ backgroundColor: '#f8f9fa' }}>
              <td style={{ padding: '8px', fontWeight: '600' }}>Decision Type:</td>
              <td style={{ padding: '8px' }}>{assessmentSummary.decisionType}</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: '600' }}>Regulatory Frameworks:</td>
              <td style={{ padding: '8px' }}>{assessmentSummary.frameworks.join(", ")}</td>
            </tr>
            <tr style={{ backgroundColor: '#f8f9fa' }}>
              <td style={{ padding: '8px', fontWeight: '600' }}>Evidence Types:</td>
              <td style={{ padding: '8px' }}>{assessmentSummary.evidence.join(", ")}</td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: '600' }}>Risk Assessment:</td>
              <td style={{ padding: '8px' }}>{assessmentSummary.riskLevel}</td>
            </tr>
            <tr style={{ backgroundColor: '#f8f9fa' }}>
              <td style={{ padding: '8px', fontWeight: '600' }}>Decision:</td>
              <td style={{ padding: '8px' }}><strong>{assessmentSummary.decision}</strong></td>
            </tr>
            <tr>
              <td style={{ padding: '8px', fontWeight: '600' }}>Decision Owner:</td>
              <td style={{ padding: '8px' }}>{assessmentSummary.approver}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className="recommendation-alert" style={{ marginTop: '24px' }}>
        <p><strong>Traceability Requirements Met:</strong></p>
        <ul style={{ marginTop: '8px', marginLeft: '20px' }}>
          <li>✅ Decision context documented</li>
          <li>✅ Evidence catalog complete</li>
          <li>✅ Risk assessment performed</li>
          <li>✅ Decision outcome justified</li>
          <li>✅ Decision owner identified</li>
        </ul>
      </div>

      <div className="cta-row" style={{ marginTop: '32px' }}>
        <button onClick={() => navigate('/ddr/outcome')} className="button-secondary">
          ← Back to Edit
        </button>
        <button onClick={handleProceedToActivation} className="button-primary">
          Proceed to Activation ($99) →
        </button>
      </div>
    </div>
  );
}

