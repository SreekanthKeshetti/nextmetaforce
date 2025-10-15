import React from "react";
import {
  FaLightbulb,
  FaUsersCog,
  FaChartLine,
  FaCloud,
  FaCogs,
  FaLock,
} from "react-icons/fa";

import Footer from "../components/Footer";
import StretchyGallery from "../components/StretchyGallery";
import TechStackCarousel from "../components/TechStackCarousel";
import serviceHero from "../assets/serviceHero.jpg";
import NewForm from "../components/NewForm";
import { Link } from "react-router-dom";

// The main ServicesPage component.
const ServicesPage = () => {
  return (
    <>
      <style>
        {`
            .Business-title{
             font-size:2.5rem;
             };

          .why-subtext {
          text-align: center;
          color: #555;
          max-width: 650px;
          margin: 0 auto 3rem;
          font-size: 1.05rem;
        }
         .our-title {
  font-size: 1.5rem;
  position: relative; /* Essential for positioning the ::after element */
}

.our-title::after { /* This creates the underline */
  content: ''; /* Required for pseudo-elements */
  display: block;
  width: 60px; /* Adjust as needed */
  height: 4px; /* Adjust as needed */
  background: linear-gradient(90deg, #2196f3, #007bff);
  border-radius: 2px;
  margin-top: 6px; /* Space between text and underline */
  margin-left: auto; /* Center the underline relative to the h2's width */
  margin-right: auto; /* Center the underline relative to the h2's width */
}

        /* === Cards Grid === */
        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          padding: 0 2rem;
        }

        .why-card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          padding: 2rem;
          text-align: center;
          transition: all 0.4s ease;
          border-top: 4px solid transparent;
        }

        .why-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 25px rgba(0, 93, 255, 0.25);
          border-top: 4px solid #0055ff;
        }

        .why-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          transition: transform 0.3s ease;
        }

        .why-card:hover .why-icon {
          transform: scale(1.1);
        }

        .why-heading {
          font-size: 1.25rem;
          font-weight: 600;
          color: #0a0a0a;
          margin-bottom: 0.8rem;
        }

        .why-text {
          color: #555;
          font-size: 1rem;
          line-height: 1.6;
        }
                  /* CTA Section */
        .cta-section {
          background:#554ecd;
          padding: 60px 20px;
          text-align: center;
          border-radius: 12px;
          margin: 60px 0;
        }

        .cta-section h2 {
          font-size: 1.75rem;
          font-weight: 500;
          margin-bottom: 15px;
          color: white;
        }

        .cta-section p {
          font-size: 1.2rem;
          margin-bottom: 30px;
          color: white;
          line-height: 1.5;
        }

        .cta-button {
          display: inline-block;
          padding: 14px 45px;
          font-size: 1rem;
          font-weight: 600;
          color: #2563eb;
          background: white;
          border: none;
          border-radius: 30px;
          cursor: pointer;
          transition: all 0.4s ease;
        }

        .cta-button:hover {
          background: #f0f4ff;
          color: #1e40af;
        }



      
      `}
      </style>
      <div className="services-page">
        {/* Hero Section with an image background */}
        <div
          className="jumbotron jumbotron-fluid d-flex align-items-center justify-content-center text-white text-center rounded-0"
          style={{
            // Use a URL for the background image. You can replace this with your own image URL.
            backgroundImage: `url(${serviceHero})`,
            backgroundSize: "cover",
            backgroundPosition: "contain",
            backgroundRepeat: "no-repeat",
            minHeight: "90vh", // Sets the height of the hero section
            position: "relative",
          }}
        >
          {/* An overlay to make the text more readable on top of the image */}
          <div
            className="w-100 h-100 position-absolute"
            style={{ backgroundColor: "rgba(28, 28, 28, 0.5)" }}
          ></div>

          {/* Container for the text content, centered horizontally and vertically */}
          <div className="container position-relative">
            <h1 className="Business-title">Business Services</h1>
            <p className="lead mt-3">
              We provide comprehensive solutions to help your business thrive in
              a competitive market.
            </p>
          </div>
        </div>

        {/* You can add more sections below the hero section */}
        <div className="container my-5">
          <h2 className="text-center our-title">Our Offerings</h2>
          <span className="underlinee"></span>
          <p className="text-center mt-3">
            This is where you would list your specific services, with more
            detailed information and calls to action.
          </p>
          <div className="why-grid">
            {/* Card 1 */}
            <div className="why-card">
              <FaLightbulb className="why-icon" style={{ color: "#f4b400" }} />
              <h4 className="why-heading">Innovation</h4>
              <p className="why-text">
                We bring futuristic thinking and creative problem-solving to
                every project, ensuring your business stays ahead of the curve.
              </p>
            </div>

            {/* Card 2 */}
            <div className="why-card">
              <FaUsersCog className="why-icon" style={{ color: "#34a853" }} />
              <h4 className="why-heading">Expert Team</h4>
              <p className="why-text">
                Our certified professionals bring deep domain expertise and
                technical excellence to deliver quality-driven solutions.
              </p>
            </div>

            {/* Card 3 */}
            <div className="why-card">
              <FaChartLine className="why-icon" style={{ color: "#4285f4" }} />
              <h4 className="why-heading">Scalable Solutions</h4>
              <p className="why-text">
                From startups to enterprises, our solutions grow with your
                business and adapt to evolving technology landscapes.
              </p>
            </div>

            {/* Card 4 */}
            <div className="why-card">
              <FaCloud className="why-icon" style={{ color: "#00bcd4" }} />
              <h4 className="why-heading">Cloud & AI Driven</h4>
              <p className="why-text">
                We harness the power of cloud, AI, and automation to create
                smarter, more efficient digital ecosystems.
              </p>
            </div>

            {/* Card 5 */}
            <div className="why-card">
              <FaCogs className="why-icon" style={{ color: "#9c27b0" }} />
              <h4 className="why-heading">Custom Engineering</h4>
              <p className="why-text">
                We design and develop tailor-made software that aligns perfectly
                with your business goals and vision.
              </p>
            </div>

            {/* Card 6 */}
            <div className="why-card">
              <FaLock className="why-icon" style={{ color: "#ff7043" }} />
              <h4 className="why-heading">Secure & Reliable</h4>
              <p className="why-text">
                Data protection and security are built into our development
                process, ensuring complete peace of mind.
              </p>
            </div>
          </div>
        </div>
        <div className="cta-section">
          <h2>Take Your Business to the Next Level</h2>
          <p>Discover how we can transform your workflow.</p>
          <Link to="/contact" className="cta-button">
            Contact Us
          </Link>
        </div>
      </div>
      <StretchyGallery />
      <TechStackCarousel />
      <NewForm />
    </>
  );
};

export default ServicesPage;
