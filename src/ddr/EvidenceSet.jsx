import React from "react";
import { useNavigate } from "react-router-dom";

export default function EvidenceSet() {
  const navigate = useNavigate();

  return (
    <section
      style={{
        minHeight: "100vh",
        background: "#F9FAFB",
        padding: "96px 24px",
        boxSizing: "border-box"
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* Header */}
        <header style={{ marginBottom: "48px" }}>
          <h1
            style={{
              fontSize: "34px",
              fontWeight: "600",
              color: "#0B1F2A",
              marginBottom: "12px"
            }}
          >
            Evidence Declaration
          </h1>
          <p style={{ fontSize: "15px", color: "#475467" }}>
            Identify the evidence that supports this decision. No evaluation occurs here.
          </p>
        </header>

        {/* Evidence Types */}
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: "12px",
            padding: "32px",
            boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
            marginBottom: "32px"
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#0B1F2A",
              marginBottom: "16px"
            }}
          >
            Evidence Categories (select all that apply)
          </h3>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
              gap: "16px"
            }}
          >
            {[
              "Policies & SOPs",
              "Validation Protocols",
              "Test Scripts & Results",
              "Training Records",
              "Audit Trails & Logs",
              "Change Control Records",
              "Vendor Documentation",
              "Risk Assessments"
            ].map((label) => (
              <label
                key={label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  fontSize: "14px",
                  color: "#344054"
                }}
              >
                <input type="checkbox" />
                {label}
              </label>
            ))}
          </div>
        </div>

        {/* Evidence Notes */}
        <div
          style={{
            background: "#FFFFFF",
            borderRadius: "12px",
            padding: "32px",
            boxShadow: "0 10px 28px rgba(0,0,0,0.06)",
            marginBottom: "32px"
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: "600",
              color: "#0B1F2A",
              marginBottom: "12px"
            }}
          >
            Evidence Notes
          </h3>
          <p style={{ fontSize: "14px", color: "#475467", marginBottom: "16px" }}>
            Describe the location, status, or completeness of the declared evidence.
          </p>

          <textarea
            rows={6}
            placeholder="Enter notes about evidence availability, ownership, or gaps…"
            style={{
              width: "100%",
              borderRadius: "8px",
              border: "1px solid #D0D5DD",
              padding: "12px",
              fontSize: "14px",
              fontFamily: "inherit",
              resize: "vertical"
            }}
          />
        </div>

        {/* Boundary Notice */}
        <div
          style={{
            border: "1px solid #D0D5DD",
            borderRadius: "10px",
            padding: "20px",
            background: "#FFFFFF",
            marginBottom: "40px"
          }}
        >
          <strong style={{ color: "#0B1F2A", fontSize: "14px" }}>
            Boundary Notice
          </strong>
          <p style={{ fontSize: "13px", color: "#475467", marginTop: "6px" }}>
            Evidence is declared, not validated, at this stage. No sufficiency or quality
            judgments are made here.
          </p>
        </div>

        {/* Navigation */}
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button
            onClick={() => navigate("/ddr/risk")}
            style={{
              background: "transparent",
              border: "1px solid #D0D5DD",
              padding: "12px 20px",
              borderRadius: "8px",
              fontSize: "14px",
              cursor: "pointer"
            }}
          >
            ← Back to Risk Exposure
          </button>

          <button
            onClick={() => navigate("/ddr/traceability")}
            style={{
              background: "#004EEB",
              color: "#FFFFFF",
              border: "none",
              padding: "12px 24px",
              borderRadius: "8px",
              fontSize: "14px",
              fontWeight: "600",
              cursor: "pointer"
            }}
          >
            Continue to Review & Traceability →
          </button>
        </div>
      </div>
    </section>
  );
}

