import "../styles/Home.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Navbar />

      <section className="hero">

        <div className="hero-left">

          <span className="badge">
            Smart Legal Assistance Platform
          </span>

          <h1>
            Know Your Rights.
            <br />
            Protect Your Future.
          </h1>

          <p>
            LegalEase Assist helps users understand their legal rights
            through guided questions, voice assistance, official contacts,
            required documents, and nearby legal aid information.
          </p>

          <div className="hero-buttons">

            <Link to="/dashboard">
              <button className="primary-btn">
                Get Started
              </button>
            </Link>

            <Link to="/describe">
              <button className="secondary-btn">
                Describe Problem
              </button>
            </Link>

          </div>

          <div className="stats">

            <div className="stat-box">
              <h2>150+</h2>
              <p>Rights Guides</p>
            </div>

            <div className="stat-box">
              <h2>24/7</h2>
              <p>Emergency Help</p>
            </div>

            <div className="stat-box">
              <h2>All States</h2>
              <p>Legal Aid</p>
            </div>

          </div>

        </div>

        <div className="hero-right">

          <div className="demo-card">

            <h3>⚖️ Legal Guidance</h3>

            <hr />

            <p><strong>Category :</strong> Cyber Fraud</p>

            <p><strong>Next Step :</strong> Call 1930 Immediately</p>

            <p><strong>Documents :</strong> Transaction ID, Screenshots</p>

            <Link to="/describe">
              <button>
                Start Guidance
              </button>
            </Link>

          </div>

        </div>

      </section>
            <section className="features">

        <h2>Why Choose LegalEase Assist?</h2>

        <div className="feature-grid">

          <div className="feature-card">

            <div className="icon">🎤</div>

            <h3>Voice Assistance</h3>

            <p>
              Describe your legal issue using your voice in simple language.
            </p>

          </div>

          <div className="feature-card">

            <div className="icon">⚖️</div>

            <h3>Know Your Rights</h3>

            <p>
              Get simplified legal rights and step-by-step guidance.
            </p>

          </div>

          <div className="feature-card">

            <div className="icon">📂</div>

            <h3>Evidence Vault</h3>

            <p>
              Securely store screenshots, bills, PDFs and other important documents.
            </p>

          </div>

          <div className="feature-card">

            <div className="icon">📞</div>

            <h3>Official Contacts</h3>

            <p>
              Find verified helplines, nearby legal aid offices and official support.
            </p>

          </div>

        </div>

      </section>

      <Footer />

    </>
  );
}

export default Home;