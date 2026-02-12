import React from 'react';
import { Link } from 'react-router-dom';

const Assessment = () => {
  // Mock Data following your Canonical Field List
  const ddrRecord = {
    metadata: { id: "DDR-9921-X", version: "1.0", generated: "2026-02-12T20:38Z", status: "SEALED" },
    identity: { type: "System Change", scope: "Production Environment" },
    risk: { severity: "MEDIUM", nature: "OPERATIONAL", material_flag: true },
    outcome: { state: "CONDITIONAL", execution_permitted: false },
    authority: { owner_id: "EXEC-004", basis: "Policy-88-Alpha" },
    security: { pii_redacted: true, encryption: "AES-256-GCM" }
  };

  return (
    <div style={pageContainer}>
      <div style={securityBanner}>🛡️ MACHINE-GENERATED RECORD | IMMUTABLE | DETERMINISTIC</div>

      <header style={header}>
        <h1 style={title}>Final Decision Record</h1>
        <p style={subtitle}>This is a system-generated record of control. It requires no human interpretation.</p>
      </header>

      {/* SCHEMA SECTION 1: METADATA & IDENTITY */}
      <section style={schemaSection}>
        <div style={sectionHeader}>1.0 RECORD METADATA & IDENTITY</div>
        <div style={grid}>
          <div style={field}><label>RECORD_ID</label><span>{ddrRecord.metadata.id}</span></div>
          <div style={field}><label>VERSION</label><span>{ddrRecord.metadata.version}</span></div>
          <div style={field}><label>GENERATED_AT</label><span>{ddrRecord.metadata.generated}</span></div>
          <div style={field}><label>STATUS</label><span style={{color: '#10b981'}}>{ddrRecord.metadata.status}</span></div>
        </div>
      </section>

      {/* SCHEMA SECTION 4 & 6: RISK & OUTCOME (The "Gate") */}
      <section style={schemaSection}>
        <div style={sectionHeader}>4.0 RISK & 6.0 AUTHORIZATION</div>
        <div style={outcomeCard(ddrRecord.outcome.state)}>
          <div style={field}><label>AUTHORIZATION_STATE</label><span style={{fontWeight: '900'}}>{ddrRecord.outcome.state}</span></div>
          <div style={field}><label>RISK_SEVERITY</label><span>{ddrRecord.risk.severity}</span></div>
          <div style={field}><label>EXECUTION_PERMITTED</label><span>{ddrRecord.outcome.execution_permitted ? "TRUE" : "FALSE"}</span></div>
        </div>
      </section>

      

      {/* SCHEMA SECTION 11: AUDIT REPLAY */}
      <section style={auditBox}>
        <h4 style={{margin: '0 0 10px 0', fontSize: '0.8rem'}}>11.0 AUDIT REPLAY & TRACEABILITY</h4>
        <p style={{fontSize: '0.75rem', fontFamily: 'monospace', color: '#64748b', margin: 0}}>
          INPUT_SIGNAL_HASH: 8f2d796e941b...<br />
          REPLAY_CAPABLE: TRUE | MODIFICATION_ALLOWED: FALSE
        </p>
      </section>

      <footer style={footer}>
        <button style={printBtn} onClick={() => window.print()}>Download Inspection-Ready JSON</button>
        <Link to="/ddr/traceability" style={backBtn}>Return to Traceability</Link>
      </footer>
    </div>
  );
};

// --- STYLES (Aligning with Institutional "Black Box" look) ---
const pageContainer = { fontFamily: 'Inter, system-ui, sans-serif', color: '#0a1a36' };
const securityBanner = { backgroundColor: '#0a1a36', color: '#22d3ee', padding: '10px', fontSize: '0.65rem', textAlign: 'center', fontWeight: '900', letterSpacing: '1px', marginBottom: '40px' };
const header = { marginBottom: '40px', textAlign: 'center' };
const title = { fontSize: '1.8rem', margin: '0 0 10px 0' };
const subtitle = { color: '#64748b', fontSize: '0.9rem' };

const schemaSection = { marginBottom: '30px', border: '1px solid #e2e8f0', borderRadius: '8px', overflow: 'hidden' };
const sectionHeader = { backgroundColor: '#f8fafc', padding: '10px 15px', fontSize: '0.7rem', fontWeight: '800', borderBottom: '1px solid #e2e8f0', color: '#64748b' };
const grid = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', backgroundColor: '#e2e8f0' };
const field = { backgroundColor: '#fff', padding: '15px', display: 'flex', flexDirection: 'column' };
const label = { fontSize: '0.65rem', fontWeight: '800', color: '#94a3b8', marginBottom: '5px' };

const outcomeCard = (state) => ({
  display: 'grid',
  gridTemplateColumns: '1fr 1fr 1fr',
  backgroundColor: state === 'CONDITIONAL' ? '#fffbeb' : '#f8fafc',
  padding: '10px'
});

const auditBox = { padding: '20px', backgroundColor: '#f1f5f9', borderRadius: '8px', border: '1px solid #cbd5e1' };
const footer = { marginTop: '50px', display: 'flex', gap: '15px', justifyContent: 'center' };
const printBtn = { backgroundColor: '#0a1a36', color: '#fff', padding: '12px 24px', border: 'none', borderRadius: '6px', fontWeight: '700', cursor: 'pointer' };
const backBtn = { color: '#0a1a36', padding: '12px 24px', textDecoration: 'none', fontWeight: '700' };

export default Assessment;
