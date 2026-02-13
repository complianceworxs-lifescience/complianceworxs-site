import React from "react";
import { Link, Routes, Route, Navigate, Outlet } from "react-router-dom";
// CRITICAL CONNECTION: This line pulls in your Navy Blue/Amber design system
import "./index.css"; 

// Component Imports
import AuthorizationEntry from "./authorization/AuthorizationEntry";
import DDRLayout from "./DDRLayout"; 

// DDR Step Components - CLEANED & DEDUPLICATED
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
          <Link to="/authorization" className="navlink">Authority</Link>
        </nav>
        <div className="header-actions">
           <Link to="/authorization" className="button-primary">Start Authorization</Link>
        </div>
      </div>
    </header>
    <main>
      <Outlet />
    </main>
  </div>
);

const Home = () => (
  <section className="hero">
    <div className="hero-inner">
      <div className="hero-copy">
        <div className="badge badge-authorized">
          <span className="badge-title">DECISION DEFENSE REVIEW</span>
          <span className="badge-sub">v4.2</span>
        </div>
        <h1>Authorize Proof Only When a Decision Can Be Defended.</h1>
        <p className="lead">Make regulatory decisions with confidence—before inspection, before risk compounds.</p>
        <div className="cta-row">
          <Link to="/authorization" className="button-primary">Start Authorization Review →</Link>
        </div>
      </div>
    </div>
  </section>
);

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="authorization" element={<AuthorizationEntry />} />
        
        {/* DDR Multi-Step Flow - Each route gets its own component */}
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
