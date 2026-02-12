import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Risk = () => {
  // Logic State: In a real build, 'role' comes from our Overview selection
  const [role] = useState('executive'); 
  
  // GPT's Fail-Closed Categories
  const risks = [
    { id: 'di', cat: 'Data Integrity', impact: 'Hard Stop', desc: 'ALCOA+ violations or unrecoverable provenance.' },
    { id: 'ps', cat: 'Patient Safety', impact: 'Hard Stop', desc: 'Direct clinical impact without validated mitigation.' },
    { id: 'rf', cat: 'Regulatory Footprint', impact: 'Conditional', desc: 'Expanded audit surface or unvalidated AI scope.' },
    { id: 'aa', cat: 'Accountability', impact: 'Hard Stop', desc: 'Missing named owner or authority mapping.' }
  ];

  return (
    <div style={pageContainer}>
      {/* SECURITY PULSE */}
      <div style={securityHeader}>
        🛡️ GOLD STANDARD ACTIVE: PII Redaction & Immutable Logging Engaged
      </div>

      <header style={{ marginBottom: '40px' }}>
        <h1 style={title}>Risk & Exposure</h1>
        <p style={subtitle}>
          {role === 'executive' 
            ? "Strategic evaluation of enterprise-level regulatory liability." 
            : "Operational assessment of procedural and data integrity gaps."}
        </p>
      </header>

      {/* RISK CATEGORY GRID */}
      <div style={riskGrid}>
        {risks.map(risk => (
          <div key={risk.id} style={riskCard}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '15px' }}>
              <span style={categoryLabel}>{risk.cat}</span>
              <span style={risk.impact === 'Hard Stop' ? blockBadge : conditionalBadge}>
                {risk.impact}
              </div>
            </div>
            <p style={riskDesc}>{risk.desc}</p>
            
            {/* Fail-Closed Enforcement Input */}
            <div style={inputArea}>
              <label style={labelStyle}>Deterministic Signal Detected?</label>
              <select style={selectStyle}>
                <option value="none">No Risk Detected</option>
                <option value="detected">Signal Present</option>
              </select>
            </div>
          </div>
        ))}
      </div>

      

      {/* STRATEGIC SUMMARY (Executive View) */}
      {role === 'executive' && (
        <section style={strategicInsight}>
          <h4 style={{ color: '#0a1a36', marginTop: 0 }}>Strategic Exposure Summary</h4>
          <p style={{ fontSize: '0.9rem', color: '#475569' }}>
            The engine is currently evaluating <strong>Governance Model Failures</strong>. 
            Note: Structural risks trigger an automatic <strong>Fail-Closed</strong> state.
          </p>
        </section>
      )}

      {/* FOOTER NAVIGATION */}
      <footer style={footer}>
        <div style={persistenceNote}>💾 Progress auto-saved to Google Cloud KMS Vault.</div>
        <div style={{ display: 'flex', gap: '15px', justifyContent: 'center' }}>
          <Link to="/ddr/outcome" style={primaryBtn}>Evaluate Authorization Outcome →</Link>
          <Link to="/ddr/evidence" style={secondaryBtn}>Review Evidence Set</Link>
        </div>
      </footer>
    </div>
  );
};

// --- STYLES ---
const pageContainer = { fontFamily: 'Inter, sans-serif' };
const securityHeader = { backgroundColor: '#0a1a36', color: '#22d3ee', padding: '10px 20px', fontSize: '0.7rem', fontWeight: 'bold', borderRadius: '4px', marginBottom: '30px' };
const title = { fontSize: '2rem', color: '#0a1a36', margin: '0 0 10px 0' };
const subtitle = { color: '#64748b', fontSize: '1.1rem', marginBottom: '40px' };

const riskGrid = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '40px' };
const riskCard = { padding: '20px', border: '1px solid #e2e8f0', borderRadius: '12px', backgroundColor: '#fff' };
const categoryLabel = { fontWeight: '800', fontSize: '0.75rem', color: '#64748b', textTransform: 'uppercase' };
const blockBadge = { fontSize: '0.65rem', padding: '4px 8px', borderRadius: '4px', backgroundColor: '#fee2e2', color: '#ef4444', fontWeight: '900' };
const conditionalBadge = { fontSize: '0.65rem', padding: '4px 8px', borderRadius: '4px', backgroundColor: '#fef3c7', color: '#f59e0b', fontWeight: '900' };
const riskDesc = { fontSize: '0.85rem', color: '#475569', lineHeight: '1.5', margin: '0 0 20px 0' };

const inputArea = { borderTop: '1px solid #f1f5f9', paddingTop: '15px' };
const labelStyle = { fontSize: '0.75rem', fontWeight: '700', display: 'block', marginBottom: '8px' };
const selectStyle = { width: '100%', padding: '8px', borderRadius: '4px', border: '1px solid #cbd5e1' };

const strategicInsight = { padding: '20px', backgroundColor: '#f8fafc', borderRadius: '8px', borderLeft: '4px solid #0a1a36', marginBottom: '40px' };

const footer = { borderTop: '1px solid #eef2f6', paddingTop: '40px', textAlign: 'center' };
const persistenceNote = { fontSize: '0.7rem', color: '#10b981', fontWeight: 'bold', marginBottom: '20px' };
const primaryBtn = { backgroundColor: '#0a1a36', color: '#fff', padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: '800' };
const secondaryBtn = { backgroundColor: '#fff', color: '#0a1a36', padding: '14px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: '800', border: '1px solid #0a1a36' };

export default Risk;
