import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaLaptopCode,
} from "react-icons/fa";

const CareersPage = () => {
  const values = [
    {
      icon: <FaUsers />,
      title: "Collaborative Culture",
      text: "We foster teamwork, transparency, and shared success in every project we deliver.",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovation First",
      text: "We embrace creativity and forward-thinking ideas that push digital boundaries.",
    },
    {
      icon: <FaHandshake />,
      title: "Integrity & Trust",
      text: "Our partnerships are built on transparency, honesty, and mutual respect.",
    },
    {
      icon: <FaLaptopCode />,
      title: "Continuous Learning",
      text: "We empower our teams to explore new technologies and grow professionally.",
    },
  ];

  const openings = [
    {
      title: "Frontend Developer (React.js)",
      location: "Hyderabad, India",
      type: "Full-Time",
      desc: "Join our UI team to craft intuitive and futuristic user experiences using React, Bootstrap, and cutting-edge design systems.",
    },
    {
      title: "Backend Developer (Node.js)",
      location: "Bangalore / Remote",
      type: "Full-Time",
      desc: "Design robust APIs, optimize performance, and build scalable backends for enterprise-grade digital products.",
    },
    {
      title: "UI/UX Designer",
      location: "Remote",
      type: "Contract",
      desc: "Collaborate with teams to create engaging, minimalistic, and human-centered interfaces aligned with our brand vision.",
    },
  ];

  return (
    <>
      <style>
        {`
      .careers-page {
  font-family: "Poppins", sans-serif;
  overflow-x: hidden;
  color: #0d1b2a;
}

/* HERO SECTION */
.careers-hero {
  min-height: 80vh;
  background: linear-gradient(135deg, #0d6efd, #4ab3ff);
  background-size: 200% 200%;
  animation: gradientMove 6s ease infinite;
}

@keyframes gradientMove {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}

/* TITLES */
.section-title {
  font-weight: 600;
  color: #0056b3;
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

/* VALUE CARDS */
.value-card {
  transition: all 0.3s ease-in-out;
  border: 1px solid #e9f1ff;
  background-color: #ffffff;
}

.value-card .icon {
  font-size: 2rem;
  color: #007bff;
}

.value-card:hover {
  box-shadow: 0 10px 30px rgba(0, 91, 255, 0.1);
  transform: translateY(-5px);
}

/* JOB CARDS */
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
  transition: all 0.3s ease-in-out;
  border-radius: 25px;
  padding: 8px 18px;
  font-weight: 500;
}

.gradient-btn:hover {
  background: linear-gradient(90deg, #084298, #003a8c);
}

/* CULTURE SECTION */
.culture-section {
  background-color: #ffffff;
}

      `}
      </style>

      <div className="careers-page">
        {/* HERO SECTION */}
        <section className="careers-hero text-center text-white d-flex align-items-center justify-content-center">
          <div>
            <motion.h1
              initial={{ y: -30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="fw-bold display-5"
            >
              Join Our Mission
            </motion.h1>
            <motion.p
              initial={{ y: 30, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="lead mt-3"
            >
              Be part of a team transforming enterprises with innovation,
              precision, and purpose.
            </motion.p>
          </div>
        </section>

        {/* WHY WORK WITH US */}
        <section className="py-5 bg-white">
          <Container>
            <h2 className="text-center mb-5 section-title">Why Work With Us</h2>
            <Row className="g-4">
              {values.map((item, index) => (
                <Col key={index} md={6} lg={3}>
                  <motion.div
                    whileHover={{ y: -10 }}
                    className="value-card text-center p-4 shadow-sm rounded-4"
                  >
                    <div className="icon mb-3">{item.icon}</div>
                    <h5 className="fw-semibold mb-2">{item.title}</h5>
                    <p className="text-muted small">{item.text}</p>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* JOB OPENINGS */}
        <section className="py-5 bg-light position-relative">
          <Container>
            <h2 className="text-center mb-5 section-title">Current Openings</h2>
            <Row className="g-4">
              {openings.map((job, i) => (
                <Col md={6} lg={4} key={i}>
                  <motion.div whileHover={{ scale: 1.03 }}>
                    <Card className="job-card border-0 shadow-sm rounded-4">
                      <Card.Body>
                        <Card.Title className="fw-bold text-primary mb-2">
                          {job.title}
                        </Card.Title>
                        <Card.Subtitle className="text-muted small mb-2">
                          {job.location} • {job.type}
                        </Card.Subtitle>
                        <Card.Text className="text-muted small mb-3">
                          {job.desc}
                        </Card.Text>
                        <Button
                          className="gradient-btn"
                          onClick={() => alert(`Apply for ${job.title}`)}
                        >
                          Apply Now
                        </Button>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* CULTURE SECTION */}
        <section className="culture-section text-center py-5">
          <Container>
            <motion.h2
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1 }}
              className="section-title mb-4"
            >
              Life at NextMetaForce
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 1 }}
              className="lead text-muted mx-auto"
              style={{ maxWidth: "700px" }}
            >
              “At NextMetaForce, we believe work should inspire and challenge —
              where innovation meets impact, and your ideas help shape the
              future.”
            </motion.p>
          </Container>
        </section>
      </div>
    </>
  );
};

export default CareersPage;
