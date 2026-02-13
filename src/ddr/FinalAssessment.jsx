import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function FinalAssessment() {
  const navigate = useNavigate();
  const [isProcessing, setIsProcessing] = useState(false);
  const [activationComplete, setActivationComplete] = useState(false);
  const [traceId, setTraceId] = useState(null);
  const [error, setError] = useState(null);

  // Generate a deterministic Trace ID
  const generateTraceId = () => {
    const timestamp = new Date().toISOString();
    const random = Math.random().toString(36).substring(2, 15);
    return `CWX-${timestamp.split('T')[0].replace(/-/g, '')}-${random.toUpperCase()}`;
  };

  const handleActivation = async () => {
    setIsProcessing(true);
    setError(null);

    try {
      // Generate Trace ID
      const newTraceId = generateTraceId();
      
      // Collect assessment data
      const assessmentData = {
        system: "Quality Management System",
        decisionType: "System Validation",
        frameworks: ["21 CFR Part 11", "GAMP 5"],
        evidence: ["Validation Protocol", "Test Results", "Audit Trail"],
        riskRPN: 30,
        decision: "Approve - No Exceptions",
        approver: "John Doe, QA Manager",
        timestamp: new Date().toISOString()
      };

      // Call Vercel Serverless Function to write to BigQuery
      const response = await fetch('/api/activate-authorization', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          traceId: newTraceId,
          timestamp: assessmentData.timestamp,
          assessmentData: assessmentData
        })
      });

      if (!response.ok) {
        throw new Error('Activation failed. Please contact support.');
      }

      const result = await response.json();
      
      // Success!
      setTraceId(newTraceId);
      setActivationComplete(true);
      
    } catch (err) {
      setError(err.message || 'An unexpected error occurred during activation.');
      console.error('Activation error:', err);
    } finally {
      setIsProcessing(false);
    }
  };

  if (activationComplete) {
    return (
      <div className="ddr-page">
        <div className="container">
          <div className="panel panel-authorized" style={{ borderLeft: '4px solid #10b981', backgroundColor: 'rgba(16, 185, 129, 0.1)', padding: '20px', borderRadius: '8px' }}>
            <h2 className="panel-title" style={{ color: '#10b981' }}>✅ Authorization Activated</h2>
            <p className="panel-body">
              Your decision has been recorded in the immutable BigQuery ledger. This Trace ID 
              serves as permanent proof of regulatory defensibility.
            </p>
          </div>

          <div className="assessment-card" style={{ marginTop: '24px' }}>
            <h3>Activation Confirmation</h3>
            <table style={{ width: '100%', marginTop: '16px', fontSize: '0.95rem', color: '#fff' }}>
              <tbody>
                <tr>
                  <td style={{ padding: '8px', fontWeight: '600', width: '30%' }}>Trace ID:</td>
                  <td style={{ padding: '8px', fontFamily: 'monospace', fontSize: '1.1rem', color: '#FFB800' }}>
                    <strong>{traceId}</strong>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '8px', fontWeight: '600' }}>Timestamp:</td>
                  <td style={{ padding: '8px' }}>{new Date().toLocaleString()}</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px', fontWeight: '600' }}>Status:</td>
                  <td style={{ padding: '8px' }}>
                    <span style={{ color: '#10b981', fontWeight: '700' }}>AUTHORIZED</span>
                  </td>
                </tr>
                <tr>
                  <td style={{ padding: '8px', fontWeight: '600' }}>Ledger:</td>
                  <td style={{ padding: '8px' }}>BigQuery - Compliance Vault</td>
                </tr>
              </tbody>
            </table>

            <div className="recommendation-alert" style={{ marginTop: '24px', padding: '15px', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px' }}>
              <p><strong>Next Steps:</strong></p>
              <ul style={{ marginTop: '8px', marginLeft: '20px' }}>
                <li>Save your Trace ID: <code style={{ backgroundColor: '#333', padding: '2px 6px', borderRadius: '4px' }}>{traceId}</code></li>
                <li>Access your authorization record anytime via the dashboard</li>
                <li>Reference this Trace ID in all related compliance documentation</li>
                <li>Use this authorization for regulatory submissions and audits</li>
              </ul>
            </div>

            <div className="cta-row" style={{ marginTop: '32px' }}>
              <button onClick={() => navigate('/')} className="button-primary">
                Return to Dashboard
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="ddr-page">
      <div className="container">
        <div className="assessment-card">
          <h2>Step 7: Final Assessment & Activation</h2>
          <p className="subtext">Complete your authorization by activating the BigQuery ledger record.</p>

          <div className="panel panel-review" style={{ marginBottom: '24px', borderLeft: '4px solid #FFB800', backgroundColor: 'rgba(255, 184, 0, 0.05)', padding: '20px', borderRadius: '8px' }}>
            <h3 className="panel-title" style={{ color: '#FFB800' }}>🔒 Immutable Ledger Activation</h3>
            <p className="panel-body">
              By proceeding, you authorize a $99 charge and the creation of a permanent, 
              tamper-proof record in your Google Cloud BigQuery ledger.
            </p>
          </div>

          {error && (
            <div className="panel panel-blocked" style={{ marginBottom: '24px', borderLeft: '4px solid #B23B3B', backgroundColor: 'rgba(178, 59, 59, 0.1)', padding: '15px' }}>
              <h3 className="panel-title" style={{ color: '#B23B3B' }}>⚠️ Activation Error</h3>
              <p className="panel-body">{error}</p>
            </div>
          )}

          <div className="inner-card" style={{ padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.05)', borderRadius: '8px' }}>
            <h3>Activation Details</h3>
            <table style={{ width: '100%', marginTop: '16px', fontSize: '0.95rem', color: '#fff' }}>
              <tbody>
                <tr>
                  <td style={{ padding: '8px', fontWeight: '600', width: '40%' }}>Activation Fee:</td>
                  <td style={{ padding: '8px' }}><strong style={{ color: '#FFB800' }}>$99.00 USD</strong></td>
                </tr>
                <tr>
                  <td style={{ padding: '8px', fontWeight: '600' }}>Ledger Storage:</td>
                  <td style={{ padding: '8px' }}>Google BigQuery (Your GCP Account)</td>
                </tr>
                <tr>
                  <td style={{ padding: '8px', fontWeight: '600' }}>Record Type:</td>
                  <td style={{ padding: '8px' }}>Immutable Compliance Authorization</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="cta-row" style={{ marginTop: '32px', display: 'flex', gap: '16px' }}>
            <button onClick={() => navigate('/ddr/traceability')} className="button-secondary">
              ← Back to Review
            </button>
            <button 
              onClick={handleActivation} 
              className="button-primary"
              disabled={isProcessing}
              style={{ opacity: isProcessing ? 0.6 : 1, cursor: isProcessing ? 'not-allowed' : 'pointer' }}
            >
              {isProcessing ? 'Processing...' : 'Activate Authorization ($99) →'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
