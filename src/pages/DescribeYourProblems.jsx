import { useState, useEffect } from "react";
import "../styles/DescribeYourProblems.css";
import { Link } from "react-router-dom";

import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

function DescribeYourProblems() {

  const [language, setLanguage] = useState("en-IN");
  const [category, setCategory] = useState("");

  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
  } = useSpeechRecognition();

  useEffect(() => {
    if (!browserSupportsSpeechRecognition) {
      alert("Speech Recognition is not supported in this browser.");
    }
  }, [browserSupportsSpeechRecognition]);

  const startListening = () => {
    resetTranscript();

    SpeechRecognition.startListening({
      continuous: true,
      language: language,
    });
  };

  const stopListening = () => {
    SpeechRecognition.stopListening();
  };

  const detectLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        alert(
          `Location Detected\nLatitude: ${position.coords.latitude}\nLongitude: ${position.coords.longitude}`
        );
      },
      () => {
        alert("Unable to detect your location.");
      }
    );
  };

  return (
    <div className="report-container">

      <h1>Describe Your Problem</h1>

      <p className="subtitle">
        Tell us what happened. We'll guide you with your legal rights,
        official contacts and next steps.
      </p>

      <form className="report-form">

        <div className="input-box">
          <label>Select Category</label>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Choose Category</option>
            <option>Cyber Fraud</option>
            <option>Consumer Rights</option>
            <option>Property Dispute</option>
            <option>Women Safety</option>
            <option>Labour Rights</option>
            <option>Other</option>
          </select>
        </div>

        <div className="input-box">

          <label>Select Language</label>

          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            <option value="en-IN">English</option>
            <option value="hi-IN">Hindi</option>
          </select>

        </div>

        <div className="input-box">

          <label>Describe Your Problem</label>

          <textarea
            rows="7"
            value={transcript}
            readOnly
            placeholder="Click Start Voice Input and speak..."
          />

        </div>
                <div className="voice-buttons">

          <button
            type="button"
            className="voice-btn"
            onClick={startListening}
          >
            🎤 {listening ? "Listening..." : "Start Voice Input"}
          </button>

          <button
            type="button"
            className="stop-btn"
            onClick={stopListening}
          >
            ⏹ Stop Recording
          </button>

          <button
            type="button"
            className="clear-btn"
            onClick={resetTranscript}
          >
            🗑 Clear
          </button>

        </div>

        <div className="location-box">

          <button
            type="button"
            className="location-btn"
            onClick={detectLocation}
          >
            📍 Detect My Location
          </button>

        </div>

        <div className="status">

          <strong>Status :</strong>{" "}

          {listening ? (
            <span className="recording">
              🎤 Recording...
            </span>
          ) : (
            <span className="stopped">
              ⏹ Not Recording
            </span>
          )}

        </div>

        <Link to="/questionnaire">

          <button
            type="button"
            className="submit-btn"
          >
            Analyze Problem →
          </button>

        </Link>

      </form>
          </div>
  );
}

export default DescribeYourProblems;