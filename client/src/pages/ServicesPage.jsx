import React from "react";
import {
  FaDigitalTachograph,
  FaCode,
  FaUserTie,
  FaCloud,
  FaChalkboardTeacher,
  FaCube,
} from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import StretchyGallery from "../components/StretchyGallery";
import TechStackCarousel from "../components/TechStackCarousel";
import NewForm from "../components/NewForm";
import serviceHero from "../assets/ServicesImg.jpg";

const ServicesPage = () => {
  const navigate = useNavigate();

  const offerings = [
    {
      icon: (
        <FaDigitalTachograph
          className="why-icon"
          style={{ color: "#f4b400" }}
        />
      ),
      title: "Digital Transformation",
      description:
        "Empowering organizations with Salesforce, cloud adoption, and integrated digital strategies to accelerate transformation.",
      route: "/services/digital-transformation",
    },
    {
      icon: <FaCode className="why-icon" style={{ color: "#34a853" }} />,
      title: "Software Development and Implementation",
      description:
        "From concept to deployment, we engineer scalable software solutions that transform business operations.",
      route: "/services/software-development",
    },
    {
      icon: <FaUserTie className="why-icon" style={{ color: "#4285f4" }} />,
      title: "IT Consulting and Recruitment",
      description:
        "Strategic IT consulting and specialized recruitment solutions to build the team and systems your business needs.",
      route: "/services/it-consulting",
    },
    {
      icon: <FaCloud className="why-icon" style={{ color: "#00bcd4" }} />,
      title: "Cloud and AI",
      description:
        "Integrating artificial intelligence and cloud solutions to enable intelligent scaling and automation.",
      route: "/services/cloud-ai",
    },
    {
      icon: (
        <FaChalkboardTeacher
          className="why-icon"
          style={{ color: "#9c27b0" }}
        />
      ),
      title: "Training and Enablement",
      description:
        "Comprehensive training programs to upskill teams and promote digital innovation across organizations.",
      route: "/services/training-enablement",
    },
    {
      icon: <FaCube className="why-icon" style={{ color: "#ff7043" }} />,
      title: "Advanced Technologies – Blockchain/Web3/IoT",
      description:
        "Building decentralized, connected, and intelligent systems with blockchain, Web3, and IoT solutions.",
      route: "/services/advanced-technologies",
    },
  ];

  return (
    <>
      <style>
        {`
          .Business-title {
            font-size: 2.5rem;
          }

          .our-title {
            font-size: 1.5rem;
            position: relative;
          }

          .our-title::after {
            content: '';
            display: block;
            width: 60px;
            height: 4px;
            background: linear-gradient(90deg, #2196f3, #007bff);
            border-radius: 2px;
            margin-top: 6px;
            margin-left: auto;
            margin-right: auto;
          }

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
            cursor: pointer;
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

          .cta-section {
            background: #554ecd;
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
        {/* Hero Section */}
        <div
          className="jumbotron jumbotron-fluid d-flex align-items-center justify-content-center text-white text-center rounded-0"
          style={{
            backgroundImage: `url(${serviceHero})`,
            backgroundSize: "cover",
            backgroundPosition: "contain",
            backgroundRepeat: "no-repeat",
            minHeight: "90vh",
            position: "relative",
          }}
        >
          <div
            className="w-100 h-100 position-absolute"
            style={{ backgroundColor: "rgba(28, 28, 28, 0.5)" }}
          ></div>

          <div className="container position-relative">
            <h1 className="Business-title">Business Services</h1>
            <p className="lead mt-3">
              We provide comprehensive solutions to help your business thrive in
              a competitive market.
            </p>
          </div>
        </div>

        {/* Offerings Section */}
        <div className="container my-5">
          <h2 className="text-center our-title">Our Offerings</h2>
          <p className="text-center mt-3">
            Empowering your organization through transformative technology and
            strategic innovation.
          </p>

          <div className="why-grid">
            {offerings.map((item, index) => (
              <div
                key={index}
                className="why-card"
                onClick={() => navigate(item.route)}
              >
                {item.icon}
                <h4 className="why-heading">{item.title}</h4>
                <p className="why-text">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
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
