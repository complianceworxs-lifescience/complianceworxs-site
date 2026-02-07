import React, { useState } from 'react';
import './index.css';

export default function App() {
  // State to manage the authorization status demo
  const [authState, setAuthState] = useState('blocked');

  // Helper to get panel content based on state defined in your original CSS
  const getPanelData = () => {
    switch (authState) {
      case 'authorized':
        return {
          title: 'Proof Authorized',
          text: 'Defensibility thresholds met. Official proof has been generated and timestamped.',
          class: 'panel-authorized'
        };
      case 'review':
        return {
          title: 'Under Review',
          text: 'Decision rationale captured. Waiting for final verification of evidence.',
          class: 'panel-review'
        };
      default:
        return {
          title: 'Proof Blocked',
          text: 'No defensible proof may be generated until authorization thresholds are met.',
          class: 'panel-blocked'
        };
    }
  };

  const panel = getPanelData();

  return (
    <div className="app-wrapper">
      {/* Top Authority Bar */}
      <div className="topbar">
        <div className="topbar-inner">
          <div className="topbar-left">COMPLIANCEWORXS AUTHORIZATION ENGINE™</div>
          <div className="topbar-right">
            <div className={`badge badge-${authState}`}>
              <span className="badge-title">
                {authState === 'blocked' ? 'Not Authorized' : authState.charAt(0).toUpperCase() + authState.slice(1)}
              </span>
              <span className="badge-sub">Proof {authState} by design</span>
            </div>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className="header">
        <div className="header-inner">
          <div className="brand">
            <div className="brand-name">COMPLIANCEWORXS</div>
            <div className="brand-tag">Defensible decisions, before inspection.</div>
          </div>
          <nav className="nav">
            <a href="#overview" className="navlink">Overview</a>
            <a href="#pricing" className="navlink">Pricing</a>
            <a href="#stream" className="navlink">Intelligence Stream</a>
            <a href="#authority" className="navlink">Authority</a>
            <a href="#access" className="navlink">Access</a>
          </nav>
          <div className="header-actions">
            <button className="button-secondary">Sign In</button>
            <button className="button-primary">Start Assessment</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-inner">
          <div className="hero-copy">
            <h1>Decision-Grade Compliance Intelligence</h1>
            <p className="lead">
              ComplianceWorxs evaluates regulatory decisions before documentation exists. 
              Proof is generated only after defensibility thresholds are met.
            </p>
            <div className="cta-row">
              <button className="button-primary">Start Assessment</button>
              <button className="link-button" style={{color: 'inherit', marginLeft: '12px'}}>How Authorization Works →</button>
            </div>

            {/* Demo Toggles - Mapping to your .pill classes */}
            <div className="demo-toggle">
              <div className="demo-label">Demo: authorization state</div>
              <div className="demo-buttons">
                {['blocked', 'review', 'authorized'].map((state) => (
                  <button 
                    key={state}
                    className={`pill ${authState === state ? 'active' : ''}`}
                    onClick={() => setAuthState(state)}
                  >
                    {state.charAt(0).toUpperCase() + state.slice(1)}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* This panel maps to your .panel and .panel-blocked/review/authorized classes */}
          <div className={`panel ${panel.class}`}>
            <div className="panel-title">{panel.title}</div>
            <p className="panel-body">{panel.text}</p>
          </div>
        </div>
      </section>

      {/* DDR Section */}
      <section className="container">
        <h2>Deterministic Decision Review (DDR)</h2>
        <p>
          DDR captures the signal, the decision, the rationale, and the evidence. 
          If the decision cannot be defended, proof is blocked by design.
        </p>
        
        <div className="grid">
          <div className="card">
            <h3>Documentation Does Not Equal Defensibility</h3>
            <ul>
              <li>Inspectors assess decisions, not document volume</li>
              <li>Proof without defensibility increases inspection risk</li>
              <li>Most compliance failures begin with the wrong decision</li>
            </ul>
          </div>
          <div className="card">
            <h3>How the System Works</h3>
            <ol>
              <li>Assess the decision</li>
              <li>Authorize proof</li>
              <li>Block risk</li>
            </ol>
          </div>
        </div>
      </section>

      {/* Footer */}
      <div className="authority-band">
        <p>Proof generation is governed. Indefensible proof is blocked by design.</p>
      </div>
    </div>
  );
}
