import React from "react";
import digitalImg from "../assets/Digital1.jpg"; // adjust path if needed
import { FaDigitalTachograph } from "react-icons/fa";
import { Link } from "react-router-dom";

const DigitalTransformation = () => {
  return (
    <>
      <style>{`
        .service-hero {
          background-image: url(${digitalImg});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
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
        .service-hero .hero-content {
          position: relative;
          z-index: 2;
          padding: 2rem;
        }
        .Business-title {
          font-size: 2.5rem;
          font-weight: 600;
        }
        .lead {
          font-size: 1.05rem;
          color: #f1f1f1;
        }
        .container.py-5 { max-width: 1100px; }
                        .service-button {
          display: inline-block;
          background-color: transparent;
          border: 2px solid #ff6a00;
          color: #ff6a00;
          font-size: 1rem;
          font-weight: 500;
          padding: 12px 28px;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-radius: 30px;
          transition: all 0.3s ease-in-out;
          text-decoration: none;
        }

        .service-button:hover {
          background-color: #ff6a00;
          color: white !important;
          border-color: #ff6a00;
        }


      `}</style>

      {/* Hero */}
      <div className="service-hero">
        <div className="hero-content">
          <h1 className="Business-title">Digital Transformation</h1>
          {/* <p className="lead mt-3">
            Empowering your business through technology evolution.
          </p> */}
        </div>
      </div>

      {/* Page content (unchanged) */}
      <div className="container py-5">
        <div className="text-center mb-4">
          {/* <FaDigitalTachograph size={50} color="#f4b400" /> */}
          <h2 className="mt-3">Digital Transformation</h2>
          <p className="">
            Empowering your business through technology evolution.
          </p>
        </div>

        <div className="mb-4">
          <h4>Our Expertise:</h4>
          <ul>
            <li>Salesforce Advisory Services</li>
            <li>Salesforce Implementation and Customization</li>
            <li>
              Sales Cloud, Service Cloud, Marketing Cloud, Industry Cloud,
              Revenue Cloud and Experience Cloud Implementations
            </li>
            <li>B2B Commerce & B2C Commerce Implementations</li>
            <li>Integration Development & Architecture Services</li>
            <li>
              Mentoring & Workforce Development delivered by Product Experts
            </li>
            <li>Data Engineering Services (Data Cloud, BI)</li>
          </ul>
        </div>

        <p>
          NextMetaForce has been founded by industry veterans and experts who've
          been early adopters of cloud technologies. They've been prominent in
          the CRM Technology space since 2005 and executed more than 100
          projects across various domains.
        </p>

        <p>
          To explore how we can support your transformation journey, reach out
          to us at{" "}
          <a href="mailto:info@nextmetaforce.in">info@nextmetaforce.in</a>.
        </p>
      </div>
      <div className="text-center my-5">
        <Link to="/services" className="btn service-button">
          ← Back to Services
        </Link>
      </div>
    </>
  );
};

export default DigitalTransformation;
