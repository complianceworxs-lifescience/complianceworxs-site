import React from "react";
import { Link, Routes, Route, Navigate, Outlet } from "react-router-dom";
import "./index.css"; 

// Engine Imports - DO NOT REMOVE
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
      padding: '15px 5%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      position: 'sticky',
      top: 0,
      zIndex: 1000
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '40px' }}>
        <Link to="/" className="brand-name" style={{ color: '#0a1a36', fontWeight: '800', fontSize: '1.2rem', textDecoration: 'none', letterSpacing: '0.5px' }}>
          COMPLIANCEWORXS
        </Link>
        <nav style={{ display: 'flex', gap: '25px' }}>
          <Link to="/" style={{ textDecoration: 'none', color: '#64748b', fontSize: '0.9rem', fontWeight: '500' }}>Overview</Link>
          <Link to="#" style={{ textDecoration: 'none', color: '#64748b', fontSize: '0.9rem', fontWeight: '500' }}>Pricing</Link>
          <Link to="#" style={{ textDecoration: 'none', color: '#64748b', fontSize: '0.9rem', fontWeight: '500' }}>Intelligence Stream</Link>
          <Link to="/authorization" style={{ textDecoration: 'none', color: '#64748b', fontSize: '0.9rem', fontWeight: '500' }}>Authority</Link>
        </nav>
      </div>
      <Link to="/ddr" style={{ 
        backgroundColor: '#f59e0b', 
        color: '#000', 
        padding: '10px 22px', 
        borderRadius: '4px', 
        textDecoration: 'none', 
        fontWeight: '700', 
        fontSize: '0.85rem' 
      }}>
        Start Assessment
      </Link>
    </header>
    <main>
      <Outlet />
    </main>
  </div>
);

const Home = () => (
  <div className="home-container" style={{ fontFamily: 'Inter, system-ui, sans-serif', color: '#0a1a36' }}>
    
    {/* SECTION 1: HERO - Authoritative Life Science Aesthetic */}
    <section style={{ 
      position: 'relative',
      minHeight: '85vh',
      display: 'flex',
      alignItems: 'center',
      padding: '0 8%',
      background: `linear-gradient(90deg, rgba(248, 250, 252, 0.95) 40%, rgba(248, 250, 252, 0.1) 100%), 
                   url('https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=2000')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }}>
      <div style={{ maxWidth: '750px' }}>
        <h1 style={{ fontSize: '4rem', fontWeight: '800', lineHeight: '1.05', marginBottom: '30px', color: '#0a1a36' }}>
          Authorize Proof Only When a Decision Can Be Defended
        </h1>
        <p style={{ fontSize: '1.4rem', color: '#475569', lineHeight: '1.5', marginBottom: '45px', maxWidth: '600px' }}>
          Documented defensibility before proof exists. Proof is granted only after thresholds are met.
        </p>
        <Link to="/ddr" style={{ 
          backgroundColor: '#f59e0b', 
          color: '#000', 
          padding: '20px 45px', 
          fontSize: '1.1rem', 
          fontWeight: '800', 
          textDecoration: 'none', 
          display: 'inline-block',
          borderRadius: '4px',
          boxShadow: '0 4px 20px rgba(245, 158, 11, 0.2)'
        }}>
          Start Decision Defensibility Assessment →
        </Link>
      </div>
    </section>

    {/* SECTION 2: HOW THE SYSTEM WORKS - "This system can say no" */}
    <section style={{ padding: '120px 8%', backgroundColor: '#fff' }}>
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h2 style={{ fontSize: '2.8rem', fontWeight: '800' }}>The Authorization Flow</h2>
        <p style={{ color: '#64748b', fontSize: '1.2rem' }}>Audit-ready confidence through deterministic gating.</p>
      </div>
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '40px' }}>
        <div style={{ padding: '60px 40px', border: '1px solid #f1f5f9', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ color: '#22d3ee', fontSize: '2.5rem', marginBottom: '20px', fontWeight: '800' }}>01. Assess</div>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '15px' }}>Evaluate Defensibility</h3>
          <p style={{ color: '#64748b', lineHeight: '1.6' }}>Thresholds are computed against governance rules before documentation begins.</p>
        </div>
        
        <div style={{ padding: '60px 40px', border: '1px solid #f1f5f9', borderRadius: '8px', textAlign: 'center', backgroundColor: '#f8fafc' }}>
          <div style={{ color: '#22d3ee', fontSize: '2.5rem', marginBottom: '20px', fontWeight: '800' }}>02. Authorize</div>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '15px' }}>Grant Entitlement</h3>
          <p style={{ color: '#64748b', lineHeight: '1.6' }}>The system authorizes proof only when defensibility is mathematically verified.</p>
        </div>

        <div style={{ padding: '60px 40px', border: '1px solid #f1f5f9', borderRadius: '8px', textAlign: 'center' }}>
          <div style={{ color: '#ef4444', fontSize: '2.5rem', marginBottom: '20px', fontWeight: '800' }}>03. Block</div>
          <h3 style={{ fontSize: '1.4rem', marginBottom: '15px' }}>Mitigate Risk</h3>
          <p style={{ color: '#64748b', lineHeight: '1.6' }}>If thresholds are not met, the system blocks proof generation to protect the organization.</p>
        </div>
      </div>
    </section>

    {/* SECTION 3: SYSTEM INTEGRITY - "What we never do" */}
    <section style={{ padding: '100px 8%', backgroundColor: '#0a1a36', color: '#fff' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '40px' }}>Inspection-Grade Clarity</h2>
        <p style={{ fontSize: '1.2rem', color: '#94a3b8', lineHeight: '1.7', marginBottom: '50px' }}>
          ComplianceWorxs never creates "marketing fluff" or abstract graphics. We provide a deterministic record that proves your decision was defensible at the exact moment it was made.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
           <div style={{ border: '1px solid rgba(34, 211, 238, 0.3)', padding: '15px 25px', borderRadius: '4px', fontSize: '0.9rem', color: '#22d3ee' }}>✓ CFR Part 11 Compliant</div>
           <div style={{ border: '1px solid rgba(34, 211, 238, 0.3)', padding: '15px 25px', borderRadius: '4px', fontSize: '0.9rem', color: '#22d3ee' }}>✓ Inspection Ready</div>
        </div>
      </div>
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
