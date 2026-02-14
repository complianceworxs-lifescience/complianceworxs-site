import React from 'react';
+ import { HashRouter as Router, Routes, Route, Link, Outlet, Navigate } from 'react-router-dom';

// Engine Imports
import DDRLayout from "./DDRLayout";
import DDROverview from "./ddr/Overview";
import DDRStart from "./ddr/DDRStart";
import DecisionContext from "./ddr/DecisionContext";
import EvidenceSet from "./ddr/EvidenceSet";
import RiskExposure from "./ddr/RiskExposure";
import DecisionOutcome from "./ddr/DecisionOutcome";
import ReviewTraceability from "./ddr/ReviewTraceability";
import FinalAssessment from "./ddr/FinalAssessment";

// Inline SVG Icon Components
const Shield = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const CheckCircle = ({ size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

const XCircle = ({ size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <circle cx="12" cy="12" r="10"/>
    <line x1="15" y1="9" x2="9" y2="15"/>
    <line x1="9" y1="9" x2="15" y2="15"/>
  </svg>
);

const AlertTriangle = ({ size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);

// Main Layout Component
const MainLayout = () => {
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
          <Link to="/" style={{ fontSize: '24px', fontWeight: '700', color: '#1e293b', textDecoration: 'none', letterSpacing: '-0.5px' }}>
            COMPLIANCEWORKXS
          </Link>
          
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <Link to="/" style={{ color: '#475569', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>Overview</Link>
            <a href="#pricing" style={{ color: '#475569', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>Pricing</a>
            <a href="#intelligence" style={{ color: '#475569', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>Intelligence Stream</a>
            <a href="#security" style={{ color: '#475569', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>Security</a>
            <a href="#access" style={{ color: '#475569', textDecoration: 'none', fontSize: '15px', fontWeight: '500' }}>Access</a>
            <Link to="/ddr" style={{
              backgroundColor: '#F2B233',
              color: '#0B1F2A',
              padding: '10px 24px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '600'
            }}>
              Start Assessment
            </Link>
          </div>
        </div>
      </nav>

      <main style={{ flex: 1 }}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer style={{ backgroundColor: '#0B1F2A', color: 'white', padding: '48px 0 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '48px', marginBottom: '48px' }}>
            <div>
              <h3 style={{ fontSize: '16px', fontWeight: '700', marginBottom: '16px', letterSpacing: '0.5px' }}>COMPLIANCEWORKXS</h3>
              <p style={{ fontSize: '13px', lineHeight: '1.6', opacity: '0.85' }}>
                A promised compliance partner that performs proofs insights, shift towards an ecosystem of verifiable, defendible.
              </p>
            </div>
            <div>
              <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px', color: 'white' }}>Governance</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '13px', lineHeight: '2' }}>
                <li style={{ opacity: '0.85' }}>Quality measures</li>
                <li style={{ opacity: '0.85' }}>Analysis of reg duty</li>
                <li style={{ opacity: '0.85' }}>Audit admin files</li>
                <li style={{ opacity: '0.85' }}>Formalize Playbook</li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px', color: 'white' }}>Intelligence</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '13px', lineHeight: '2' }}>
                <li style={{ opacity: '0.85' }}>Regulatory Feeds</li>
                <li style={{ opacity: '0.85' }}>Decision Analytics</li>
              </ul>
            </div>
            <div>
              <h4 style={{ fontSize: '14px', fontWeight: '600', marginBottom: '16px', color: 'white' }}>Legal & Procurement</h4>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, fontSize: '13px', lineHeight: '2' }}>
                <li style={{ opacity: '0.85' }}>Buyer FAQ</li>
                <li style={{ opacity: '0.85' }}>Secure Access</li>
              </ul>
            </div>
          </div>
          <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '13px', opacity: '0.75' }}>
            <div>© ComplianceWorxs. All rights reserved</div>
            <div>+1 (203) 538-0107</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const Home = () => {
  return (
    <div>
      {/* SECTION 1: HERO */}
      <section style={{
        position: 'relative',
        minHeight: '650px',
        background: 'linear-gradient(90deg, #fff 45%, rgba(255,255,255,0) 100%), url("https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=2000")',
        backgroundSize: 'cover',
        backgroundPosition: 'right center',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', width: '100%' }}>
          <div style={{ maxWidth: '600px' }}>
            <h1 style={{ fontSize: '48px', fontWeight: '800', color: '#0f172a', lineHeight: '1.1', marginBottom: '24px' }}>
              Authorize Proof Only When a Decision Can Be Defended
            </h1>
            <p style={{ fontSize: '19px', color: '#475569', lineHeight: '1.6', marginBottom: '40px' }}>
              Documented defensibility before proof exists.<br />
              Proof is granted only after thresholds are met.
            </p>
            <Link to="/ddr" style={{ display: 'inline-block', backgroundColor: '#F2B233', color: '#0B1F2A', padding: '18px 36px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '17px' }}>
              Start Decision Defensibility Assessment →
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: SYSTEM STATEMENT */}
      <section style={{ padding: '100px 24px', backgroundColor: '#fff', textAlign: 'center' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '40px', color: '#0f172a' }}>ComplianceWorxs Is a Proof Authorization System</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', fontSize: '18px', color: '#64748b', lineHeight: '1.8' }}>
            <p>Regulatory decisions are evaluated before documentation exists.</p>
            <p>Proof is authorized only after defensibility is verified.</p>
            <p>Indefensible proof is blocked by design.</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: TWO-COLUMN DATA GRID */}
      <section style={{ padding: '0 24px 100px', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
          {/* Documentation vs Defensibility */}
          <div>
            <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '32px', color: '#0f172a' }}>Documentation Does Not Equal Defensibility</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {["Inspectors assess decisions, not document volume", "Proof without defensibility increases inspection risk", "Most compliance failures begin with the wrong decision"].map((text, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: '#475569', fontSize: '16px' }}>
                  <CheckCircle size={20} style={{ color: '#22d3ee', flexShrink: 0, marginTop: '2px' }} />
                  {text}
                </div>
              ))}
            </div>
          </div>

          {/* How System Works */}
          <div>
            <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '32px', color: '#0f172a' }}>How the System Works</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#e2f9fb', color: '#22d3ee', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', flexShrink: 0 }}>1</div>
                <div>
                  <div style={{ fontWeight: '800', color: '#0f172a' }}>Assess the decision</div>
                  <div style={{ color: '#64748b', fontSize: '14px' }}>Proof potentia is evaluated against defensibility criteria</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#fff7ed', color: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', flexShrink: 0 }}>▽</div>
                <div>
                  <div style={{ fontWeight: '800', color: '#0f172a' }}>Authorize proof</div>
                  <div style={{ color: '#64748b', fontSize: '14px' }}>Permission is granted only when thresholds are met</div>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '16px' }}>
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', backgroundColor: '#fef2f2', color: '#ef4444', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', flexShrink: 0 }}>✕</div>
                <div>
                  <div style={{ fontWeight: '800', color: '#0f172a' }}>Block risk</div>
                  <div style={{ color: '#64748b', fontSize: '14px' }}>Indefensible proof is prevented from existing</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: WHO IT IS FOR / WHAT IT NEVER DOES */}
      <section style={{ padding: '0 24px 100px', backgroundColor: '#fff' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
          <div>
            <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '32px', color: '#0f172a' }}>Who This Is For</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {["QA leaders accountable for inspection outcomes", "Validation leaders defending system defensibility", "Executives signing decisions they must later defend"].map((text, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: '#475569', fontSize: '16px' }}>
                  <CheckCircle size={20} style={{ color: '#22d3ee', flexShrink: 0, marginTop: '2px' }} />
                  {text}
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 style={{ fontSize: '24px', fontWeight: '800', marginBottom: '32px', color: '#0f172a' }}>What ComplianceWorxs Never Does</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              {["Does not authorize false proof", "Does not provide remediation advice", "Does not self-decide regulatory outcomes"].map((text, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: '#475569', fontSize: '16px' }}>
                  <XCircle size={20} style={{ color: '#ef4444', flexShrink: 0, marginTop: '2px' }} />
                  {text}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 5: FINAL CTA */}
      <section style={{ padding: '100px 24px', backgroundColor: '#f8fafc', textAlign: 'center', borderTop: '1px solid #e2e8f0' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ fontSize: '32px', fontWeight: '800', marginBottom: '20px', color: '#0f172a' }}>What You Receive If Authorized</h2>
          <p style={{ fontSize: '18px', color: '#64748b', marginBottom: '48px' }}>Decision defensibility verified • Evidence linkage summary • Audit-ready rationale</p>
          <Link to="/ddr" style={{ display: 'inline-block', backgroundColor: '#F2B233', color: '#0B1F2A', padding: '18px 48px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700', fontSize: '17px' }}>
            Start Decision Defensibility Assessment →
          </Link>
        </div>
      </section>
    </div>
  );
};

// Application Component - Correct Routing Logic
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Home />} />
          <Route path="ddr" element={<DDRLayout />}>
            <Route index element={<DDROverview />} />
            <Route path="start" element={<DDRStart />} />
            <Route path="context" element={<DecisionContext />} />
            <Route path="evidence" element={<EvidenceSet />} />
            <Route path="risk" element={<RiskExposure />} />
            <Route path="outcome" element={<DecisionOutcome />} />
            <Route path="traceability" element={<ReviewTraceability />} />
            <Route path="assessment" element={<FinalAssessment />} />
          </Route>
        </Route>
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

