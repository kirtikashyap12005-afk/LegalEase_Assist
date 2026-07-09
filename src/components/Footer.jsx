import "../styles/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-content">

        <h2>LegalEase Assist</h2>

        <p>
          Helping citizens understand their legal rights through
          simple guidance and verified information.
        </p>

        <div className="footer-links">

          <a href="#">Privacy Policy</a>

          <a href="#">Terms of Service</a>

          <a href="#">Contact</a>

        </div>

        <p className="copyright">
          © 2026 LegalEase Assist. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;