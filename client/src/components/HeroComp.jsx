// import React from "react";
// import { Container, Row, Col, Button } from "react-bootstrap";

// const HeroSection = () => {
//   return (
//     <>
//       <style>
//         {`
//       .hero-section {
//   background-color: #0a0a0a;
// }

// /* Grid pattern */
// .hero-bg::before {
//   content: "";
//   position: absolute;
//   inset: 0;
//   background-image: linear-gradient(to right, #1e293b 1px, transparent 1px),
//     linear-gradient(to bottom, #1e293b 1px, transparent 1px);
//   background-size: 4rem 4rem;
//   mask-image: radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 110%);
//   z-index: 0;
// }

// /* Gradient glow orbs */
// .hero-bg::after {
//   content: "";
//   position: absolute;
//   inset: 0;
//   background: radial-gradient(circle at 80% 30%, rgba(255, 165, 0, 0.15), transparent 60%),
//     radial-gradient(circle at 20% 70%, rgba(255, 69, 0, 0.15), transparent 60%);
//   filter: blur(60px);
//   z-index: 0;
// }

// /* Gradient heading */
// .text-gradient {
//   background: linear-gradient(to right, rgb(246, 167, 9), rgb(247, 113, 2), rgb(230, 51, 63));
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// }

// /* Feature cards */
// .feature-card {
//   transition: all 0.3s ease;
// }
// .feature-card:hover {
//   transform: translateY(-4px);
//   box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
// }
// .feature-icon {
//   width: 40px;
//   height: 40px;
// }
// .bg-orange {
//   background-color: rgba(255, 165, 0, 0.2);
// }
// .bg-amber {
//   background-color: rgba(255, 191, 0, 0.2);
// }
// .bg-red {
//   background-color: rgba(255, 99, 71, 0.2);
// }

// /* Gradient button */
// .btn-gradient {
//   background: linear-gradient(to right, rgb(246, 167, 9), rgb(247, 113, 2));
//   border: none;
// }
// .btn-gradient:hover {
//   background: linear-gradient(to right, rgb(247, 113, 2), rgb(230, 51, 63));
// }

// .border-orange {
//   border-color: rgb(246, 167, 9) !important;
// }

//       `}
//       </style>

//       <section className="hero-section position-relative py-5 py-md-7 overflow-hidden text-light">
//         {/* Background */}
//         <div className="hero-bg position-absolute top-0 start-0 w-100 h-100"></div>

//         <Container className="position-relative z-1">
//           <Row className="align-items-center g-5">
//             {/* -------- Left: Text -------- */}
//             <Col md={6}>
//               <div>
//                 <h1 className="fw-bold display-5 mb-3">
//                   <span className="text-gradient">AI-First Company,</span>{" "}
//                   Client-First Approach
//                 </h1>
//                 <p className="lead text-white-50 mb-4">
//                   We lead with AI innovation but ground every solution in what
//                   your organization actually needs.
//                 </p>
//                 <div className="d-flex flex-column flex-md-row gap-3">
//                   <Button
//                     variant="warning"
//                     href="/ai-experience-center"
//                     className="btn-gradient text-white fw-medium px-4 py-2"
//                   >
//                     Get Started
//                     <img
//                       src="https://c.animaapp.com/mh99582kcWqvo1/assets/icon-29.svg"
//                       alt="arrow"
//                       className="ms-2"
//                       height={16}
//                     />
//                   </Button>
//                   <Button
//                     variant="outline-warning"
//                     href="/schedule-demo"
//                     className="fw-medium px-4 py-2 border-orange"
//                   >
//                     Schedule a Demo
//                   </Button>
//                 </div>
//               </div>
//             </Col>

//             {/* -------- Right: Feature Cards -------- */}
//             <Col md={6}>
//               <div className="feature-grid">
//                 {[
//                   {
//                     icon: "https://c.animaapp.com/mh99582kcWqvo1/assets/icon-30.svg",
//                     title: "AI That Works With Your Data",
//                     text: "Transform dashboards into conversations. Get insights from your existing analytics.",
//                     color: "orange",
//                   },
//                   {
//                     icon: "https://c.animaapp.com/mh99582kcWqvo1/assets/icon-31.svg",
//                     title: "Go Live in Days, Not Months",
//                     text: "Pre-built AI agents ready to deploy. No lengthy development cycles.",
//                     color: "amber",
//                   },
//                   {
//                     icon: "https://c.animaapp.com/mh99582kcWqvo1/assets/icon-32.svg",
//                     title: "Enterprise-Grade, Human-Centered",
//                     text: "Secure, scalable AI that augments your team’s capabilities.",
//                     color: "red",
//                   },
//                 ].map((f, i) => (
//                   <div
//                     key={i}
//                     className="feature-card d-flex align-items-start p-4 rounded border border-light-subtle bg-black bg-opacity-25 backdrop-blur"
//                   >
//                     <div
//                       className={`feature-icon d-flex justify-content-center align-items-center rounded-circle flex-shrink-0 me-3 bg-${f.color}`}
//                     >
//                       <img src={f.icon} alt={f.title} width={20} height={20} />
//                     </div>
//                     <div>
//                       <h5 className="text-white fw-semibold mb-1">{f.title}</h5>
//                       <p className="text-white-50 small mb-0">{f.text}</p>
//                     </div>
//                   </div>
//                 ))}

//                 <div className="text-center mt-4 pt-3">
//                   <a href="/dashboard-transformer">
//                     <Button
//                       variant="outline-secondary"
//                       className="d-inline-flex align-items-center px-4 py-2"
//                     >
//                       <img
//                         src="https://c.animaapp.com/mh99582kcWqvo1/assets/icon-33.svg"
//                         alt=""
//                         width={16}
//                         className="me-2"
//                       />
//                       Try our Dashboard Transformer
//                       <img
//                         src="https://c.animaapp.com/mh99582kcWqvo1/assets/icon-34.svg"
//                         alt=""
//                         width={16}
//                         className="ms-2"
//                       />
//                     </Button>
//                   </a>
//                   <p className="text-white-50 small mt-2">
//                     See AI in action with your own dashboards
//                   </p>
//                 </div>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>
//     </>
//   );
// };

// export default HeroSection;
// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";

// export default function HeroCoreBeliefs() {
//   const coreBeliefs = [
//     {
//       title: "Customer-First",
//       text: "We measure success by the value we deliver to our customers, not just by features shipped.",
//       color: "orange",
//     },
//     {
//       title: "Data-Driven Decisions",
//       text: "We make informed choices using analytics and evidence to ensure measurable business outcomes.",
//       color: "amber",
//     },
//     {
//       title: "Human-Centered AI",
//       text: "We believe AI should empower people — augmenting human capability, not replacing it.",
//       color: "red",
//     },
//     {
//       title: "Security & Privacy",
//       text: "Every solution we build prioritizes trust, transparency, and the protection of sensitive information.",
//       color: "orange",
//     },
//     {
//       title: "Innovation with Integrity",
//       text: "We push boundaries responsibly — ensuring technology serves humanity, not the other way around.",
//       color: "amber",
//     },
//     {
//       title: "Collaboration & Transparency",
//       text: "Open communication, shared ownership, and clear accountability guide everything we do.",
//       color: "red",
//     },
//   ];

//   return (
//     <>
//       <style>
//         {`
// /* ---------------- Section Container ---------------- */
// .hero-beliefs-section {
//   background-color: #0a0a0a;
//   position: relative;
//   overflow: hidden;
// }

// /* ---------------- Background Grid + Glow ---------------- */
// .hero-bg::before {
//   content: "";
//   position: absolute;
//   inset: 0;
//   background-image:
//     linear-gradient(to right, #1e293b 1px, transparent 1px),
//     linear-gradient(to bottom, #1e293b 1px, transparent 1px);
//   background-size: 4rem 4rem;
//   mask-image: radial-gradient(ellipse 80% 50% at 50% 0%, #000 70%, transparent 110%);
//   z-index: 0;
//   opacity: 0.7;
// }

// .hero-bg::after {
//   content: "";
//   position: absolute;
//   inset: 0;
//   background:
//     radial-gradient(circle at 80% 30%, rgba(255, 165, 0, 0.15), transparent 60%),
//     radial-gradient(circle at 20% 70%, rgba(255, 69, 0, 0.15), transparent 60%);
//   filter: blur(60px);
//   z-index: 0;
// }

// /* ---------------- Gradient Heading ---------------- */
// .text-gradient {
//   background: linear-gradient(to right, rgb(246, 167, 9), rgb(247, 113, 2), rgb(230, 51, 63));
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// }

// /* ---------------- Belief Cards ---------------- */
// .belief-card {
//   background: rgba(255, 255, 255, 0.05);
//   backdrop-filter: blur(12px);
//   border: 1px solid rgba(255, 255, 255, 0.08);
//   border-radius: 20px;
//   transition: all 0.3s ease;
//   height: 100%;
//   position: relative;
//   z-index: 1;
// }

// .belief-card:hover {
//   transform: translateY(-6px);
//   box-shadow: 0 0 20px rgba(255, 140, 0, 0.3);
// }

// /* ---------------- Icon Circle ---------------- */
// .icon-circle {
//   box-shadow: 0 0 10px rgba(255, 255, 255, 0.15);
// }

// .icon-circle img {
//   opacity: 0.9;
// }
//         `}
//       </style>

//       <section className="hero-beliefs-section position-relative py-5 text-light overflow-hidden">
//         {/* ✅ Grid + Glow Background */}
//         <div className="hero-bg position-absolute top-0 start-0 w-100 h-100"></div>

//         <Container className="position-relative z-1 text-center">
//           {/* Heading */}
//           <h1 className="fw-bold display-5 mb-3 text-gradient">
//             Our Core Beliefs
//           </h1>
//           <p
//             className="lead text-white-50 mb-5 mx-auto"
//             style={{ maxWidth: "700px" }}
//           >
//             Shaping the future of business with cloud-first and AI-powered
//             solutions.
//           </p>

//           {/* Belief Cards */}
//           <Row xs={1} sm={2} md={3} className="g-4 justify-content-center">
//             {coreBeliefs.map((belief, idx) => (
//               <Col key={idx} className="d-flex">
//                 <div className="belief-card flex-fill p-4 rounded-4 d-flex flex-column justify-content-between">
//                   <div className="d-flex align-items-center mb-3">
//                     <div
//                       className="icon-circle flex-shrink-0 d-flex align-items-center justify-content-center rounded-circle me-3"
//                       style={{
//                         width: "44px",
//                         height: "44px",
//                         background:
//                           belief.color === "orange"
//                             ? "rgba(255,140,0,0.25)"
//                             : belief.color === "amber"
//                             ? "rgba(255,193,7,0.25)"
//                             : "rgba(255,69,58,0.25)",
//                       }}
//                     >
//                       <img
//                         src={`https://c.animaapp.com/mh99582kcWqvo1/assets/icon-${
//                           30 + (idx % 3)
//                         }.svg`}
//                         alt={belief.title}
//                         width="20"
//                         height="20"
//                       />
//                     </div>
//                     <h5 className="text-white fw-semibold mb-0">
//                       {belief.title}
//                     </h5>
//                   </div>
//                   <p className="text-white-50 small mb-0">{belief.text}</p>
//                 </div>
//               </Col>
//             ))}
//           </Row>
//         </Container>
//       </section>
//     </>
//   );
// }
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
  background-color: #f8f9fb;
  color: #1a1a1a;
  overflow: hidden;
  padding-top: 4rem;
  padding-bottom: 5rem;
}

/* grid background */
.hero-beliefs-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(to right, rgba(0,0,0,0.12) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0,0,0,0.12) 1px, transparent 1px);
  background-size: 3.5rem 3.5rem;
  opacity: 1;
  z-index: 0;
}

.hero-beliefs-section::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 80% 25%, rgba(255,165,0,0.25), transparent 60%),
    radial-gradient(circle at 20% 75%, rgba(255,99,71,0.25), transparent 60%);
  filter: blur(80px);
  z-index: 0;
}

/* gradient heading */
.text-gradient {
  background: linear-gradient(to right, #f6a709, #f77102, #e6333f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* card design */
.belief-card {
  background: #ffffff;
  border: 1px solid rgba(0,0,0,0.08);
  border-radius: 18px;
  box-shadow: 0 6px 14px rgba(0,0,0,0.06);
  transition: all 0.3s ease;
  position: relative;
  z-index: 1;
  height: 100%;
}

.belief-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 10px 24px rgba(0,0,0,0.12);
}

/* icon circle */
.icon-circle {
  width: 48px;
  height: 48px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  box-shadow: inset 0 0 10px rgba(0,0,0,0.05);
}

/* quote styling */
.quote-text {
  font-size: 1.25rem;
  font-weight: 500;
  color: #222;
  max-width: 800px;
  margin: 3rem auto 0 auto;
  line-height: 1.7;
  position: relative;
  z-index: 2;
  background: linear-gradient(to right, #f6a709, #f77102, #e6333f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
        `}
      </style>

      <section className="hero-beliefs-section text-center">
        <Container className="position-relative">
          <h1 className="fw-bold display-5 mb-3 text-gradient">
            Our Core Beliefs
          </h1>
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
                  <p className="text-muted small mb-0">{b.text}</p>
                </div>
              </Col>
            ))}
          </Row>

          {/* Quote below cards */}
          <p className="quote-text">
            “We’re not chasing the next trend – we’re creating the next force.{" "}
            <br />
            <strong>NextMetaForce</strong> – Empowering the human side of
            transformation.”
          </p>
        </Container>
      </section>
    </>
  );
}
