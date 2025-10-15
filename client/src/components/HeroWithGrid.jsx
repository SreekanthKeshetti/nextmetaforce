// HeroWithGrid.jsx
import React from "react";
// import heroImg from "../assets/hero-image.jpg"; // replace with your image

function HeroWithGrid() {
  return (
    <>
      <style>
        {`
          .hero-grid-section {
            position: relative;
            overflow: hidden;
            height: 80vh;
            min-height: 500px;
            display: flex;
            align-items: center;
            background-color: #ffffff; 
            background-image: url("data:image/svg+xml,%3Csvg width='6' height='6' viewBox='0 0 6 6' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%238b9fe5' fill-opacity='0.4' fill-rule='evenodd'%3E%3Cpath d='M5 0h1L0 6V5zM6 5v1H5z'/%3E%3C/g%3E%3C/svg%3E");
          }

          /* split color block (left side) */
          .hero-grid-section::after {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 50%;
            height: 100%;
            background: #ffffff;
            z-index: 2;
          }

          /* content styles */
          .hero-content {
            position: relative;
            z-index: 10;
            padding: 2rem;
            color: #1a1a1a;
          }

          .hero-content h1 {
            font-size: 2.5rem;
            font-weight: 700;
            margin-bottom: 1rem;
          }

          .hero-content p {
            font-size: 1.2rem;
            margin-bottom: 1.5rem;
            color: #444;
          }

          .hero-content .btn {
            background: linear-gradient(to right, #64b5f6, #3949ab);
            color: white;
            border: none;
            padding: 12px 28px;
            font-size: 1.1rem;
          }

          .hero-content .btn:hover {
            background: linear-gradient(to right, #3949ab, #64b5f6);
          }

          /* image wrapper */
          .hero-image-wrapper {
            position: relative;
            z-index: 5;
            overflow: hidden;
          }

          .hero-img {
            width: 100%;
            height: auto;
            object-fit: cover;
            display: block;
          }

          /* responsive */
          @media (max-width: 992px) {
            .hero-grid-section {
              flex-direction: column;
              height: auto;
              padding: 3rem 1rem;
            }
            .hero-grid-section::after {
              width: 100%;
              height: 40vh;
            }
            .hero-content {
              text-align: center;
            }
            .hero-content h1 {
              font-size: 2rem;
            }
          }
        `}
      </style>

      <section className="hero-grid-section">
        <div className="container h-100">
          <div className="row align-items-center h-100">
            <div className="col-lg-6 hero-content">
              <h1>Empower Data-Driven Decisions</h1>
              <p>Your analytics, insights and AI — unified and actionable.</p>
              <button className="btn">Get Started</button>
            </div>
            <div className="col-lg-6 hero-image-wrapper">
              {/* <img src={heroImg} alt="Hero Visual" className="hero-img" /> */}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
export default HeroWithGrid;
