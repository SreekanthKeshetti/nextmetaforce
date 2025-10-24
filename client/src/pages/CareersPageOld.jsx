// import React from "react";
// import { Container, Row, Col, Button, Card } from "react-bootstrap";
// import { motion } from "framer-motion";
// import {
//   FaUsers,
//   FaLightbulb,
//   FaHandshake,
//   FaLaptopCode,
// } from "react-icons/fa";

// const CareersPage = () => {
//   const values = [
//     {
//       icon: <FaUsers />,
//       title: "Collaborative Culture",
//       text: "We foster teamwork, transparency, and shared success in every project we deliver.",
//     },
//     {
//       icon: <FaLightbulb />,
//       title: "Innovation First",
//       text: "We embrace creativity and forward-thinking ideas that push digital boundaries.",
//     },
//     {
//       icon: <FaHandshake />,
//       title: "Integrity & Trust",
//       text: "Our partnerships are built on transparency, honesty, and mutual respect.",
//     },
//     {
//       icon: <FaLaptopCode />,
//       title: "Continuous Learning",
//       text: "We empower our teams to explore new technologies and grow professionally.",
//     },
//   ];

//   const openings = [
//     {
//       title: "Frontend Developer (React.js)",
//       location: "Hyderabad, India",
//       type: "Full-Time",
//       desc: "Join our UI team to craft intuitive and futuristic user experiences using React, Bootstrap, and cutting-edge design systems.",
//     },
//     {
//       title: "Backend Developer (Node.js)",
//       location: "Bangalore / Remote",
//       type: "Full-Time",
//       desc: "Design robust APIs, optimize performance, and build scalable backends for enterprise-grade digital products.",
//     },
//     {
//       title: "UI/UX Designer",
//       location: "Remote",
//       type: "Contract",
//       desc: "Collaborate with teams to create engaging, minimalistic, and human-centered interfaces aligned with our brand vision.",
//     },
//   ];

//   return (
//     <>
//       <style>
//         {`
//       .careers-page {
//   font-family: "Poppins", sans-serif;
//   overflow-x: hidden;
//   color: #0d1b2a;
// }

// /* HERO SECTION */
// .careers-hero {
//   min-height: 80vh;
//   background: linear-gradient(135deg, #0d6efd, #4ab3ff);
//   background-size: 200% 200%;
//   animation: gradientMove 6s ease infinite;
// }

// @keyframes gradientMove {
//   0% { background-position: 0% 50%; }
//   50% { background-position: 100% 50%; }
//   100% { background-position: 0% 50%; }
// }

// /* TITLES */
// .section-title {
//   font-weight: 600;
//   color: #0056b3;
//   position: relative;
//   display: inline-block;
// }

// .section-title::after {
//   content: "";
//   display: block;
//   width: 50%;
//   height: 3px;
//   background: linear-gradient(90deg, #0d6efd, #4ab3ff);
//   margin: 0.4rem auto 0;
//   border-radius: 2px;
// }

// /* VALUE CARDS */
// .value-card {
//   transition: all 0.3s ease-in-out;
//   border: 1px solid #e9f1ff;
//   // background-color: #ffffff;
// }

// .value-card .icon {
//   font-size: 2rem;
//   color: #007bff;
// }

// .value-card:hover {
//   box-shadow: 0 10px 30px rgba(0, 91, 255, 0.1);
//   transform: translateY(-5px);
// }

// /* JOB CARDS */
// .job-card {
//   border-radius: 1.5rem;
//   transition: all 0.3s ease-in-out;
// }

// .job-card:hover {
//   box-shadow: 0 12px 35px rgba(0, 123, 255, 0.15);
//   transform: translateY(-5px);
// }

// .gradient-btn {
//   background: linear-gradient(90deg, #0d6efd, #4ab3ff);
//   border: none;
//   transition: all 0.3s ease-in-out;
//   border-radius: 25px;
//   padding: 8px 18px;
//   font-weight: 500;
// }

// .gradient-btn:hover {
//   background: linear-gradient(90deg, #084298, #003a8c);
// }

// /* CULTURE SECTION */
// .culture-section {
//   // background-color: #ffffff;
// }

//       `}
//       </style>

//       <div className="careers-page">
//         {/* HERO SECTION */}
//         <section className="careers-hero text-center text-white d-flex align-items-center justify-content-center">
//           <div>
//             <motion.h1
//               initial={{ y: -30, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ duration: 0.8 }}
//               className="fw-bold display-5"
//             >
//               Join Our Mission
//             </motion.h1>
//             <motion.p
//               initial={{ y: 30, opacity: 0 }}
//               animate={{ y: 0, opacity: 1 }}
//               transition={{ delay: 0.3, duration: 0.8 }}
//               className="lead mt-3"
//             >
//               Be part of a team transforming enterprises with innovation,
//               precision, and purpose.
//             </motion.p>
//           </div>
//         </section>

//         {/* WHY WORK WITH US */}
//         <section className="py-5">
//           <Container>
//             <h2 className="text-center mb-5 section-title">Why Work With Us</h2>
//             <Row className="g-4">
//               {values.map((item, index) => (
//                 <Col key={index} md={6} lg={3}>
//                   <motion.div
//                     whileHover={{ y: -10 }}
//                     className="value-card text-center p-4 shadow-sm rounded-4"
//                   >
//                     <div className="icon mb-3">{item.icon}</div>
//                     <h5 className="fw-semibold mb-2">{item.title}</h5>
//                     <p className="text-muted small">{item.text}</p>
//                   </motion.div>
//                 </Col>
//               ))}
//             </Row>
//           </Container>
//         </section>

//         {/* JOB OPENINGS */}
//         <section className="py-5  position-relative">
//           <Container>
//             <h2 className="text-center mb-5 section-title">Current Openings</h2>
//             <Row className="g-4">
//               {openings.map((job, i) => (
//                 <Col md={6} lg={4} key={i}>
//                   <motion.div whileHover={{ scale: 1.03 }}>
//                     <Card className="job-card border-0 shadow-sm rounded-4">
//                       <Card.Body>
//                         <Card.Title className="fw-bold text-primary mb-2">
//                           {job.title}
//                         </Card.Title>
//                         <Card.Subtitle className="text-muted small mb-2">
//                           {job.location} • {job.type}
//                         </Card.Subtitle>
//                         <Card.Text className="text-muted small mb-3">
//                           {job.desc}
//                         </Card.Text>
//                         <Button
//                           className="gradient-btn"
//                           onClick={() => alert(`Apply for ${job.title}`)}
//                         >
//                           Apply Now
//                         </Button>
//                       </Card.Body>
//                     </Card>
//                   </motion.div>
//                 </Col>
//               ))}
//             </Row>
//           </Container>
//         </section>

//         {/* CULTURE SECTION */}
//         <section className="culture-section text-center py-5">
//           <Container>
//             <motion.h2
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ duration: 1 }}
//               className="section-title mb-4"
//             >
//               Life at NextMetaForce
//             </motion.h2>
//             <motion.p
//               initial={{ opacity: 0 }}
//               whileInView={{ opacity: 1 }}
//               transition={{ delay: 0.2, duration: 1 }}
//               className="lead text-muted mx-auto"
//               style={{ maxWidth: "700px" }}
//             >
//               “At NextMetaForce, we believe work should inspire and challenge —
//               where innovation meets impact, and your ideas help shape the
//               future.”
//             </motion.p>
//           </Container>
//         </section>
//       </div>
//     </>
//   );
// };

// export default CareersPage;
import React, { useState, useMemo } from "react";
import {
  Container,
  Row,
  Col,
  Button,
  Card,
  Modal,
  Form,
  InputGroup,
  Badge,
} from "react-bootstrap";
import { motion } from "framer-motion";
import {
  FaSearch,
  FaMapMarkerAlt,
  FaClock,
  FaCloudUploadAlt,
  FaUsers,
  FaLightbulb,
  FaHandshake,
  FaLaptopCode,
  FaChevronDown,
  FaStar,
} from "react-icons/fa";

// Demo job data (replace with API data)
const JOBS_DATA = [
  {
    id: "j1",
    title: "Senior Frontend Engineer (React)",
    dept: "Engineering",
    location: "Hyderabad, India",
    type: "Full-time",
    remote: "Hybrid",
    seniority: "Senior",
    desc: "Design and implement polished UI components and product flows. Strong React, testing, and performance experience required.",
  },
  {
    id: "j2",
    title: "Backend Engineer (Node.js)",
    dept: "Engineering",
    location: "Bangalore / Remote",
    type: "Full-time",
    remote: "Remote",
    seniority: "Mid",
    desc: "Build scalable APIs, integrate with cloud services and lead on reliability and observability.",
  },
  {
    id: "j3",
    title: "Product Designer (UI/UX)",
    dept: "Design",
    location: "Remote",
    type: "Contract",
    remote: "Remote",
    seniority: "Mid",
    desc: "Create delightful experiences, prototypes, and design systems for enterprise apps.",
  },
  {
    id: "j4",
    title: "Customer Success Manager",
    dept: "Customer",
    location: "Mumbai, India",
    type: "Full-time",
    remote: "Hybrid",
    seniority: "Mid",
    desc: "Work with enterprise clients to ensure successful product adoption and ROI.",
  },
];

const PERKS = [
  "Competitive pay + equity options",
  "Health insurance & wellness stipend",
  "Flexible/hybrid remote working",
  "Learning & certification budget",
  "Annual offsite & team events",
];

const TESTIMONIALS = [
  {
    author: "Anjali R — Senior FE Engineer",
    quote:
      "The projects are challenging and creative. The leadership gives autonomy and trust.",
    role: "Frontend",
  },
  {
    author: "Vikram S — Data Engineer",
    quote:
      "We ship quickly and thoughtfully — code quality matters and the team supports learning.",
    role: "Data",
  },
];

export default function CareersPage() {
  const [query, setQuery] = useState("");
  const [deptFilter, setDeptFilter] = useState("All");
  const [locFilter, setLocFilter] = useState("All");
  const [typeFilter, setTypeFilter] = useState("All");
  const [selectedJob, setSelectedJob] = useState(null);
  const [showApply, setShowApply] = useState(false);

  const departments = useMemo(() => {
    const depts = Array.from(new Set(JOBS_DATA.map((j) => j.dept)));
    return ["All", ...depts];
  }, []);

  const locations = useMemo(() => {
    const locs = Array.from(new Set(JOBS_DATA.map((j) => j.location)));
    return ["All", ...locs];
  }, []);

  const types = useMemo(() => {
    const t = Array.from(new Set(JOBS_DATA.map((j) => j.type)));
    return ["All", ...t];
  }, []);

  const filtered = JOBS_DATA.filter((j) => {
    const q = query.trim().toLowerCase();
    if (q && !`${j.title} ${j.desc} ${j.dept}`.toLowerCase().includes(q))
      return false;
    if (deptFilter !== "All" && j.dept !== deptFilter) return false;
    if (locFilter !== "All" && j.location !== locFilter) return false;
    if (typeFilter !== "All" && j.type !== typeFilter) return false;
    return true;
  });

  function openApply(job) {
    setSelectedJob(job);
    setShowApply(true);
  }

  return (
    <>
      <style>
        {`
      /* Core page font + colors */
.careers-page {
  font-family: "Poppins", "Inter", system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  color: #0b2138;
  background: #f7fbff;
}

/* Hero */
.hero-section {
  min-height: 68vh;
  padding: 4rem 0;
  background: linear-gradient(135deg, #0d6efd 0%, #4ab3ff 60%);
  color: #fff;
  background-size: 200% 200%;
  animation: moveGrad 8s ease infinite;
}

@keyframes moveGrad {
  0% { background-position: 0% 50%;}
  50% { background-position: 100% 50%;}
  100% { background-position: 0% 50%;}
}

.hero-title {
  font-size: 2.6rem;
  letter-spacing: -0.02em;
}
.hero-sub { opacity: 0.95; max-width: 48rem; }

/* Buttons */
.gradient-btn {
  background: linear-gradient(90deg, #0d6efd, #0099ff);
  border: none;
  color: #fff;
  padding: 10px 18px;
  border-radius: 28px;
  font-weight: 600;
  transition: transform .18s ease, box-shadow .18s ease;
}
.gradient-btn:hover { transform: translateY(-3px); background: linear-gradient(90deg, #084298, #0066b2); }

.btn-apply { background: #000; color: #fff; padding: 10px 18px; border-radius: 28px; border: none; font-weight: 600; }
.btn-ghost { color: #fff; border: 1px solid rgba(255,255,255,0.18); background: transparent; border-radius: 28px; }

/* Stats in hero */
.stats-row .stat h4 { margin: 0; font-size: 1.25rem; font-weight: 700; color: #fff; }
.stats-row .stat small { color: rgba(255,255,255,0.9); }

/* media placeholder */
.hero-media .media-placeholder {
  width: 320px;
  height: 200px;
  border-radius: 14px;
  background: linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.03));
  border: 1px solid rgba(255,255,255,0.08);
  display:flex; align-items:center; justify-content:center;
}
.play-stamp { font-weight:600; color: #fff; }

/* Section titles */
.section-title {
  font-size: 1.5rem;
  color: #063a7a;
  font-weight: 700;
  display: inline-block;
  margin-bottom: 0.8rem;
  position: relative;
}
.section-title::after {
  content: "";
  display:block;
  height:3px;
  width:60%;
  background: linear-gradient(90deg,#0d6efd,#4ab3ff);
  border-radius: 3px;
  margin-top: 8px;
}

/* Perks + Info cards */
.perks-list { list-style: none; padding: 0; margin-top: 1rem; }
.perks-list li { margin-bottom: 0.6rem; display:flex; align-items:center; gap:8px; color:#0b2138; font-weight:500; }
.perk-icon { color: #007bff; margin-right:6px; }

/* Info cards */
.info-card { border-radius: 12px; transition: transform .18s ease, box-shadow .18s ease; }
.info-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(13,110,253,0.08); }
.icon-circle { width:44px; height:44px; border-radius:12px; background: rgba(13,110,253,0.08); display:flex; align-items:center; justify-content:center; color:#0d6efd; font-size:18px; margin-bottom:10px; }

/* Openings */
.bg-faint { background: linear-gradient(180deg,#f7fbff, #ffffff); }
.job-card { border-radius: 14px; transition: box-shadow .18s ease, transform .18s ease; border: 1px solid rgba(6,58,122,0.04); }
.job-card:hover { transform: translateY(-8px); box-shadow: 0 20px 40px rgba(6,58,122,0.06); }
.job-title { color: #062a56; font-weight:700; }

.job-card-wrap { height:100%; }

/* Buttons inside cards */
.btn-outline-ghost { border-radius: 20px; border: 1px solid rgba(6,58,122,0.08); background: transparent; color: #062a56; padding:6px 12px; }
.seniority { background: linear-gradient(90deg,#4ab3ff,#0d6efd); color:#fff; font-weight:600; }

/* Job card footer small text */
.job-card .small { color:#6b7f94; }

/* Testimonials */
.testimonial-card { background: linear-gradient(180deg, rgba(13,110,253,0.03), #fff); border-radius: 12px; padding: 18px; margin-bottom: 12px; box-shadow: 0 8px 18px rgba(13,110,253,0.03); }

/* FAQ */
.faq-list details { background: #f8fbff; padding: 12px 14px; border-radius:8px; margin-bottom:10px; cursor:pointer; border:1px solid rgba(6,58,122,0.03); }
.faq-list summary { font-weight:600; color:#073368; }

/* CTA */
.apply-cta { background: linear-gradient(90deg,#f4f9ff,#f7fbff); }

/* Apply modal adjustments */
.modal-content { border-radius: 12px; overflow: hidden; }

/* Responsive */
@media (max-width: 767px) {
  .hero-media .media-placeholder { width: 240px; height: 150px; }
  .hero-title { font-size: 1.8rem; }
}

      `}
      </style>

      <div className="careers-page">
        {/* HERO */}
        <section className="hero-section d-flex align-items-center">
          <Container>
            <Row className="align-items-center">
              <Col md={7}>
                <motion.h1
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="display-5 fw-bold hero-title"
                >
                  Build the future with NextMetaForce
                </motion.h1>
                <motion.p
                  initial={{ y: 10, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.15 }}
                  className="lead hero-sub"
                >
                  We partner with enterprises to transform experiences using
                  cloud, data & AI. Join a fast-moving, empathetic team —
                  remote-friendly.
                </motion.p>

                <div className="mt-4 d-flex gap-3 flex-wrap">
                  <Button
                    className="btn-apply"
                    onClick={() => {
                      // open modal to general apply
                      setSelectedJob(null);
                      setShowApply(true);
                    }}
                  >
                    Quick Apply
                  </Button>
                  <Button
                    variant="outline-light"
                    className="btn-ghost"
                    onClick={() =>
                      window.scrollTo({ top: 700, behavior: "smooth" })
                    }
                  >
                    Explore Openings
                  </Button>
                </div>

                {/* small stats */}
                <Row className="mt-4 stats-row">
                  <Col xs={4}>
                    <div className="stat">
                      <h4>200+</h4>
                      <small>Projects Delivered</small>
                    </div>
                  </Col>
                  <Col xs={4}>
                    <div className="stat">
                      <h4>150+</h4>
                      <small>Team Members</small>
                    </div>
                  </Col>
                  <Col xs={4}>
                    <div className="stat">
                      <h4>25</h4>
                      <small>Countries</small>
                    </div>
                  </Col>
                </Row>
              </Col>

              <Col md={5} className="text-center hero-media-col">
                {/* Video or animated illustration placeholder */}
                <motion.div
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="hero-media"
                >
                  {/* Use an mp4 or Lottie in production. placeholder image currently */}
                  <div className="media-placeholder">
                    <div className="play-stamp">Life @ NextMetaForce</div>
                  </div>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* WHY JOIN / PERKS */}
        <section className="py-5 bg-white">
          <Container>
            <Row className="align-items-center">
              <Col lg={6}>
                <h2 className="section-title">Why work with us</h2>
                <p className="text-muted">
                  We focus on impact, learning, and a healthy work-life balance.
                  Our teams are cross-functional, autonomous, and supported with
                  real mentorship and training.
                </p>

                <ul className="perks-list">
                  {PERKS.map((p, i) => (
                    <li key={i}>
                      <FaStar className="perk-icon" /> {p}
                    </li>
                  ))}
                </ul>
              </Col>
              <Col lg={6}>
                <Row>
                  <Col sm={6} className="mb-3">
                    <Card className="info-card">
                      <Card.Body>
                        <div className="icon-circle">
                          <FaUsers />
                        </div>
                        <h5>Inclusive teams</h5>
                        <p className="text-muted small">
                          Diverse teams across the globe.
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={6} className="mb-3">
                    <Card className="info-card">
                      <Card.Body>
                        <div className="icon-circle">
                          <FaLightbulb />
                        </div>
                        <h5>Innovation</h5>
                        <p className="text-muted small">
                          Hackathons and R&D time built-in.
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={6} className="mb-3">
                    <Card className="info-card">
                      <Card.Body>
                        <div className="icon-circle">
                          <FaHandshake />
                        </div>
                        <h5>Ethical & Trusted</h5>
                        <p className="text-muted small">
                          Long-term partnerships with clients.
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                  <Col sm={6} className="mb-3">
                    <Card className="info-card">
                      <Card.Body>
                        <div className="icon-circle">
                          <FaLaptopCode />
                        </div>
                        <h5>Learning</h5>
                        <p className="text-muted small">
                          Cert budgets and learning tracks.
                        </p>
                      </Card.Body>
                    </Card>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </section>

        {/* OPEN POSITIONS (search + filters + list) */}
        <section id="openings" className="py-5 bg-faint">
          <Container>
            <h2 className="section-title text-center mb-4">Open Positions</h2>

            {/* Search & filters */}
            <Row className="mb-4 align-items-center">
              <Col lg={6}>
                <InputGroup>
                  <InputGroup.Text>
                    <FaSearch />
                  </InputGroup.Text>
                  <Form.Control
                    placeholder="Search by role, skill, or team"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </InputGroup>
              </Col>

              <Col lg={6} className="mt-3 mt-lg-0">
                <div className="d-flex gap-2 justify-content-lg-end flex-wrap">
                  <Form.Select
                    style={{ minWidth: 150 }}
                    value={deptFilter}
                    onChange={(e) => setDeptFilter(e.target.value)}
                  >
                    {departments.map((d) => (
                      <option key={d} value={d}>
                        {d}
                      </option>
                    ))}
                  </Form.Select>

                  <Form.Select
                    style={{ minWidth: 170 }}
                    value={locFilter}
                    onChange={(e) => setLocFilter(e.target.value)}
                  >
                    {locations.map((l) => (
                      <option key={l} value={l}>
                        {l}
                      </option>
                    ))}
                  </Form.Select>

                  <Form.Select
                    style={{ minWidth: 140 }}
                    value={typeFilter}
                    onChange={(e) => setTypeFilter(e.target.value)}
                  >
                    {types.map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </Form.Select>
                </div>
              </Col>
            </Row>

            {/* Listing */}
            <Row className="g-4">
              {filtered.length === 0 && (
                <Col>
                  <Card className="p-4 text-center">
                    <h5>No roles match your filters — try a broader search.</h5>
                  </Card>
                </Col>
              )}

              {filtered.map((job) => (
                <Col md={6} lg={4} key={job.id}>
                  <motion.div whileHover={{ y: -6 }} className="job-card-wrap">
                    <Card className="job-card h-100">
                      <Card.Body>
                        <div className="d-flex justify-content-between align-items-start">
                          <div>
                            <h5 className="job-title">{job.title}</h5>
                            <div className="small text-muted">
                              <FaMapMarkerAlt /> {job.location} • {job.type}
                            </div>
                          </div>
                          <Badge bg="primary" className="seniority">
                            {job.seniority}
                          </Badge>
                        </div>

                        <p className="mt-3 text-muted small">{job.desc}</p>

                        <div className="d-flex justify-content-between align-items-center mt-3">
                          <div className="small text-muted">
                            <FaClock /> {job.remote}
                          </div>
                          <div>
                            <Button
                              className="btn-outline-ghost me-2"
                              onClick={() =>
                                alert("View job details - implement route")
                              }
                            >
                              View
                            </Button>
                            <Button
                              className="gradient-btn"
                              onClick={() => openApply(job)}
                            >
                              Apply
                            </Button>
                          </div>
                        </div>
                      </Card.Body>
                    </Card>
                  </motion.div>
                </Col>
              ))}
            </Row>
          </Container>
        </section>

        {/* TESTIMONIALS + FAQ */}
        <section className="py-5 bg-white">
          <Container>
            <Row>
              <Col lg={6}>
                <h3 className="section-title">Hear from our team</h3>
                <div className="testimonials">
                  {TESTIMONIALS.map((t, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: 20, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      transition={{ delay: i * 0.15 }}
                      className="testimonial-card"
                    >
                      <p className="mb-1">“{t.quote}”</p>
                      <div className="small text-muted">— {t.author}</div>
                    </motion.div>
                  ))}
                </div>
              </Col>

              <Col lg={6}>
                <h3 className="section-title">FAQs</h3>
                <div className="faq-list">
                  <details>
                    <summary>What is the interview process like?</summary>
                    <div className="small text-muted mt-2">
                      Typically: screening call → technical / task → team
                      interview → offer. We share interview expectations
                      up-front.
                    </div>
                  </details>

                  <details>
                    <summary>Do you support remote work?</summary>
                    <div className="small text-muted mt-2">
                      Many roles are remote/hybrid. See each job for location
                      details.
                    </div>
                  </details>

                  <details>
                    <summary>Can I apply with a referral?</summary>
                    <div className="small text-muted mt-2">
                      Yes — referrals are welcomed. Use the Apply form and
                      mention the referrer.
                    </div>
                  </details>
                </div>
              </Col>
            </Row>
          </Container>
        </section>

        {/* FOOTER CTA */}
        <section className="apply-cta py-5 text-center">
          <Container>
            <h3 className="mb-3">Not seeing your role?</h3>
            <p className="text-muted mb-4">
              Send us a speculative application and we'll keep your details for
              future roles.
            </p>
            <Button
              className="gradient-btn btn-lg"
              onClick={() => {
                setSelectedJob(null);
                setShowApply(true);
              }}
            >
              Send CV
            </Button>
          </Container>
        </section>

        {/* APPLY MODAL */}
        <ApplyModal
          show={showApply}
          onHide={() => setShowApply(false)}
          job={selectedJob}
        />
      </div>
    </>
  );
}

/* ApplyModal component (inside same file for convenience) */
function ApplyModal({ show, onHide, job }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [resume, setResume] = useState(null);
  const [message, setMessage] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!name || !email || !resume) {
      alert("Please complete name, email and attach your resume.");
      return;
    }
    // TODO: send to backend (multipart/form-data)
    console.log("Submit", { name, email, job, resume, message });
    alert(
      "Thanks — your application is submitted (demo). Replace with API call."
    );
    onHide();
  }

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {job ? `Apply: ${job.title}` : "General Application"}
        </Modal.Title>
      </Modal.Header>
      <Form onSubmit={handleSubmit} encType="multipart/form-data">
        <Modal.Body>
          <Form.Group className="mb-3">
            <Form.Label>Full name</Form.Label>
            <Form.Control
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Resume (PDF)</Form.Label>
            <Form.Control
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setResume(e.target.files?.[0] ?? null)}
            />
            <div className="small text-muted mt-1">
              Max 5MB. We will convert text to a profile for screening.
            </div>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Message (optional)</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={onHide}>
            Cancel
          </Button>
          <Button type="submit" className="gradient-btn">
            Submit Application
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
