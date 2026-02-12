import React from 'react';
import { Link } from 'react-router-dom';

const Evidence = () => (
  <div className="ddr-page">
    <div style={securityBanner}>🛡️ DATA SCRUBBING: PII/PHI Redaction Enabled</div>
    <h1>Evidence Set</h1>
    <p>Upload artifacts. Our AI will scrub sensitive data before vaulting.</p>
    
    <div style={dropZone}>Drag & Drop Compliance Artifacts Here</div>
    
    <Link to="/ddr/risk" style={nextBtn}>Identify Risks →</Link>
  </div>
);
export default Evidence;
