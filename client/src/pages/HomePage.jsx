import React, { useState } from "react";
import videoBackground from "../assets/video.mp4";
import Modal from "../components/Modal";
import ServicesSection from "../components/ServicesSection";
import Consulting from "../components/Consulting";
import ServiceCards from "../components/ServiceCards";
import ServicesCarousel from "../components/ServicesCarousel";
import NewForm from "../components/NewForm";
import AIChatBot from "../components/AIChatBot";

function HomePage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="hero-section">
        {/* Video Background */}
        <video className="video-background" autoPlay loop muted playsInline>
          <source src={videoBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Subtle Grid Overlay */}
        <div className="grid-overlay"></div>

        {/* Hero Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to Our <span className="gradient-text">Business</span>
          </h1>
          <p className="hero-subtitle">Where Innovation meets purpose.</p>
          {/* <button className="hero-button" onClick={() => setIsModalOpen(true)}>
            Schedule Demo
          </button> */}
        </div>

        {/* <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
      </section>

      <style jsx="true">{`
        .hero-section {
          position: relative;
          height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          overflow: hidden;
          text-align: center;
        }

        .video-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
          filter: brightness(0.6);
        }

        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: url("https://cdn.ranosys.com/wp-content/uploads/2024/10/grid-slide.png")
            repeat;
          // background-color: rgba(0, 0, 0, 0.39);
          mix-blend-mode: overlay;
          z-index: 1;
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          color: white;
          padding: 0 20px;
        }

        /* Heading uses Montserrat, weight 800 */
        .hero-title {
          font-weight: 600;
          font-size: 2.5rem;
          margin-bottom: 1rem;
        }

        /* Gradient text effect */
        .gradient-text {
          // background: linear-gradient(to right, #42a5f5, #5394f6ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        /* Subtitle uses global Poppins font */
        .hero-subtitle {
          font-weight: 300;
          font-size: 1.5rem;
          margin-bottom: 2rem;
          color: #ddd;
        }

        /* Button */
        .hero-button {
          font-weight: 600;
          font-size: 1rem;
          padding: 14px 36px;
          text-transform: uppercase;
          letter-spacing: 1.5px;
          border: 2px solid white;
          border-radius: 8px;
          background: transparent;
          color: white;
          cursor: pointer;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .hero-button::before {
          content: "";
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(to right, #42a5f5, #1a237e);
          transition: left 0.4s ease-in-out;
          z-index: -1;
        }

        .hero-button:hover::before {
          left: 0;
        }

        .hero-button:hover {
          color: #0d1b2a;
          box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
        }

        @media (max-width: 768px) {
          .hero-title {
            font-size: 2.5rem;
          }
          .hero-subtitle {
            font-size: 1rem;
          }
        }
      `}</style>
      <ServicesSection />
      <Consulting />
      <ServiceCards />
      <ServicesCarousel />
      <NewForm />
      <AIChatBot />
    </>
  );
}

export default HomePage;
