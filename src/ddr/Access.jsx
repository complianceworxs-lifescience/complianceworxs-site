import React from "react";
import { useNavigate } from "react-router-dom";

export default function AccessPage({ userEmail, issuedRecord }) {
  const navigate = useNavigate();

  return (
    <div style={{ background: "#F9FAFB", minHeight: "100vh", padding: "80px 24px", fontFamily: "Inter, sans-serif" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        
        {/* Status Block — Mandatory */}
        <div style={{ marginBottom: "48px", borderBottom: "1px solid #EAECF0", paddingBottom: "24px" }}>
          <div style={{ fontSize: "14px", fontWeight: "700", color: "#027A48", textTransform: "uppercase", letterSpacing: "0.05em" }}>
            Access Status: Active
          </div>
          <div style={{ fontSize: "16px", color: "#667085", marginTop: "4px" }}>
            Signed in as: {userEmail}
          </div>
        </div>

        {/* Primary Section — Issued Records */}
        <section style={{ marginBottom: "48px" }}>
          <h2 style={{ fontSize: "18px", fontWeight: "600", color: "#101828", marginBottom: "20px" }}>
            Issued Decision Records
          </h2>
          
          {issuedRecord ? (
            <div style={{ background: "#FFFFFF", border: "1px solid #EAECF0", borderRadius: "8px", padding: "20px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <div>
                <div style={{ fontWeight: "600", color: "#101828" }}>Decision Authorization Record</div>
                <div style={{ fontSize: "14px", color: "#667085" }}>Status: Issued · {issuedRecord.timestamp}</div>
              </div>
              <button onClick={() => navigate('/record/view')} style={{ color: "#027A48", fontWeight: "600", background: "none", border: "none", cursor: "pointer" }}>
                View Record
              </button>
            </div>
          ) : (
            <div style={{ color: "#667085", fontSize: "15px", fontStyle: "italic" }}>
              No authorization records have been issued for this account.
            </div>
          )}
        </section>

        {/* Actions Section — Contextual */}
        <section style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <button 
            onClick={() => navigate('/ddr/assessment')}
            style={{ width: "100%", background: "#101828", color: "#FFF", padding: "14px", borderRadius: "6px", fontWeight: "600", border: "none", cursor: "pointer" }}
          >
            Start New Assessment
          </button>
          
          {/* Conditional: Unpaid Outcome exists */}
          {!issuedRecord && (
             <div style={{ textAlign: "center" }}>
               <button 
                 onClick={() => window.location.href = 'https://buy.stripe.com/link'}
                 style={{ width: "100%", background: "#F2B233", color: "#0B1F2A", padding: "14px", borderRadius: "6px", fontWeight: "700", border: "none", cursor: "pointer", marginBottom: "8px" }}
               >
                 Issue Authorization Record
               </button>
               <span style={{ fontSize: "12px", color: "#667085" }}>
                 Formal issuance required to retain this decision as a defensible record.
               </span>
             </div>
          )}
        </section>

        {/* Footer — Minimal */}
        <footer style={{ marginTop: "80px", borderTop: "1px solid #EAECF0", paddingTop: "24px", textAlign: "center", fontSize: "13px", color: "#98A2B3" }}>
          Privacy · Terms · <span style={{ cursor: "pointer", textDecoration: "underline" }} onClick={() => console.log('Sign Out')}>Sign out</span>
        </footer>
      </div>
    </div>
  );
}
