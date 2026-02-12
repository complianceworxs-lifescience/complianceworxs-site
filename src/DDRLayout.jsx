import React from 'react';
import { Link, Outlet, useLocation } from 'react-router-dom';

const DDRLayout = () => {
  const location = useLocation();
  
  // The Navigation Sequence
  const navItems = [
    { path: '/ddr', label: '1. Overview' },
    { path: '/ddr/context', label: '2. Decision Context' },
    { path: '/ddr/evidence', label: '3. Evidence Set' },
    { path: '/ddr/risk', label: '4. Risk & Exposure' },
    { path: '/ddr/outcome', label: '5. Decision Outcome' },
    { path: '/ddr/traceability', label: '6. Review & Traceability' },
    { path: '/ddr/assessment', label: '7. Final Assessment' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', backgroundColor: '#f8fafc', fontFamily: 'Inter, system-ui, sans-serif' }}>
      
      {/* SIDEBAR: PERSISTENT & CLICKABLE */}
      <aside style={{ width: '300px', backgroundColor: '#0a1a36', color: 'white', padding: '40px 20px', display: 'flex', flexDirection: 'column', position: 'sticky', top: 0, height: '100vh' }}>
        
        <div style={{ marginBottom: '40px' }}>
          <h2 style={{ fontSize: '1.2rem', fontWeight: '900', letterSpacing: '1px', margin: 0 }}>DDR ENGINE</h2>
          <Link to="/" style={{ color: '#22d3ee', fontSize: '0.75rem', textDecoration: 'none', fontWeight: '600', display: 'block', marginTop: '10px' }}>
            ← Exit to Dashboard
          </Link>
        </div>

        <nav style={{ flex: 1 }}>
          {navItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <Link 
                key={item.path}
                to={item.path}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '12px 15px',
                  marginBottom: '8px',
                  borderRadius: '6px',
                  textDecoration: 'none',
                  fontSize: '0.85rem',
                  fontWeight: isActive ? '700' : '500',
                  color: isActive ? '#fff' : '#94a3b8',
                  backgroundColor: isActive ? 'rgba(34, 211, 238, 0.15)' : 'transparent',
                  transition: 'all 0.2s ease',
                  borderLeft: isActive ? '4px solid #22d3ee' : '4px solid transparent'
                }}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* PERSISTENCE INDICATOR (Assurance for Interrupted Users) */}
        <div style={{ padding: '20px', backgroundColor: 'rgba(255,255,255,0.03)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.1)' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
            <div style={{ width: '8px', height: '8px', borderRadius: '50%', backgroundColor: '#10b981' }}></div>
            <span style={{ fontSize: '0.7rem', color: '#10b981', fontWeight: 'bold', textTransform: 'uppercase' }}>Session Synced</span>
          </div>
          <p style={{ fontSize: '0.65rem', color: '#94a3b8', margin: 0, lineHeight: '1.4' }}>
            Your assessment data is secured in your Google Cloud vault.
          </p>
        </div>
      </aside>

      {/* MAIN VIEWPORT (The Swap Zone) */}
      <main style={{ flex: 1, padding: '60px', overflowY: 'auto', display: 'flex', justifyContent: 'center' }}>
        <div style={{ width: '100%', maxWidth: '1000px' }}>
          {/* Progress Line Component could go here */}
          <div style={{ backgroundColor: 'white', padding: '50px', borderRadius: '16px', boxShadow: '0 10px 25px -5px rgba(0,0,0,0.05)', border: '1px solid #eef2f6' }}>
            <Outlet /> 
          </div>
        </div>
      </main>
    </div>
  );
};

export default DDRLayout;
