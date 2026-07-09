import "../styles/RightsResult.css";
import { Link } from "react-router-dom";

function RightsResult() {

  return (

    <div className="rights-container">

      <div className="top-banner">

        <span className="status-badge">
          ✔ Guidance Generated Successfully
        </span>

        <h1>Legal Guidance Report</h1>

        <p>
          Based on your responses, here is your personalized legal guidance.
          Follow the recommended actions below and always use official
          government resources for filing complaints.
        </p>

      </div>

      <div className="result-card">

        <div className="section">

          <h2>🚨 Immediate Action Required</h2>

          <div className="action-grid">

            <div className="action-box">

              <h3>📞 Call Emergency</h3>

              <p>
                If your situation is urgent, immediately contact the
                national emergency helpline.
              </p>

              <button className="green-btn">
                Call 112
              </button>

            </div>

            <div className="action-box">

              <h3>🌐 File Official Complaint</h3>

              <p>
                Submit your complaint only through the official
                government complaint portal.
              </p>

              <a
                href="https://www.cybercrime.gov.in"
                target="_blank"
                rel="noreferrer"
              >
                <button className="blue-btn">
                  Open Official Portal
                </button>
              </a>

            </div>

            <div className="action-box">

              <h3>📂 Preserve Evidence</h3>

              <p>
                Keep every screenshot, message, email, receipt,
                transaction ID and document safely.
              </p>

            </div>

          </div>

        </div>



        <div className="section">

          <h2>📄 Required Documents</h2>

          <div className="document-grid">

            <div className="doc-card">
              ✔ Identity Proof (if required)
            </div>

            <div className="doc-card">
              ✔ Screenshots / Photos
            </div>

            <div className="doc-card">
              ✔ Bills / Receipts
            </div>

            <div className="doc-card">
              ✔ Transaction Details
            </div>

            <div className="doc-card">
              ✔ Emails / Chats
            </div>

            <div className="doc-card">
              ✔ Any Supporting Evidence
            </div>

          </div>

        </div>
                <div className="section">

          <h2>⚖ Know Your Legal Rights</h2>

          <div className="rights-grid">

            <div className="right-card">
              <h3>🛡 Right to Legal Protection</h3>
              <p>
                Every citizen has the right to seek legal protection and
                file complaints through authorized government authorities.
              </p>
            </div>

            <div className="right-card">
              <h3>📑 Right to Preserve Evidence</h3>
              <p>
                Screenshots, bills, emails, call recordings and documents
                can help support your complaint during investigation.
              </p>
            </div>

            <div className="right-card">
              <h3>⚠ Right to Report Safely</h3>
              <p>
                Never share OTPs, passwords or confidential information
                with unknown people claiming to provide assistance.
              </p>
            </div>

          </div>

        </div>


        <div className="section">

          <h2>🏛 Government Authorities</h2>

          <div className="authority-grid">

            <div className="authority-card">

              <h3>Cyber Crime Cell</h3>

              <p>
                Handles cyber fraud, online scams, identity theft,
                hacking and digital crimes.
              </p>

            </div>

            <div className="authority-card">

              <h3>District Legal Services Authority</h3>

              <p>
                Provides free legal aid, legal advice and assistance
                to eligible citizens.
              </p>

            </div>

            <div className="authority-card">

              <h3>Nearest Police Station</h3>

              <p>
                Visit your nearest police station whenever immediate
                legal intervention is required.
              </p>

            </div>

          </div>

        </div>


        <div className="section">

          <h2>☎ Important Helplines</h2>

          <div className="contacts">

            <div className="contact-card">

              <h3>🚨 Emergency</h3>

              <span>112</span>

            </div>

            <div className="contact-card">

              <h3>👩 Women Helpline</h3>

              <span>181</span>

            </div>

            <div className="contact-card">

              <h3>💻 Cyber Helpline</h3>

              <span>1930</span>

            </div>

          </div>

        </div>


        <div className="section">

          <h2>🌐 Official Government Websites</h2>

          <div className="website-list">

            <a
              href="https://cybercrime.gov.in"
              target="_blank"
              rel="noreferrer"
            >
              🌐 National Cyber Crime Portal
            </a>

            <a
              href="https://consumerhelpline.gov.in"
              target="_blank"
              rel="noreferrer"
            >
              🛒 National Consumer Helpline
            </a>

            <a
              href="https://nalsa.gov.in"
              target="_blank"
              rel="noreferrer"
            >
              ⚖ National Legal Services Authority
            </a>

            <a
              href="https://www.india.gov.in"
              target="_blank"
              rel="noreferrer"
            >
              🇮🇳 India Government Portal
            </a>

          </div>

        </div>
                <div className="section">

          <h2>❓ Frequently Asked Questions</h2>

          <div className="faq-card">

            <h3>Can I file a complaint online?</h3>

            <p>
              Yes. Many complaints such as cyber fraud and consumer
              grievances can be submitted through official government
              portals. Always use verified websites only.
            </p>

          </div>

          <div className="faq-card">

            <h3>Will I need original documents?</h3>

            <p>
              Keep original documents safely. Normally scanned copies,
              screenshots and transaction details are useful while
              submitting complaints online.
            </p>

          </div>

          <div className="faq-card">

            <h3>How quickly should I report an incident?</h3>

            <p>
              Report the issue as soon as possible. Early reporting
              increases the chances of faster action in many cases.
            </p>

          </div>

        </div>


        <div className="section">

          <h2>💡 Before You Proceed</h2>

          <div className="tips-box">

            <ul>

              <li>✔ Verify every website before sharing information.</li>

              <li>✔ Never share OTP, passwords or banking PIN.</li>

              <li>✔ Keep complaint reference numbers safely.</li>

              <li>✔ Download or print important receipts after filing.</li>

              <li>✔ Preserve all evidence until the issue is resolved.</li>

            </ul>

          </div>

        </div>


        <div className="action-buttons">

          <button className="download-btn">

            📥 Download Checklist

          </button>

          <Link to="/saved-guidance">

            <button className="save-btn">

              ⭐ Save Guidance

            </button>

          </Link>

          <Link to="/dashboard">

            <button className="back-btn">

              🏠 Back to Dashboard

            </button>

          </Link>

        </div>

      </div>

    </div>

  );

}

export default RightsResult;