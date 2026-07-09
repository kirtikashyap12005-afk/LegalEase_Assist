import "../styles/Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">

      <h2 className="logo">LegalEase Assist</h2>

      <ul className="nav-links">

        <li><Link to="/">Home</Link></li>

        <li><Link to="/dashboard">Dashboard</Link></li>

        <li><Link to="/describe">Describe Problem</Link></li>

        <li><Link to="/saved-guidance">Saved Guidance</Link></li>

        <li><Link to="/vault">Evidence Vault</Link></li>

      </ul>

      <div className="nav-btns">

        <Link to="/login">
          <button className="login-btn">Login</button>
        </Link>

        <Link to="/signup">
          <button className="signup-btn">Sign Up</button>
        </Link>

      </div>

    </nav>
  );
}

export default Navbar;