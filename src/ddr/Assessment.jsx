import React from 'react';

const Assessment = () => {
  // Canonical JSON Data (DDR-1.0 Implementation)
  const ddrRecord = {
    "record_metadata": {
      "record_id": "ddr-rec-8f3c2b91",
      "record_version": "DDR-1.0",
      "generated_at_utc": "2026-02-12T19:42:11Z",
      "immutability_status": "sealed"
    },
    "decision_identity": {
      "decision_type": "automation_introduction",
      "decision_scope": "multi_system"
    },
    "authorization_outcome": {
      "authorization_state": "conditional",
      "execution_permitted": false
    },
    "fail_closed_evaluation": {
      "fail_closed_triggered": false,
      "fail_closed_reason_code": null
    }
    // ... remaining fields map to UI sections
  };

  const getStatusColor = (state) => {
    if (state === 'authorized') return '#10b981';
    if (state === 'conditional') return '#f59e0b';
    return '#ef4444';
  };

  return (
    <div style={container}>
      {/* AUTHENTICATION HEADER */}
      <div style={authHeader}>
        <span>RECORD_ID: {ddrRecord.record_metadata.record_id}</span>
        <span>STATUS: {ddrRecord.record_metadata.immutability_status}</span>
      </div>

      <h1 style={{fontSize: '1.5rem', marginBottom: '30px'}}>Deterministic Decision Record (DDR-1.0)</h1>

      {/* SECTION 6.0: AUTHORIZATION OUTCOME (THE GATE) */}
      <section style={outcomeSection(getStatusColor(ddrRecord.authorization_outcome.authorization_state))}>
        <div style={label}>6.0 AUTHORIZATION OUTCOME</div>
        <div style={outcomeGrid}>
          <div>
            <div style={smallLabel}>STATE</div>
            <div style={statusValue}>{ddrRecord.authorization_outcome.authorization_state.toUpperCase()}</div>
          </div>
          <div>
            <div style={smallLabel}>EXECUTION_PERMITTED</div>
            <div style={statusValue}>{ddrRecord.authorization_outcome.execution_permitted ? "TRUE" : "FALSE"}</div>
          </div>
        </div>
      </section>

      {/* SECTION 2.0: DECISION IDENTITY */}
      <section style={dataSection}>
        <div style={label}>2.0 DECISION IDENTITY</div>
        <div style={fieldGrid}>
          <div style={field}>
            <span style={smallLabel}>TYPE</span>
            <span>{ddrRecord.decision_identity.decision_type}</span>
          </div>
          <div style={field}>
            <span style={smallLabel}>SCOPE</span>
            <span>{ddrRecord.decision_identity.decision_scope}</span>
          </div>
        </div>
      </section>

      

      {/* AUDIT REPLAY ANCHOR */}
      <div style={replayFooter}>
        <div style={smallLabel}>11.0 AUDIT REPLAY HASH</div>
        <code style={{fontSize: '0.7rem'}}>b71c9d4fa22e9c41af83d1e2...</code>
      </div>
    </div>
  );
};

// --- STYLES ---
const container = { padding: '40px', backgroundColor: '#fff', color: '#0a1a36' };
const authHeader = { display: 'flex', justifyContent: 'space-between', fontSize: '0.6rem', fontWeight: '900', color: '#94a3b8', borderBottom: '1px solid #f1f5f9', paddingBottom: '10px', marginBottom: '30px' };
const outcomeSection = (color) => ({ border: `2px solid ${color}`, borderRadius: '8px', padding: '20px', marginBottom: '30px' });
const label = { fontSize: '0.7rem', fontWeight: '900', color: '#64748b', marginBottom: '15px' };
const smallLabel = { fontSize: '0.6rem', color: '#94a3b8', fontWeight: '800' };
const statusValue = { fontSize: '1.2rem', fontWeight: '900' };
const dataSection = { border: '1px solid #e2e8f0', borderRadius: '8px', padding: '20px', marginBottom: '30px' };
const fieldGrid = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' };
const field = { display: 'flex', flexDirection: 'column' };
const replayFooter = { backgroundColor: '#f8fafc', padding: '20px', borderRadius: '8px', border: '1px dashed #cbd5e1' };

export default Assessment;
