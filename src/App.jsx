import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/Dashboard";
import DescribeYourProblems from "./pages/DescribeYourProblems";
import SavedGuidance from "./pages/SavedGuidance";
import Profile from "./pages/Profile";
import EvidenceVault from "./pages/EvidenceVault";
import GuidedQuestionnaire from "./pages/GuidedQuestionnaire";
import RightsResult from "./pages/RightsResult";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/describe" element={<DescribeYourProblems />} />
        <Route path="/saved-guidance" element={<SavedGuidance />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/vault" element={<EvidenceVault />} />
        <Route path="/questionnaire" element={<GuidedQuestionnaire />} />
        <Route path="/rights-result" element={<RightsResult />} />
  

      </Routes>
    </BrowserRouter>
  );
}

export default App;
