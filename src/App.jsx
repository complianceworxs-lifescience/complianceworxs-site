import React, { useState } from 'react';
import './index.css';

export default function App() {
  const [authState, setAuthState] = useState('blocked');

  // Hardcoded signals for a perfect, error-free demo
  const staticSignals = [
    { id: 'SIG-2026-01', name: 'Autonomous Risk Assessment', status: 'Authorized', latency: 12 },
    { id: 'SIG-2026-02', name: 'DDR Logic Validation', status: 'Review', latency: 24 },
    { id: 'SIG-2026-03', name: 'Regulatory Signal Bridge', status: 'Blocked', latency: 8 }
  ];

  const getPanelData = () => {
    const panels = {
      authorized: { title: 'Proof Authorized', class: 'panel-authorized', text: 'Thresholds met. Proof generated.' },
      review: { title: 'Under Review', class: 'panel-review', text: 'Rationale captured. Pending verification.' },
      blocked: { title: 'Proof Blocked', class: 'panel-blocked', text: 'No defensible proof generated.' }
    };
    return panels[authState] || panels.blocked;
  };

  const panel = getPanelData();

  return (
    <div className="app-wrapper">
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-left">COMPLIANCEWORXS AUTHORIZATION ENGINE™</div>
          <div className="badge badge-blocked">Proof {authState} by design</div>
        </div>
      </div>

      <header className="header">
        <div className="header-inner">
          <div className="brand">
            <div className="brand-name">COMPLIANCEWORXS</div>
            <div className="brand-tag">Defensible decisions, before inspection.</div>
          </div>
          <nav className="nav">
            <a href="#stream" className="navlink">Intelligence Stream</a>
          </nav>
          <div className="header-actions">
            <button className="button-primary">Start Assessment</button>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1>Decision-Grade Compliance Intelligence</h1>
            <p className="lead">Proof is generated only after defensibility thresholds are met.</p>
            
            <div className="demo-toggle" id="stream">
              <div className="demo-label">Intelligence Stream (Demo Mode)</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' }}>
                {staticSignals.map((signal, i) => (
                  <div key={i} className="pill" style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <span>{signal.name}</span>
                    <span style={{ opacity: 0.5 }}>{signal.latency}ms</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={`panel ${panel.class}`}>
            <div className="panel-title">{panel.title}</div>
            <p className="panel-body">{panel.text}</p>
          </div>
        </div>
      </section>

      <div className="authority-band">
        <p>Proof generation is governed. Indefensible proof is blocked by design.</p>
      </div>
    </div>
  );
}
