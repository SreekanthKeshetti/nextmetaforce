// src/App.jsx
import { Button, Card } from "react-bootstrap";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ServicesPage from "./pages/ServicesPage";
import ContactUsPage from "./pages/ContactUsPage";
import SolutionsPage from "./pages/SolutionsPage";
import NewNavbar from "./components/NewNavbarr";
import Footer from "./components/Footer";
import CareersPage from "./pages/CareersPage";
import ThemeToggle from "./components/ThemeToggle";
import AIChatBot from "../src/components/AIChatBot";
import DigitalTransformation from "../src/pages/DigitalTransformation";
import SoftwareDevelopment from "../src/pages/SoftwareDevelopment";
import ITConsulting from "../src/pages/ITConsulting";
import TrainingEnablement from "../src/pages/TrainingEnablement";
import CloudAI from "../src/pages/CloudAI";
import AdvancedTechnologies from "../src/pages/AdvancedTechnologies";
import CustomCursor from "./components/CustomCursor";
import OrbitAnimation from "./components/OrbitAnimation";
function App() {
  return (
    <div className="App">
      {/* <MyNavbar /> */}
      {/* <ThemeToggle /> */}
      <CustomCursor />
      <NewNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route
          path="/services/digital-transformation"
          element={<DigitalTransformation />}
        />
        <Route
          path="/services/software-development"
          element={<SoftwareDevelopment />}
        />
        <Route path="/services/it-consulting" element={<ITConsulting />} />
        <Route path="/services/cloud-ai" element={<CloudAI />} />
        <Route
          path="/services/training-enablement"
          element={<TrainingEnablement />}
        />
        <Route
          path="/services/advanced-technologies"
          element={<AdvancedTechnologies />}
        />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/careers" element={<CareersPage />} />
      </Routes>
      {/* <AIChatBot /> */}
      <AIChatBot />
      <OrbitAnimation />
      <Footer />
    </div>
  );
}

export default App;
