import React from 'react';

const Outcome = ({ ddrRecord }) => {
  // Pulling directly from the canonical schema
  const outcome = ddrRecord?.authorization_outcome || {};
  const failClosed = ddrRecord?.fail_closed_evaluation || {};
  const conditions = ddrRecord?.conditional_controls || {};

  const state = outcome.authorization_state; // authorized | conditional | blocked

  return (
    <div className="ddr-outcome-view">
      {/* HEADER: MISSION ALIGNMENT */}
      <header style={headerStyle}>
        <h1 style={titleStyle}>Decision Outcome</h1>
        <p style={subheadStyle}>Authorization result enforced by the DDR engine.</p>
      </header>

      {/* 1.0 & 2.0: STATE & EXECUTION PERMISSION */}
      <section style={gateContainer(state)}>
        <div style={gateGrid}>
          <div style={gateCell}>
            <span style={smallLabel}>1.0 AUTHORIZATION STATE</span>
            <span style={gateValue}>{state?.toUpperCase() || 'PENDING'}</span>
          </div>
          <div style={gateCell}>
            <span style={smallLabel}>2.0 EXECUTION PERMITTED</span>
            <span style={gateValue}>{outcome.execution_permitted ? 'YES' : 'NO'}</span>
          </div>
        </div>
      </section>

      {/* 3.0: BLOCKED STATE (Enforcement Logic) */}
      {state === 'blocked' && (
        <section style={blockedDetail}>
          <h3 style={labelStyle}>3.0 Decision Blocked</h3>
          <div style={fieldGroup}>
            <label style={smallLabel}>REASON CODE</label>
            <div style={reasonCode}>{failClosed.fail_closed_reason_code}</div>
          </div>
          <div style={fieldGroup}>
            <label style={smallLabel}>SYSTEM RATIONALE</label>
            <p style={rationaleText}>{failClosed.fail_closed_rationale}</p>
          </div>
        </section>
      )}

      {/* 4.0: CONDITIONAL STATE (Mandated Controls) */}
      {state === 'conditional' && (
        <section style={conditionalDetail}>
          <h3 style={labelStyle}>4.0 Conditional Authorization Granted</h3>
          <div style={fieldGroup}>
            <label style={smallLabel}>REQUIRED CONDITIONS</label>
            <ul style={conditionList}>
              {conditions.conditions_required?.map((c, i) => (
                <li key={i}>{c.replace(/_/g, ' ')}</li>
              )) || <li>No conditions specified.</li>}
            </ul>
          </div>
          <div style={conditionMetaGrid}>
            <div>
              <label style={smallLabel}>OWNER</label>
              <div style={metaValue}>{conditions.condition_owner_id}</div>
            </div>
            <div>
              <label style={smallLabel}>DEADLINE</label>
              <div style={metaValue}>{conditions.condition_deadline_utc}</div>
            </div>
            <div>
              <label style={smallLabel}>REVALIDATION REQUIRED</label>
              <div style={metaValue}>{conditions.revalidation_required ? 'YES' : 'NO'}</div>
            </div>
          </div>
        </section>
      )}

      {/* MANDATORY FOOTER QUESTION */}
      <footer style={footerStyle}>
        <p>“Can this decision proceed, yes or no?”</p>
      </footer>
    </div>
  );
};

// --- IMMUTABLE UI STYLES ---
const headerStyle = { marginBottom: '40px' };
const titleStyle = { fontSize: '1.8rem', color: '#0a1a36', margin: '0 0 8px 0' };
const subheadStyle = { color: '#64748b', fontSize: '1rem', margin: 0 };

const gateContainer = (state) => ({
  padding: '40px',
  backgroundColor: state === 'blocked' ? '#fee2e2' : state === 'conditional' ? '#fffbeb' : '#f0fdf4',
  border: `2px solid ${state === 'blocked' ? '#ef4444' : state === 'conditional' ? '#f59e0b' : '#10b981'}`,
  borderRadius: '4px',
  marginBottom: '32px'
});

const gateGrid = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' };
const gateCell = { textAlign: 'center' };
const smallLabel = { display: 'block', fontSize: '0.6rem', fontWeight: '800', color: '#94a3b8', marginBottom: '8px', letterSpacing: '1px' };
const gateValue = { fontSize: '1.5rem', fontWeight: '900', color: '#0a1a36' };

const labelStyle = { fontSize: '0.7rem', fontWeight: '900', color: '#0a1a36', textTransform: 'uppercase', marginBottom: '20px', letterSpacing: '1px' };

const blockedDetail = { padding: '30px', backgroundColor: '#fff', border: '1px solid #fecaca', borderRadius: '4px' };
const reasonCode = { fontSize: '1.1rem', fontWeight: '900', color: '#ef4444', fontFamily: 'monospace' };
const rationaleText = { fontSize: '0.9rem', color: '#475569', margin: '8px 0 0 0' };

const conditionalDetail = { padding: '30px', backgroundColor: '#fff', border: '1px solid #fde68a', borderRadius: '4px' };
const conditionList = { margin: '8px 0 20px 0', paddingLeft: '20px', fontSize: '0.9rem', color: '#0a1a36', fontWeight: '600' };
const conditionMetaGrid = { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', borderTop: '1px solid #f1f5f9', paddingTop: '20px' };
const metaValue = { fontSize: '0.85rem', fontWeight: '700', color: '#475569' };

const fieldGroup = { marginBottom: '20px' };
const footerStyle = { marginTop: '48px', paddingTop: '24px', borderTop: '1px solid #f1f5f9', color: '#94a3b8', fontStyle: 'italic', fontSize: '0.85rem' };

export default Outcome;
