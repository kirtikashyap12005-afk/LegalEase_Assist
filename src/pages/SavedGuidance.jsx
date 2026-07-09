import "../styles/SavedGuidance.css";

function SavedGuidance() {
  return (
    <div className="cases-container">

      <h1>Saved Guidance</h1>

      <div className="case-card">
        <div>
          <h3>Cyber Fraud</h3>
          <p>Saved on : 08 Jul 2026</p>
          <p>Next Step: Contact Bank & Call 1930</p>
        </div>
      </div>

      <div className="case-card">
        <div>
          <h3>Consumer Rights</h3>
          <p>Saved on : 06 Jul 2026</p>
          <p>Next Step: Contact Consumer Helpline</p>
        </div>
      </div>

      <div className="case-card">
        <div>
          <h3>Property Dispute</h3>
          <p>Saved on : 01 Jul 2026</p>
          <p>Next Step: Consult Legal Aid Office</p>
        </div>
      </div>

    </div>
  );
}

export default SavedGuidance;