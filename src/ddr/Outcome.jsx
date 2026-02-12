import React from 'react';
import { Link } from 'react-router-dom';

const Overview = () => {
  return (
    <div style={containerStyle}>
      {/* 1. MISSION STATEMENT */}
      <section style={missionSection}>
        <h2 style={missionHeader}>
          Authority is how ComplianceWorxs decides what proof is allowed to exist—before inspection.
        </h2>
        <p style={missionSubtext}>
          A governed system that maps regulatory signals to defensible actions, assigns ownership, and enforces fail-closed controls when evidence or entitlement is missing.
        </p>
        <div style={buttonGroup}>
          <Link to="/ddr/context" style={primaryBtn}>Test a Decision →</Link>
          <button style={secondaryBtn}>View Intelligence Stream</button>
        </div>
      </section>

      {/* 2. ENGINE LOGIC GRID (Replicating your screenshot) */}
      <section style={gridSection}>
        <h3 style={gridTitle}>How the engine decides</h3>
        <div style={gridDisplay}>
          <div style={cardStyle}>
            <strong>Fail-closed</strong>
            <p>If governance is missing, proof cannot proceed.</p>
          </div>
          <div style={cardStyle}>
            <strong>Decision</strong>
            <p>What is being approved or executed.</p>
          </div>
          <div style={cardStyle}>
            <strong>Inspection-ready</strong>
            <p>Decisions are explainable and relyable as an audit narrative.</p>
          </div>
          <div style={cardStyle}>
            <strong>Signal</strong>
            <p>What changed and why it matters.</p>
          </div>
          <div style={cardStyle}>
            <strong>Risk & Exposure</strong>
            <p>Who is accountable under inspection.</p>
          </div>
          <div style={cardStyle}>
            <strong>Gate</strong>
            <p>Authorize, conditional, or blocked.</p>
          </div>
        </div>
      </section>

      {/* 3. FINAL CALL TO ACTION */}
      <footer style={finalFooter}>
        <h3 style={{ marginBottom: '10px' }}>Make proof a controlled outcome.</h3>
        <p style={{ marginBottom: '30px', opacity: 0.7 }}>Start with a decision. Get a deterministically governed result.</p>
        <Link to="/ddr/context" style={finalBtn}>Start a Decision Assessment →</Link>
      </footer>
    </div>
  );
};

// --- STYLES ---
const containerStyle = { fontFamily: 'Inter, system-ui, sans-serif', color: '#0a1a36' };
const missionSection = { textAlign: 'center', padding: '40px 0 60px', borderBottom: '1px solid #eef2f6' };
const missionHeader = { fontSize: '1.8rem', fontWeight: '800', maxWidth: '800px', margin: '0 auto 20px' };
const missionSubtext = { fontSize: '1rem', color: '#64748b', maxWidth: '700px', margin: '0 auto 30px', lineHeight: '1.6' };
const buttonGroup = { display: 'flex', gap: '15px', justifyContent: 'center' };

const gridSection = { padding: '60px 0', backgroundColor: '#f8fafc', borderRadius: '12px', marginTop: '40px' };
const gridTitle = { fontSize: '1.1rem', fontWeight: '800', marginBottom: '30px', paddingLeft: '40px', textTransform: 'uppercase', letterSpacing: '1px' };
const gridDisplay = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '20px', padding: '0 40px' };

const cardStyle = { backgroundColor: '#fff', padding: '25px', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' };

const primaryBtn = { backgroundColor: '#2dd4bf', color: '#fff', padding: '12px 24px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700' };
const secondaryBtn = { backgroundColor: '#64748b', color: '#fff', padding: '12px 24px', borderRadius: '6px', border: 'none', fontWeight: '700', cursor: 'pointer' };

const finalFooter = { textAlign: 'center', padding: '80px 0', marginTop: '40px' };
const finalBtn = { backgroundColor: '#0a1a36', color: '#fff', padding: '16px 32px', borderRadius: '6px', textDecoration: 'none', fontWeight: '800' };

export default Overview;
