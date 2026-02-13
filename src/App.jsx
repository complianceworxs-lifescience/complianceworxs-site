import React from "react";
import { Link, Routes, Route, Navigate, Outlet } from "react-router-dom";

// Component Imports
import DDRLayout from "./DDRLayout";
import Assessment from "./Assessment";
import AuthorizationEntry from "./authorization/AuthorizationEntry";

const MainLayout = () => (
  <div className="app-wrapper">
    {/* TOP AUTHORITY BAR: Uses --cw-navy from your index.css */}
    <div className="topbar">
      <div className="topbar-inner">
        <div className="topbar-left">COMPLIANCEWORXS AUTHORIZATION ENGINE™</div>
        <div className="topbar-right">State: Operational • Proof blocked until authorized</div>
      </div>
    </div>

    {/* HEADER: Uses brand-name and button-primary from your index.css */}
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
        <Route path="ddr" element={<DDRLayout />}>
          <Route path="*" element={<Assessment />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
