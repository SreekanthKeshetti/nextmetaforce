import React from "react";
import cloudImg from "../assets/CloudandAI.webp";
import { FaCloud } from "react-icons/fa";

const CloudAI = () => {
  return (
    <>
      <style>{`
        .service-hero {
          background-image: url(${cloudImg});
          background-size: cover;
          // background-position: center;          
          // min-height: 100vh;
          // position: relative;
          // display: flex;
          // align-items: center;
          // justify-content: center;
          // text-align: center;
          // color: #fff;
           background-size: cover;
            background-position: center center;
            background-repeat: no-repeat;
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            text-align: center;
            color: white;
            overflow: hidden;
        }
        .service-hero::after {
          content: "";
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.55);
        }
        .service-hero .hero-content { position: relative; z-index:2; padding:2rem; }
        .Business-title { font-size: 2.5rem; font-weight: 600; }
        .lead { font-size: 1.05rem; color: #f1f1f1; }
      `}</style>

      <div className="service-hero">
        <div className="hero-content">
          <h1 className="Business-title">Cloud and AI</h1>
          <p className="lead mt-3">Intelligent Scale for an Automated World.</p>
        </div>
      </div>

      <div className="container py-5">
        <div className="text-center mb-4">
          {/* <FaCloud size={50} color="#00bcd4" /> */}
          <h2 className="mt-3">Cloud and AI</h2>
          <p className="text-muted">
            Harness the combined power of Cloud and AI.
          </p>
        </div>

        <div className="mt-4">
          <p>
            The future is automated, predictive, and in the cloud.{" "}
            <strong>NextMetaForce</strong> empowers your business to leap ahead
            by integrating cutting-edge AI with flexible cloud infrastructure.
          </p>
        </div>

        <div className="mt-4">
          <h4>Our Solutions:</h4>
          <ul>
            <li>
              <strong>Cloud Mastery:</strong> Secure migration, multi-cloud
              strategy, managed services.
            </li>
            <li>
              <strong>AI & ML:</strong> Intelligent applications and predictive
              insights.
            </li>
            <li>
              <strong>Data Engineering:</strong> Robust data pipelines and
              lakes.
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default CloudAI;
