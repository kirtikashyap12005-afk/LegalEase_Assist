import "../styles/EvidenceVault.css";

function EvidenceVault() {
  return (
    <div className="vault-container">

      <h1>Evidence Vault</h1>

      <p className="subtitle">
        Securely upload and manage your legal evidence.
      </p>

      <div className="upload-box">

        <h3>📤 Upload Evidence</h3>

        <input type="file" />

        <button>Upload</button>

      </div>

      <div className="evidence-list">

        <div className="evidence-card">
          <h3>📄 Screenshot.png</h3>
          <p>Uploaded : 08 Jul 2026</p>
        </div>

        <div className="evidence-card">
          <h3>📷 Incident.jpg</h3>
          <p>Uploaded : 07 Jul 2026</p>
        </div>

        <div className="evidence-card">
          <h3>📑 FIR.pdf</h3>
          <p>Uploaded : 05 Jul 2026</p>
        </div>

      </div>

    </div>
  );
}

export default EvidenceVault;