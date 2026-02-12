import React from 'react';
import { Link } from 'react-router-dom';

const Context = () => (
  <div className="ddr-page">
    <div style={securityBanner}>🛡️ SECURE ENVIRONMENT: Google Healthcare API Active</div>
    <h1>Decision Context</h1>
    <p>Define the regulatory scope and timing before authorizing proof.</p>
    
    <div style={inputBlock}>
      <label>Regulatory Framework</label>
      <select style={fieldStyle}><option>FDA 21 CFR Part 11</option><option>EU MDR</option></select>
    </div>
    
    <Link to="/ddr/evidence" style={nextBtn}>Continue to Evidence Set →</Link>
  </div>
);
export default Context;
