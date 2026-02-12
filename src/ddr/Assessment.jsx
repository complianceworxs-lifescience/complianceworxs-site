import React from 'react';

const Assessment = () => (
  <div className="ddr-page" style={{textAlign: 'center'}}>
    <h1>Final Decision Assessment</h1>
    <p>Your DDR process is complete. Your defensibility score is 80/100.</p>
    <button style={{...nextBtn, background: '#f6a623', color: '#000'}}>Purchase Full Audit-Ready Report ($199)</button>
  </div>
);
export default Assessment;
