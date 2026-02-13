import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import DDRLayout from "./DDRLayout";
import DDROverview from "./ddr/Overview";
import DecisionContext from "./ddr/DecisionContext";
import FinalAssessment from "./ddr/FinalAssessment";

// Inline SVG Icon Components
const Shield = ({ size = 24 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
);

const CheckCircle = ({ size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
    <polyline points="22 4 12 14.01 9 11.01"/>
  </svg>
);

const XCircle = ({ size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <circle cx="12" cy="12" r="10"/>
    <line x1="15" y1="9" x2="9" y2="15"/>
    <line x1="9" y1="9" x2="15" y2="15"/>
  </svg>
);

const AlertTriangle = ({ size = 24, style }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
    <line x1="12" y1="9" x2="12" y2="13"/>
    <line x1="12" y1="17" x2="12.01" y2="17"/>
  </svg>
);

// Main Layout Component
const MainLayout = ({ children }) => {
  return (
    <div style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      {/* Header */}
      <header style={{
        backgroundColor: '#0B1F2A',
        color: 'white',
        padding: '12px 0',
        borderBottom: '1px solid rgba(255,255,255,0.1)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          fontSize: '13px'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
            <Shield size={14} />
            <span style={{ fontWeight: '600', letterSpacing: '0.5px' }}>COMPLIANCEWORKXS</span>
            <span style={{ 
              marginLeft: '8px', 
              fontSize: '11px', 
              opacity: '0.8',
              textTransform: 'uppercase',
              letterSpacing: '0.3px'
            }}>
              AUTHORIZATION ENGINE™
            </span>
          </div>
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
            <span style={{ opacity: '0.9' }}>Proof: premium layer: VDAs</span>
            <span style={{ opacity: '0.9' }}>Layer 6/Engine</span>
            <span style={{ opacity: '0.9' }}>New enrolls.</span>
          </div>
        </div>
      </header>

      {/* Navigation */}
      <nav style={{
        backgroundColor: 'white',
        borderBottom: '1px solid #e5e7eb',
        position: 'sticky',
        top: 0,
        zIndex: 100
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          height: '64px'
        }}>
          <Link to="/" style={{
            fontSize: '24px',
            fontWeight: '700',
            color: '#1e293b',
            textDecoration: 'none',
            letterSpacing: '-0.5px'
          }}>
            COMPLIANCEWORKXS
          </Link>
          
          <div style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
            <Link to="/" style={{
              color: '#475569',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '500'
            }}>
              Overview
            </Link>
            <a href="#pricing" style={{
              color: '#475569',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '500'
            }}>
              Pricing
            </a>
            <a href="#intelligence" style={{
              color: '#475569',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '500'
            }}>
              Intelligence Stream
            </a>
            <a href="#security" style={{
              color: '#475569',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '500'
            }}>
              Security
            </a>
            <a href="#access" style={{
              color: '#475569',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '500'
            }}>
              Access
            </a>
            <Link to="/ddr" style={{
              backgroundColor: '#F2B233',
              color: '#0B1F2A',
              padding: '10px 24px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '15px',
              fontWeight: '600',
              transition: 'all 0.2s'
            }}>
              Start Assessment
            </Link>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main style={{ flex: 1 }}>
        {children}
      </main>

      {/* Footer */}
      <footer style={{
        backgroundColor: '#0B1F2A',
        color: 'white',
        padding: '48px 0 24px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 24px'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: '48px',
            marginBottom: '48px'
          }}>
            {/* Company */}
            <div>
              <h3 style={{
                fontSize: '16px',
                fontWeight: '700',
                marginBottom: '16px',
                letterSpacing: '0.5px'
              }}>
                COMPLIANCEWORKXS
              </h3>
              <p style={{
                fontSize: '13px',
                lineHeight: '1.6',
                opacity: '0.85'
              }}>
                A promised compliance partner that performs proofs insights, shift towards an ecosystem of verifiable, defendible.
              </p>
            </div>

            {/* Governance */}
            <div>
              <h4 style={{
                fontSize: '14px',
                fontWeight: '600',
                marginBottom: '16px',
                color: 'white'
              }}>
                Governance
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '13px',
                lineHeight: '2'
              }}>
                <li style={{ opacity: '0.85' }}>Quality measures</li>
                <li style={{ opacity: '0.85' }}>Analysis of reg duty and story automated</li>
                <li style={{ opacity: '0.85' }}>Audit admin files</li>
                <li style={{ opacity: '0.85' }}>Formalize Playbook</li>
                <li style={{ opacity: '0.85' }}>Smart ethics, extensibility, detection.</li>
              </ul>
            </div>

            {/* Intelligence */}
            <div>
              <h4 style={{
                fontSize: '14px',
                fontWeight: '600',
                marginBottom: '16px',
                color: 'white'
              }}>
                Intelligence
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '13px',
                lineHeight: '2'
              }}>
                <li style={{ opacity: '0.85' }}>Regulatory Feedeals</li>
                <li style={{ opacity: '0.85' }}>Hire Monty of investment</li>
                <li style={{ opacity: '0.85' }}>Workflow dynamics</li>
                <li style={{ opacity: '0.85' }}>Atrial sequences</li>
                <li style={{ opacity: '0.85' }}>Dessert thresholds Incinerate</li>
              </ul>
            </div>

            {/* Legal & Procurement */}
            <div>
              <h4 style={{
                fontSize: '14px',
                fontWeight: '600',
                marginBottom: '16px',
                color: 'white'
              }}>
                Legal & Procurement
              </h4>
              <ul style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                fontSize: '13px',
                lineHeight: '2'
              }}>
                <li style={{ opacity: '0.85' }}>Buyer FAQ</li>
                <li style={{ opacity: '0.85' }}>Procd Rectie INAC</li>
                <li style={{ opacity: '0.85' }}>Regulatory Byproduct</li>
                <li style={{ opacity: '0.85' }}>Secure Access</li>
              </ul>
            </div>
          </div>

          {/* Bottom Bar */}
          <div style={{
            borderTop: '1px solid rgba(255,255,255,0.1)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            fontSize: '13px',
            opacity: '0.75'
          }}>
            <div>© ComplianceWorxs. All rights reserved</div>
            <div>+1 (203) 538-0107</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

// Home Component - Redesigned to match screenshot
const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <section style={{
        position: 'relative',
        minHeight: '600px',
        background: 'linear-gradient(90deg, rgba(11,31,42,0.78) 0%, rgba(30,142,138,0.22) 55%, rgba(255,255,255,0) 100%)',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        {/* Background Image Overlay */}
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundImage: 'url("https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80")',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.15,
          zIndex: 0
        }} />

        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '80px 24px',
          position: 'relative',
          zIndex: 1,
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px',
          alignItems: 'center'
        }}>
          {/* Left Content */}
          <div>
            <h1 style={{
              fontSize: '48px',
              fontWeight: '700',
              color: 'white',
              lineHeight: '1.15',
              marginBottom: '24px',
              textShadow: '0 2px 4px rgba(0,0,0,0.1)'
            }}>
              Authorize Proof Only When a Decision Can Be Defended
            </h1>
            <p style={{
              fontSize: '18px',
              color: 'rgba(255,255,255,0.95)',
              lineHeight: '1.6',
              marginBottom: '32px',
              textShadow: '0 1px 2px rgba(0,0,0,0.1)'
            }}>
              Documented defensibility before proof exists.<br />
              Proof is granted only after thresholds are met.
            </p>
            <Link to="/ddr" style={{
              display: 'inline-block',
              backgroundColor: '#F2B233',
              color: '#0B1F2A',
              padding: '14px 32px',
              borderRadius: '6px',
              textDecoration: 'none',
              fontSize: '16px',
              fontWeight: '600',
              transition: 'all 0.2s',
              boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
            }}>
              Start Decision Defensibility Assessment →
            </Link>
          </div>

          {/* Right Content - Visual Element */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.95)',
              borderRadius: '12px',
              padding: '32px',
              boxShadow: '0 20px 25px -5px rgba(0,0,0,0.1), 0 10px 10px -5px rgba(0,0,0,0.04)',
              maxWidth: '400px'
            }}>
              <div style={{
                backgroundColor: '#F0FAFA',
                border: '2px solid #1E8E8A',
                borderRadius: '8px',
                padding: '16px',
                marginBottom: '16px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <CheckCircle size={24} style={{ color: '#1E8E8A' }} />
                  <span style={{ fontWeight: '600', fontSize: '16px', color: '#0B1F2A' }}>Defensibility Review</span>
                </div>
                <p style={{ fontSize: '14px', color: '#475569', margin: 0 }}>
                  Decision criteria evaluated before proof
                </p>
              </div>

              <div style={{
                backgroundColor: '#FEF8F0',
                border: '2px solid #F2B233',
                borderRadius: '8px',
                padding: '16px'
              }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <AlertTriangle size={24} style={{ color: '#F2B233' }} />
                  <span style={{ fontWeight: '600', fontSize: '16px', color: '#0B1F2A' }}>Risk Flag Detected</span>
                </div>
                <p style={{ fontSize: '14px', color: '#475569', margin: 0 }}>
                  Threshold verification required
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ComplianceWorxs Is a Proof Authorization System */}
      <section style={{
        backgroundColor: '#f8fafc',
        padding: '64px 24px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#1e293b',
            marginBottom: '48px'
          }}>
            ComplianceWorxs Is a Proof Authorization System
          </h2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr',
            gap: '16px',
            maxWidth: '800px',
            margin: '0 auto'
          }}>
            <div style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '8px',
              textAlign: 'left',
              border: '1px solid #e2e8f0'
            }}>
              <p style={{
                fontSize: '16px',
                color: '#475569',
                margin: 0,
                lineHeight: '1.6'
              }}>
                Regulatory decisions are evaluated before documentation exists
              </p>
            </div>
            
            <div style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '8px',
              textAlign: 'left',
              border: '1px solid #e2e8f0'
            }}>
              <p style={{
                fontSize: '16px',
                color: '#475569',
                margin: 0,
                lineHeight: '1.6'
              }}>
                Proof is authorized only after defensibility is verified
              </p>
            </div>
            
            <div style={{
              backgroundColor: 'white',
              padding: '24px',
              borderRadius: '8px',
              textAlign: 'left',
              border: '1px solid #e2e8f0'
            }}>
              <p style={{
                fontSize: '16px',
                color: '#475569',
                margin: 0,
                lineHeight: '1.6'
              }}>
                Indefensible proof is blocked by design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Two Column Section */}
      <section style={{
        backgroundColor: 'white',
        padding: '64px 24px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px'
        }}>
          {/* Documentation Does Not Equal Defensibility */}
          <div>
            <h3 style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#1e293b',
              marginBottom: '32px'
            }}>
              Documentation Does Not Equal Defensibility
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <CheckCircle size={24} style={{ color: '#1E8E8A', flexShrink: 0, marginTop: '2px' }} />
                <p style={{
                  fontSize: '15px',
                  color: '#475569',
                  margin: 0,
                  lineHeight: '1.6'
                }}>
                  Inspectors assess decisions, not document volume
                </p>
              </div>
              
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <CheckCircle size={24} style={{ color: '#1E8E8A', flexShrink: 0, marginTop: '2px' }} />
                <p style={{
                  fontSize: '15px',
                  color: '#475569',
                  margin: 0,
                  lineHeight: '1.6'
                }}>
                  Proof without defensibility increases inspection risk
                </p>
              </div>
              
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <CheckCircle size={24} style={{ color: '#1E8E8A', flexShrink: 0, marginTop: '2px' }} />
                <p style={{
                  fontSize: '15px',
                  color: '#475569',
                  margin: 0,
                  lineHeight: '1.6'
                }}>
                  Most compliance failures begin with the wrong decision
                </p>
              </div>
            </div>
          </div>

          {/* How the System Works */}
          <div>
            <h3 style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#1e293b',
              marginBottom: '32px'
            }}>
              How the System Works
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#1E8E8A',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '16px',
                  flexShrink: 0
                }}>
                  1
                </div>
                <div>
                  <h4 style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#1e293b',
                    marginBottom: '4px'
                  }}>
                    Assess the decision
                  </h4>
                  <p style={{
                    fontSize: '14px',
                    color: '#64748b',
                    margin: 0,
                    lineHeight: '1.5'
                  }}>
                    Proof potential is evaluated against defensibility criteria
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#F2B233',
                  color: '#0B1F2A',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '16px',
                  flexShrink: 0
                }}>
                  ◊
                </div>
                <div>
                  <h4 style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#1e293b',
                    marginBottom: '4px'
                  }}>
                    Authorize proof
                  </h4>
                  <p style={{
                    fontSize: '14px',
                    color: '#64748b',
                    margin: 0,
                    lineHeight: '1.5'
                  }}>
                    Permission is granted only when thresholds are met
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  backgroundColor: '#64748b',
                  color: 'white',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: '700',
                  fontSize: '16px',
                  flexShrink: 0
                }}>
                  ×
                </div>
                <div>
                  <h4 style={{
                    fontSize: '16px',
                    fontWeight: '600',
                    color: '#1e293b',
                    marginBottom: '4px'
                  }}>
                    Block risk
                  </h4>
                  <p style={{
                    fontSize: '14px',
                    color: '#64748b',
                    margin: 0,
                    lineHeight: '1.5'
                  }}>
                    Indefensible proof is prevented from existing
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who This Is For / What CW Never Does */}
      <section style={{
        backgroundColor: '#f8fafc',
        padding: '64px 24px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '64px'
        }}>
          {/* Who This Is For */}
          <div>
            <h3 style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#1e293b',
              marginBottom: '32px'
            }}>
              Who This Is For
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <CheckCircle size={24} style={{ color: '#1E8E8A', flexShrink: 0, marginTop: '2px' }} />
                <p style={{
                  fontSize: '15px',
                  color: '#475569',
                  margin: 0,
                  lineHeight: '1.6'
                }}>
                  QA leaders accountable for inspection outcomes
                </p>
              </div>
              
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <CheckCircle size={24} style={{ color: '#1E8E8A', flexShrink: 0, marginTop: '2px' }} />
                <p style={{
                  fontSize: '15px',
                  color: '#475569',
                  margin: 0,
                  lineHeight: '1.6'
                }}>
                  Validation leaders defending system matensibility decisions
                </p>
              </div>
              
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <CheckCircle size={24} style={{ color: '#1E8E8A', flexShrink: 0, marginTop: '2px' }} />
                <p style={{
                  fontSize: '15px',
                  color: '#475569',
                  margin: 0,
                  lineHeight: '1.6'
                }}>
                  Executives signing decisions they must later defend
                </p>
              </div>
            </div>
          </div>

          {/* What ComplianceWorxs Never Does */}
          <div>
            <h3 style={{
              fontSize: '28px',
              fontWeight: '700',
              color: '#1e293b',
              marginBottom: '32px'
            }}>
              What ComplianceWorxs Never Does
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <XCircle size={24} style={{ color: '#64748b', flexShrink: 0, marginTop: '2px' }} />
                <p style={{
                  fontSize: '15px',
                  color: '#475569',
                  margin: 0,
                  lineHeight: '1.6'
                }}>
                  Does not authorize false proof
                </p>
              </div>
              
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <XCircle size={24} style={{ color: '#64748b', flexShrink: 0, marginTop: '2px' }} />
                <p style={{
                  fontSize: '15px',
                  color: '#475569',
                  margin: 0,
                  lineHeight: '1.6'
                }}>
                  Does not provide remediation advice
                </p>
              </div>
              
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <XCircle size={24} style={{ color: '#64748b', flexShrink: 0, marginTop: '2px' }} />
                <p style={{
                  fontSize: '15px',
                  color: '#475569',
                  margin: 0,
                  lineHeight: '1.6'
                }}>
                  Does not self-decide regulatory outcomes
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What You Receive If Authorized */}
      <section style={{
        backgroundColor: 'white',
        padding: '64px 24px'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          textAlign: 'center'
        }}>
          <h2 style={{
            fontSize: '36px',
            fontWeight: '700',
            color: '#1e293b',
            marginBottom: '32px'
          }}>
            What You Receive If Authorized
          </h2>
          
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '48px',
            marginBottom: '48px',
            flexWrap: 'wrap'
          }}>
            <div style={{ fontSize: '15px', color: '#64748b' }}>
              Decision defensibility verified
            </div>
            <div style={{ fontSize: '15px', color: '#64748b' }}>
              Evidence linkage summary
            </div>
            <div style={{ fontSize: '15px', color: '#64748b' }}>
              Audit-ready rationale
            </div>
          </div>

          <Link to="/ddr" style={{
            display: 'inline-block',
            backgroundColor: '#F2B233',
            color: '#0B1F2A',
            padding: '14px 32px',
            borderRadius: '6px',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: '600',
            transition: 'all 0.2s',
            boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
          }}>
            Start Decision Defensibility Assessment →
          </Link>
        </div>
      </section>
    </div>
  );
};

// App Component
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainLayout><Home /></MainLayout>} />
        <Route path="/ddr" element={<DDRLayout />}>
          <Route index element={<DDROverview />} />
          <Route path="context" element={<DecisionContext />} />
          <Route path="assessment" element={<FinalAssessment />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;

