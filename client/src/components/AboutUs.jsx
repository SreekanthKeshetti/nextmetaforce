import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  FaUsers,
  FaCogs,
  FaRocket,
  FaShieldAlt,
  FaBalanceScale,

  // Specific Fa Icons for "What We Do"
  FaHandshake, // CRM Transformation, Client-Centricity
  FaLightbulb, // Digital Consulting, Integrity & Innovation
  FaCloudUploadAlt, // Industry Cloud Enablement
  FaRobot, // Next-Gen Technology Enablement
  FaLifeRing, // Managed Services & Support
  FaIndustry, // Manufacturing & Automotive Cloud
  FaMoneyBillWave, // Financial Services Cloud
  FaSignal, // Telecom Cloud
  FaHeartbeat, // Health Cloud
  FaHandsHelping, // Nonprofit Cloud
  FaLandmark, // Public Sector Cloud

  // Specific Fa Icons for "Core Values"
  FaUserGraduate, // Employee Empowerment
  FaLeaf, // Work-Life Harmony
  FaBullseye, // Precision & Purpose
} from "react-icons/fa";

import founder1 from "../assets/1.jpg";
import founder2 from "../assets/2.jpg";
import founder3 from "../assets/3.jpg";
import ValuesGallery from "./OurValues";
import { motion } from "framer-motion";
const AboutUs = () => {
  const founders = [
    {
      name: "Founder Name 1",
      image: founder1,
      bio: "Visionary leader with deep CRM & digital transformation experience.",
    },
    {
      name: "Founder Name 2",
      image: founder2,
      bio: "Enterprise strategy expert focused on scalable solutions and delivery.",
    },
    {
      name: "Founder Name 3",
      image: founder3,
      bio: "Operator & client-success leader championing measurable outcomes.",
    },
  ];

  const [visible, setVisible] = React.useState([]);
  const elementsRef = React.useRef([]);

  React.useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const i = elementsRef.current.indexOf(entry.target);
            if (i !== -1) {
              setVisible((prev) => {
                const copy = [...prev];
                copy[i] = true;
                return copy;
              });
            }
          }
        });
      },
      { threshold: 0.18 }
    );

    // Filter out nulls if any refs are not set yet
    elementsRef.current.filter(Boolean).forEach((el) => obs.observe(el));

    return () => {
      elementsRef.current.filter(Boolean).forEach((el) => obs.unobserve(el));
      obs.disconnect();
    };
  }, []);

  return (
    <section className="aboutussection ">
      {/* Updated Vision Section */}
      <section className="vision-wrap-new">
        <div className="vision-content">
          <h2 className="vision-main-new">Our Vision</h2>
          <p className="vision-sub-new">
            Empowering innovation through creativity, technology and
            collaboration to build a better digital future.
          </p>
        </div>
      </section>
      <style>{`
    .aboutussection {
      font-family: Arial, sans-serif;
      color: #000;
    }

    /* NEW Vision Styles */
    .vision-wrap-new {
      position: relative;
      // background-color: #f9fafb;
      padding: 120px 20px;
      text-align: center;
      overflow: hidden;

      /* Subtle grid pattern background */
      background-image:
        linear-gradient(to right, #e0e0e0 1px, transparent 1px),
        linear-gradient(to bottom, #e0e0e0 1px, transparent 1px);
      background-size: 30px 30px;
      background-position: center center;
    }

    /* Gradient overlay at bottom */
    .vision-wrap-new::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 150px;
      background: linear-gradient(to top, #c1e4ee, transparent);
      z-index: 0; /* Stays behind text */
    }

    /* Content container with stacking context */
    .vision-content {
      position: relative;
      z-index: 1;
    }

    /* Heading styles (UPDATED FOR MORE IMPACT) */
    .vision-main-new {
      font-size: 2.2rem; /* Larger font size */
      font-weight: 600; /* Bolder */
      color: #002d62; /* A deep, rich blue */
      margin-bottom: 25px; /* More space */
      letter-spacing: 2px; /* Add some letter spacing */
      text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1); /* Subtle shadow */
    }

    /* Subtitle styles (UPDATED FOR MORE IMPACT) */
    .vision-sub-new {
      font-size: 1.35rem; /* Slightly larger */
      color: #2c3e50; /* Darker, more serious tone */
      max-width: 1200px; /* Wider subtitle */
      margin: 0 auto;
      line-height: 1.7; /* Improved readability */
      font-weight: 500; /* A bit heavier than normal */
    }


    /* Section heading */
    .section-heading {
      font-size:1.5rem;
      color: #000;
      font-weight: 600;
      display: inline-block;
      margin-bottom: 16px;
      position: relative;
    }
    .section-heading::after {
      content: "";
      position: absolute;
      width: 50%;
      height: 3px;
      background: linear-gradient(90deg,#009dff,#0055ff);
      bottom: -8px;
      left: 25%;
      border-radius: 2px;
    }

//     /* Who we are - founders */
//     // .who-desc { max-width: 900px; margin: 0 auto 30px; color: #333; line-height: 1.6; }
//     .founders-row { margin-top: 10px; }
//     .founder-card {
//       border-radius: 12px;
//       overflow: hidden;
//       box-shadow: 0 8px 24px rgba(18, 35, 75, 0.06);
//       transition: transform .28s ease, box-shadow .28s ease;
//     }
//     .founder-card:hover { transform: translateY(-8px); box-shadow: 0 14px 34px rgba(18,35,75,0.12); }
//     .founder-img { height: 280px; object-fit: cover; }
//     .founder-name { color: #1a237e; font-weight:600; margin-top:12px; }
//     .founder-bio { color: #333; font-size: 0.95rem; }

//     /* What we do */
//     .what-wrap { padding: 50px 12px; }
//     .what-card {
//       border-radius: 12px;
//       padding: 18px;
//       transition: transform .25s ease, box-shadow .25s ease;
//       box-shadow: 0 6px 20px rgba(11, 36, 71, 0.06);
//     }
//     .what-card:hover { transform: translateY(-6px); box-shadow: 0 14px 34px rgba(11,36,71,0.12); }

//     /* NEW: Icon with circle presentation for What We Do */
//     .card-icon-wrapper {
//       margin-bottom: 15px; /* Space below icon */
//       display: flex;
//       justify-content: center; /* Center the circle */
//     }
//     .card-icon-circle {
//       width: 70px; /* Size of the circle */
//       height: 70px;
//       border-radius: 50%; /* Makes it a circle */
//       background-color: #eaf8ff; /* Light background for the icon */
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); /* Subtle shadow for depth */
//       transition: all 0.3s ease;
//     }
//     .what-card:hover .card-icon-circle {
//       background: linear-gradient(45deg, #007bff, #00c6ff); /* A nice blue-to-light-blue gradient */
//       transform: scale(1.08); /* Slightly more pronounced scale for emphasis */
//       box-shadow: 0 8px 25px rgba(0, 123, 255, 0.3); /* Add a blue glow shadow */
//     }
//     .what-card:hover .card-icon-circle svg {
//       color: #fff !important; /* Change icon color to white on hover */
//     }

//     .what-title { color: #1a237e; font-weight:600; margin-bottom:8px; }
//     .what-desc { color: #333; font-size: 0.95rem; line-height:1.5; }

//     /* fade in */
//     // .fade-item { opacity: 0; transform: translateY(18px); transition: opacity .6s ease, transform .6s ease; }
//     // .fade-item.visible { opacity: 1; transform: translateY(0); }

//     /* Core values as horizontal cards */
//     .values-wrap { padding: 40px 12px;
//     //  background: #f8fbff;
//       }
//     .values-row { align-items: center; }
//     .value-card {
//       padding: 20px 16px;
//       // background: #eaf1f8;
//       border-radius: 12px;
//       display: flex;
//       flex-direction: column;
//       align-items: center;
//       justify-content: flex-start;
//       transition: transform .22s ease, box-shadow .22s ease;
//       box-shadow: 0 6px 18px rgba(11,36,71,0.05);
//     }
//     .value-card:hover { transform: translateY(-6px); box-shadow: 0 14px 30px rgba(11,36,71,0.1); }

//     /* NEW: Icon with circle presentation for Core Values */
//     .value-icon-wrapper {
//       margin-bottom: 12px;
//       display: flex;
//       justify-content: center;
//     }
//     .value-icon-circle {
//       width: 60px; /* Slightly smaller circle for values */
//       height: 60px;
//       border-radius: 50%;
//       // background-color: #eaf1f8; /* Match card background initially */
//       display: flex;
//       align-items: center;
//       justify-content: center;
//       box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
//       transition: all 0.2s ease;
//     }
//     .value-card:hover .value-icon-circle {
//       background: linear-gradient(45deg, #0056b3, #0088cc); /* A slightly deeper blue gradient */
//       transform: scale(1.15); /* A little more scale for values */
//       box-shadow: 0 6px 20px rgba(0, 86, 179, 0.25); /* Add a blue glow shadow */
//     }
//     .value-card:hover .value-icon-circle svg {
//       color: #fff !important; /* White icon on hover */
//     }

//     .value-title { font-weight: 600; font-size: 1.1rem; margin-bottom: 8px; color: #1a237e; }
//     .value-desc { font-size: 0.95rem; color: #333; line-height: 1.5; }

// /* Promise */
//     .promise-wrap { padding: 20px 12px; }
//     .promise-text { max-width: 900px; margin: 0 auto; font-style: italic; color: #333; line-height: 1.7; }

    /* responsive adjustments */
    @media (max-width: 991px) {
      .vision-main-new { font-size: 2.2rem; padding: 0 10px; } /* Adjusted for new larger size */
      .vision-sub-new { font-size: 1rem; padding: 0 10px; } /* Adjusted for new larger size */
      .founder-img { height: 220px; }
    }
    @media (max-width: 768px) {
      .founders-row { gap: 18px; }
      .founder-card { width: 100%; }
    }
    @media (max-width: 576px) {
      .vision-main-new { font-size: 2.2rem; } /* Adjusted for new larger size */
      .vision-sub-new { font-size: 1rem; } /* Adjusted for new larger size */
      .vision-wrap-new { padding: 80px 15px; }
      .card-icon-circle { width: 60px; height: 60px; }
      .value-icon-circle { width: 50px; height: 50px; }
    }
  `}</style>
    </section>
  );
};
export default AboutUs;
