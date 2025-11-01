import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import {
  // Existing Fa Icons (keep if used elsewhere or still relevant for certain items)
  FaUsers,
  FaCogs,
  FaRocket, // Keeping for general use if needed, but not for "What We Do" primary now
  FaShieldAlt, // Keeping for general use if needed, but not for "What We Do" primary now
  FaBalanceScale, // Keeping for general use if needed, but not for "What We Do" primary now

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

  const whatWeDoCards = [
    {
      icon: <FaHandshake size={28} color="#f94144" />, // Updated Icon
      title: "CRM Transformation",
      desc: "End-to-end strategy, implementation, and optimization across Salesforce, Oracle, and Microsoft Dynamics platforms.",
    },
    {
      icon: <FaLightbulb size={28} color="#f3722c" />, // Updated Icon
      title: "Digital Consulting & Implementation",
      desc: "Business-aligned roadmaps, platform integration, and scalable architecture for cloud-native and legacy environments.",
    },
    {
      icon: <FaCloudUploadAlt size={28} color="#f9c74f" />, // Updated Icon
      title: "Industry Cloud Enablement",
      desc: "Tailored solutions across verticals — Manufacturing, Financial Services, Telecom, Health, Nonprofit, Public Sector.",
    },
    {
      icon: <FaRobot size={28} color="#90be6d" />, // Updated Icon
      title: "Next-Gen Technology Enablement",
      desc: "AI, automation, smart city frameworks, and emerging tech to future-proof operations.",
    },
    {
      icon: <FaLifeRing size={28} color="#577590" />, // Updated Icon
      title: "Managed Services & Support",
      desc: "SLA-driven support, performance monitoring, and continuous improvement for long-term success.",
    },
    {
      icon: <FaIndustry size={28} color="#2b7a78" />, // Existing, good fit
      title: "Manufacturing & Automotive Cloud",
      desc: "Industry-specific cloud solutions for manufacturing, supply-chain and automotive operations.",
    },
    {
      icon: <FaMoneyBillWave size={28} color="#3a86ff" />, // Existing, good fit
      title: "Financial Services Cloud",
      desc: "Compliance-ready cloud workflows and customer 360 for banking & financial services.",
    },
    {
      icon: <FaSignal size={28} color="#ff6b6b" />, // Existing, good fit
      title: "Telecom Cloud",
      desc: "Network-aware, scalable cloud solutions for telecom providers and operators.",
    },
    {
      icon: <FaHeartbeat size={28} color="#ef476f" />, // Existing, good fit
      title: "Health Cloud",
      desc: "Secure patient-centric cloud solutions enabling interoperability and care workflows.",
    },
    {
      icon: <FaHandsHelping size={28} color="#06d6a0" />, // Existing, good fit
      title: "Nonprofit Cloud",
      desc: "Mission-driven cloud tools for fundraising, programs, and constituent engagement.",
    },
    {
      icon: <FaLandmark size={28} color="#9b5de5" />, // Existing, good fit
      title: "Public Sector Cloud",
      desc: "Governance-first cloud solutions for public sector, municipalities and agencies.",
    },
  ];

  const coreValues = [
    {
      icon: <FaLightbulb color="#f94144" size={28} />, // Forward Thinking
      title: "Forward Thinking",
      desc: "We embrace innovation and anticipate change to stay ahead in a fast-evolving world.",
    },
    {
      icon: <FaShieldAlt color="#f3722c" size={28} />, // Integrity
      title: "Integrity",
      desc: "We act with honesty, transparency, and accountability in all we do.",
    },
    {
      icon: <FaHandshake color="#f9c74f" size={28} />, // Client–Centric
      title: "Client–Centric",
      desc: "Our clients’ success drives every decision and every solution we create.",
    },
    {
      icon: <FaUserGraduate color="#90be6d" size={28} />, // People First
      title: "People First",
      desc: "We value, empower, and nurture our people to reach their full potential.",
    },
    {
      icon: <FaUsers color="#577590" size={28} />, // Teamwork
      title: "Teamwork",
      desc: "Collaboration and trust fuel our shared success and collective growth.",
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
    <section className="about-us-section ">
      {/* Updated Vision Section */}

      <Container className="who-wrap">
        <Row className="text-center mb-3">
          <Col>
            <h3 className="section-heading">Who We Are</h3>
            <p className="who-desc">
              NextMetaForce is a strategic technology partner specializing in
              CRM implementation, digital consulting and
              &nbsp;&nbsp;&nbsp;next-generation solutions. We help businesses
              evolve through intelligent design, agile execution&nbsp; and
              continuous support — always aligned with measurable outcomes and
              human impact.
            </p>
          </Col>
        </Row>

        <Row className="g-4 justify-content-center founders-row">
          {founders.map((f, idx) => (
            <Col key={idx} md={4} className="d-flex">
              <Card className="founder-card w-100 text-center border-0">
                <Card.Img
                  variant="top"
                  src={f.image}
                  alt={f.name}
                  className="founder-img"
                />
                <Card.Body>
                  <Card.Title className="founder-name">{f.name}</Card.Title>
                  <Card.Text className="founder-bio">{f.bio}</Card.Text>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      {/* What we DO */}
      <Container className="what-wrap what-we-do-section">
        <Row className="text-center mb-4">
          <Col>
            <h3 className="section-heading">What We Do</h3>
            <p className="what-intro">
              We deliver enterprise transformation through CRM, Cloud, and
              Next-Gen Technology — helping organizations innovate, integrate,
              and scale with measurable impact.
            </p>
          </Col>
        </Row>

        <Row className="g-4 justify-content-center">
          {whatWeDoCards.map((card, idx) => (
            <Col key={idx} xs={12} sm={6} lg={4} className="d-flex">
              <motion.div
                ref={(el) => (elementsRef.current[idx] = el)}
                className={`glow-card-wrapper fade-item h-100 w-100 ${
                  visible[idx] ? "visible" : ""
                }`}
                initial={{ opacity: 0, y: 30 }}
                animate={visible[idx] ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
              >
                <div className="glow-card-content">
                  <div className="glow-icon">{card.icon}</div>
                  <h5 className="glow-title">{card.title}</h5>
                  <p className="glow-desc">{card.desc}</p>
                </div>
              </motion.div>
            </Col>
          ))}
        </Row>

        <style>{`
        .section-heading{
        color:var(--nmf-text);
        }
    .what-we-do-section .what-intro {
      // color: #444;
      font-size: 1.1rem !important;
      max-width: 850px;
      margin: 0 auto 35px;
      line-height: 1.6;
    }

    .what-we-do-section .glow-card-wrapper {
      position: relative;
      border-radius: 18px;
      padding: 2px;
      overflow: hidden;
      background: linear-gradient(120deg, #00a8ff, #7b2ff7, #00a8ff);
      background-size: 300% 300%;
      animation: borderMove 6s linear infinite, pulse 3s ease-in-out infinite;
      transition: transform 0.4s ease;
      display: flex;
      flex-direction: column;
    }

    .what-we-do-section .glow-card-content {
      background: rgba(255, 255, 255, 0.85);
      backdrop-filter: blur(12px);
      border-radius: 16px;
      padding: 35px 25px;
      text-align: center;
      box-shadow: 0 6px 22px rgba(0,0,0,0.05);
      height: 100%;

      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
    }

    .what-we-do-section .glow-card-wrapper:hover {
      transform: translateY(-8px);
    }

    .what-we-do-section .glow-card-wrapper:hover .glow-card-content {
      box-shadow: 0 12px 45px rgba(0, 168, 255, 0.25);
    }

    @keyframes borderMove {
      0% { background-position: 0% 50%; }
      50% { background-position: 100% 50%; }
      100% { background-position: 0% 50%; }
    }

    @keyframes pulse {
      0%, 100% { filter: brightness(1); }
      50% { filter: brightness(1.4); }
    }

    .what-we-do-section .glow-icon {
      font-size: 2.3rem;
      margin-bottom: 15px;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 70px;
      height: 70px;
      border-radius: 50%;
      background: linear-gradient(135deg, #f9fbff, #ffffff);
      box-shadow: 0 5px 18px rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
      flex-shrink: 0;
    }

    .what-we-do-section .glow-card-wrapper:hover .glow-icon {
      background: linear-gradient(135deg, #007bff, #00c6ff);
      color: #fff !important;
      transform: scale(1.08);
      box-shadow: 0 6px 25px rgba(0, 168, 255, 0.35);
    }

    .what-we-do-section .glow-title {
      font-size: 1.1rem;
      font-weight: 600;
      color: #002b5b;
      margin-bottom: 8px;
    }

    .what-we-do-section .glow-desc {
      color: #333;
      font-size: 0.95rem;
      line-height: 1.6;
      min-height: 60px;
      margin-top: 10px;
    }

    @media (max-width: 768px) {
      .what-we-do-section .glow-card-content {
        padding: 25px 18px;
      }
      .what-we-do-section .glow-icon {
        width: 60px;
        height: 60px;
        font-size: 1.8rem;
      }
    }
  `}</style>
      </Container>

      {/* <ValuesGallery /> */}
      {/* Promise */}
      <Container className="promise-wrap mb-5">
        <Row className="text-center">
          <Col>
            <h2 className="section-heading">Our Promise</h2>
            <p className="promise-text">
              “We are not just service providers — we are partners in
              transformation. From recruitment to branding, from CRM to smart
              cities, we build digital ecosystems that elevate human experience
              — for our clients, our teams, and the communities we serve.”
            </p>
          </Col>
        </Row>
      </Container>
      <style>{`

    /* Who we are - founders */
    .who-wrap { padding: 30px 20px; 
      // background-color: #f9f9f9
     }
    .who-desc { 
    max-width: 900px;
    margin: 0 auto 30px; 
    line-height: 1.6;
   }
    .founders-row { margin-top: 10px; }
    .founder-card {
      border-radius: 12px;
      overflow: hidden;
      box-shadow: 0 8px 24px rgba(18, 35, 75, 0.06);
      transition: transform .28s ease, box-shadow .28s ease;
    }
    .founder-card:hover { transform: translateY(-8px); box-shadow: 0 14px 34px rgba(18,35,75,0.12); }
    .founder-img { height: 280px; object-fit: cover; }
    .founder-name { 
    color:var(--founder-name);
    font-weight:600;
    margin-top:12px; 
    }
    .founder-bio {
    //  color: #333;
      font-size: 0.95rem;
       }

    /* What we do */
    .what-wrap { padding: 50px 12px; }
    .what-card {
      border-radius: 12px;
      padding: 18px;
      transition: transform .25s ease, box-shadow .25s ease;
      box-shadow: 0 6px 20px rgba(11, 36, 71, 0.06);
    }
    .what-card:hover { transform: translateY(-6px); box-shadow: 0 14px 34px rgba(11,36,71,0.12); }

    /* NEW: Icon with circle presentation for What We Do */
    .card-icon-wrapper {
      margin-bottom: 15px; /* Space below icon */
      display: flex;
      justify-content: center; /* Center the circle */
    }
    .card-icon-circle {
      width: 70px; /* Size of the circle */
      height: 70px;
      border-radius: 50%; /* Makes it a circle */
      background-color: #eaf8ff; /* Light background for the icon */
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.08); /* Subtle shadow for depth */
      transition: all 0.3s ease;
    }
    .what-card:hover .card-icon-circle {
      background: linear-gradient(45deg, #007bff, #00c6ff); /* A nice blue-to-light-blue gradient */
      transform: scale(1.08); /* Slightly more pronounced scale for emphasis */
      box-shadow: 0 8px 25px rgba(0, 123, 255, 0.3); /* Add a blue glow shadow */
    }
    .what-card:hover .card-icon-circle svg {
      color: #fff !important; /* Change icon color to white on hover */
    }

    .what-title { color: #1a237e; font-weight:600; margin-bottom:8px; }
    .what-desc { color: #333; font-size: 0.95rem; line-height:1.5; }

    /* fade in */
    // .fade-item { opacity: 0; transform: translateY(18px); transition: opacity .6s ease, transform .6s ease; }
    // .fade-item.visible { opacity: 1; transform: translateY(0); }

    /* Core values as horizontal cards */
    .values-wrap { padding: 40px 12px;
    //  background: #f8fbff;
      }
    .values-row { align-items: center; }
    .value-card {
      padding: 20px 16px;
      // background: #eaf1f8;
      border-radius: 12px;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      transition: transform .22s ease, box-shadow .22s ease;
      box-shadow: 0 6px 18px rgba(11,36,71,0.05);
    }
    .value-card:hover { transform: translateY(-6px); box-shadow: 0 14px 30px rgba(11,36,71,0.1); }

    /* NEW: Icon with circle presentation for Core Values */
    .value-icon-wrapper {
      margin-bottom: 12px;
      display: flex;
      justify-content: center;
    }
    .value-icon-circle {
      width: 60px; /* Slightly smaller circle for values */
      height: 60px;
      border-radius: 50%;
      // background-color: #eaf1f8; /* Match card background initially */
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 3px 10px rgba(0, 0, 0, 0.05);
      transition: all 0.2s ease;
    }
    .value-card:hover .value-icon-circle {
      background: linear-gradient(45deg, #0056b3, #0088cc); /* A slightly deeper blue gradient */
      transform: scale(1.15); /* A little more scale for values */
      box-shadow: 0 6px 20px rgba(0, 86, 179, 0.25); /* Add a blue glow shadow */
    }
    .value-card:hover .value-icon-circle svg {
      color: #fff !important; /* White icon on hover */
    }

    .value-title { font-weight: 600; font-size: 1.1rem; margin-bottom: 8px; color: #1a237e; }
    .value-desc { font-size: 0.95rem; color: #333; line-height: 1.5; }

/* Promise */
    .promise-wrap { padding: 20px 12px; }
    .promise-text {
     max-width: 900px;
      margin: 0 auto;
       font-style: italic;
        // color: #333;
         line-height: 1.7; }

    /* responsive adjustments */
    @media (max-width: 991px) {
larger size */
      .founder-img { height: 220px; }
    }
    @media (max-width: 768px) {
      .founders-row { gap: 18px; }
      .founder-card { width: 100%; }
    }
    @media (max-width: 576px) {
      .card-icon-circle { width: 60px; height: 60px; }
      .value-icon-circle { width: 50px; height: 50px; }
    }
  `}</style>
    </section>
  );
};
export default AboutUs;
