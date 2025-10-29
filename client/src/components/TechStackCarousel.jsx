// import React from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import { motion } from "framer-motion";
// import { FaIndustry, FaCogs, FaLightbulb } from "react-icons/fa"; // Using different, simpler icons

// const techAreas = {
//   industry: [
//     "Banking, Finance & Insurance",
//     "Communications & Telecommunications",
//     "Marketing and E-Commerce",
//     "B2B and B2C Software Products",
//     "High Growth Software Start-Ups",
//     "Healthcare and Medical",
//     "Retail",
//     "Manufacturing",
//   ],
//   functional: [
//     "Technology Management and Leadership",
//     "Software Architecture & Development",
//     "QA/ Test Engineering and Automation",
//     "DevOps",
//     "Database Architecture/Development",
//     "Project Management",
//     "Business/ Systems Analysts",
//     "Solutions Architecture",
//     "Salesforce Training and Enablement",
//   ],
//   technology: [
//     "Salesforce, Microsoft Dynamics",
//     "Oracle suite, AWS",
//     "SaaS/IaaS/PaaS (Salesforce, AWS, Azure)",
//     "Web and eCommerce",
//     "Cloud and Operational Development",
//     "ERP/CRM/SCM",
//     "Blockchain, Web3, IOT",
//   ],
// };

// // Mapped icons for a professional look
// const cardIcons = {
//   industry: <FaIndustry className="text-primary mb-3" size={36} />,
//   functional: <FaCogs className="text-primary mb-3" size={36} />,
//   technology: <FaLightbulb className="text-primary mb-3" size={36} />,
// };

// export default function TechnologyPractice() {
//   const sectionVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
//   };

//   const renderList = (items) =>
//     items.map((item, idx) => (
//       <li key={idx} className="mb-2 d-flex align-items-start text-muted">
//         <span className="bullet-indicator me-2"></span> {item}
//       </li>
//     ));

//   return (
//     <>
//       <style>
//         {`
//           .section-title {
//             font-size: 2rem;
//             font-weight: 600;
//             color: #333;
//             text-transform: uppercase;
//             letter-spacing: 1.2px;
//             position: relative;
//             padding-bottom: 15px;
//           }

//           .section-title::after {
//             content: '';
//             position: absolute;
//             left: 50%;
//             transform: translateX(-50%);
//             bottom: 0;
//             width: 70px;
//             height: 4px;
//             background-color: #007bff; /* Primary blue for accent */
//             border-radius: 2px;
//           }

//           .tech-description {
//             max-width: 900px;
//             text-align: center;
//             line-height: 1.8;
//             font-size: 1.15rem;
//             margin-bottom: 60px;
//             color: #666;
//           }

//           /* Modern Card Styling */
//           .modern-card {
//             background: #ffffff;
//             border-radius: 12px;
//             box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08); /* Softer shadow */
//             transition: all 0.3s ease-in-out;
//             border: none; /* Remove default bootstrap border */
//             overflow: hidden;
//           }

//           .modern-card:hover {
//             transform: translateY(-5px);
//             box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15); /* Slightly more pronounced on hover */
//           }

//           .modern-card .card-body {
//             padding: 35px 25px;
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             text-align: center;
//           }

//           .modern-card .card-title {
//             font-size: 1.4rem;
//             font-weight: 600;
//             margin-top: 15px;
//             margin-bottom: 25px;
//             color: #333; /* Darker title for contrast */
//             position: relative;
//           }

//           .modern-card .card-title::after {
//             content: '';
//             position: absolute;
//             left: 50%;
//             transform: translateX(-50%);
//             bottom: -10px; /* Position below title */
//             width: 40px;
//             height: 2px;
//             background-color: #007bff; /* Accent color */
//             border-radius: 1px;
//           }

//           .modern-card ul {
//             list-style: none;
//             padding: 0;
//             margin-top: 20px;
//             text-align: left; /* Align list items left */
//             width: 100%;
//           }

//           .modern-card li {
//             font-size: 1rem;
//             margin-bottom: 10px;
//             line-height: 1.6;
//             color: #555;
//           }

//           .bullet-indicator {
//             width: 8px;
//             height: 8px;
//             background-color: #007bff; /* Primary blue bullet */
//             border-radius: 50%;
//             display: inline-block;
//             flex-shrink: 0;
//             margin-top: 5px; /* Align with text baseline */
//             box-shadow: 0 0 5px rgba(0, 123, 255, 0.4); /* Subtle glow */
//           }

//           .icon-wrapper {
//             background-color: #e0f2ff; /* Very light blue background for icon */
//             border-radius: 50%;
//             width: 70px;
//             height: 70px;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             margin-bottom: 10px;
//             box-shadow: 0 0 15px rgba(0, 123, 255, 0.1); /* Very subtle glow */
//           }
//         `}
//       </style>
//       <div>
//         <section className="mt-3 py-5 bg-light">
//           {" "}
//           {/* Light background for overall section */}
//           <Container>
//             <motion.div
//               className="text-center mb-5"
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={sectionVariants}
//             >
//               <h2 className="section-title">OUR TECHNOLOGY PRACTICE AREAS</h2>
//             </motion.div>

//             <motion.div
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true }}
//               variants={sectionVariants}
//               className="tech-description mx-auto"
//             >
//               <p>
//                 As a leading technology staffing firm, we leverage our extensive
//                 experience to connect visionary clients with exceptional talent.
//                 Our expertise allows us to attract and retain top professionals
//                 for contract, contract-to-hire, and direct-hire roles. Through a
//                 targeted approach, flexible services, and an unwavering
//                 reputation for excellence, we are the ideal partner for
//                 organizations seeking seasoned technology experts.
//               </p>
//             </motion.div>

//             <Row className="g-4 mt-4 justify-content-center">
//               {Object.entries(techAreas).map(([key, values], idx) => (
//                 <Col md={4} key={idx} className="d-flex">
//                   <motion.div
//                     initial="hidden"
//                     whileInView="visible"
//                     viewport={{ once: true }}
//                     variants={sectionVariants}
//                     className="w-100"
//                   >
//                     <Card className="h-100 modern-card">
//                       <Card.Body>
//                         <div className="icon-wrapper">{cardIcons[key]}</div>
//                         <Card.Title>
//                           {key.charAt(0).toUpperCase() + key.slice(1)} Expertise
//                         </Card.Title>
//                         <ul>{renderList(values)}</ul>
//                       </Card.Body>
//                     </Card>
//                   </motion.div>
//                 </Col>
//               ))}
//             </Row>
//           </Container>
//         </section>
//       </div>
//     </>
//   );
// }
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaIndustry, FaCogs, FaLightbulb } from "react-icons/fa";

const techAreas = {
  industry: [
    "Banking, Finance & Insurance",
    "Communications & Telecommunications",
    "Marketing and E-Commerce",
    "B2B and B2C Software Products",
    "High Growth Software Start-Ups",
    "Healthcare and Medical",
    "Retail",
    "Manufacturing",
  ],
  functional: [
    "Technology Management and Leadership",
    "Software Architecture & Development",
    "QA/ Test Engineering and Automation",
    "DevOps",
    "Database Architecture/Development",
    "Project Management",
    "Business/ Systems Analysts",
    "Solutions Architecture",
    "Salesforce Training and Enablement",
  ],
  technology: [
    "Salesforce, Microsoft Dynamics",
    "Oracle suite, AWS",
    "SaaS/IaaS/PaaS (Salesforce, AWS, Azure)",
    "Web and eCommerce",
    "Cloud and Operational Development",
    "ERP/CRM/SCM",
    "Blockchain, Web3, IOT",
  ],
};

const cardIcons = {
  industry: <FaIndustry size={36} className="text-white" />,
  functional: <FaCogs size={36} className="text-white" />,
  technology: <FaLightbulb size={36} className="text-white" />,
};

export default function TechnologyPractice() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const renderList = (items) =>
    items.map((item, idx) => (
      <li key={idx} className="d-flex align-items-start mb-2 text-muted">
        <span className="bullet me-2"></span> {item}
      </li>
    ));

  return (
    <>
      <style>
        {`
        /* ===== Section ===== */
        .section-title {
          font-size: 1.5rem;
          font-weight: 500;
          color: #222;
          text-transform: uppercase;
          position: relative;
          margin-bottom: 1.2rem;
        }
        .section-title::after {
          content: '';
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #7b5cff, #00c6ff);
          border-radius: 2px;
        }
        .tech-description {
          max-width: 900px;
          margin: 0 auto 60px auto;
          color: #666;
          font-size: 1.1rem;
          line-height: 1.7;
          text-align: center;
        }

        /* ===== Animated Gradient Border Card ===== */
        .animated-card {
          position: relative;
          border-radius: 22px;
          overflow: hidden;
          padding: 2px;
          background: linear-gradient(120deg, #7b5cff, #00c6ff, #ff6ec4, #7b5cff);
          background-size: 300% 300%;
          animation: moveGradient 6s ease infinite;
          transition: transform 0.4s ease, box-shadow 0.3s ease;
          height: 100%;
          display: flex;
          flex-direction: column;
        }
        .animated-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        }
        @keyframes moveGradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animated-card::before {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 22px;
          background: inherit;
          filter: blur(20px);
          opacity: 0.4;
          z-index: 0;
        }

        /* Inner glass effect */
        .animated-card .card-inner {
          background: rgba(255, 255, 255, 0.9);
          backdrop-filter: blur(10px);
          border-radius: 20px;
          height: 100%;
          padding: 3rem 2rem;
          position: relative;
          z-index: 2;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          transition: background 0.4s ease, box-shadow 0.4s ease;
        }
        .animated-card:hover .card-inner {
          background: rgba(255, 255, 255, 0.97);
          box-shadow: inset 0 0 30px rgba(123, 92, 255, 0.1);
        }
        .animated-card .card-inner::after {
          content: "";
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at var(--x, 50%) var(--y, 50%), rgba(123,92,255,0.2), transparent 60%);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        .animated-card:hover .card-inner::after {
          opacity: 1;
        }

        /* Icon Ring */
        .icon-ring {
          width: 80px;
          height: 80px;
          border-radius: 50%;
          background: linear-gradient(135deg, #7b5cff, #00c6ff);
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 1.2rem auto;
          box-shadow: 0 0 25px rgba(123, 92, 255, 0.3);
          transition: transform 0.6s ease, box-shadow 0.4s ease;
        }
        .animated-card:hover .icon-ring {
          transform: rotate(10deg) scale(1.05);
          box-shadow: 0 0 35px rgba(123, 92, 255, 0.5);
        }

        .animated-card .card-title {
          font-size: 1.4rem;
          font-weight: 700;
          color: #222;
          margin-top: 1rem;
          margin-bottom: 1.2rem;
          text-align: center;
        }

        .animated-card ul {
          list-style: none;
          padding: 0;
          margin-top: 1rem;
          text-align: left;
          flex-grow: 1;
        }
        .animated-card li {
          font-size: 0.95rem;
          color: #555;
          margin-bottom: 0.6rem;
          line-height: 1.5;
          display: flex;
          align-items: center;
        }
        .bullet {
          width: 8px;
          height: 8px;
          background: linear-gradient(135deg, #7b5cff, #00c6ff);
          border-radius: 50%;
          flex-shrink: 0;
          margin-right: 8px;
          box-shadow: 0 0 6px rgba(0,198,255,0.4);
        }
        `}
      </style>

      <section className="py-5 bg-light">
        <Container>
          <motion.div
            className="text-center mb-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <h2 className="section-title">OUR TECHNOLOGY PRACTICE AREAS</h2>
          </motion.div>

          <motion.div
            className="tech-description"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            {/* <p>
              As a leading technology staffing firm, we leverage our extensive
              experience to connect visionary clients with exceptional talent.
              Our expertise allows us to attract and retain top professionals
              for contract, contract-to-hire, and direct-hire roles. Through a
              targeted approach, flexible services, and an unwavering reputation
              for excellence, we are the ideal partner for organizations seeking
              seasoned technology experts.
            </p> */}
          </motion.div>

          <Row className="g-4 justify-content-center align-items-stretch">
            {Object.entries(techAreas).map(([key, values], idx) => (
              <Col md={4} key={idx} className="d-flex">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={sectionVariants}
                  className="w-100"
                  onMouseMove={(e) => {
                    const card = e.currentTarget.querySelector(".card-inner");
                    const rect = card.getBoundingClientRect();
                    const x = ((e.clientX - rect.left) / rect.width) * 100;
                    const y = ((e.clientY - rect.top) / rect.height) * 100;
                    card.style.setProperty("--x", `${x}%`);
                    card.style.setProperty("--y", `${y}%`);
                  }}
                >
                  <div className="animated-card h-100">
                    <div className="card-inner d-flex flex-column h-100">
                      <div>
                        <div className="icon-ring">{cardIcons[key]}</div>
                        <h4 className="card-title">
                          {key.charAt(0).toUpperCase() + key.slice(1)} Expertise
                        </h4>
                      </div>
                      <ul>{renderList(values)}</ul>
                    </div>
                  </div>
                </motion.div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
}
