import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaUserTie,
  FaChartLine,
  FaRobot,
  FaShieldAlt,
  FaLightbulb,
  FaHandshake,
} from "react-icons/fa";

export default function HeroCoreBeliefs() {
  const coreBeliefs = [
    {
      title: "Customer-First",
      text: "We measure success by the value we deliver to our customers, not by features shipped.",
      color: "orange",
      icon: <FaUserTie />,
    },
    {
      title: "Data-Driven Decisions",
      text: "We use data and analytics to inform every decision, ensuring measurable outcomes.",
      color: "amber",
      icon: <FaChartLine />,
    },
    {
      title: "Human-Centered AI",
      text: "We design AI that amplifies human intelligence and empathy — not replaces it.",
      color: "red",
      icon: <FaRobot />,
    },
    {
      title: "Security & Privacy",
      text: "Trust, transparency, and protection of sensitive data are at the heart of every solution.",
      color: "orange",
      icon: <FaShieldAlt />,
    },
    {
      title: "Innovation with Integrity",
      text: "We push boundaries responsibly, ensuring technology serves humanity.",
      color: "amber",
      icon: <FaLightbulb />,
    },
    {
      title: "Collaboration & Transparency",
      text: "We build together — through open communication and shared accountability.",
      color: "red",
      icon: <FaHandshake />,
    },
  ];

  return (
    <>
      <style>
        {`
.hero-beliefs-section {
  position: relative;
  background: var(--nmf-bg);
  color: var(--nmf-text);
  overflow: hidden;
  padding-top: 4rem;
  padding-bottom: 5rem;
  transition: background 0.5s ease, color 0.5s ease;
}

/* ===== GRID BACKGROUND ===== */
.hero-beliefs-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(0,0,0,0.08) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0,0,0,0.08) 1px, transparent 1px);
  background-size: 2rem 2rem;
  z-index: 0;
  transition: opacity 0.5s ease, background 0.5s ease;
}

/* ===== LIGHT GLOW (LIGHT MODE) ===== */
.hero-beliefs-section::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 80% 25%, rgba(255,165,0,0.25), transparent 60%),
    radial-gradient(circle at 20% 75%, rgba(255,99,71,0.25), transparent 60%);
  filter: blur(90px);
  z-index: 0;
  transition: all 0.6s ease;
}

/* ===== DARK MODE MAGIC ✨ ===== */
html[data-theme="dark"] .hero-beliefs-section {
  background: radial-gradient(circle at 20% 80%, rgba(255,140,0,0.05), transparent 80%),
              radial-gradient(circle at 80% 20%, rgba(255,69,58,0.05), transparent 80%),
              var(--nmf-bg);
}

html[data-theme="dark"] .hero-beliefs-section::before {
  background-image:
    linear-gradient(to right, rgba(255,140,0,0.08) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255,69,58,0.08) 1px, transparent 1px);
  opacity: 0.8;
}

html[data-theme="dark"] .hero-beliefs-section::after {
  background:
    radial-gradient(circle at 70% 30%, rgba(255,140,0,0.25), transparent 70%),
    radial-gradient(circle at 25% 80%, rgba(255,69,58,0.25), transparent 70%);
  filter: blur(120px);
  opacity: 0.9;
}

/* ===== GRADIENT HEADING ===== */
.text-gradient {
  background: linear-gradient(to right, #f6a709, #f77102, #e6333f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-size: 1.5rem;
  letter-spacing: 0.5px;
  font-weight: 600;
  position: relative;
  z-index: 2;
}

/* ===== CARDS ===== */
.belief-card {
  background: var(--nmf-surface);
  border: 1px solid var(--nmf-border);
  border-radius: 18px;
  box-shadow: var(--nmf-card-shadow);
  transition: all 0.4s ease;
  position: relative;
  z-index: 1;
  height: 100%;
  overflow: hidden;
  transform: translateY(0);
}

/* hover glow */
.belief-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 24px rgba(255,140,0,0.18);
}

/* subtle inner shine */
.belief-card::before {
  content: "";
  position: absolute;
  inset: 0;
  background: linear-gradient(145deg, rgba(255,255,255,0.02), rgba(255,255,255,0.01));
  pointer-events: none;
}

/* glowing effect (dark mode) */
html[data-theme="dark"] .belief-card {
  background: rgb(22 22 22 / 70%);
  border: 1px solid rgba(255,255,255,0.05);
  box-shadow: 0 4px 24px rgba(255,140,0,0.08);
}
html[data-theme="dark"] .belief-card:hover {
  box-shadow: 0 10px 36px rgba(255,140,0,0.22);
}

/* ===== ICON CIRCLE ===== */
.icon-circle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  transition: box-shadow 0.3s ease, background 0.3s ease;
}

/* glow on hover */
.belief-card:hover .icon-circle {
  box-shadow: 0 0 18px rgba(255,140,0,0.25);
}

/* color for each icon background */
.icon-circle.orange { background: rgba(255,140,0,0.15); }
.icon-circle.amber { background: rgba(255,193,7,0.15); }
.icon-circle.red { background: rgba(255,69,58,0.15); }

/* dark mode brightness boost */
html[data-theme="dark"] .icon-circle.orange { background: rgba(255,140,0,0.18); }
html[data-theme="dark"] .icon-circle.amber { background: rgba(255,193,7,0.18); }
html[data-theme="dark"] .icon-circle.red { background: rgba(255,69,58,0.18); }

/* ===== TEXTS ===== */
.BlackText {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--nmf-text);
  max-width: 800px;
  margin: 3rem auto 0 auto;
  line-height: 1.7;
  position: relative;
  z-index: 2;
}

.quote-text {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--nmf-text);
  max-width: 800px;
  margin: 0.5rem auto 0 auto;
  line-height: 1.7;
  position: relative;
  z-index: 2;
  background: linear-gradient(to right, #f6a709, #f77102, #e6333f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* ===== ENTRANCE ANIMATION ===== */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(15px); }
  to { opacity: 1; transform: translateY(0); }
}

.belief-card {
  animation: fadeUp 0.8s ease forwards;
  animation-delay: calc(var(--i) * 0.1s);
  opacity: 0;
}
`}
      </style>

      <section className="hero-beliefs-section text-center">
        <Container className="position-relative">
          <h1 className=" mb-3 text-gradient">Our Core Beliefs</h1>
          <p
            className="lead mb-5 text-secondary"
            style={{ maxWidth: "720px", margin: "0 auto" }}
          >
            Shaping the future of business with cloud-first and AI-powered
            solutions.
          </p>

          <Row xs={1} sm={2} md={3} className="g-4 justify-content-center">
            {coreBeliefs.map((b, idx) => (
              <Col key={idx}>
                <div className="belief-card p-4 d-flex flex-column text-start">
                  <div className="d-flex align-items-center mb-3">
                    <div
                      className="icon-circle me-3"
                      style={{
                        background:
                          b.color === "orange"
                            ? "rgba(255,140,0,0.15)"
                            : b.color === "amber"
                            ? "rgba(255,193,7,0.15)"
                            : "rgba(255,69,58,0.15)",
                      }}
                    >
                      {b.icon}
                    </div>
                    <h5 className="fw-semibold mb-0">{b.title}</h5>
                  </div>
                  <p className="small mb-0">{b.text}</p>
                </div>
              </Col>
            ))}
          </Row>

          {/* Quote below cards */}
          <p className="BlackText">
            “We’re not chasing the next trend – we’re creating the next force.{" "}
          </p>
          <p className="quote-text">
            <strong>Nextmetaforce</strong> – Empowering the human side of
            transformation.”
          </p>
        </Container>
      </section>
    </>
  );
}
