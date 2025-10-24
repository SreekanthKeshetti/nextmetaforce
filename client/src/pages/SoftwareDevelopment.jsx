import React from "react";
import softwareImg from "../assets/1.jpg";
import { FaCode } from "react-icons/fa";

const SoftwareDevelopment = () => {
  return (
    <>
      <style>{`
        .service-hero {
          background-image: url(${softwareImg});
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
          min-height: 80vh;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          color: #fff;
        }
        .service-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.55);
        }
        .service-hero .hero-content {
          position: relative;
          z-index: 2;
          padding: 2rem;
        }
        .Business-title { font-size: 2.5rem; font-weight: 600; }
        .lead { font-size: 1.05rem; color: #f1f1f1; }
      `}</style>

      {/* Hero */}
      <div className="service-hero">
        <div className="hero-content">
          <h1 className="Business-title">
            Software Development and Implementation
          </h1>
          <p className="lead mt-3">Build the Future, Code by Code.</p>
        </div>
      </div>

      {/* Content */}
      <div className="container py-5">
        {/* <div className="text-center mb-4">
          <FaCode size={50} color="#34a853" />
          <h2 className="mt-3">Software Development and Implementation</h2>
          <p className="text-muted">
            From visionary concept to robust, scalable software.
          </p>
        </div> */}

        <div className="mt-4">
          <p>
            At <strong>NextMetaForce</strong>, we transform your complex
            business challenges into elegant, efficient, and scalable software.
            Our end-to-end development process is tailored to your unique needs,
            ensuring a solution that not only functions flawlessly but also
            delivers a superior user experience.
          </p>
          <p>
            We move beyond just writing code; we implement solutions that
            integrate seamlessly with your existing ecosystem, driving
            operational efficiency and creating a tangible competitive
            advantage.
          </p>
        </div>

        <div className="mt-4">
          <h4>Our Approach:</h4>
          <ul>
            <li>
              <strong>Agile Development:</strong> Collaborative, iterative
              sprints.
            </li>
            <li>
              <strong>Full-Stack Expertise:</strong> Front-end to back-end
              solutions.
            </li>
            <li>
              <strong>Quality Assurance:</strong> Rigorous testing at every
              stage.
            </li>
            <li>
              <strong>Seamless Deployment & Support:</strong> Full lifecycle
              support.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SoftwareDevelopment;
