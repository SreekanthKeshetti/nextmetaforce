import React from "react";
import Lists from "../components/Lists";
import AboutUsInfo from "../components/AboutUsInfo";
import NewForm from "../components/NewForm";
import backgroundImage from "../assets/building.jpg";
import AboutUs from "../components/AboutUs";
import ValuesGallery from "../components/OurValues";
import WhoWeAre from "../components/WhoWeAre";

function AboutUsPage() {
  return (
    <>
      {/* Hero Section */}
      <div className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="aboutus-heading-unique">Building the Future</h1>
          <p className="aboutus-subtext">
            We are a team of dedicated innovators
            {/* , creating impactful digital
            solutions that empower industries worldwide. */}
          </p>
        </div>

        <style jsx="true">{`
          .hero-section {
            position: relative;
            width: 100%;
            height: 100vh;
            overflow: hidden;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: white;
            background-image: url(${backgroundImage});
            background-size: cover;
            background-position: center;
          }

          .hero-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(30, 29, 29, 0.5);
            z-index: 0;
          }

          .hero-content {
            z-index: 1;
            opacity: 0;
            transform: translateY(30px);
            animation: fadeInUp 1.2s ease forwards;
          }

          @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Unique heading without underline */
          .aboutus-heading-unique {
            font-size: 2.5rem;
            font-weight: 600;
            margin-bottom: 1rem;
            color: #ffffff;
            position: relative;
            display: inline-block;
          }

          /* Force remove any ::after from old CSS */
          .aboutus-heading-unique::after {
            content: none !important;
          }

          .aboutus-subtext {
            font-size: 1.5rem;
            font-weight: 300;
            color: #ffffff;
            max-width: 600px;
            margin: 0 auto;
            // line-height: 1.7;
            // letter-spacing: 0.3px;
          }
        `}</style>
      </div>

      <AboutUs />
      <WhoWeAre />
      <AboutUsInfo />
      <ValuesGallery />

      <NewForm />
    </>
  );
}

export default AboutUsPage;
