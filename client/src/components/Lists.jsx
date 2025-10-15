import React from "react";
import {
  FaLightbulb,
  FaUsersCog,
  FaChartLine,
  FaCloud,
  FaCogs,
  FaLock,
} from "react-icons/fa";

const Lists = () => {
  return (
    <>
      <style>
        {`
        /* === Why Choose Us Section === */
        .why-section {
          background: #f9fbff;
          padding: 6rem 0;
        }

        .why-title {
          font-size: 2.5rem;
          font-weight: 700;
          text-align: center;
          margin-bottom: 1rem;
          color: #0a0a0a;
          position: relative;
          display: inline-block;
        }

        .why-title::after {
          content: "";
          position: absolute;
          bottom: -10px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 3px;
          border-radius: 3px;
          background: linear-gradient(90deg, #009dff, #0055ff);
        }

        .why-subtext {
          text-align: center;
          color: #555;
          max-width: 650px;
          margin: 0 auto 3rem;
          font-size: 1.05rem;
        }

        /* === Cards Grid === */
        .why-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 2rem;
          padding: 0 2rem;
        }

        .why-card {
          background: #fff;
          border-radius: 16px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
          padding: 2rem;
          text-align: center;
          transition: all 0.4s ease;
          border-top: 4px solid transparent;
        }

        .why-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 25px rgba(0, 93, 255, 0.25);
          border-top: 4px solid #0055ff;
        }

        .why-icon {
          font-size: 2.5rem;
          margin-bottom: 1rem;
          transition: transform 0.3s ease;
        }

        .why-card:hover .why-icon {
          transform: scale(1.1);
        }

        .why-heading {
          font-size: 1.25rem;
          font-weight: 600;
          color: #0a0a0a;
          margin-bottom: 0.8rem;
        }

        .why-text {
          color: #555;
          font-size: 1rem;
          line-height: 1.6;
        }
        `}
      </style>

      <section className="why-section">
        <div className="container text-center">
          <h2 className="why-title">Why Choose Us</h2>
          <p className="why-subtext">
            We deliver future-ready IT solutions backed by innovation,
            expertise, and trust. Our goal is to empower businesses with
            scalable and intelligent technologies that drive success.
          </p>
        </div>
        <div className="why-grid">
          {/* Card 1 */}
          <div className="why-card">
            <FaLightbulb className="why-icon" style={{ color: "#f4b400" }} />
            <h4 className="why-heading">Innovation</h4>
            <p className="why-text">
              We bring futuristic thinking and creative problem-solving to every
              project, ensuring your business stays ahead of the curve.
            </p>
          </div>

          {/* Card 2 */}
          <div className="why-card">
            <FaUsersCog className="why-icon" style={{ color: "#34a853" }} />
            <h4 className="why-heading">Expert Team</h4>
            <p className="why-text">
              Our certified professionals bring deep domain expertise and
              technical excellence to deliver quality-driven solutions.
            </p>
          </div>

          {/* Card 3 */}
          <div className="why-card">
            <FaChartLine className="why-icon" style={{ color: "#4285f4" }} />
            <h4 className="why-heading">Scalable Solutions</h4>
            <p className="why-text">
              From startups to enterprises, our solutions grow with your
              business and adapt to evolving technology landscapes.
            </p>
          </div>

          {/* Card 4 */}
          <div className="why-card">
            <FaCloud className="why-icon" style={{ color: "#00bcd4" }} />
            <h4 className="why-heading">Cloud & AI Driven</h4>
            <p className="why-text">
              We harness the power of cloud, AI, and automation to create
              smarter, more efficient digital ecosystems.
            </p>
          </div>

          {/* Card 5 */}
          <div className="why-card">
            <FaCogs className="why-icon" style={{ color: "#9c27b0" }} />
            <h4 className="why-heading">Custom Engineering</h4>
            <p className="why-text">
              We design and develop tailor-made software that aligns perfectly
              with your business goals and vision.
            </p>
          </div>

          {/* Card 6 */}
          <div className="why-card">
            <FaLock className="why-icon" style={{ color: "#ff7043" }} />
            <h4 className="why-heading">Secure & Reliable</h4>
            <p className="why-text">
              Data protection and security are built into our development
              process, ensuring complete peace of mind.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Lists;
