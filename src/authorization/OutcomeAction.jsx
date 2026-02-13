import React from 'react';

const OutcomeAction = ({ ddrResult }) => {
  // Capture: decision_outcome, decision_hash, timestamp
  // Logic is strictly a mapping, not an interpretation.
  
  const renderOffer = (outcome) => {
    switch (outcome) {
      case 'Authorized':
        return <button>Purchase Authorization Certificate</button>;
      case 'Conditional':
        return <button>Subscribe to Remediation Authorization</button>;
      case 'Blocked':
        return <button>Request Risk Escalation Brief</button>;
      default:
        return null;
    }
  };

  return (
    <div className="outcome-action-surface">
      <h2>Review Complete</h2>
      <p>Trace ID: {ddrResult.decision_hash}</p>
      <div className="offer-container">
        {renderOffer(ddrResult.decision_outcome)}
      </div>
    </div>
  );
};
