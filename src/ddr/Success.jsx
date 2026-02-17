import React from "react";
import { useNavigate } from "react-router-dom";
import MainLayout from "../App";

export default function Success() {
  const navigate = useNavigate();

  return (
    <MainLayout>
      <section
        style={{
          minHeight: "100vh",
          background: "#F9FAFB",
          padding: "96px 24px",
          boxSizing: "border-box",
          fontFamily: "Inter, sans-serif",
          color: "#101828"
        }}
      >
        <div style={{ maxWidth: "900px", margin: "0 auto" }}>
          {/* Header */}
          <header style={{ marginBottom: "48px", textAlign: "center" }}>
            <h1
              style={{
                fontSize: "34px",
                fontWeight: "600",
                marginBottom: "12px"
              }}
            >
              Record Locked
            </h1>
            <p style={{ fontSize: "16px", color: "#475467" }}>
              The Decision Defensibility Record has been finalized and sealed.
            </p>
          </header>

          {/* Confirmation Card */}
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #EAECF0",
              borderRadius: "12px",
              padding: "32px",
              marginBottom: "32px"
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "16px"
              }}
            >
              Authorization Confirmation
            </h3>

            <p style={{ fontSize: "15px", color: "#344054", lineHeight: "1.6" }}>
              This decision has completed the Deterministic Decision Review (DDR)
              process. The record is immutable and audit-defensible. No further
              changes can be made.
            </p>

            <div
              style={{
                marginTop: "24px",
                padding: "20px",
                borderRadius: "8px",
                background: "#F2F4F7",
                border: "1px solid #EAECF0"
              }}
            >
              <div style={{ fontSize: "13px", color: "#667085", marginBottom: "6px" }}>
                Record Status
              </div>
              <div style={{ fontSize: "16px", fontWeight: "600", color: "#027A48" }}>
                Locked · Immutable · Audit-Ready
              </div>
            </div>
          </div>

          {/* Governance Notice */}
          <div
            style={{
              border: "1px solid #D0D5DD",
              borderRadius: "10px",
              padding: "20px",
              background: "#FFFFFF",
              marginBottom: "40px",
              textAlign: "center"
            }}
          >
            <p style={{ fontSize: "14px", color: "#475467", margin: 0 }}>
              This confirmation represents the final state of the DDR lifecycle.
              Any future changes require initiation of a new decision record.
            </p>
          </div>

          {/* Actions */}
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <button
              onClick={() => navigate("/")}
              style={{
                width: "100%",
                background: "#101828",
                color: "#FFFFFF",
                padding: "16px",
                borderRadius: "8px",
                border: "none",
                fontSize: "15px",
                fontWeight: "600",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(16,24,40,0.2)"
              }}
            >
              Return to Home
            </button>

            <button
              onClick={() => navigate("/ddr/assessment")}
              style={{
                width: "100%",
                background: "transparent",
                color: "#475467",
                padding: "12px",
                border: "none",
                fontSize: "14px",
                cursor: "pointer"
              }}
            >
              Start a New Decision
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
