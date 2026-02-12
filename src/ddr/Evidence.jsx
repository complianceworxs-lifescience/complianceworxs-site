import React from 'react';

const Evidence = ({ ddrRecord, currentRole }) => {
  // Canonical data mapping
  const lineage = ddrRecord?.evidence_lineage || {};
  const protection = ddrRecord?.data_protection_controls || {};
  const isAuthorizedRole = ['auditor', 'compliance', 'admin'].includes(currentRole);

  return (
    <div className="ddr-evidence-view">
      {/* HEADER: MISSION ALIGNMENT */}
      <header style={headerStyle}>
        <h1 style={titleStyle}>Evidence Set</h1>
        <p style={subheadStyle}>Immutable evidence captured by the system to support this decision.</p>
      </header>

      {/* 1.0 EVIDENCE STATUS: THE BINARY CHECK */}
      <section style={statusContainer}>
        <div style={statusGrid}>
          <div style={statusCell}>
            <span style={smallLabel}>1.1 EVIDENCE CAPTURED</span>
            <span style={statusValue}>
              {lineage.evidence_objects?.length > 0 ? 'YES' : 'NO'}
            </span>
          </div>
          <div style={statusCell}>
            <span style={smallLabel}>1.2 EVIDENCE INTEGRITY</span>
            <span style={statusValue}>
              {lineage.evidence_integrity_status?.toUpperCase() || 'NOT VERIFIED'}
            </span>
          </div>
        </div>
      </section>

      {/* 2.0 ENUMERATION: THE MANIFEST (ROLE-GATED) */}
      <section style={sectionStyle}>
        <h3 style={labelStyle}>2.0 Evidence Objects (Immutable References)</h3>
        {isAuthorizedRole ? (
          <div style={manifestBox}>
            {lineage.evidence_objects?.length > 0 ? (
              <ul style={objectList}>
                {lineage.evidence_objects.map((ref, i) => (
                  <li key={i} style={objectItem}>
                    <code style={hashCode}>{ref}</code>
                  </li>
                ))}
              </ul>
            ) : (
              <p style={emptyText}>No evidence objects mapped to this record.</p>
            )}
          </div>
        ) : (
          <div style={restrictedBox}>
            <p>Artifact references restricted to Authorized Personnel (Auditor/Compliance).</p>
          </div>
        )}
      </section>

      {/* 3.0 INTEGRITY PROOF: THE CONTROL LAYER */}
      <section style={controlGrid}>
        <div style={controlCard}>
          <span style={smallLabel}>3.1 STORAGE CLASS</span>
          <span style={controlValue}>{ddrRecord?.record_metadata?.storage_class?.toUpperCase() || 'IMMUTABLE'}</span>
        </div>
        <div style={controlCard}>
          <span style={smallLabel}>3.2 ENCRYPTION STATUS</span>
          <span style={controlValue}>{protection.encryption_status?.replace(/_/g, ' ').toUpperCase() || 'ENCRYPTED'}</span>
        </div>
        <div style={controlCard}>
          <span style={smallLabel}>3.3 CAPTURE METHOD</span>
          <span style={controlValue}>{lineage.evidence_capture_method?.toUpperCase() || 'AUTOMATED'}</span>
        </div>
      </section>

      {/* MANDATORY FOOTER QUESTION */}
      <footer style={footerStyle}>
        <p>“If an auditor asks for proof, can we point to it immediately?”</p>
      </footer>
    </div>
  );
};

// --- IMMUTABLE UI STYLES ---
const headerStyle = { marginBottom: '40px' };
const titleStyle = { fontSize: '1.8rem', color: '#0a1a36', margin: '0 0 8px 0' };
const subheadStyle = { color: '#64748b', fontSize: '1rem', margin: 0 };

const statusContainer = { padding: '30px', backgroundColor: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: '4px', marginBottom: '32px' };
const statusGrid = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' };
const statusCell = { textAlign: 'center' };
const smallLabel = { display: 'block', fontSize: '0.6rem', fontWeight: '800', color: '#94a3b8', marginBottom: '8px', letterSpacing: '1px' };
const statusValue = { fontSize: '1.2rem', fontWeight: '900', color: '#0a1a36' };

const sectionStyle = { marginBottom: '32px' };
const labelStyle = { fontSize: '0.7rem', fontWeight: '900', color: '#0a1a36', textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '1px' };

const manifestBox = { padding: '20px', backgroundColor: '#fff', border: '1px solid #e2e8f0', borderRadius: '4px' };
const objectList = { listStyle: 'none', padding: 0, margin: 0 };
const objectItem = { padding: '8px 0', borderBottom: '1px solid #f1f5f9' };
const hashCode = { fontSize: '0.75rem', color: '#475569', fontFamily: 'monospace', wordBreak: 'break-all' };
const emptyText = { fontSize: '0.85rem', color: '#94a3b8', fontStyle: 'italic' };

const restrictedBox = { padding: '20px', backgroundColor: '#f1f5f9', border: '1px dashed #cbd5e1', color: '#64748b', fontSize: '0.85rem', textAlign: 'center' };

const controlGrid = { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: '#e2e8f0', border: '1px solid #e2e8f0' };
const controlCard = { backgroundColor: '#fff', padding: '20px', textAlign: 'center' };
const controlValue = { fontSize: '0.85rem', fontWeight: '700', color: '#0a1a36' };

const footerStyle = { marginTop: '48px', paddingTop: '24px', borderTop: '1px solid #f1f5f9', color: '#94a3b8', fontStyle: 'italic', fontSize: '0.85rem' };

export default Evidence;
