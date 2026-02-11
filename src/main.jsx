import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom"; // Switched to BrowserRouter

const SimpleLayout = ({ title, children }) => (
  <div style={{ padding: "40px", fontFamily: "sans-serif", maxWidth: "800px", margin: "0 auto" }}>
    <nav style={{ marginBottom: "30px", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
      <Link to="/" style={{ marginRight: "15px", color: "#0070f3", textDecoration: "none", fontWeight: "bold" }}>COMPLIANCEWORXS</Link>
      <Link to="/ddr" style={{ color: "#666", textDecoration: "none" }}>DDR Process</Link>
    </nav>
    <h1>{title}</h1>
    {children}
  </div>
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter> {/* Switched to BrowserRouter */}
      <Routes>
        <Route path="/" element={
          <SimpleLayout title="Decision-Grade Compliance Intelligence">
            <p>Evaluating regulatory decisions before documentation exists.</p>
            <Link to="/ddr" style={{ display: "inline-block", background: "#0070f3", color: "white", padding: "12px 24px", borderRadius: "5px", textDecoration: "none" }}>
              Start DDR Assessment →
            </Link>
          </SimpleLayout>
        } />

        <Route path="/ddr" element={
          <SimpleLayout title="DDR Overview">
            <p>The authorization engine behind every defensible record.</p>
            <p><em>[We will rebuild the clean DDR content here next]</em></p>
          </SimpleLayout>
        } />

        {/* This route handles complianceworxs.com/success */}
        <Route path="/success" element={
          <SimpleLayout title="✔ Thank You">
            <p>Your $199 Assessment is confirmed. Revenue has been logged to your ledger.</p>
            <Link to="/">Return Home</Link>
          </SimpleLayout>
        } />

        {/* This route handles complianceworxs.com/thank-you */}
        <Route path="/thank-you" element={
          <SimpleLayout title="✔ Thank You">
            <p>Your order is complete.</p>
            <Link to="/">Return Home</Link>
          </SimpleLayout>
        } />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
