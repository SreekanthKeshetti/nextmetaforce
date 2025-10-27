import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import { FaIndustry, FaCogs, FaLightbulb } from "react-icons/fa"; // Using different, simpler icons

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

// Mapped icons for a professional look
const cardIcons = {
  industry: <FaIndustry className="text-primary mb-3" size={36} />,
  functional: <FaCogs className="text-primary mb-3" size={36} />,
  technology: <FaLightbulb className="text-primary mb-3" size={36} />,
};

export default function TechnologyPractice() {
  const sectionVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const renderList = (items) =>
    items.map((item, idx) => (
      <li key={idx} className="mb-2 d-flex align-items-start text-muted">
        <span className="bullet-indicator me-2"></span> {item}
      </li>
    ));

  return (
    <>
      <style>
        {`
          .section-title {
            font-size: 2rem;
            font-weight: 600;
            color: #333;
            text-transform: uppercase;
            letter-spacing: 1.2px;
            position: relative;
            padding-bottom: 15px;
          }

          .section-title::after {
            content: '';
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: 0;
            width: 70px;
            height: 4px;
            background-color: #007bff; /* Primary blue for accent */
            border-radius: 2px;
          }

          .tech-description {
            max-width: 900px;
            text-align: center;
            line-height: 1.8;
            font-size: 1.15rem;
            margin-bottom: 60px;
            color: #666;
          }

          /* Modern Card Styling */
          .modern-card {
            background: #ffffff;
            border-radius: 12px;
            box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08); /* Softer shadow */
            transition: all 0.3s ease-in-out;
            border: none; /* Remove default bootstrap border */
            overflow: hidden;
          }

          .modern-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 12px 25px rgba(0, 0, 0, 0.15); /* Slightly more pronounced on hover */
          }

          .modern-card .card-body {
            padding: 35px 25px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
          }

          .modern-card .card-title {
            font-size: 1.4rem;
            font-weight: 600;
            margin-top: 15px;
            margin-bottom: 25px;
            color: #333; /* Darker title for contrast */
            position: relative;
          }

          .modern-card .card-title::after {
            content: '';
            position: absolute;
            left: 50%;
            transform: translateX(-50%);
            bottom: -10px; /* Position below title */
            width: 40px;
            height: 2px;
            background-color: #007bff; /* Accent color */
            border-radius: 1px;
          }

          .modern-card ul {
            list-style: none;
            padding: 0;
            margin-top: 20px;
            text-align: left; /* Align list items left */
            width: 100%;
          }

          .modern-card li {
            font-size: 1rem;
            margin-bottom: 10px;
            line-height: 1.6;
            color: #555;
          }

          .bullet-indicator {
            width: 8px;
            height: 8px;
            background-color: #007bff; /* Primary blue bullet */
            border-radius: 50%;
            display: inline-block;
            flex-shrink: 0;
            margin-top: 5px; /* Align with text baseline */
            box-shadow: 0 0 5px rgba(0, 123, 255, 0.4); /* Subtle glow */
          }

          .icon-wrapper {
            background-color: #e0f2ff; /* Very light blue background for icon */
            border-radius: 50%;
            width: 70px;
            height: 70px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 10px;
            box-shadow: 0 0 15px rgba(0, 123, 255, 0.1); /* Very subtle glow */
          }
        `}
      </style>
      <div>
        <section className="mt-3 py-5 bg-light">
          {" "}
          {/* Light background for overall section */}
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
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={sectionVariants}
              className="tech-description mx-auto"
            >
              <p>
                As a leading technology staffing firm, we leverage our extensive
                experience to connect visionary clients with exceptional talent.
                Our expertise allows us to attract and retain top professionals
                for contract, contract-to-hire, and direct-hire roles. Through a
                targeted approach, flexible services, and an unwavering
                reputation for excellence, we are the ideal partner for
                organizations seeking seasoned technology experts.
              </p>
            </motion.div>

            <Row className="g-4 mt-4 justify-content-center">
              {Object.entries(techAreas).map(([key, values], idx) => (
                <Col md={4} key={idx} className="d-flex">
                  <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={sectionVariants}
                    className="w-100"
                  >
                    <Card className="h-100 modern-card">
                      <Card.Body>
                        <div className="icon-wrapper">{cardIcons[key]}</div>
                        <Card.Title>
                          {key.charAt(0).toUpperCase() + key.slice(1)} Expertise
                        </Card.Title>
                        <ul>{renderList(values)}</ul>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      </div>
    </>
  );
}
