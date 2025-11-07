/*
 * Project: Nextmetaforce Website
 * Author: Sreekanth | Nextmetaforce Consulting LLP
 
 */

import React, { useState } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Modal,
  Form,
} from "react-bootstrap";
import { motion } from "framer-motion";
import careerImage from "../assets/CareersPageImg.webp";
import {
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaLaptopCode,
  FaMapMarkerAlt,
  FaClock,
  FaUserTie,
  FaBriefcase,
} from "react-icons/fa";

const CareersPage = () => {
  const values = [
    {
      icon: <FaUsers color="#e63946" size={30} />,
      title: "Collaborative Culture",
      text: "We foster teamwork, transparency, and shared success in every project we deliver.",
    },
    {
      icon: <FaLightbulb color="#f4a261" size={30} />,
      title: "Innovation First",
      text: "We embrace creativity and forward-thinking ideas that push digital boundaries.",
    },
    {
      icon: <FaHandshake color="#2a9d8f" size={30} />,
      title: "Integrity & Trust",
      text: "Our partnerships are built on transparency, honesty, and mutual respect.",
    },
    {
      icon: <FaLaptopCode color="#457b9d" size={30} />,
      title: "Continuous Learning",
      text: "We empower our teams to explore new technologies and grow professionally.",
    },
  ];

  const openings = [
    {
      title: "Salesforce OmniStudio Developer",
      location: "Hyderabad",
      type: "Full time",
      positions: "2 positions",
      experience: "5+ years",
      applyBy: "November 30, 2025",
      responsibilities: [
        "Design & implement OmniStudio solutions (OmniScripts, DataRaptors, Integration Procedures)",
        "Build/customize with Apex, LWC & Flows",
        "Integrate Salesforce with external systems (APIs/web services)",
        "Ensure code quality, performance & best practices",
      ],
      requirements: [
        "Hands-on with OmniStudio tools (OmniScripts, FlexCards, DataRaptors, Integration Procedures)",
        "Proficiency in Apex, LWC, Flows & API integrations",
        "Strong Salesforce data model, security & automation knowledge",
        "Problem-solving mindset & good communication",
      ],
      niceToHave: [
        "Certifications (OmniStudio Consultant/Developer) preferred",
      ],
    },
    {
      title: "Salesforce Developer/Lead",
      location: "Hyderbad",
      type: "Full time",
      positions: "2 positions",
      experience: "5+ years",
      applyBy: "November 30, 2025",
      responsibilities: [
        "Develop, customize, and maintain Salesforce applications using Apex, LWC, Visualforce, Flows, and Triggers",

        "Work on Sales Cloud, Service Cloud, and Experience Cloud implementations",

        "Build and integrate REST/SOAP APIs and third-party systems",

        "Collaborate with stakeholders to gather requirements and translate them into scalable solutions",

        "Ensure code quality, performance, and adherence to best practices",

        "Support deployment, testing, and ongoing enhancements",
      ],
      requirements: [
        "Strong expertise in Apex, LWC, Aura Components, SOQL/SOSL",
        "Experience with Salesforce configuration, automation tools, and security models",
      ],
      niceToHave: ["Salesforce Platform Developer I and Platform Developer II"],
    },
    {
      title: "Salesforce Technical Architect",
      location: "Hyderbad",
      type: "Full time",
      positions: "2 positions",
      experience: "5+ years",
      applyBy: "November 30, 2025",
      responsibilities: [
        "Own and drive the Salesforce architecture and technical design for large-scale implementations.",

        "Translate business requirements into well-architected solutions that leverage the Salesforce platform and ecosystem.",

        "Provide technical leadership during the entire project lifecycle: discovery, design, development, deployment, and post-go-live support.",
        "Define and enforce coding standards, development best practices, and governance.",
        "Lead and mentor development teams, conduct code reviews, and ensure high-quality deliverables.",

        "Design and integrate with external systems using APIs, middleware (e.g., MuleSoft), and third-party tools.",

        "Evaluate new Salesforce features and releases and provide recommendations on adoption.",

        "Collaborate with stakeholders, business analysts, and project managers to ensure project success.",
      ],
      requirements: [
        "10+ years of experience working in Salesforce, including at least 2+ years as a Technical Architect.",

        "Hands-on experience with multiple clouds and Salesforce Platform.",

        "Strong command of Apex, Lightning Web Components (LWC), JavaScript, Salesforce Configuration, and REST/SOAP APIs.",

        "Proven experience in enterprise-level integrations and data migrations.",

        "Deep understanding of Salesforce security, sharing model, and governor limits.",

        "Experience with DevOps tools such as Copado, Gearset, Bitbucket, or Jenkins.",

        "Experience with data modeling and performance optimization on large Salesforce orgs.",

        "Proven experience with cross-platform architecture and scalable solutions.",
      ],
    },
  ];

  // Modal states
  const [showApplyModal, setShowApplyModal] = useState(false);
  const [showDetailsModal, setShowDetailsModal] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);

  // Apply form state
  const [applyForm, setApplyForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    message: "",
    resume: null,
  });

  // Handlers
  const handleApply = (job) => {
    setSelectedJob(job);
    setShowApplyModal(true);
  };

  const handleShowDetailsModal = (job) => {
    setSelectedJob(job);
    setShowDetailsModal(true);
  };

  const handleCloseDetailsModal = () => setShowDetailsModal(false);

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    if (files) {
      setApplyForm({ ...applyForm, [name]: files[0] });
    } else {
      setApplyForm({ ...applyForm, [name]: value });
    }
  };

  const handleApplySubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("fullName", applyForm.fullName);
      formData.append("email", applyForm.email);
      formData.append("phone", applyForm.phone);
      formData.append("message", applyForm.message);
      formData.append("jobTitle", selectedJob?.title);
      if (applyForm.resume) formData.append("resume", applyForm.resume);

      const res = await fetch("http://localhost:5000/api/career-apply", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();
      if (data.success) {
        alert("Application sent successfully!");
        setApplyForm({
          fullName: "",
          email: "",
          phone: "",
          message: "",
          resume: null,
        });
        setShowApplyModal(false);
      } else {
        alert("Failed to send application. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Error sending application. Please try again.");
    }
  };

  return (
    <>
      <style>
        {`
        .careers-page {
          font-family: "Poppins", sans-serif;
          overflow-x: hidden;
          color: #0d1b2a;
        }

        .careers-hero {
          background-image: url('${careerImage}');
          background-size: cover;
          background-position: center;
          height: 90vh;
          display: flex;
          align-items: center;
          position: relative;
          color: white;
          padding: 20px;
        }

        .careers-hero::before {
          content: '';
          position: absolute;
          top:0; left:0; width:100%; height:100%;
          background-color: rgba(0,0,0,0.5);
        }

        .section-title {
        font-size:1.5rem;
          font-weight: 600;
          color: var(--Careers-Text);
          position: relative;
          display: inline-block;
        }

        .section-title::after {
          content: "";
          display: block;
          width: 50%;
          height: 3px;
          background: linear-gradient(90deg, #0d6efd, #4ab3ff);
          margin: 0.4rem auto 0;
          border-radius: 2px;
        }

        .value-card {
          transition: all 0.3s ease-in-out;
          border: 1px solid #e9f1ff;
          background-color: var(--Career-Card);
          color:
        }

        .value-card:hover {
          box-shadow: 0 10px 30px rgba(0, 91, 255, 0.1);
          transform: translateY(-5px);
        }

        .job-card {
          border-radius: 1.5rem;
          transition: all 0.3s ease-in-out;
        }

        .job-card:hover {
          box-shadow: 0 12px 35px rgba(0, 123, 255, 0.15);
          transform: translateY(-5px);
        }

        .gradient-btn {
          background: linear-gradient(90deg, #0d6efd, #4ab3ff);
          border: none;
          color: #fff !important;
          font-weight: 500;
          transition: all 0.3s ease;
        }

        .gradient-btn:hover {
          opacity: 0.9;
        }

        .custom-modal {
          border-radius: 12px !important;
          overflow: hidden;
          border: none;
          box-shadow: 0 10px 40px rgba(0, 0, 0, 0.15);
          max-height: 90vh;
        }

        .custom-modal .modal-body {
          overflow-y: auto;
          max-height: 70vh;
          scrollbar-width: thin;
          scrollbar-color: #ccc transparent;
        }

        .custom-modal .modal-body::-webkit-scrollbar {
          width: 6px;
        }

        .custom-modal .modal-body::-webkit-scrollbar-thumb {
          background-color: #bbb;
          border-radius: 10px;
        }
          .job-title{
          font-size:1rem;
          font-weight:600;
          }
          .careerText{
           color:var(--Career-text);
}
            .careerTitle{
             
  color:var(--Career-title);

            }

          
      `}
      </style>

      <div className="careers-page">
        {/* HERO */}
        <section className="careers-hero text-center text-white d-flex align-items-center justify-content-center">
          <div>
            <motion.h1
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 30, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="fw-normal"
            >
              Join Our Mission
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 30, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="lead mt-3"
            >
              Be part of a team transforming enterprises with innovation,
              precision, and purpose.
            </motion.p>
          </div>
        </section>

        {/* WHY WORK WITH US */}
        <section className="py-5">
          <Container>
            <h2 className="text-center mb-5 section-title">Why Work With Us</h2>
            <Row className="g-4">
              {values.map((item, i) => (
                <Col md={6} lg={3} key={i}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="value-card text-center p-4 shadow-sm rounded-4 h-100"
                  >
                    <div className="mb-3">{item.icon}</div>
                    <h5 className="fw-semibold careerTitle">{item.title}</h5>
                    <p className="small careerText">{item.text}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* CURRENT OPENINGS */}
        <section className="py-5">
          <Container>
            <h2 className="text-center mb-5 section-title">Current Openings</h2>
            <Row className="g-4">
              {openings.map((job, i) => (
                <Col md={6} lg={4} key={i}>
                  <Card className="job-card shadow-sm border-0 h-100">
                    <Card.Body className="d-flex flex-column justify-content-between">
                      <div>
                        <Card.Title className="job-title mb-2">
                          {job.title}
                        </Card.Title>
                        <Card.Subtitle className="small mb-2">
                          {job.location} • {job.type}
                        </Card.Subtitle>
                        <Card.Text className="small">
                          {job.responsibilities[0].slice(0, 90)}...
                        </Card.Text>
                      </div>
                      <div className="d-flex gap-2 mt-3">
                        <Button
                          className="gradient-btn w-50"
                          style={{ borderRadius: "18px" }}
                          onClick={() => handleApply(job)}
                        >
                          Apply Now
                        </Button>
                        <Button
                          // variant="outline-primary"
                          className="w-50 rounded-pill"
                          onClick={() => handleShowDetailsModal(job)}
                        >
                          View Details
                        </Button>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* JOB DETAILS MODAL */}
        <Modal
          show={showDetailsModal}
          onHide={handleCloseDetailsModal}
          centered
          size="lg"
          scrollable
          contentClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>
              {selectedJob?.title}{" "}
              <span
                style={{
                  background: "#f1f3f5",
                  borderRadius: "30px",
                  padding: "3px 12px",
                  fontSize: "0.85rem",
                  fontWeight: "500",
                  color: "#333",
                }}
              >
                {selectedJob?.type}
              </span>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedJob && (
              <>
                <div className="d-flex flex-wrap gap-3 mb-3 text-muted small">
                  <span>
                    <FaMapMarkerAlt /> {selectedJob.location}
                  </span>
                  <span>
                    <FaBriefcase /> {selectedJob.positions}
                  </span>
                  <span>
                    <FaClock /> {selectedJob.experience}
                  </span>
                  <span>
                    <FaUserTie /> Apply by: {selectedJob.applyBy}
                  </span>
                </div>
                <hr />
                <h6 className="fw-semibold mt-3">Key Responsibilities</h6>
                <ul>
                  {selectedJob.responsibilities.map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>

                <h6 className="fw-semibold mt-3">Requirements</h6>
                <ul>
                  {selectedJob.requirements.map((r, idx) => (
                    <li key={idx}>{r}</li>
                  ))}
                </ul>

                {selectedJob.niceToHave?.length > 0 && (
                  <>
                    <h6 className="fw-semibold mt-3">Nice to Have</h6>
                    <ul>
                      {selectedJob.niceToHave.map((r, idx) => (
                        <li key={idx}>{r}</li>
                      ))}
                    </ul>
                  </>
                )}
              </>
            )}
          </Modal.Body>
          <Modal.Footer>
            <Button
              className="gradient-btn w-100"
              style={{ borderRadius: "12px", padding: "12px 0" }}
              onClick={() => {
                handleCloseDetailsModal();
                setShowApplyModal(true);
              }}
            >
              Apply Now
            </Button>
          </Modal.Footer>
        </Modal>

        {/* APPLY MODAL */}
        <Modal
          show={showApplyModal}
          onHide={() => setShowApplyModal(false)}
          centered
          size="lg"
          scrollable
          contentClassName="custom-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>Apply for {selectedJob?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={handleApplySubmit}>
              <Row className="g-3">
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Full Name</Form.Label>
                    <Form.Control
                      type="text"
                      name="fullName"
                      value={applyForm.fullName}
                      onChange={handleFormChange}
                      placeholder="Enter your name"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      name="email"
                      value={applyForm.email}
                      onChange={handleFormChange}
                      placeholder="Enter your email"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                      type="text"
                      name="phone"
                      value={applyForm.phone}
                      onChange={handleFormChange}
                      placeholder="Enter phone number"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group>
                    <Form.Label>Upload Resume</Form.Label>
                    <Form.Control
                      type="file"
                      name="resume"
                      onChange={handleFormChange}
                      accept=".pdf,.doc,.docx"
                      required
                    />
                  </Form.Group>
                </Col>
                <Col xs={12}>
                  <Form.Group>
                    <Form.Label>Message</Form.Label>
                    <Form.Control
                      as="textarea"
                      name="message"
                      value={applyForm.message}
                      onChange={handleFormChange}
                      rows={4}
                      placeholder="Tell us about yourself..."
                    />
                  </Form.Group>
                </Col>
                <Col xs={12} className="mt-3">
                  <Button
                    type="submit"
                    className="gradient-btn w-100"
                    style={{ borderRadius: "12px", padding: "12px 0" }}
                  >
                    Submit Application
                  </Button>
                </Col>
              </Row>
            </Form>
          </Modal.Body>
        </Modal>
      </div>
    </>
  );
};

export default CareersPage;
