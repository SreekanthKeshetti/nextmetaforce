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
         color:var(--consulting-text);
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

      <section className="py-5">
        <Container>
          <motion.div
            className="text-center mb-5"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <h2 className="section-title">Our Technology Practice Areas</h2>
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
