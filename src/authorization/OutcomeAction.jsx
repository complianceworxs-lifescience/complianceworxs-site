import React from 'react';

const OutcomeAction = ({ ddrResult }) => {
  // Captures the decision_hash and decision_outcome from the sealed engine
  const { decision_hash, decision_outcome } = ddrResult;

  // This function handles the "Gold Standard" intent: 
  // It prepares the record for the BigQuery ledger once clicked.
  const handleActivation = async () => {
    const ledgerRecord = {
      decision_hash: decision_hash,
      authorization_artifact: "Authorization Certificate",
      timestamp: new Date().toISOString(),
      status: "ACTIVATED"
    };

    // For now, this alerts you that the record is ready. 
    // Once your Google Cloud keys are ready, we plug the "wire" here.
    console.log("Submitting to Ledger:", ledgerRecord);
    alert(`Authorization Activated.\nRecording Trace ID: ${decision_hash}\nto the permanent ledger.`);
  };

  if (decision_outcome !== 'Authorized') {
    return null; // Logic for non-authorized outcomes is deferred per directive
  }

  return (
    <div style={{ padding: '60px', maxWidth: '800px', margin: '0 auto', fontFamily: 'serif' }}>
      <h2 style={{ letterSpacing: '1px', textTransform: 'uppercase' }}>AUTHORIZATION CONFIRMED</h2>
      <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>Decision Trace ID: {decision_hash}</p>
      <p style={{ fontWeight: 'bold' }}>Authorization Status: Met</p>
      
      <hr style={{ margin: '30px 0' }} />

      <h3>Certificate of Authorization</h3>
      <p>
        This certificate records that the proposed regulatory decision has met the required 
        defensibility threshold under the governed authorization framework.
      </p>
      <p>
        The decision is authorized for execution and eligible for permanent regulatory proof.
      </p>

      <h3>Authority Conferred</h3>
      <p>Activation of this certificate grants:</p>
      
      <ul style={{ lineHeight: '1.6', marginBottom: '30px' }}>
        <li>
          <strong>Decision Authorization</strong><br />
          Confirmation that the decision is defensible under applicable inspection and enforcement standards.
        </li>
        <li style={{ marginTop: '15px' }}>
          <strong>Proof Activation Rights</strong><br />
          Authorization to generate and retain formal regulatory evidence derived from this decision.
        </li>
        <li style={{ marginTop: '15px' }}>
          <strong>Governed Boundary Validation</strong><br />
          Verification that the decision resides within the approved compliance boundary.
        </li>
      </ul>

      <div style={{ backgroundColor: '#f9f9f9', padding: '30px', border: '1px solid #eee' }}>
        <h3>Activation Required</h3>
        <p>
          Authorization is a prerequisite for execution. Until activated, the decision remains 
          non-executable and is not recorded to the permanent authorization ledger.
        </p>
        
        {/* The updated button now triggers the handleActivation function above */}
        <button 
          onClick={handleActivation}
          style={{ 
            backgroundColor: '#0a1a36', 
            color: 'white', 
            padding: '15px 30px', 
            fontSize: '16px', 
            fontWeight: 'bold', 
            cursor: 'pointer',
            marginTop: '10px',
            border: 'none',
            borderRadius: '4px'
          }}
        >
          Activate Authorization — Purchase Authorization Certificate — $99
        </button>
      </div>
    </div>
  );
};

export default OutcomeAction;
