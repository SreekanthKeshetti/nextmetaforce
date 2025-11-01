import React from "react";
import consultingImg from "../assets/IT&Recruitment.jpg";
import { FaUserTie } from "react-icons/fa";
import { Link } from "react-router-dom";

const ITConsulting = () => {
  return (
    <>
      <style>{`
        .service-hero {
          background-image: url(${consultingImg});
          background-size: cover;
          // background-position: center;
          // min-height: 80vh;
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
                        .service-button {
          display: inline-block;
          background-color: transparent;
          border: 2px solid #ff6a00;
          color: #ff6a00;
          font-size: 1rem;
          font-weight: 500;
          padding: 12px 28px;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-radius: 30px;
          transition: all 0.3s ease-in-out;
          text-decoration: none;
        }

        .service-button:hover {
          background-color: #ff6a00;
          color: white !important;
          border-color: #ff6a00;
        }


      `}</style>

      <div className="service-hero">
        <div className="hero-content">
          <h1 className="Business-title">IT Consulting and Recruitment</h1>
          {/* <p className="lead mt-3">
            Your Force Multiplier for IT Talent and Strategy.
          </p> */}
        </div>
      </div>

      <div className="container py-5">
        <div className="text-center mb-4">
          {/* <FaUserTie size={50} color="#4285f4" /> */}
          <h2 className="mt-3">IT Consulting and Recruitment</h2>
          <p className="">
            Bridge the gap between your technology goals and your team's
            capabilities.
          </p>
        </div>

        <div className="mt-4">
          <p>
            Navigating the complex world of technology and talent can be
            daunting. <strong>NextMetaForce</strong> acts as your strategic
            partner, providing the expert guidance and top-tier talent you need
            to execute your vision.
          </p>
        </div>

        <div className="mt-4">
          <h4>Our Dual Expertise:</h4>
          <ul>
            <li>
              <strong>Strategic IT Consulting:</strong> Actionable roadmaps for
              digital transformation.
            </li>
            <li>
              <strong>Precision Recruitment:</strong> Pre-vetted, high-caliber
              IT professionals.
            </li>
          </ul>
        </div>
      </div>
      <div className="text-center my-5">
        <Link to="/services" className="btn service-button">
          ← Back to Services
        </Link>
      </div>
    </>
  );
};

export default ITConsulting;
