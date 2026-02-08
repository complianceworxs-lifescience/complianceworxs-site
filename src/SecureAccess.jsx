import { useState } from "react";

export default function SecureAccess() {
  const [email, setEmail] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Secure access link sent to " + email);
    setEmail("");
  };

  return (
    <div className="secure-access-page">
      <div className="secure-access-inner">
        <h1>Secure Access</h1>
        <p className="secure-access-lead">
          Enter your email to receive a secure access link
        </p>
        
        <form onSubmit={handleSubmit} className="secure-access-form">
          <label htmlFor="email">Email Address</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@company.com"
            required
            className="secure-access-input"
          />
          <button type="submit" className="secure-access-submit">
            Send Secure Access Link
          </button>
        </form>
        
        <p className="secure-access-note">
          Access links expire after 1 hour and can only be used once. No password required.
        </p>
        
        <div className="how-it-works">
          <h2>How Secure Access Works</h2>
          <ul>
            <li>
              <strong>Enter Your Email:</strong> Provide your email address to receive a secure access link.
            </li>
            <li>
              <strong>Receive the Link:</strong> We will send a secure link to your email address. This link will expire in 1 hour and can only be used once.
            </li>
            <li>
              <strong>Click to Access:</strong> Click the link in your email to securely access your content. No password is required.
            </li>
            <li>
              <strong>Confidential and One-Time Use:</strong> The link will expire after 1 hour and cannot be used again.
            </li>
          </ul>
          <p className="important-notes">
            <strong>Important Notes:</strong> This process ensures that your access is secure, and your personal information remains confidential.
          </p>
        </div>
      </div>
    </div>
  );
}
