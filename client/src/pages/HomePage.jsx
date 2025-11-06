/**
 * Project: Nextmetaforce Website
 * Author: Sreekanth | Nextmetaforce Consulting LLP
 */

import React, { useState, useRef, useEffect } from "react";
import videoBackground from "../assets/video.mp4";
import posterImage from "../assets/poster.png";
import ServicesSection from "../components/ServicesSection";
import Consulting from "../components/Consulting";
import ServiceCards from "../components/ServiceCards";
import ServicesCarousel from "../components/ServicesCarousel";
import NewForm from "../components/NewForm";

function HomePage() {
  const heroRef = useRef(null);
  const nextSectionRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (!heroRef.current || !nextSectionRef.current || isAutoScrolling)
        return;

      const heroHeight = heroRef.current.offsetHeight;
      const scrollY = window.scrollY;
      const scrollingDown = scrollY > lastScrollY;
      lastScrollY = scrollY;

      if (
        scrollingDown &&
        scrollY > heroHeight * 0.1 &&
        scrollY < heroHeight * 0.8
      ) {
        setIsAutoScrolling(true);
        nextSectionRef.current.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => setIsAutoScrolling(false), 1200);
      }

      if (
        !scrollingDown &&
        scrollY < heroHeight * 0.7 &&
        scrollY > heroHeight * 0.1
      ) {
        setIsAutoScrolling(true);
        heroRef.current.scrollIntoView({ behavior: "smooth" });
        setTimeout(() => setIsAutoScrolling(false), 1200);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isAutoScrolling]);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" ref={heroRef}>
        {/* 🖼 Poster (shows immediately) */}
        <img
          src={posterImage}
          alt="Hero Poster"
          className={`video-poster ${isVideoLoaded ? "hidden" : "visible"}`}
        />

        {/* 🎥 Background Video */}
        <video
          className={`video-background ${isVideoLoaded ? "loaded" : ""}`}
          autoPlay
          loop
          muted
          playsInline
          preload="none"
          onLoadedData={() => setIsVideoLoaded(true)}
        >
          <source src={videoBackground} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        {/* Optional Overlay Grid */}
        <div className="grid-overlay"></div>

        {/* Hero Content */}
        <div className="hero-content">
          <h1 className="hero-title">
            Redefining possibilities through Next-Gen Tech
          </h1>
          <p className="hero-subtitle typing-text">
            Where Innovation meets purpose.
          </p>
        </div>
      </section>

      {/* Next Sections */}
      <div ref={nextSectionRef}>
        <ServicesSection />
      </div>
      <Consulting />
      <ServiceCards />
      <ServicesCarousel />
      <NewForm />

      {/* 💅 Styles */}
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

        /* Poster visible immediately */
        .video-poster {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 0;
          transition: opacity 0.6s ease-in-out;
        }

        .video-poster.visible {
          opacity: 1;
        }

        .video-poster.hidden {
          opacity: 0;
        }

        /* Video fades in after load */
        .video-background {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          object-fit: cover;
          z-index: 1;
          filter: brightness(0.8);
          opacity: 0;
          transition: opacity 1s ease-in-out;
        }

        .video-background.loaded {
          opacity: 1;
        }

        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 2;
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 3;
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
          font-size: 1.5rem;
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
      `}</style>
    </>
  );
}

export default HomePage;
