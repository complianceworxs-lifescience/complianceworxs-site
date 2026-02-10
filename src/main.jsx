import React from "react";
import { Link } from "react-router-dom";  // Import Link from react-router-dom

const App = () => {
  return (
    <div>
      <header>
        <nav>
          <ul>
            {/* Correctly linked routes for navigation */}
            <li>
              <Link to="/">Home</Link> {/* Link to the homepage */}
            </li>
            <li>
              <Link to="/pricing">Pricing</Link> {/* Link to Pricing page */}
            </li>
            <li>
              <Link to="/intelligence">Intelligence</Link> {/* Link to Intelligence page */}
            </li>
            <li>
              <Link to="/authority">Authority</Link> {/* Link to Authority page */}
            </li>
            <li>
              <Link to="/access">Access</Link> {/* Link to Access page */}
            </li>
            <li>
              <Link to="/ddr">DDR</Link> {/* Link to DDR page */}
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <h1>Welcome to ComplianceWorxs!</h1>
        <p>This is the main page of ComplianceWorxs. Use the links above to navigate through the app.</p>
      </main>
    </div>
  );
};

export default App;
