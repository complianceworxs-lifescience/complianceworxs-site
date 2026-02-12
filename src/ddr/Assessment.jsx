import React from 'react';

const Assessment = ({ record = blockedRecordExample }) => {
  const isBlocked = record.authorization_outcome.authorization_state === 'blocked';
  const statusColor = isBlocked ? '#ef4444' : '#10b981';

  return (
    <div style={container}>
      {/* 1.0 RECORD METADATA (The Immutable Seal) */}
      <div style={metaHeader}>
        <span style={recordTag}>ID: {record.record_metadata.record_id}</span>
        <span style={recordTag}>VERSION: {record.record_metadata.record_version}</span>
        <span style={sealTag}>STATUS: {record.record_metadata.immutability_status.toUpperCase()}</span>
      </div>

      {/* 6.0 AUTHORIZATION OUTCOME (The Deterministic Gate) */}
      <section style={outcomeSection(statusColor)}>
        <div style={sectionLabel}>6.0 AUTHORIZATION OUTCOME</div>
        <div style={mainStatusGrid}>
          <div>
            <div style={fieldLabel}>STATE</div>
            <div style={{ ...statusValue, color: statusColor }}>{record.authorization_outcome.authorization_state.toUpperCase()}</div>
          </div>
          <div>
            <div style={fieldLabel}>EXECUTION_PERMITTED</div>
            <div style={statusValue}>{record.authorization_outcome.execution_permitted ? "TRUE" : "FALSE"}</div>
          </div>
        </div>

        {/* 5.0 FAIL-CLOSED EVALUATION (Only visible if blocked) */}
        {record.fail_closed_evaluation.fail_closed_triggered && (
          <div style={failClosedBox}>
            <div style={fieldLabel}>5.0 FAIL-CLOSED REASON CODE</div>
            <div style={reasonCode}>{record.fail_closed_evaluation.fail_closed_reason_code}</div>
            <p style={rationaleText}>{record.fail_closed_evaluation.fail_closed_rationale}</p>
          </div>
        )}
      </section>

      {/* 4.0 RISK CLASSIFICATION (The Audit Evidence) */}
      <section style={dataBlock}>
        <div style={sectionLabel}>4.0 RISK CLASSIFICATION</div>
        <div style={fieldGrid}>
          <div style={field}>
            <span style={fieldLabel}>SEVERITY</span>
            <span style={valueText}>{record.risk_classification.risk_severity.toUpperCase()}</span>
          </div>
          <div style={field}>
            <span style={fieldLabel}>NATURE</span>
            <span style={valueText}>{record.risk_classification.risk_nature.toUpperCase()}</span>
          </div>
          <div style={field}>
            <span style={fieldLabel}>MATERIAL_RISK</span>
            <span style={valueText}>{record.risk_classification.material_risk_flag ? "YES" : "NO"}</span>
          </div>
        </div>
      </section>

      {/* 11.0 AUDIT REPLAY (System Traceability) */}
      <footer style={auditFooter}>
        <div style={fieldLabel}>11.0 AUDIT REPLAY & TRACEABILITY</div>
        <div style={hashDisplay}>SIGNAL_HASH: {record.audit_replay.input_signal_hash}</div>
        <div style={hashDisplay}>LOGIC_VERSION: {record.audit_replay.decision_logic_version}</div>
      </footer>
    </div>
  );
};

// --- STYLES (Institutional / Audit-Ready) ---
const container = { padding: '40px', backgroundColor: '#fff', color: '#0a1a36', maxWidth: '900px', margin: '0 auto' };
const metaHeader = { display: 'flex', justifyContent: 'space-between', borderBottom: '2px solid #0a1a36', paddingBottom: '10px', marginBottom: '30px' };
const recordTag = { fontSize: '0.65rem', fontWeight: '800', color: '#64748b' };
const sealTag = { fontSize: '0.65rem', fontWeight: '900', color: '#0a1a36' };

const outcomeSection = (color) => ({ border: `3px solid ${color}`, borderRadius: '12px', padding: '30px', marginBottom: '40px', backgroundColor: color === '#ef4444' ? '#fef2f2' : '#ecfdf5' });
const sectionLabel = { fontSize: '0.7rem', fontWeight: '900', color: '#64748b', marginBottom: '20px', letterSpacing: '1px' };
const mainStatusGrid = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '40px', marginBottom: '25px' };
const fieldLabel = { fontSize: '0.6rem', fontWeight: '800', color: '#94a3b8', marginBottom: '5px' };
const statusValue = { fontSize: '1.8rem', fontWeight: '900' };

const failClosedBox = { marginTop: '20px', paddingTop: '20px', borderTop: '1px solid #fecaca' };
const reasonCode = { fontSize: '1rem', fontWeight: '900', color: '#ef4444', fontFamily: 'monospace' };
const rationaleText = { fontSize: '0.9rem', color: '#7f1d1d', margin: '10px 0 0 0' };

const dataBlock = { border: '1px solid #e2e8f0', borderRadius: '8px', padding: '25px', marginBottom: '30px' };
const fieldGrid = { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' };
const valueText = { fontSize: '0.9rem', fontWeight: '700' };

const auditFooter = { padding: '20px', backgroundColor: '#f8fafc', borderRadius: '8px', border: '1px solid #e2e8f0' };
const hashDisplay = { fontFamily: 'monospace', fontSize: '0.7rem', color: '#64748b', marginTop: '5px' };

export default Assessment;
