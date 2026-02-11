import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route, Link } from "react-router-dom";

// A simple, stable wrapper for your site
const Layout = ({ children }) => (
  <div style={{ fontFamily: 'sans-serif', color: '#1a1a1a', maxWidth: '1200px', margin: '0 auto', padding: '20px' }}>
    <nav style={{ display: 'flex', gap: '20px', marginBottom: '40px', borderBottom: '1px solid #eee', paddingBottom: '20px' }}>
      <Link to="/" style={{ textDecoration: 'none', fontWeight: 'bold', color: '#0070f3' }}>COMPLIANCEWORXS</Link>
      <Link to="/ddr" style={{ textDecoration: 'none', color: '#666' }}>DDR Process</Link>
      <Link to="/intelligence" style={{ textDecoration: 'none', color: '#666' }}>Intelligence</Link>
      <Link to="/authority" style={{ textDecoration: 'none', color: '#666' }}>Authority</Link>
    </nav>
    {children}
  </div>
);

// High-level components defined locally to prevent import errors
const Overview = () => (
  <Layout>
    <h1>Decision-Grade Compliance Intelligence</h1>
    <p style={{ fontSize: '1.2rem', color: '#444' }}>Evaluate regulatory decisions before documentation exists.</p>
    <Link to="/ddr" style={{ display: 'inline-block', padding: '12px 24px', background: '#0070f3', color: '#fff', borderRadius: '5px', textDecoration: 'none', fontWeight: 'bold' }}>
      Start DDR Assessment →
    </Link>
  </Layout>
);

const DDRHome = () => (
  <Layout>
    <h1>Deterministic Decision Review (DDR)</h1>
    <p>The authorization engine behind every defensible record.</p>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginTop: '30px' }}>
      <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '8px' }}><h3>Signal</h3><p>Identify what changed.</p></div>
      <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '8px' }}><h3>Decision</h3><p>The rationale applied.</p></div>
      <div style={{ padding: '20px', border: '1px solid #eee', borderRadius: '8px' }}><h3>Gate</h3><p>Authorize or Block.</p></div>
    </div>
  </Layout>
);

const Success = () => (
  <Layout>
    <div style={{ textAlign: 'center', padding: '60px 0' }}>
      <h1 style={{ color: '#22c55e' }}>Order Confirmed</h1>
      <p>The $199 assessment has been logged to the ledger.</p>
      <Link to="/">Return to Dashboard</Link>
    </div>
  </Layout>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Overview />} />
        <Route path="/ddr" element={<DDRHome />} />
        <Route path="/intelligence" element={<Layout><h1>Intelligence Stream</h1></Layout>} />
        <Route path="/authority" element={<Layout><h1>Authority</h1></Layout>} />
        <Route path="/success" element={<Success />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
