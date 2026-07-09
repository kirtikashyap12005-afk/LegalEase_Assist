import "../styles/Dashboard.css";
import { Link } from "react-router-dom";

function Dashboard() {
  return (
    <div className="dashboard">

      <aside className="sidebar">

        <h2>⚖️ LegalEase Assist</h2>

        <ul>
          <li><Link to="/dashboard">🏠 Dashboard</Link></li>

          <li><Link to="/describe">📝 Describe Problem</Link></li>

          <li><Link to="/saved-guidance">📚 Saved Guidance</Link></li>

          <li><Link to="/vault">📁 Evidence Vault</Link></li>

          <li><Link to="/profile">👤 Profile</Link></li>

          <li><Link to="/">🚪 Logout</Link></li>
        </ul>

      </aside>

      <main className="content">

        <div className="top">

          <h1>Hello, Kirti 👋</h1>

          <Link to="/describe">
            <button>Start Guidance</button>
          </Link>

        </div>

        <div className="cards">

          <div className="card">
            <h2>150+</h2>
            <p>Legal Rights Guides</p>
          </div>

          <div className="card">
            <h2>8</h2>
            <p>Saved Guidance</p>
          </div>

          <div className="card">
            <h2>24/7</h2>
            <p>Emergency Contacts</p>
          </div>

          <div className="card">
            <h2>State Wise</h2>
            <p>Legal Aid Directory</p>
          </div>

        </div>

        <div className="voice-card">

          <h2>🎤 Voice Legal Assistant</h2>

          <p>
            Speak or type your legal problem to receive step-by-step legal guidance.
          </p>

          <Link to="/describe">
            <button>Describe My Problem</button>
          </Link>

        </div>

      </main>

    </div>
  );
}

export default Dashboard;