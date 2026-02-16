import React from 'react';
import { HashRouter as Router, Routes, Route, Link, Outlet, Navigate } from 'react-router-dom';
import FinalAssessment from './ddr/FinalAssessment';
import DecisionContext from './ddr/DecisionContext';
import RiskExposure from './ddr/RiskExposure';
import EvidenceSet from './ddr/EvidenceSet';
import ReviewTraceability from './ddr/ReviewTraceability';
import DDRSummary from './ddr/DDRSummary';
import DecisionOutcome from './ddr/DecisionOutcome';
import Success from './ddr/Success';
import Pricing from "./pages/Pricing";
import IntelligenceStream from "./pages/IntelligenceStream";


// Inline SVG Icon Components
const Shield = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const CheckCircle = ({ size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const XCircle = ({ size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <circle cx="12" cy="12" r="10" />
    <line x1="15" y1="9" x2="9" y2="15" />
    <line x1="9" y1="9" x2="15" y2="15" />
  </svg>
);

const AlertTriangle = ({ size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);

// Main Layout Component
const MainLayout = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#0B1F2A',
        color: 'white',
        padding: '12px 0',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '13px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Shield size={14} />
            <span style={{ fontWeight: '600', letterSpacing: '0.5px' }}>COMPLIANCEWORKXS</span>
            <span style={{
              marginLeft: '8px',
              fontSize: '11px',
              opacity: '0.8',
              textTransform: 'uppercase',
              letterSpacing: '0.3px'
            }}>
              AUTHORIZATION ENGINE™
            </span>
          </div>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <span style={{ opacity: '0.9' }}>Proof: premium layer: VDAs</span>
            <span style={{ opacity: '0.9' }}>Layer 6/Engine</span>
            <span style={{ opacity: '0.9' }}>New enrolls.</span>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #e5e7eb',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '64px'
        }}>
          <Link to="/" style={{
            fontSize: '24px',
            fontWeight: '700',
            color: '#1e293b',
            textDecoration: 'none',
            letterSpacing: '-0.5px'
          }}>
            COMPLIANCEWORKXS
          </Link>

          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <Link to="/" style={{
              color: '#475569',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '500'
            }}>
              Overview
            </Link>
            <a href="#pricing" style={{
              color: '#475569',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '500'
            }}>
              Pricing
            </a>
            <a href="#intelligence" style={{
              color: '#475569',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '500'
            }}>
              Intelligence Stream
            </a>
            <a href="#security" style={{
              color: '#475569',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '500'
            }}>
              Security
            </a>
            <a href="#access" style={{
              color: '#475569',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '500'
            }}>
              Access
            </a>
            <Link to="/ddr" style={{
              backgroundColor: '#F2B233',
              color: '#0B1F2A',
              padding: '10px 24px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '600',
              transition: 'all 0.2s'
            }}>
              Start Assessment
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ flex: 1 }}>
        {children}
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#0B1F2A',
        color: 'white',
        padding: '48px 0 24px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '48px',
            marginBottom: '48px'
          }}>
            {/* Company */}
            <div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                marginBottom: '16px',
                letterSpacing: '0.5px'
              }}>
                COMPLIANCEWORKXS
              </h3>
              <p style={{
                fontSize: '13px',
                lineHeight: '1.6',
                opacity: '0.85'
              }}>
                A promised compliance partner that performs proofs insights, shift towards an ecosystem of verifiable, defendible.
              </p>
            </div>

            {/* Governance */}
            <div>
              <h4 style={{
                fontSize: '14px',
                fontWeight: '600',
                marginBottom: '16px',
                color: 'white'
              }}>
                Governance
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '13px',
                lineHeight: '2'
              }}>
                <li style={{ opacity: '0.85' }}>Quality measures</li>
                <li style={{ opacity: '0.85' }}>Analysis of reg duty and story automated</li>
                <li style={{ opacity: '0.85' }}>Audit admin files</li>
                <li style={{ opacity: '0.85' }}>Formalize Playbook</li>
                <li style={{ opacity: '0.85' }}>Smart ethics, extensibility, detection.</li>
              </ul>
            </div>

            {/* Intelligence */}
            <div>
              <h4 style={{
                fontSize: '14px',
                fontWeight: '600',
                marginBottom: '16px',
                color: 'white'
              }}>
                Intelligence
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '13px',
                lineHeight: '2'
              }}>
                <li style={{ opacity: '0.85' }}>Regulatory Feedeals</li>
                <li style={{ opacity: '0.85' }}>Hire Monty of investment</li>
                <li style={{ opacity: '0.85' }}>Workflow dynamics</li>
                <li style={{ opacity: '0.85' }}>Atrial sequences</li>
                <li style={{ opacity: '0.85' }}>Dessert thresholds Incinerate</li>
              </ul>
            </div>

            {/* Legal & Procurement */}
            <div>
              <h4 style={{
                fontSize: '14px',
                fontWeight: '600',
                marginBottom: '16px',
                color: 'white'
              }}>
                Legal & Procurement
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '13px',
                lineHeight: '2'
              }}>
                <li style={{ opacity: '0.85' }}>Buyer FAQ</li>
                <li style={{ opacity: '0.85' }}>Procd Rectie INAC</li>
                <li style={{ opacity: '0.85' }}>Regulatory Byproduct</li>
                <li style={{ opacity: '0.85' }}>Secure Access</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '13px',
            opacity: '0.75'
          }}>
            <div>© ComplianceWorxs. All rights reserved</div>
            <div>+1 (203) 538-0107</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Home Component
const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '600px',
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        {/* Background Image Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("/images/Screenshot (15).png")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 1.0,
          zIndex: 0
        }} />

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '80px 24px',
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr', 
          justifyItems: 'start',
          alignItems: 'center'
        }}>
          {/* Left Content */}
          <div style={{
            backgroundColor: 'rgba(30, 142, 138, 0.85)',
            padding: '40px',
            borderRadius: '12px',
            boxShadow: '0 8px 32px rgba(0,0,0,0.15)',
            backdropFilter: 'blur(8px)',
            maxWidth: '600px'
          }}>
            <h1 style={{
              fontSize: '42px',
              fontWeight: '800',
              color: '#FFFFFF', 
              lineHeight: '1.2',
              marginBottom: '20px',
              textShadow: '0px 2px 4px rgba(0,0,0,0.2)'
            }}>
              Authorize Proof Only When a Decision Can Be Defended
            </h1>
            <p style={{
              fontSize: '18px',
              color: '#FFFFFF', 
              lineHeight: '1.6',
              marginBottom: '32px',
              fontWeight: '500',
              textShadow: '0px 1px 2px rgba(0,0,0,0.2)'
            }}>
              Documented defensibility before proof exists.<br />
              Proof is granted only when thresholds are met.
            </p>
            <Link to="/ddr" style={{
              display: 'inline-block',
              backgroundColor: '#F2B233',
              color: '#0B1F2A',
              padding: '14px 32px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '600',
              transition: 'all 0.2s',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
              Start Decision Defensibility Assessment →
            </Link>
          </div>
        </div>
      </section>

      {/* Authorization Band (Previously Updated Section) */}
      <section style={{ backgroundColor: '#eef3f7', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#0b1f2a', marginBottom: '40px' }}>
            Proof Is Authorized — Not Assumed
          </h2>
          <div style={{ 
            backgroundColor: 'white', borderRadius: '8px', border: '1px solid #e2e8f0', 
            boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)', padding: '40px 32px 30px', overflow: 'hidden' 
          }}>
            <div style={{ display: 'flex', alignItems: 'center', border: '1px solid #e2e8f0', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '24px', position: 'relative' }}>
                <div style={{ width: '8px', height: '48px', backgroundColor: '#0b1f2a', position: 'absolute', left: 0 }} />
                <div style={{ paddingLeft: '24px', textAlign: 'left' }}>
                  <div style={{ fontSize: '13px', fontWeight: '800', color: '#0b1f2a' }}>DECISION EVALUATED</div>
                  <div style={{ fontSize: '14px', color: '#64748b' }}>Before documentation exists</div>
                </div>
              </div>
              <div style={{ fontSize: '24px', color: '#cbd5e1', padding: '0 10px' }}>›</div>
              <div style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '24px', position: 'relative' }}>
                <div style={{ width: '8px', height: '48px', backgroundColor: '#2f8f8b', position: 'absolute', left: 0 }} />
                <div style={{ paddingLeft: '24px', textAlign: 'left' }}>
                  <div style={{ fontSize: '13px', fontWeight: '800', color: '#0b1f2a' }}>DEFENSIBILITY VERIFIED</div>
                  <div style={{ fontSize: '14px', color: '#2f8f8b' }}>Thresholds enforced</div>
                </div>
              </div>
              <div style={{ fontSize: '24px', color: '#cbd5e1', padding: '0 10px' }}>›</div>
              <div style={{ flex: 1.2, display: 'flex', alignItems: 'center', padding: '24px', position: 'relative', backgroundColor: '#fdf7ec' }}>
                <div style={{ width: '8px', height: '48px', backgroundColor: '#f2b233', position: 'absolute', left: 0 }} />
                <div style={{ paddingLeft: '24px', textAlign: 'left' }}>
                  <div style={{ fontSize: '13px', fontWeight: '800', color: '#0b1f2a' }}>INDEFENSIBLE PROOF BLOCKED</div>
                  <div style={{ fontSize: '14px', color: '#64748b' }}>By system design</div>
                </div>
              </div>
            </div>
            <div style={{ marginTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
              <div style={{ height: '1px', flex: 1, background: 'linear-gradient(to right, transparent, #e2e8f0)' }} />
              <p style={{ fontSize: '13px', color: '#64748b' }}>Documentation is produced only after a decision passes authorization.</p>
              <div style={{ height: '1px', flex: 1, background: 'linear-gradient(to left, transparent, #e2e8f0)' }} />
            </div>
          </div>
        </div>
      </section>

     {/* TWO COLUMN SECTION — MISSING RATIONALE (REPLACES 424–571 ONLY) */}
<section style={{
  backgroundColor: 'white',
  padding: '96px 24px',
  backgroundImage: 'linear-gradient(to right, #ffffff 50%, #f8fafc 50%)'
}}>
  <div style={{
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '80px'
  }}>

    {/* LEFT COLUMN — INSPECTION RISK */}
    <div style={{ padding: '20px 0' }}>
      <h3 style={{
        fontSize: '32px',
        fontWeight: 700,
        color: '#0b1f2a',
        marginBottom: '24px',
        lineHeight: 1.2
      }}>
        Inspection Risk Increases<br />
        When Rationale Is Missing
      </h3>

      <p style={{
        fontSize: '16px',
        color: '#475569',
        marginBottom: '32px',
        lineHeight: 1.6,
        maxWidth: '520px'
      }}>
        Proof that exists without an auditable decision rationale is interpreted as
        uncontrolled judgment during inspection.
      </p>

      {/* DECISION RECORD CARD */}
      <div style={{
        backgroundColor: '#ffffff',
        border: '1px solid #e2e8f0',
        borderRadius: '8px',
        padding: '24px',
        maxWidth: '460px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.06)'
      }}>
        <div style={{
          fontSize: '13px',
          fontWeight: 800,
          color: '#0b1f2a',
          borderBottom: '2px solid #0b1f2a',
          paddingBottom: '8px',
          marginBottom: '20px',
          letterSpacing: '0.05em'
        }}>
          DECISION RECORD
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
          <span style={{ fontSize: '13px', color: '#64748b' }}>Decision Basis</span>
          <CheckCircle size={14} style={{ color: '#2f8f8b' }} />
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <span style={{ fontSize: '13px', color: '#64748b' }}>Decision Rationale</span>
          <span style={{
            fontSize: '12px',
            fontWeight: 800,
            color: '#ef4444'
          }}>
            MISSING
          </span>
        </div>

        {/* RED FLAG */}
        <div style={{
          marginTop: '20px',
          backgroundColor: '#fef2f2',
          borderLeft: '4px solid #ef4444',
          padding: '12px',
          display: 'flex',
          gap: '10px',
          alignItems: 'center'
        }}>
          <div style={{
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            backgroundColor: '#ef4444',
            color: 'white',
            fontSize: '12px',
            fontWeight: 800,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            !
          </div>
          <span style={{
            fontSize: '13px',
            color: '#991b1b',
            fontWeight: 700
          }}>
            Audit finding: Evidence approved without documented rationale
          </span>
        </div>
      </div>
    </div>

    {/* RIGHT COLUMN — PROCEDURAL MECHANISM (UNCHANGED STRUCTURE) */}
    <div style={{ padding: '20px 40px', position: 'relative' }}>
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundImage: 'radial-gradient(#cbd5e1 0.5px, transparent 0.5px)',
        backgroundSize: '24px 24px',
        opacity: 0.15,
        pointerEvents: 'none'
      }} />

      <h3 style={{
        fontSize: '32px',
        fontWeight: 700,
        color: '#0b1f2a',
        marginBottom: '40px',
        lineHeight: 1.2,
        position: 'relative'
      }}>
        How the System Works
      </h3>

      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '32px',
        position: 'relative'
      }}>
        <div style={{
          position: 'absolute',
          left: '16px',
          top: '32px',
          bottom: '32px',
          width: '1px',
          borderLeft: '2px dotted #cbd5e1'
        }} />

{/* REVISED TWO COLUMN SECTION (Screenshot 1 High Fidelity) */}
      <section style={{ position: 'relative', padding: '96px 24px', overflow: 'hidden' }}>
        {/* Background Image with 0.1 Opacity */}
        <div style={{ 
          position: 'absolute', inset: 0, 
        backgroundImage: 'url("/images/screenshot-13.png")',
        backgroundSize: 'cover', backgroundPosition: 'center',
          opacity: 0.1, zIndex: -1 
        }} />
        
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
          
          {/* Left Column: Strategic Message & Decision Card */}
          <div style={{ padding: '20px 0' }}>
            <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#0b1f2a', marginBottom: '24px', lineHeight: '1.2' }}>
              Why Documentation Fails —<br />
              and What the System Enforces Instead
            </h2>
            <p style={{ fontSize: '18px', color: '#0b1f2a', fontWeight: '600', marginBottom: '16px' }}>
              Compliance failures originate at the decision layer — not the documentation layer.
            </p>
            <p style={{ fontSize: '16px', color: '#475569', marginBottom: '40px', lineHeight: '1.6' }}>
              Inspection risk increases when proof exists without an auditable decision rationale.
            </p>

            {/* Decision Record Visual Metaphor */}
            <div style={{ backgroundColor: '#fff', padding: '32px', borderRadius: '8px', border: '1px solid #e2e8f0', boxShadow: '0 10px 30px rgba(0,0,0,0.05)', position: 'relative', maxWidth: '450px' }}>
               <div style={{ fontSize: '14px', fontWeight: '700', borderBottom: '2px solid #0b1f2a', paddingBottom: '8px', marginBottom: '20px', color: '#0b1f2a' }}>Decision Record</div>
               <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9', paddingBottom: '4px' }}>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>Decision Basis</span>
                    <CheckCircle size={14} style={{ color: '#2f8f8b' }} />
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid #f1f5f9', paddingBottom: '4px' }}>
                    <span style={{ fontSize: '12px', color: '#64748b' }}>Decision Rationale</span>
                    <span style={{ color: '#ef4444', fontSize: '11px', fontWeight: '800', letterSpacing: '0.05em' }}>[ MISSING RATIONALE ]</span>
                  </div>
               </div>
               {/* Audit Finding Warning Badge */}
               <div style={{ marginTop: '24px', backgroundColor: '#fef2f2', borderLeft: '4px solid #ef4444', padding: '12px', display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <div style={{ backgroundColor: '#ef4444', color: 'white', width: '20px', height: '20px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 'bold' }}>!</div>
                  <span style={{ fontSize: '13px', color: '#991b1b', fontWeight: '700' }}>Audit finding: Evidence approved without documented basis</span>
               </div>
            </div>
          </div>

          {/* Right Column: Enforcement Mechanism Schematic */}
          <div style={{ padding: '20px 40px', position: 'relative', backgroundColor: 'rgba(255,255,255,0.7)', borderRadius: '12px', backdropFilter: 'blur(4px)' }}>
            <h3 style={{ fontSize: '28px', fontWeight: '700', color: '#0b1f2a', marginBottom: '40px' }}>What the System Enforces</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', position: 'relative' }}>
              {/* Vertical Schematic Connector */}
              <div style={{ position: 'absolute', left: '16px', top: '32px', bottom: '32px', width: '2px', borderLeft: '2px dotted #cbd5e1' }} />

              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#2f8f8b', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '14px', zIndex: 1 }}>✓</div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#0b1f2a', marginBottom: '4px' }}>Evaluate decision against defensibility criteria</h4>
                  <p style={{ fontSize: '14px', color: '#0b1f2a', margin: 0, fontWeight: '700' }}>Decision must be provably defensible</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#f2b233', color: '#0b1f2a', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '14px', zIndex: 1 }}>◊</div>
                <div style={{ backgroundColor: '#fef3c7', padding: '16px', borderRadius: '4px', borderLeft: '4px solid #f2b233' }}>
                  <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#0b1f2a', marginBottom: '4px' }}>Permit proof generation (threshold met)</h4>
                  <p style={{ fontSize: '14px', color: '#0b1f2a', margin: 0, fontWeight: '800' }}>Permission is granted only when thresholds are met</p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', backgroundColor: '#64748b', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '700', fontSize: '14px', zIndex: 1 }}>×</div>
                <div>
                  <h4 style={{ fontSize: '16px', fontWeight: '700', color: '#0b1f2a', marginBottom: '4px' }}>Fail-closed: proof prohibited</h4>
                  <p style={{ fontSize: '14px', color: '#0b1f2a', margin: 0, fontWeight: '700' }}>If decision is not defensible, proof is blocked</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* This part finishes the Home component layout (Lines 655-673 in Screenshot 4) */}
          <Link to="/ddr" style={{
            display: 'inline-block',
            backgroundColor: '#F2B233',
            color: '#0B1F2A',
            padding: '14px 32px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: '600',
            transition: 'all 0.2s',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
          Start Decision Defensibility Assessment →
</Link>
        </div>
      </section>
    </div>
  );
}; // This brace and semicolon MUST be here to close the Home component

// DDRPage is now a standalone component, fixed for Vercel
const DDRPage = () => {
  return (
    <div style={{ 
      minHeight: '100vh', 
     display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      backgroundColor: '#f8fafc', 
      padding: '48px 24px' 
    }}>
      <div style={{ 
        maxWidth: '600px', 
        textAlign: 'center', 
        backgroundColor: 'white', 
        padding: '48px', 
       borderRadius: '12px', 
        boxShadow: '0 4px 6px rgba(0,0,0,0.1)' 
      }}>
        <h1 style={{ fontSize: '32px', fontWeight: '700', color: '#1e293b', marginBottom: '16px' }}>
          Decision Defensibility Review
        </h1>
        <p style={{ fontSize: '16px', color: '#64748b', marginBottom: '32px', lineHeight: '1.6' }}>
          This is a placeholder for your DDR assessment flow.
        </p>
        <Link to="/" style={{ 
         display: 'inline-block', 
          backgroundColor: '#F2B233', 
         color: '#0B1F2A', 
         padding: '12px 24px', 
          borderRadius: '6px', 
          textDecoration: 'none', 
          fontSize: '15px', 
          fontWeight: '600' 
        }}>
         ← Back to Home
        </Link>
     </div>
    </div>
  );
};
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        
        {/* These routes connect your governed DDR spine */}
        <Route path="/ddr" element={<Navigate to="/ddr/assessment" />} />
        <Route path="/ddr/assessment" element={<FinalAssessment />} />
        <Route path="/ddr/context" element={<DecisionContext />} />
        <Route path="/ddr/risk-exposure" element={<RiskExposure />} />
        <Route path="/ddr/evidence" element={<EvidenceSet />} />
        <Route path="/ddr/traceability" element={<ReviewTraceability />} />
        <Route path="/ddr/summary" element={<DDRSummary />} />
        <Route path="/ddr/outcome" element={<DecisionOutcome />} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;

