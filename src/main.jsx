import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter, Routes, Route, Link } from "react-router-dom";

// Standard UI Components to keep the build safe
const Page = ({ title, subtitle }) => (
  <div style={{ padding: "50px", fontFamily: "sans-serif", color: "#333", lineHeight: "1.6" }}>
    <nav style={{ marginBottom: "20px", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
      <Link to="/" style={{ marginRight: "15px", fontWeight: "bold", textDecoration: "none", color: "#0070f3" }}>Overview</Link>
      <Link to="/intelligence" style={{ marginRight: "15px", textDecoration: "none", color: "#666" }}>Intelligence</Link>
      <Link to="/authority" style={{ marginRight: "15px", textDecoration: "none", color: "#666" }}>Authority</Link>
      <Link to="/ddr" style={{ textDecoration: "none", color: "#666" }}>DDR Process</Link>
    </nav>
    <h1>{title}</h1>
    <p>{subtitle}</p>
    {title === "Overview" && (
      <Link to="/ddr" style={{ display: "inline-block", background: "#0070f3", color: "white", padding: "12px 24px", borderRadius: "5px", textDecoration: "none" }}>
        Start DDR Assessment
      </Link>
    )}
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HashRouter>
      <Routes>
        <Route path="/" element={<Page title="Overview" subtitle="ComplianceWorxs: Defensible decisions, before inspection." />} />
        <Route path="/ddr" element={<Page title="DDR Overview" subtitle="Deterministic Decision Review is initializing..." />} />
        <Route path="/intelligence" element={<Page title="Intelligence" subtitle="Compliance Data Stream" />} />
        <Route path="/authority" element={<Page title="Authority" subtitle="Regulatory Frameworks" />} />
        <Route path="/success" element={<Page title="Success" subtitle="Purchase tracked for $199.00." />} />
      </Routes>
    </HashRouter>
  </React.StrictMode>
);
