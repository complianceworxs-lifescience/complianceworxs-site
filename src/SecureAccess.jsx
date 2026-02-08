import { Link } from "react-router-dom";

export default function SecureAccess() {
  return (
    <div className="secure-access-honest-page">
      <div className="secure-access-honest-inner">
        <h1>Secure Document Access</h1>
        
        <p className="intro-text">
          ComplianceWorxs takes document security seriously. All confidential 
          submissions are handled through our secure, validated document management 
          system that meets 21 CFR Part 11 and GxMP requirements.
        </p>

        <div className="instructions-box">
          <h2>To Submit Confidential Documents:</h2>
          <ol>
            <li>Contact our team at <strong>secure@complianceworxs.com</strong></li>
            <li>We'll provide you with a secure, encrypted upload link</li>
            <li>Your documents are stored in our validated, audit-ready system</li>
            <li>Access is tracked and logged per regulatory requirements</li>
          </ol>
        </div>

        <div className="why-section">
          <h3>Why We Don't Use Generic Web Forms</h3>
          <p>
            Life science compliance requires validated systems with:
          </p>
          <ul>
            <li>End-to-end encryption</li>
            <li>Complete audit trails</li>
            <li>21 CFR Part 11 electronic signatures</li>
            <li>Role-based access controls</li>
            <li>Validated data integrity</li>
          </ul>
        </div>

        <div className="security-standards">
          <h3>Our Security Standards</h3>
          <div className="standards-grid">
            <div className="standard-item">
              <strong>Encryption</strong>
              <p>AES-256 encryption for data at rest, TLS 1.3 for data in transit</p>
            </div>
            <div className="standard-item">
              <strong>Compliance</strong>
              <p>21 CFR Part 11, EU GMP Annex 11, ISO 27001 aligned</p>
            </div>
            <div className="standard-item">
              <strong>Audit Trail</strong>
              <p>Complete, immutable logs of all document access and modifications</p>
            </div>
            <div className="standard-item">
              <strong>Access Control</strong>
              <p>Role-based permissions with multi-factor authentication</p>
            </div>
          </div>
        </div>

        <div className="contact-box">
          <strong>Need immediate assistance?</strong>
          <p>
            Email us at <a href="mailto:secure@complianceworxs.com">secure@complianceworxs.com</a>
          </p>
        </div>

        <Link to="/" className="back-home-btn">
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
