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
    
    {/* SECTION 1: HERO - No hand, clean tech environment */}
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
        <h1 style={{ fontSize: '3.8rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '24px', letterSpacing: '-1px' }}>
          Deterministic Decision Review (DDR) for Regulatory Defensibility
        </h1>
        <p style={{ fontSize: '1.4rem', lineHeight: '1.4', marginBottom: '40px', color: '#cbd5e1' }}>
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
          <div style={{ background: 'rgba(255, 255, 255, 0.95)', color: '#10b981', padding: '20px 30px', borderRadius: '12px', fontWeight: '800', fontSize: '1.2rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', borderLeft: '6px solid #10b981', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <span style={{ fontSize: '1.5rem' }}>●</span> Authorized
          </div>
          <div style={{ background: 'rgba(255, 255, 255, 0.95)', color: '#ef4444', padding: '20px 30px', borderRadius: '12px', fontWeight: '800', fontSize: '1.2rem', boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.5)', borderLeft: '6px solid #ef4444', backdropFilter: 'blur(10px)', display: 'flex', alignItems: 'center', gap: '12px', marginLeft: '40px' }}>
            <span style={{ fontSize: '1.5rem' }}>●</span> Blocked
          </div>
      </div>
    </section>

    {/* SECTION 2: HOW DDR WORKS */}
    <section className="process-section" style={{ padding: '100px 5%', backgroundColor: '#f8fafc', textAlign: 'center' }}>
      <h2 style={{ fontSize: '2.5rem', fontWeight: '800', color: '#0f172a', marginBottom: '60px' }}>How DDR Works</h2>
      <div className="grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
        {[
          { step: "1", title: "Decision Intake", desc: "Submit a regulatory or system decision for review." },
          { step: "2", title: "DDR Evaluation", desc: "Defensibility thresholds are computed against governance rules." },
          { step: "3", title: "Authorization Verdict", desc: "Authorized — entitlement issued. Not authorized — proof blocked." },
          { step: "4", title: "Workflow Enforcement", desc: "Verdict propagates into downstream systems & audit records." }
        ].map((item, idx) => (
          <div key={idx} className="card" style={{ background: 'white', padding: '50px 30px', borderRadius: '16px', boxShadow: '0 10px 25px rgba(0,0,0,0.05)', border: '1px solid #e2e8f0', textAlign: 'center' }}>
            <div style={{ background: '#22d3ee', color: 'white', width: '45px', height: '45px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 25px', fontWeight: '800', fontSize: '1.2rem' }}>
              {item.step}
            </div>
            <h3 style={{ fontSize: '1.3rem', fontWeight: '700', color: '#0f172a', marginBottom: '15px' }}>{item.title}</h3>
            <p style={{ color: '#64748b', lineHeight: '1.6', fontSize: '1rem' }}>{item.desc}</p>
          </div>
        ))}
      </div>
    </section>

    {/* SECTION 3: BOTTOM REPEAT CTA */}
    <section style={{ padding: '120px 5%', textAlign: 'center', backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url('https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=2000')`, backgroundSize: 'cover', backgroundPosition: 'center', borderTop: '1px solid #e2e8f0' }}>
      <h2 style={{ fontSize: '2.8rem', fontWeight: '800', color: '#0f172a', marginBottom: '20px' }}>Start Deterministic Decision Review</h2>
      <p style={{ fontSize: '1.3rem', color: '#475569', marginBottom: '45px' }}>Free to assess. Proof generation requires authorization.</p>
      <Link to="/ddr" className="button-primary" style={{ backgroundColor: '#f59e0b', color: '#000', padding: '20px 50px', fontSize: '1.2rem', borderRadius: '8px', textDecoration: 'none', fontWeight: 'bold', display: 'inline-block' }}>
        Start DDR Assessment →
      </Link>
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
