import React from "react";
import { useNavigate } from "react-router-dom";

export default function Context() {
  const navigate = useNavigate();

  const sectionStyle = {
    minHeight: "100vh",
    background: "#F9FAFB",
    padding: "80px 24px",
    boxSizing: "border-box",
    fontFamily: "Inter, sans-serif",
    color: "#101828"
  };

  const containerStyle = {
    maxWidth: "640px",
    margin: "0 auto",
    textAlign: "left"
  };

  const blockStyle = {
    marginBottom: "32px"
  };

  const labelStyle = {
    display: "block",
    fontSize: "14px",
    fontWeight: "500",
    color: "#344054",
    marginBottom: "8px"
  };

  const inputStyle = {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "1px solid #D0D5DD",
    fontSize: "16px",
    boxSizing: "border-box"
  };

  return (
    <section style={sectionStyle}>
      <div style={containerStyle}>
        {/* 1. Framing Header */}
        <header style={{ marginBottom: "48px" }}>
          <h1 style={{ fontSize: "30px", fontWeight: "600", marginBottom: "12px" }}>
            Decision Context
          </h1>
          <p style={{ fontSize: "16px", color: "#475467" }}>
            Define the decision being authorized.
          </p>
        </header>

        {/* 2. Structured Input Blocks */}
        <div style={blockStyle}>
          <label style={labelStyle}>Decision description</label>
          <textarea 
            style={{ ...inputStyle, minHeight: "120px", resize: "vertical" }} 
            placeholder="Describe the nature of the decision..."
          />
        </div>

        <div style={blockStyle}>
          <label style={labelStyle}>Decision owner / authority</label>
          <input type="text" style={inputStyle} placeholder="Enter name or title" />
        </div>

        <div style={blockStyle}>
          <label style={labelStyle}>Regulatory scope</label>
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            {["Federal Compliance", "State Regulation", "Internal Policy", "Legal Precedent"].map((opt) => (
              <label key={opt} style={{ display: "flex", alignItems: "center", fontSize: "14px" }}>
                <input type="checkbox" style={{ marginRight: "10px" }} /> {opt}
              </label>
            ))}
          </div>
        </div>

        <div style={blockStyle}>
          <label style={labelStyle}>Execution timeframe</label>
          <input type="date" style={inputStyle} />
        </div>

        {/* 3. Boundary Notice */}
        <div style={{
          background: "#FFFFFF",
          border: "1px solid #EAECF0",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "48px"
        }}>
          <p style={{ margin: 0, fontSize: "14px", color: "#667085", textAlign: "center" }}>
            “No evaluation occurs at this stage. This step defines context only.”
          </p>
        </div>

        {/* 4. Single Forward Action */}
        <button
          onClick={() => navigate("/ddr/risk")}
          style={{
            width: "100%",
            background: "#101828",
            color: "#FFFFFF",
            padding: "16px",
            borderRadius: "8px",
            border: "none",
            fontSize: "16px",
            fontWeight: "600",
            cursor: "pointer"
          }}
        >
          Continue to Risk Evaluation
        </button>
      </div>
    </section>
  );
}
