import React from "react";
import { Link, Routes, Route, Navigate, Outlet } from "react-router-dom";
import "./index.css"; 

// Engine Imports
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
  <div className="app-wrapper" style={{ backgroundColor: '#fff' }}>
    <header className="header" style={{ 
      backgroundColor: '#fff', 
      borderBottom: '1px solid #e2e8f0', 
      padding: '20px 5%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
        <Link to="/" style={{ color: '#0a1a36', fontWeight: '800', fontSize: '1.4rem', textDecoration: 'none' }}>
          COMPLIANCEWORXS
        </Link>
        <nav style={{ display: 'flex', gap: '30px' }}>
          {['Overview', 'Pricing', 'Intelligence Stream', 'Security', 'Access'].map(item => (
            <Link key={item} to="#" style={{ textDecoration: 'none', color: '#475569', fontSize: '0.95rem', fontWeight: '500' }}>{item}</Link>
          ))}
        </nav>
      </div>
      <Link to="/ddr" style={{ backgroundColor: '#f59e0b', color: '#000', padding: '12px 28px', borderRadius: '6px', textDecoration: 'none', fontWeight: '700' }}>
        Start Assessment
      </Link>
    </header>
    <main><Outlet /></main>
  </div>
);

const Home = () => (
  <div className="home-wrapper" style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#0f172a' }}>
    
    {/* HERO SECTION: Professional White-Base with Life Science Subject */}
    <section style={{ 
      display: 'flex', 
      alignItems: 'center', 
      padding: '80px 8%', 
      background: `linear-gradient(90deg, #fff 45%, rgba(255,255,255,0) 100%), url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=2000')`,
      backgroundSize: 'cover',
      backgroundPosition: 'right center',
      minHeight: '650px'
    }}>
      <div style={{ maxWidth: '600px' }}>
        <h1 style={{ fontSize: '3.8rem', fontWeight: '800', lineHeight: '1.1', marginBottom: '24px', color: '#0f172a' }}>
          Authorize Proof Only When a Decision Can Be Defended
        </h1>
        <p style={{ fontSize: '1.3rem', color: '#475569', lineHeight: '1.6', marginBottom: '40px' }}>
          Documented defensibility before proof exists. Proof is granted only after thresholds are met.
        </p>
        <Link to="/ddr" style={{ backgroundColor: '#f59e0b', color: '#000', padding: '18px 36px', fontSize: '1.1rem', fontWeight: '800', textDecoration: 'none', borderRadius: '6px', display: 'inline-block' }}>
          Start Decision Defensibility Assessment →
        </Link>
      </div>
    </section>

    {/* CORE VALUE PROPOSITION SECTION */}
    <section style={{ padding: '100px 8%', textAlign: 'center', backgroundColor: '#fff' }}>
      <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '15px' }}>ComplianceWorxs Is a Proof Authorization System</h2>
      <div style={{ maxWidth: '800px', margin: '0 auto', color: '#64748b', fontSize: '1.2rem', lineHeight: '1.8' }}>
        <p>Regulatory decisions are evaluated before documentation exists.</p>
        <p>Proof is authorized only after defensibility is verified.</p>
        <p>Indefensible proof is blocked by design.</p>
      </div>
    </section>

    {/* INFORMATION GRID: REPLICATING SCREENSHOT 2 LAYOUT */}
    <section style={{ padding: '0 8% 100px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '80px' }}>
      
      {/* LEFT: Defensibility vs Documentation */}
      <div>
        <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '30px' }}>Documentation Does Not Equal Defensibility</h3>
        {[
          "Inspectors assess decisions, not document volume",
          "Proof without defensibility increases inspection risk",
          "Most compliance failures begin with the wrong decision"
        ].map((text, i) => (
          <div key={i} style={{ display: 'flex', gap: '15px', marginBottom: '20px', color: '#475569', fontSize: '1.1rem' }}>
            <span style={{ color: '#22d3ee' }}>✓</span> {text}
          </div>
        ))}
      </div>

      {/* RIGHT: How the System Works */}
      <div>
        <h3 style={{ fontSize: '1.8rem', fontWeight: '800', marginBottom: '30px' }}>How the System Works</h3>
        <div style={{ marginBottom: '25px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '800', marginBottom: '8px' }}>
            <span style={{ backgroundColor: '#e2f9fb', color: '#22d3ee', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>1</span>
            Assess the decision
          </div>
          <p style={{ color: '#64748b', marginLeft: '40px' }}>Proof potentia is evaluated against defensibility criteria</p>
        </div>
        <div style={{ marginBottom: '25px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '800', marginBottom: '8px' }}>
            <span style={{ backgroundColor: '#fff7ed', color: '#f59e0b', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>▽</span>
            Authorize proof
          </div>
          <p style={{ color: '#64748b', marginLeft: '40px' }}>Permission is granted only when thresholds are met</p>
        </div>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', fontWeight: '800', marginBottom: '8px' }}>
            <span style={{ backgroundColor: '#fef2f2', color: '#ef4444', width: '28px', height: '28px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>✕</span>
            Block risk
          </div>
          <p style={{ color: '#64748b', marginLeft: '40px' }}>Indefensible proof is prevented from existing</p>
        </div>
      </div>

    </section>

    {/* FINAL CALL TO ACTION */}
    <section style={{ padding: '80px 8%', textAlign: 'center', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0' }}>
      <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '30px' }}>What You Receive If Authorized</h2>
      <p style={{ color: '#64748b', marginBottom: '40px' }}>Decision defensibility verified • Evidence linkage summary • Audit-ready rationale</p>
      <Link to="/ddr" style={{ backgroundColor: '#f59e0b', color: '#000', padding: '16px 40px', fontSize: '1.1rem', fontWeight: '800', textDecoration: 'none', borderRadius: '6px' }}>
        Start Decision Defensibility Assessment →
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
