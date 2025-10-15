import React from "react";
import {
  FaSearch,
  FaCogs,
  FaDatabase,
  FaShieldAlt,
  FaRocket,
} from "react-icons/fa";

const steps = [
  {
    icon: <FaSearch />,
    title: "Discovery & Strategy",
    description:
      "We analyze your business, define goals, and design scalable CRM solutions tailored to Salesforce, AWS, Oracle, and Dynamics 365.",
  },
  {
    icon: <FaCogs />,
    title: "Customization & Configuration",
    description:
      "Tailor environments with intelligent automation, CI/CD pipelines, and DevOps integrations for flawless operation.",
  },
  {
    icon: <FaDatabase />,
    title: "Data Migration & Integration",
    description:
      "Securely migrate and validate data, integrating APIs, CRMs, and enterprise systems using AWS/Oracle stacks.",
  },
  {
    icon: <FaShieldAlt />,
    title: "Testing, Training & QA",
    description:
      "Comprehensive QA, UAT sessions, and hands-on user training ensure high adoption and performance.",
  },
  {
    icon: <FaRocket />,
    title: "Deployment & Ongoing Support",
    description:
      "Seamless go-live, monitoring, and continuous optimization to scale your CRM and cloud systems.",
  },
];

const HowWeWork = () => {
  return (
    <>
      <style>{`
        .howwework {
          background: linear-gradient(to bottom, #f4f8ff, #ffffff);
          color: #e2e8f0;
          padding: 100px 20px;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        .howwework h2 {
          text-align: center;
          font-size: 1.5rem;
          margin-bottom: 70px;
          color: #000;
          font-weight: 700;
          letter-spacing: -0.05em;
          position: relative;
        }

        /* Glowing underline */
        .howwework h2::after {
          content: "";
          position: absolute;
          bottom: -15px;
          left: 50%;
          transform: translateX(-50%);
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #60a5fa, #3b82f6, #60a5fa);
          border-radius: 2px;
          box-shadow: 0 0 10px rgba(59,130,246,0.5);
        }

        .timeline {
          position: relative;
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px 0;
        }

        .timeline::before {
          content: "";
          position: absolute;
          left: 50%;
          top: 0;
          transform: translateX(-50%);
          width: 8px;
          height: 100%;
          background: linear-gradient(to bottom, #a7d9ff, #60a5fa, #3b82f6, #60a5fa, #a7d9ff);
          background-size: 100% 400%;
          box-shadow: 0 0 30px rgba(59,130,246,0.6);
          border-radius: 6px;
          animation: lineFlow 4s ease-in-out infinite;
          z-index: 0;
        }

        @keyframes lineFlow {
          0% { background-position: 0% 0%; }
          50% { background-position: 0% 100%; }
          100% { background-position: 0% 0%; }
        }

        .timeline-step {
          position: relative;
          width: 50%;
          padding: 70px 40px 20px 40px;
          box-sizing: border-box;
        }

        .timeline-step.left {
          left: 0;
          text-align: right;
        }

        .timeline-step.right {
          left: 50%;
          text-align: left;
        }

        .number-wrapper {
          position: absolute;
          top: -4px;
          left: 50%;
          transform: translateX(-50%);
          width: 58px;
          height: 58px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          z-index: 2;
          background: #2d3748;
          border: 0.5px solid #475569;
          overflow: hidden;
        }

        .glow-circle {
          position: absolute;
          width: 150%;
          height: 150%;
          border-radius: 50%;
          background: conic-gradient(
            transparent 0%,
            transparent 270deg,
            #60a5fa 280deg,
            #3b82f6 300deg,
            #60a5fa 320deg,
            transparent 330deg,
            transparent 360deg
          );
          animation: rotateSegmentGlow 4s linear infinite;
          filter: blur(2px);
          z-index: 1;
        }

        @keyframes rotateSegmentGlow {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        .number {
          position: relative;
          z-index: 3;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          background: #334155;
          color: #f8fafc;
          font-weight: 700;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 1.3rem;
          box-shadow: 0 0 15px rgba(0,0,0,0.4);
        }

        .step-card {
          background: #2d3748;
          padding: 25px;
          border-radius: 12px;
          box-shadow: 0 10px 25px rgba(0,0,0,0.4);
          position: relative;
          margin-top: 40px;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          border: 1px solid #4a5568;
        }

        .step-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 18px 35px rgba(59,130,246,0.6);
        }

        .step-icon {
          width: 55px;
          height: 55px;
          background: linear-gradient(135deg, #3b82f6, #60a5fa);
          color: #fff;
          display: flex;
          justify-content: center;
          align-items: center;
          border-radius: 50%;
          font-size: 1.6rem;
          margin: 0 auto 15px auto;
          box-shadow: 0 6px 15px rgba(59,130,246,0.5);
        }

        .step-title {
          font-size: 1.4rem;
          font-weight: 700;
          margin-bottom: 10px;
          text-align: center;
          color: #93c5fd;
          line-height: 1.3;
        }

        .step-desc {
          font-size: 1.05rem;
          line-height: 1.6;
          color: #cbd5e1;
          text-align: center;
        }

        @media (max-width: 768px) {
          .howwework h2 {
            font-size: 2.2rem;
            margin-bottom: 50px;
          }
          .timeline::before { left: 20px; width: 6px; }
          .timeline-step,
          .timeline-step.right {
            width: 100%;
            left: 0;
            text-align: left;
            padding-left: 80px;
            padding-right: 20px;
            margin-bottom: 60px;
          }
          .number-wrapper {
            left: 20px;
            transform: translateX(0);
            top: 0px;
          }
          .step-card {
            margin-top: 20px;
          }
        }
      `}</style>

      <section className="howwework">
        <h2>How We Work</h2>
        <div className="timeline">
          {steps.map((step, i) => (
            <div
              key={i}
              className={`timeline-step ${i % 2 === 0 ? "left" : "right"}`}
            >
              <div className="number-wrapper">
                <div className="glow-circle"></div>
                <div className="number">{i + 1}</div>
              </div>
              <div className="step-card">
                <div className="step-icon">{step.icon}</div>
                <div className="step-title">{step.title}</div>
                <div className="step-desc">{step.description}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default HowWeWork;
