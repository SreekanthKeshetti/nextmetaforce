// import React from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import {
//   // Existing Fa Icons (keep if used elsewhere or still relevant for certain items)
//   FaUsers,
//   FaCogs,
//   FaRocket, // Keeping for general use if needed, but not for "What We Do" primary now
//   FaShieldAlt, // Keeping for general use if needed, but not for "What We Do" primary now
//   FaBalanceScale, // Keeping for general use if needed, but not for "What We Do" primary now

//   // Specific Fa Icons for "What We Do"
//   FaHandshake, // CRM Transformation, Client-Centricity
//   FaLightbulb, // Digital Consulting, Integrity & Innovation
//   FaCloudUploadAlt, // Industry Cloud Enablement
//   FaRobot, // Next-Gen Technology Enablement
//   FaLifeRing, // Managed Services & Support
//   FaIndustry, // Manufacturing & Automotive Cloud
//   FaMoneyBillWave, // Financial Services Cloud
//   FaSignal, // Telecom Cloud
//   FaHeartbeat, // Health Cloud
//   FaHandsHelping, // Nonprofit Cloud
//   FaLandmark, // Public Sector Cloud

//   // Specific Fa Icons for "Core Values"
//   FaUserGraduate, // Employee Empowerment
//   FaLeaf, // Work-Life Harmony
//   FaBullseye, // Precision & Purpose
// } from "react-icons/fa";

// import { motion } from "framer-motion";
// const WhatweDo = () => {
//   const whatWeDoCards = [
//     {
//       icon: <FaHandshake size={28} color="#f94144" />, // Updated Icon
//       title: "CRM Transformation",
//       desc: "End-to-end strategy, implementation, and optimization across Salesforce, Oracle, and Microsoft Dynamics platforms.",
//     },
//     {
//       icon: <FaLightbulb size={28} color="#f3722c" />, // Updated Icon
//       title: "Digital Consulting & Implementation",
//       desc: "Business-aligned roadmaps, platform integration, and scalable architecture for cloud-native and legacy environments.",
//     },
//     {
//       icon: <FaCloudUploadAlt size={28} color="#f9c74f" />, // Updated Icon
//       title: "Industry Cloud Enablement",
//       desc: "Tailored solutions across verticals — Manufacturing, Financial Services, Telecom, Health, Nonprofit, Public Sector.",
//     },
//     {
//       icon: <FaRobot size={28} color="#90be6d" />, // Updated Icon
//       title: "Next-Gen Technology Enablement",
//       desc: "AI, automation, smart city frameworks, and emerging tech to future-proof operations.",
//     },
//     {
//       icon: <FaLifeRing size={28} color="#577590" />, // Updated Icon
//       title: "Managed Services & Support",
//       desc: "SLA-driven support, performance monitoring, and continuous improvement for long-term success.",
//     },
//     {
//       icon: <FaIndustry size={28} color="#2b7a78" />, // Existing, good fit
//       title: "Manufacturing & Automotive Cloud",
//       desc: "Industry-specific cloud solutions for manufacturing, supply-chain and automotive operations.",
//     },
//     {
//       icon: <FaMoneyBillWave size={28} color="#3a86ff" />, // Existing, good fit
//       title: "Financial Services Cloud",
//       desc: "Compliance-ready cloud workflows and customer 360 for banking & financial services.",
//     },
//     {
//       icon: <FaSignal size={28} color="#ff6b6b" />, // Existing, good fit
//       title: "Telecom Cloud",
//       desc: "Network-aware, scalable cloud solutions for telecom providers and operators.",
//     },
//     {
//       icon: <FaHeartbeat size={28} color="#ef476f" />, // Existing, good fit
//       title: "Health Cloud",
//       desc: "Secure patient-centric cloud solutions enabling interoperability and care workflows.",
//     },
//     {
//       icon: <FaHandsHelping size={28} color="#06d6a0" />, // Existing, good fit
//       title: "Nonprofit Cloud",
//       desc: "Mission-driven cloud tools for fundraising, programs, and constituent engagement.",
//     },
//     {
//       icon: <FaLandmark size={28} color="#9b5de5" />, // Existing, good fit
//       title: "Public Sector Cloud",
//       desc: "Governance-first cloud solutions for public sector, municipalities and agencies.",
//     },
//   ];

//   const [visible, setVisible] = React.useState([]);
//   const elementsRef = React.useRef([]);

//   React.useEffect(() => {
//     const obs = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             const i = elementsRef.current.indexOf(entry.target);
//             if (i !== -1) {
//               setVisible((prev) => {
//                 const copy = [...prev];
//                 copy[i] = true;
//                 return copy;
//               });
//             }
//           }
//         });
//       },
//       { threshold: 0.18 }
//     );

//     // Filter out nulls if any refs are not set yet
//     elementsRef.current.filter(Boolean).forEach((el) => obs.observe(el));

//     return () => {
//       elementsRef.current.filter(Boolean).forEach((el) => obs.unobserve(el));
//       obs.disconnect();
//     };
//   }, []);

//   return (
//     <section className="">
//       <Container className="what-wrap mt-5 what-we-do-section">
//         <Row className="text-center mb-4">
//           <Col>
//             <h2 className="section-heading">What We Do</h2>
//             <p className="what-intro">
//               We deliver enterprise transformation through CRM, Cloud, and
//               Next-Gen Technology — helping organizations innovate, integrate,
//               and scale with measurable impact.
//             </p>
//           </Col>
//         </Row>

//         <Row className="g-4 justify-content-center">
//           {whatWeDoCards.map((card, idx) => (
//             <Col key={idx} xs={12} sm={6} lg={4}>
//               <motion.div
//                 ref={(el) => (elementsRef.current[idx] = el)}
//                 className={`glow-card-wrapper fade-item ${
//                   visible[idx] ? "visible" : ""
//                 }`}
//                 initial={{ opacity: 0, y: 30 }}
//                 animate={visible[idx] ? { opacity: 1, y: 0 } : {}}
//                 transition={{ duration: 0.6, delay: idx * 0.1 }}
//               >
//                 <div className="glow-card-content">
//                   <div className="glow-icon">{card.icon}</div>
//                   <h5 className="glow-title">{card.title}</h5>
//                   <p className="glow-desc">{card.desc}</p>
//                 </div>
//               </motion.div>
//             </Col>
//           ))}
//         </Row>

//         <style>{`
//     /* Scoped styles only for What We Do section */
//     .what-we-do-section .what-intro {
//       color: #444;
//       font-size: 1.1rem;
//       max-width: 850px;
//       margin: 0 auto 35px;
//       line-height: 1.6;
//     }

//     .what-we-do-section .glow-card-wrapper {
//       position: relative;
//       border-radius: 18px;
//       padding: 2px;
//       overflow: hidden;
//       background: linear-gradient(90deg, #00a8ff, #8c52ff, #00a8ff);
//       background-size: 300% 300%;
//       animation: glowBorder 7s linear infinite;
//       transition: transform 0.4s ease;
//     }

//     .what-we-do-section .glow-card-content {
//       background: rgba(255, 255, 255, 0.75);
//       backdrop-filter: blur(12px);
//       border-radius: 16px;
//       padding: 35px 25px;
//       text-align: center;
//       box-shadow: 0 8px 28px rgba(0,0,0,0.04);
//       height: 100%;
//       transition: all 0.4s ease;
//     }

//     .what-we-do-section .glow-card-wrapper:hover {
//       transform: translateY(-8px);
//     }

//     .what-we-do-section .glow-card-wrapper:hover .glow-card-content {
//       box-shadow: 0 10px 40px rgba(0, 168, 255, 0.2);
//     }

//     @keyframes glowBorder {
//       0% { background-position: 0% 50%; }
//       50% { background-position: 100% 50%; }
//       100% { background-position: 0% 50%; }
//     }

//     .what-we-do-section .glow-icon {
//       font-size: 2.3rem;
//       margin-bottom: 15px;
//       display: inline-flex;
//       align-items: center;
//       justify-content: center;
//       width: 70px;
//       height: 70px;
//       border-radius: 50%;
//       background: linear-gradient(135deg, #eef5ff, #ffffff);
//       box-shadow: 0 5px 18px rgba(0, 0, 0, 0.05);
//       transition: all 0.3s ease;
//     }

//     .what-we-do-section .glow-card-wrapper:hover .glow-icon {
//       background: linear-gradient(135deg, #007bff, #00c6ff);
//       color: #fff !important;
//       transform: scale(1.1);
//     }

//     .what-we-do-section .glow-title {
//       font-size: 1.1rem;
//       font-weight: 600;
//       color: #002b5b;
//       margin-bottom: 8px;
//     }

//     .what-we-do-section .glow-desc {
//       color: #333;
//       font-size: 0.95rem;
//       line-height: 1.6;
//     }

//     @media (max-width: 768px) {
//       .what-we-do-section .glow-card-content {
//         padding: 25px 18px;
//       }
//       .what-we-do-section .glow-icon {
//         width: 60px;
//         height: 60px;
//         font-size: 1.8rem;
//       }
//     }
//   `}</style>
//       </Container>
//     </section>
//   );
// };
// export default WhatweDo;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaHandshake,
  FaLightbulb,
  FaCloudUploadAlt,
  FaRobot,
  FaLifeRing,
  FaIndustry,
  FaMoneyBillWave,
  FaSignal,
  FaHeartbeat,
  FaHandsHelping,
  FaLandmark,
} from "react-icons/fa";
import { motion } from "framer-motion";

const WhatweDo = () => {
  const whatWeDoCards = [
    {
      icon: <FaHandshake size={28} color="#f97316" />,
      title: "CRM Transformation",
      desc: "End-to-end strategy, implementation, and optimization across Salesforce, Oracle, and Microsoft Dynamics platforms.",
    },
    {
      icon: <FaLightbulb size={28} color="#fbbf24" />,
      title: "Digital Consulting & Implementation",
      desc: "Business-aligned roadmaps, platform integration, and scalable architecture for cloud-native and legacy environments.",
    },
    {
      icon: <FaCloudUploadAlt size={28} color="#fca311" />,
      title: "Industry Cloud Enablement",
      desc: "Tailored solutions across verticals — Manufacturing, Financial Services, Telecom, Health, Nonprofit, Public Sector.",
    },
    {
      icon: <FaRobot size={28} color="#fb923c" />,
      title: "Next-Gen Technology Enablement",
      desc: "AI, automation, smart city frameworks, and emerging tech to future-proof operations.",
    },
    {
      icon: <FaLifeRing size={28} color="#fdba74" />,
      title: "Managed Services & Support",
      desc: "SLA-driven support, performance monitoring, and continuous improvement for long-term success.",
    },
    {
      icon: <FaIndustry size={28} color="#ff8c00" />,
      title: "Manufacturing & Automotive Cloud",
      desc: "Industry-specific cloud solutions for manufacturing, supply-chain and automotive operations.",
    },
    {
      icon: <FaMoneyBillWave size={28} color="#f97316" />,
      title: "Financial Services Cloud",
      desc: "Compliance-ready cloud workflows and customer 360 for banking & financial services.",
    },
    {
      icon: <FaSignal size={28} color="#fb8500" />,
      title: "Telecom Cloud",
      desc: "Network-aware, scalable cloud solutions for telecom providers and operators.",
    },
    {
      icon: <FaHeartbeat size={28} color="#ef4444" />,
      title: "Health Cloud",
      desc: "Secure patient-centric cloud solutions enabling interoperability and care workflows.",
    },
    {
      icon: <FaHandsHelping size={28} color="#f59e0b" />,
      title: "Nonprofit Cloud",
      desc: "Mission-driven cloud tools for fundraising, programs, and constituent engagement.",
    },
    {
      icon: <FaLandmark size={28} color="#ea580c" />,
      title: "Public Sector Cloud",
      desc: "Governance-first cloud solutions for public sector, municipalities and agencies.",
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
      { threshold: 0.15 }
    );

    elementsRef.current.filter(Boolean).forEach((el) => obs.observe(el));
    return () => {
      elementsRef.current.filter(Boolean).forEach((el) => obs.unobserve(el));
      obs.disconnect();
    };
  }, []);

  return (
    <section className="what-we-do-bg">
      <Container className="what-wrap mt-5 what-we-do-section">
        <Row className="text-center mb-4">
          <Col>
            <h2 className="section-heading">What We Do</h2>
            <p className="what-intro">
              We deliver enterprise transformation through CRM, Cloud, and
              Next-Gen Technology — helping organizations innovate, integrate,
              and scale with measurable impact.
            </p>
          </Col>
        </Row>

        <Row className="g-4 justify-content-center">
          {whatWeDoCards.map((card, idx) => (
            <Col key={idx} xs={12} sm={6} lg={4}>
              <motion.div
                ref={(el) => (elementsRef.current[idx] = el)}
                initial={{ opacity: 0, y: 60, scale: 0.9 }}
                animate={
                  visible[idx]
                    ? { opacity: 1, y: 0, scale: 1 }
                    : { opacity: 0, y: 60, scale: 0.9 }
                }
                transition={{
                  duration: 0.7,
                  delay: idx * 0.1,
                  ease: "easeOut",
                }}
                className="glow-card-wrapper"
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
  /* ---- Background with Orange + Amber Spills ---- */
  .what-we-do-bg {
    position: relative;
    overflow: hidden;
    background: radial-gradient(circle at 20% 30%, rgba(255, 165, 0, 0.2), transparent 60%),
                radial-gradient(circle at 80% 70%, rgba(255, 140, 0, 0.18), transparent 55%),
                radial-gradient(circle at 40% 80%, rgba(255, 200, 100, 0.15), transparent 60%),
                linear-gradient(180deg, #fffaf3 0%, #ffffff 100%);
  }

  /* --- Stronger visible grid overlay --- */
  .what-we-do-bg::before {
    content: "";
    position: absolute;
    inset: 0;
    background-image: 
      linear-gradient(to right, rgba(255,120,0,0.25) 1px, transparent 1px),
      linear-gradient(to bottom, rgba(255,120,0,0.25) 1px, transparent 1px);
    background-size: 2rem 2rem;
    z-index: 0;
    opacity: 0.9;
  }

  .what-we-do-section {
    position: relative;
    z-index: 2;
  }

  /* --- Title and Subtitle --- */
  .section-heading {
    font-size: 2.3rem;
    font-weight: 700;
    background: linear-gradient(90deg, #ff8c00, #fbbf24, #fb923c);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    margin-bottom: 15px;
  }

  .what-intro {
    font-size: 1.1rem;
    font-weight: 400;
    max-width: 850px;
    margin: 0 auto 35px;
    line-height: 1.6;
    color: #7c2d12;
  }

  /* --- Cards --- */
  .glow-card-wrapper {
    position: relative;
    border-radius: 18px;
    padding: 2px;
    overflow: hidden;
    background: linear-gradient(90deg, #f59e0b, #fb923c, #f97316);
    background-size: 300% 300%;
    animation: glowBorder 7s linear infinite;
    transition: transform 0.4s ease, box-shadow 0.4s ease;
  }

  .glow-card-content {
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(12px);
    border-radius: 16px;
    padding: 35px 25px;
    text-align: center;
    box-shadow: 0 8px 28px rgba(0,0,0,0.05);
    height: 100%;
    transition: all 0.4s ease;
  }

  .glow-card-wrapper:hover {
    transform: translateY(-8px) scale(1.03);
    box-shadow: 0 0 25px rgba(251, 146, 60, 0.25);
  }

  @keyframes glowBorder {
    0% { background-position: 0% 50%; }
    50% { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .glow-icon {
    font-size: 2.3rem;
    margin-bottom: 15px;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    background: linear-gradient(135deg, #fff9f3, #fff);
    box-shadow: 0 5px 18px rgba(0, 0, 0, 0.05);
    transition: all 0.3s ease;
  }

  .glow-card-wrapper:hover .glow-icon {
    background: linear-gradient(135deg, #fb923c, #f59e0b);
    color: #fff !important;
    transform: scale(1.15);
  }

  .glow-title {
    font-size: 1.1rem;
    font-weight: 600;
    color: #7c2d12;
    margin-bottom: 8px;
  }

  .glow-desc {
    color: #333;
    font-size: 0.95rem;
    line-height: 1.6;
  }

  @media (max-width: 768px) {
    .glow-card-content {
      padding: 25px 18px;
    }
    .glow-icon {
      width: 60px;
      height: 60px;
      font-size: 1.8rem;
    }
  }
`}</style>
      </Container>
    </section>
  );
};

export default WhatweDo;
