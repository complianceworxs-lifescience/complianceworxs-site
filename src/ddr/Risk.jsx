import React from 'react';

const Risk = ({ ddrRecord }) => {
  // Pulling directly from the canonical schema
  const risk = ddrRecord?.risk_classification || {};
  const failClosed = ddrRecord?.fail_closed_evaluation || {};

  return (
    <div className="ddr-risk-view">
      {/* HEADER: MISSION ALIGNMENT */}
      <header style={headerStyle}>
        <h1 style={titleStyle}>Risk & Regulatory Exposure</h1>
        <p style={subheadStyle}>Deterministic classification of regulatory risk prior to authorization.</p>
      </header>

      {/* 1. CATEGORIES: DECLARATION OF EXPOSURE */}
      <section style={sectionStyle}>
        <h3 style={labelStyle}>1.0 Risk Categories Identified</h3>
        <div style={categoryGrid}>
          {['data_integrity', 'patient_safety', 'regulatory_footprint', 'authorization_accountability'].map(cat => (
            <div key={cat} style={categoryBadge(risk.risk_categories?.includes(cat))}>
              {cat.replace('_', ' ').toUpperCase()}
            </div>
          ))}
        </div>
      </section>

      {/* 2, 3, 4. SEVERITY, NATURE, MATERIALITY */}
      <section style={metricsGrid}>
        <div style={metricCard}>
          <span style={smallLabel}>2.0 RISK SEVERITY</span>
          <span style={metricValue}>{risk.risk_severity?.toUpperCase() || 'UNDEFINED'}</span>
        </div>
        <div style={metricCard}>
          <span style={smallLabel}>3.0 RISK NATURE</span>
          <span style={metricValue}>{risk.risk_nature?.toUpperCase() || 'UNDEFINED'}</span>
        </div>
        <div style={metricCard}>
          <span style={smallLabel}>4.0 MATERIAL RISK</span>
          <span style={metricValue}>{risk.material_risk_flag ? 'YES' : 'NO'}</span>
        </div>
      </section>

      {/* 5. FAIL-CLOSED STATUS: THE SIGNAL */}
      <section style={signalContainer(failClosed.fail_closed_triggered)}>
        <h3 style={labelStyle}>5.0 Fail-Closed Status</h3>
        <div style={signalValue}>
          {failClosed.fail_closed_triggered ? 'TRIGGERED' : 'NOT TRIGGERED'}
        </div>
      </section>

      {/* MANDATORY FOOTER QUESTION */}
      <footer style={footerStyle}>
        <p>“Is this decision risky from a regulatory standpoint, and why?”</p>
      </footer>
    </div>
  );
};

// --- IMMUTABLE UI STYLES ---
const headerStyle = { marginBottom: '40px' };
const titleStyle = { fontSize: '1.8rem', color: '#0a1a36', margin: '0 0 8px 0' };
const subheadStyle = { color: '#64748b', fontSize: '1rem', margin: 0 };

const sectionStyle = { marginBottom: '32px' };
const labelStyle = { fontSize: '0.7rem', fontWeight: '900', color: '#94a3b8', textTransform: 'uppercase', marginBottom: '16px', letterSpacing: '1px' };

const categoryGrid = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' };
const categoryBadge = (isActive) => ({
  padding: '16px',
  borderRadius: '4px',
  border: '1px solid #e2e8f0',
  backgroundColor: isActive ? '#f1f5f9' : '#fff',
  color: isActive ? '#0a1a36' : '#cbd5e1',
  fontWeight: isActive ? '800' : '400',
  fontSize: '0.75rem',
  textAlign: 'center'
});

const metricsGrid = { display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1px', backgroundColor: '#e2e8f0', border: '1px solid #e2e8f0', marginBottom: '32px' };
const metricCard = { backgroundColor: '#fff', padding: '24px', textAlign: 'center' };
const smallLabel = { display: 'block', fontSize: '0.6rem', fontWeight: '800', color: '#94a3b8', marginBottom: '8px' };
const metricValue = { fontSize: '1.1rem', fontWeight: '900', color: '#0a1a36' };

const signalContainer = (triggered) => ({
  padding: '32px',
  backgroundColor: triggered ? '#fff1f2' : '#f0fdf4',
  border: `1px solid ${triggered ? '#fecaca' : '#bbf7d0'}`,
  textAlign: 'center',
  borderRadius: '4px'
});
const signalValue = { fontSize: '1.5rem', fontWeight: '900', color: '#0a1a36' };

const footerStyle = { marginTop: '48px', paddingTop: '24px', borderTop: '1px solid #f1f5f9', color: '#94a3b8', fontStyle: 'italic', fontSize: '0.85rem' };

export default Risk;
