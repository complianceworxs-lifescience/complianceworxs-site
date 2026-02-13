import React from "react";
import { Link, Routes, Route, Navigate, Outlet } from "react-router-dom";
import "./index.css"; 

import AuthorizationEntry from "./authorization/AuthorizationEntry";
import DDRLayout from "./DDRLayout"; 
import DDROverview from "./ddr/Overview"; 
import DDRStart from "./ddr/DDRStart"; 
import DecisionContext from "./ddr/DecisionContext";
import EvidenceSet from "./ddr/EvidenceSet";
import RiskExposure from "./ddr/RiskExposure";
import DecisionOutcome from "./ddr/DecisionOutcome";
import ReviewTraceability from "./ddr/ReviewTraceability";
import FinalAssessment from "./ddr/FinalAssessment";

const MainLayout = () => (
  <div className="app-wrapper">
    <div className="topbar">
      <div className="topbar-inner">
        <div className="topbar-left">COMPLIANCEWORXS AUTHORIZATION ENGINE™</div>
        <div className="topbar-right">State: Operational • Proof blocked until authorized</div>
      </div>
    </div>
    <header className="header">
      <div className="header-inner">
        <Link to="/" className="brand-name">COMPLIANCEWORXS</Link>
        <nav className="nav">
          <Link to="/" className="navlink">Overview</Link>
          <Link to="#" className="navlink">Pricing</Link>
          <Link to="#" className="navlink">Intelligence Stream</Link>
          <Link to="/authorization" className="navlink">Authority</Link>
        </nav>
        <div className="header-actions">
           <Link to="/ddr" className="button-primary" style={{ backgroundColor: '#f59e0b', color: '#000' }}>Start DDR Assessment</Link>
        </div>
      </div>
    </header>
    <main>
      <Outlet />
    </main>
  </div>
);

const Home = () => (
  <div className="home-wrapper" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
    
    {/* SECTION 1: HERO - Updated to a clean, unmanned office environment */}
    <section className="hero-v2" style={{ 
      position: 'relative',
      minHeight: '750px',
      display: 'flex',
      alignItems: 'center',
      color: 'white',
      padding: '0 5%',
      backgroundImage: `linear-gradient(to right, rgba(10, 26, 54, 0.9) 30%, rgba(10, 26, 54, 0.1) 100%), url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div className="hero-content" style={{ maxWidth: '700px', zIndex: 2 }}>
        <h1 style={{ fontSize: '4rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '24px', letterSpacing: '-1px' }}>
          Deterministic Decision Review (DDR) for Regulatory Defensibility
        </h1>
        <p style={{ fontSize: '1.5rem', lineHeight: '1.4', marginBottom: '40px', color: '#cbd5e1' }}>
          Every regulatory decision is evaluated, authorized, and logged before proof exists.
        </p>
        <div className="cta-row">
          <Link to="/ddr" className="button-primary" style={{ 
            backgroundColor: '#f59e0b', 
            color: '#000', 
            padding: '20px 40px', 
            fontSize: '1.2rem',
            borderRadius: '6px',
            textDecoration: 'none',
            fontWeight: '900',
            display: 'inline-block',
            boxShadow: '0 4px 15px rgba(245, 158, 11, 0.3)'
          }}>
            Start DDR Assessment →
          </Link>
        </div>
      </div>
      
      {/* Floating UI Elements: Authorized / Blocked */}
      <div style={{ position: 'absolute', right: '12%', top: '35%', display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.95)', 
            color: '#10b981', 
            padding: '20px 30px', 
            borderRadius: '12px', 
            fontWeight: '800', 
            fontSize: '1.2rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', 
            borderLeft: '6px solid #10b981',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <span style={{ fontSize: '1.5rem' }}>●</span> Authorized
          </div>
          <div style={{ 
            background: 'rgba(255, 255, 255, 0.95)', 
            color: '#ef4444', 
            padding: '20px 30px', 
            borderRadius: '12px', 
            fontWeight: '800', 
            fontSize: '1.2rem',
            boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', 
            borderLeft: '6px solid #ef4444',
            backdropFilter: 'blur(10px)',
            display: 'flex',
            alignItems: 'center',
            gap: '12px',
            marginLeft: '40px'
          }}>
            <span style={{ fontSize: '1.5rem' }}>●</span> Blocked
          </div>
      </div>
    </section>

    {/* SECTION 2: HOW DDR WORKS (Rest of the code remains the same as previous) */}
    {/* ... [keep the process-section and bottom-cta code from before] ... */}
  </div>
);
          
          <div className="card" style={{ padding: '40px 20px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <div style={{ background: '#22d3ee', color: '#fff', width: '40px', height: '40px', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>1</div>
            <h3 style={{ marginBottom: '15px' }}>Decision Intake</h3>
            <p style={{ fontSize: '0.9rem', color: '#4a5568' }}>Submit a regulatory or system decision for review.</p>
          </div>

          <div className="card" style={{ padding: '40px 20px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <div style={{ background: '#22d3ee', color: '#fff', width: '40px', height: '40px', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>2</div>
            <h3 style={{ marginBottom: '15px' }}>DDR Evaluation</h3>
            <p style={{ fontSize: '0.9rem', color: '#4a5568' }}>Defensibility thresholds are computed against governance rules.</p>
          </div>

          <div className="card" style={{ padding: '40px 20px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <div style={{ background: '#22d3ee', color: '#fff', width: '40px', height: '40px', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>3</div>
            <h3 style={{ marginBottom: '15px' }}>Authorization Verdict</h3>
            <p style={{ fontSize: '0.9rem', color: '#4a5568' }}><strong>Authorized</strong> — entitlement issued.<br/><strong>Not authorized</strong> — proof blocked.</p>
          </div>

          <div className="card" style={{ padding: '40px 20px', textAlign: 'center', boxShadow: '0 10px 30px rgba(0,0,0,0.05)' }}>
            <div style={{ background: '#22d3ee', color: '#fff', width: '40px', height: '40px', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 'bold' }}>4</div>
            <h3 style={{ marginBottom: '15px' }}>Workflow Enforcement</h3>
            <p style={{ fontSize: '0.9rem', color: '#4a5568' }}>Verdict propagates into downstream systems & audit records.</p>
          </div>

        </div>
      </div>
    </section>

    {/* SECTION 3: BOTTOM CTA */}
    <section className="cta-v2" style={{ padding: '100px 0', textAlign: 'center', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
       <h2 style={{ fontSize: '2.5rem', marginBottom: '20px', color: '#0a1a36' }}>Start Deterministic Decision Review</h2>
       <p className="lead" style={{ marginBottom: '40px', color: '#4a5568' }}>Free to assess. Proof generation requires authorization.</p>
       <Link to="/ddr" className="button-primary" style={{ backgroundColor: '#f59e0b', color: '#000', padding: '15px 40px' }}>Start DDR Assessment →</Link>
    </section>
  </div>
);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="authorization" element={<AuthorizationEntry />} />
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
  );
}
