import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Overview = () => {
  // Altitude State: Governs the complexity of content sequencing
  const [role, setRole] = useState('executive'); 

  return (
    <div style={containerStyle}>
      {/* 1. PERSPECTIVE TOGGLE (The "Altitude" Selector) */}
      <div style={selectorWrapper}>
        <p style={selectorLabel}>Tailor your DDR experience:</p>
        <div style={toggleContainer}>
          <button 
            onClick={() => setRole('operational')}
            style={role === 'operational' ? activeToggle : inactiveToggle}
          >
            Operational / Frontline
          </button>
          <button 
            onClick={() => setRole('executive')}
            style={role === 'executive' ? activeToggle : inactiveToggle}
          >
            Strategic / Executive
          </button>
        </div>
      </div>

      {/* 2. ADAPTIVE CONTENT SEQUENCING */}
      <header style={headerStyle}>
        {role === 'executive' ? (
          <>
            <h1 style={titleStyle}>Decision Authority & Risk Oversight</h1>
            <p style={subtextStyle}>
              Identify regulatory exposure and authorize proof generation at scale. 
              Focus on <strong>market risk</strong> and <strong>decision ownership</strong>.
            </p>
          </>
        ) : (
          <>
            <h1 style={titleStyle}>Deterministic Decision Workflow</h1>
            <p style={subtextStyle}>
              Execute step-by-step artifact validation. Focus on <strong>data integrity</strong> 
              and <strong>GxP-compliant evidence sets</strong>.
            </p>
          </>
        )}
      </header>

      {/* 3. LOGIC GRID (Consistent branding across roles) */}
      <div style={gridStyle}>
        <div style={cardStyle}>
          <h4 style={cardTitle}>Fail-Closed</h4>
          <p style={cardText}>If governance is missing, proof cannot proceed.</p>
        </div>
        <div style={cardStyle}>
          <h4 style={cardTitle}>Gate Logic</h4>
          <p style={cardText}>Authorize, Conditional, or Blocked outcomes.</p>
        </div>
      </div>

      {/* 4. PERSISTENCE NOTIFICATION */}
      <footer style={footerStyle}>
        <div style={persistenceBadge}>
          💾 Progress auto-saves to your Google Cloud secure vault.
        </div>
        <Link to="/ddr/context" style={ctaStyle}>
          {role === 'executive' ? 'Enter Risk Assessment →' : 'Begin Decision Context →'}
        </Link>
      </footer>
    </div>
  );
};

// --- STYLES ---
const containerStyle = { padding: '20px', fontFamily: 'Inter, sans-serif' };
const selectorWrapper = { marginBottom: '40px', textAlign: 'center' };
const selectorLabel = { fontSize: '0.8rem', fontWeight: '800', color: '#64748b', textTransform: 'uppercase', marginBottom: '10px' };
const toggleContainer = { display: 'inline-flex', background: '#f1f5f9', padding: '4px', borderRadius: '8px' };
const activeToggle = { padding: '8px 20px', background: '#0a1a36', color: '#fff', border: 'none', borderRadius: '6px', fontWeight: '700', cursor: 'pointer' };
const inactiveToggle = { padding: '8px 20px', background: 'transparent', color: '#64748b', border: 'none', fontWeight: '600', cursor: 'pointer' };
const headerStyle = { marginBottom: '40px' };
const titleStyle = { fontSize: '2.2rem', color: '#0a1a36', marginBottom: '15px' };
const subtextStyle = { fontSize: '1.1rem', color: '#475569', lineHeight: '1.6', maxWidth: '700px' };
const gridStyle = { display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', marginBottom: '60px' };
const cardStyle = { padding: '25px', borderRadius: '12px', border: '1px solid #e2e8f0', backgroundColor: '#fff' };
const cardTitle = { margin: '0 0 10px 0', fontSize: '1rem', fontWeight: '800' };
const cardText = { margin: 0, fontSize: '0.9rem', color: '#64748b' };
const footerStyle = { textAlign: 'center', borderTop: '1px solid #f1f5f9', paddingTop: '40px' };
const persistenceBadge = { fontSize: '0.75rem', color: '#10b981', marginBottom: '20px', fontWeight: 'bold' };
const ctaStyle = { display: 'inline-block', padding: '16px 32px', backgroundColor: '#f6a623', color: '#0a1a36', textDecoration: 'none', borderRadius: '6px', fontWeight: '900', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' };

export default Overview;
