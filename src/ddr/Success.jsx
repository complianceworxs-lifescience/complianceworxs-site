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
                marginBottom: "12px",
                color: "#027A48" // Subtle shift to Green to signal successful payment
              }}
            >
              Payment Successful
            </h1>
            <p style={{ fontSize: "16px", color: "#475467" }}>
              Your Authorization Record and Evidence Index have been unlocked.
            </p>
          </header>

          {/* Confirmation Card */}
          <div
            style={{
              background: "#FFFFFF",
              border: "1px solid #EAECF0",
              borderRadius: "12px",
              padding: "32px",
              marginBottom: "32px",
              boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
            }}
          >
            <h3
              style={{
                fontSize: "18px",
                fontWeight: "600",
                marginBottom: "16px"
              }}
            >
              Transaction & Authorization Confirmation
            </h3>

            <p style={{ fontSize: "15px", color: "#344054", lineHeight: "1.6" }}>
              The Deterministic Decision Review (DDR) process is now complete. You now have full 
              access to the immutable record and the finalized evidence set. A receipt and a digital 
              copy of the sealed record have been dispatched to your email.
            </p>

            <div
              style={{
                marginTop: "24px",
                padding: "20px",
                borderRadius: "8px",
                background: "#ECFDF3", // Success Green tint
                border: "1px solid #D1FADF"
              }}
            >
              <div style={{ fontSize: "13px", color: "#067647", marginBottom: "6px", fontWeight: "700" }}>
                Current Status
              </div>
              <div style={{ fontSize: "16px", fontWeight: "600", color: "#027A48" }}>
                Paid · Locked · Immutable · Audit-Ready
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
              This record represents the final validated state of the DDR lifecycle. 
              The evidence index is now preserved for regulatory inspection.
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
              Go to Dashboard
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
              Start New Assessment
            </button>
          </div>
        </div>
      </section>
    </MainLayout>
  );
}
