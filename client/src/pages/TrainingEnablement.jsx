import React from "react";
import trainingImg from "../assets/1.jpg";
import { FaChalkboardTeacher } from "react-icons/fa";

const TrainingEnablement = () => {
  return (
    <>
      <style>{`
        .service-hero {
          background-image: url(${trainingImg});
          background-size: cover;
          background-position: center;
          min-height: 80vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #fff;
        }
        .service-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.55);
        }
        .service-hero .hero-content { position: relative; z-index:2; padding:2rem; }
        .Business-title { font-size: 2.5rem; font-weight: 600; }
        .lead { font-size: 1.05rem; color: #f1f1f1; }
      `}</style>

      <div className="service-hero">
        <div className="hero-content">
          <h1 className="Business-title">Training and Enablement</h1>
          <p className="lead mt-3">Empower Your Team for the Digital Age.</p>
        </div>
      </div>

      <div className="container py-5">
        {/* <div className="text-center mb-4">
          <FaChalkboardTeacher size={50} color="#9c27b0" />
          <h2 className="mt-3">Training and Enablement</h2>
          <p className="text-muted">
            Transform your workforce from users to innovators.
          </p>
        </div> */}

        <div className="mt-4">
          <p>
            Technology is only as powerful as the people who use it.
            NextMetaForce Training and Enablement closes the skills gap,
            equipping your team with hands-on expertise to leverage modern tools
            effectively.
          </p>
        </div>

        <div className="mt-4">
          <h4>Our Programs Include:</h4>
          <ul>
            <li>
              <strong>Corporate Bootcamps:</strong> Customized intensive
              training.
            </li>
            <li>
              <strong>Workshops & Cert Prep:</strong> Scenario-based learning
              and certification support.
            </li>
            <li>
              <strong>Platform Enablement:</strong> Salesforce, ServiceNow,
              cloud ecosystems, etc.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default TrainingEnablement;
