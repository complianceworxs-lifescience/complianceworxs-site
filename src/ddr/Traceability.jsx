import React from 'react';

const Traceability = ({ ddrRecord }) => {
  // Canonical data mapping from the DDR-1.0 Schema
  const metadata = ddrRecord?.record_metadata || {};
  const authority = ddrRecord?.decision_authority || {};
  const replay = ddrRecord?.audit_replay || {};
  const security = ddrRecord?.data_protection_controls || {};
  const closure = ddrRecord?.record_closure || {};

  return (
    <div className="ddr-traceability-view">
      {/* HEADER: MISSION ALIGNMENT */}
      <header style={headerStyle}>
        <h1 style={titleStyle}>Review & Traceability</h1>
        <p style={subheadStyle}>Audit-ready record enabling decision replay and inspection.</p>
      </header>

      {/* 1.0 RECORD FINALITY: THE SEAL */}
      <section style={sealContainer}>
        <div style={sealGrid}>
          <div>
            <span style={smallLabel}>1.1 RECORD STATUS</span>
            <span style={sealValue}>{closure.record_status?.toUpperCase() || 'FINAL'}</span>
          </div>
          <div>
            <span style={smallLabel}>1.2 MODIFICATION ALLOWED</span>
            <span style={sealValue}>{closure.modification_allowed ? 'YES' : 'NO'}</span>
          </div>
          <div>
            <span style={smallLabel}>1.3 SEALED STATUS</span>
            <span style={sealValue}>{metadata.immutability_status?.toUpperCase() || 'SEALED'}</span>
          </div>
        </div>
      </section>

      {/* 2.0 & 3.0 IDENTITY & ACCOUNTABILITY */}
      <section style={dataBlock}>
        <h3 style={labelStyle}>2.0 Decision Identity & 3.0 Accountability</h3>
        <div style={infoGrid}>
          <div style={infoCell}>
            <label style={smallLabel}>RECORD ID</label>
            <span style={textValue}>{metadata.record_id}</span>
          </div>
          <div style={infoCell}>
            <label style={smallLabel}>TIMESTAMP (UTC)</label>
            <span style={textValue}>{metadata.generated_at_utc}</span>
          </div>
          <div style={infoCell}>
            <label style={smallLabel}>DECISION OWNER</label>
            <span style={textValue}>{authority.decision_owner_id}</span>
          </div>
          <div style={infoCell}>
            <label style={smallLabel}>AUTHORITY BASIS</label>
            <span style={textValue}>{authority.authority_basis}</span>
          </div>
        </div>
      </section>

      {/* 4.0 SYSTEM CONTROL & 6.0 REPLAY CONFIDENCE */}
      <section style={auditBox}>
        <h3 style={labelStyle}>4.0 System Control & 6.0 Replay</h3>
        <div style={replayGrid}>
          <div>
            <label style={smallLabel}>LOGIC VERSION</label>
            <span style={codeValue}>{replay.decision_logic_version}</span>
          </div>
          <div>
            <label style={smallLabel}>INPUT SIGNAL HASH</label>
            <code style={hashCode}>{replay.input_signal_hash}</code>
          </div>
          <div style={replayStatus(replay.replay_capable)}>
            <label style={smallLabel}>REPLAY CAPABLE</label>
            <span style={{ fontWeight: '900' }}>{replay.replay_capable ? 'YES' : 'NO'}</span>
          </div>
        </div>
      </section>

      {/* 5.0 SECURITY POSTURE */}
      <section style={securityGrid}>
        <div style={securityCard}>
          <label style={smallLabel}>PII/PHI REDACTION</label>
          <span style={textValue}>{security.pii_phi_redaction_status?.toUpperCase()}</span>
        </div>
        <div style={securityCard}>
          <label style={smallLabel}>ENCRYPTION ENFORCED</label>
          <span style={textValue}>{security.encryption_status ? 'YES' : 'NO'}</span>
        </div>
        <div style={securityCard}>
          <label style={smallLabel}>STORAGE CLASS</label>
          <span style={textValue}>{metadata.storage_class?.toUpperCase()}</span>
        </div>
      </section>

      {/* MANDATORY FOOTER QUESTION */}
      <footer style={footerStyle}>
        <p>“Can we reconstruct this decision exactly as it happened, without human explanation?”</p>
      </footer>
    </div>
  );
};

// --- IMMUTABLE UI STYLES ---
const headerStyle = { marginBottom: '40px' };
const titleStyle = { fontSize: '1.8rem', color: '#0a1a36', margin: '0 0 8px 0' };
const subheadStyle = { color: '#64748b', fontSize: '1rem', margin: 0 };

const sealContainer = { padding: '30px', backgroundColor: '#0a1a36', color: '#fff', borderRadius: '4px', marginBottom: '32px' };
const sealGrid = { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', textAlign: 'center' };
const sealValue = { display: 'block', fontSize: '1.2rem', fontWeight: '900', color: '#22d3ee' };

const dataBlock = { border: '1px solid #e2e8f0', borderRadius: '4px', padding: '24px', marginBottom: '32px' };
const infoGrid = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' };
const infoCell = { display: 'flex', flexDirection: 'column' };
const textValue = { fontSize: '0.9rem', fontWeight: '700', color: '#0a1a36' };

const auditBox = { padding: '24px', backgroundColor: '#f8fafc', border: '1px solid #cbd5e1', borderRadius: '4px', marginBottom: '32px' };
const replayGrid = { display: 'grid', gridTemplateColumns: '1fr 2fr 1fr', gap: '20px', alignItems: 'center' };
const codeValue = { fontSize: '0.85rem', fontWeight: '800', fontFamily: 'monospace' };
const hashCode = { fontSize: '0.7rem', color: '#64748b', wordBreak: 'break-all' };
const replayStatus = (capable) => ({ padding: '10px', backgroundColor: capable ? '#ecfdf5' : '#fee2e2', color: capable ? '#10b981' : '#ef4444', textAlign: 'center', borderRadius: '4px' });

const securityGrid = { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: '#e2e8f0', border: '1px solid #e2e8f0' };
const securityCard = { backgroundColor: '#fff', padding: '20px', textAlign: 'center' };

const labelStyle = { fontSize: '0.7rem', fontWeight: '900', color: '#0a1a36', textTransform: 'uppercase', marginBottom: '20px', letterSpacing: '1px' };
const smallLabel = { display: 'block', fontSize: '0.6rem', fontWeight: '800', color: '#94a3b8', marginBottom: '8px', letterSpacing: '1px' };
const footerStyle = { marginTop: '48px', paddingTop: '24px', borderTop: '1px solid #f1f5f9', color: '#94a3b8', fontStyle: 'italic', fontSize: '0.85rem' };

export default Traceability;
