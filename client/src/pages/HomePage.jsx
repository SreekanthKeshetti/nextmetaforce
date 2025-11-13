import React, { useState, useRef, useEffect } from "react";
import ServicesSection from "../components/ServicesSection";
import Consulting from "../components/Consulting";
import ServiceCards from "../components/ServiceCards";
import ServicesCarousel from "../components/ServicesCarousel";
import NewForm from "../components/NewForm";
import posterImg from "../assets/poster.jpg";

function HomePage() {
  const heroRef = useRef(null);
  useEffect(() => {
    const video = heroRef.current.querySelector("video");
    if (!video) return;

    const handleEnded = () => {
      video.currentTime = 0;
      video.play();
    };

    video.addEventListener("ended", handleEnded);

    return () => video.removeEventListener("ended", handleEnded);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" ref={heroRef}>
        <video
          className="video-background"
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          poster={posterImg}
        >
          {/* 🎥 Use Cloudinary CDN URL for fast load */}
          <source
            src="https://res.cloudinary.com/dgysfehjv/video/upload/f_auto,q_auto/v1762416065/video_o5j4jr.webm"
            type="video/webm"
          />
          Your browser does not support the video tag.
        </video>

        <div className="grid-overlay"></div>

        <div className="hero-content">
          <h1 className="hero-title">
            Redefining possibilities through Next-Gen Tech
          </h1>
          <p className="hero-subtitle typing-text">
            Where Innovation meets purpose.
          </p>
        </div>
      </section>

      {/* Manifesto / Next Section */}
      <ServicesSection />
      <Consulting />
      <ServiceCards />
      <ServicesCarousel />
      <NewForm />

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

        .hero-title {
          font-weight: 700;
          font-size: 1.5rem;
          margin-bottom: 1rem;
        }

        .hero-subtitle {
          font-weight: 500;
          font-size: 1.2rem;
          margin-bottom: 2rem;
          color: #f49e09ff;
        }

        .typing-text {
          display: inline-block;
          font-weight: 600;
          font-size: 1.5rem;
          color: #f49e09ff;
          white-space: nowrap;
          overflow: hidden;
          animation: typingLoop 7s steps(28, end) infinite;
        }

        @keyframes typingLoop {
          0% {
            width: 0;
            opacity: 1;
          }
          60% {
            width: 100%;
            opacity: 1;
          }
          80% {
            opacity: 0;
          }
          100% {
            width: 0;
            opacity: 0;
          }
        }

        @media (max-width: 768px) {
          .hero-title,
          .hero-subtitle,
          .typing-text {
            font-size: 1rem;
          }
        }
        // .hero-content h1,
        // .hero-content p {
        //   text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
        // }
      `}</style>
    </>
  );
}

export default HomePage;
