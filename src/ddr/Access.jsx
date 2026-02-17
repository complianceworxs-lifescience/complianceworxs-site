import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../App';

export default function Access() {
  const { identity } = useContext(AuthContext);
  const [records, setRecords] = useState([]);

  useEffect(() => {
    // Entitlement Check: Only run if identity (email) is resolved
    if (identity) {
      // This is where you will eventually fetch from your DB using the email
      // For now, it checks if a record was just issued in this session
      const issued = localStorage.getItem('cw_last_issued');
      if (issued) {
        setRecords([JSON.parse(issued)]);
      }
    }
  }, [identity]);

  // Guard: If no identity, show minimal auth prompt
  if (!identity) {
    return (
      <div style={{ padding: '100px 24px', textAlign: 'center', fontFamily: 'Inter, sans-serif' }}>
        <h2 style={{ color: '#0B1F2A' }}>Access Restricted</h2>
        <p style={{ color: '#64748b' }}>Please sign in with Google to view your issued records.</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '60px 24px', fontFamily: 'Inter, sans-serif' }}>
      {/* Status Block - Grounding the identity immediately */}
      <div style={{ borderBottom: '1px solid #e5e7eb', paddingBottom: '24px', marginBottom: '40px' }}>
        <h2 style={{ fontSize: '24px', color: '#027A48', margin: 0 }}>Access Status: Active</h2>
        <p style={{ color: '#667085', marginTop: '4px' }}>Signed in as: <strong>{identity}</strong></p>
      </div>

      {/* Issued Records Section */}
      <section>
        <h3 style={{ fontSize: '18px', fontWeight: '700', color: '#0B1F2A', marginBottom: '20px' }}>
          Issued Authorization Records
        </h3>
        
        {records.length > 0 ? (
          records.map((record, index) => (
            <div key={index} style={{ 
              border: '1px solid #e2e8f0', 
              borderRadius: '8px', 
              padding: '24px',
              backgroundColor: '#f8fafc',
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center'
            }}>
              <div>
                <div style={{ fontWeight: '700', color: '#0B1F2A' }}>Decision Authorization Record</div>
                <div style={{ fontSize: '13px', color: '#64748b' }}>Status: Issued · {new Date().toLocaleDateString()}</div>
              </div>
              <button style={{ 
                padding: '10px 20px', 
                backgroundColor: '#0B1F2A', 
                color: 'white', 
                borderRadius: '4px',
                border: 'none',
                fontWeight: '600',
                cursor: 'pointer'
              }}>
                Download PDF
              </button>
            </div>
          ))
        ) : (
          <div style={{ padding: '40px', textAlign: 'center', border: '2px dashed #e2e8f0', borderRadius: '12px' }}>
            <p style={{ color: '#64748b', margin: 0 }}>No authorization records have been issued for this account.</p>
          </div>
        )}
      </section>

      {/* Primary Action */}
      <div style={{ marginTop: '40px' }}>
        <button 
          onClick={() => window.location.href = '/ddr'}
          style={{ 
            backgroundColor: '#F2B233', 
            color: '#0B1F2A', 
            padding: '12px 32px', 
            borderRadius: '6px', 
            border: 'none', 
            fontWeight: '700',
            cursor: 'pointer'
          }}
        >
          Start New Assessment
        </button>
      </div>
    </div>
  );
}
