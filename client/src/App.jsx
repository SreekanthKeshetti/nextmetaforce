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

function App() {
  return (
    <div className="App">
      {/* <MyNavbar /> */}
      <NewNavbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route path="/solutions" element={<SolutionsPage />} />
        <Route path="/careers" element={<CareersPage />} />
      </Routes>
      {/* <AIChatBot /> */}
      <Footer />
    </div>
  );
}

export default App;
