import React from 'react';

const AuthorizationEntry = () => {
  return (
    <div className="authorization-container">
      <h1>Identity & Access Authorization</h1>
      <p>
        To maintain system integrity, an institutional authorization review is required. 
        This process verifies compliance parameters and establishes your current 
        authority level within the ecosystem.
      </p>
      <button 
        onClick={() => window.location.hash = '/ddr/context'}
        className="cta-button"
      >
        Run Authorization Review
      </button>
    </div>
  );
};

export default AuthorizationEntry;
