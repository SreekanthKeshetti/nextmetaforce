import React, { useState, useRef, useEffect } from "react";
import videoBackground from "../assets/video.mp4";
import ServicesSection from "../components/ServicesSection";
import Consulting from "../components/Consulting";
import ServiceCards from "../components/ServiceCards";
import ServicesCarousel from "../components/ServicesCarousel";
import NewForm from "../components/NewForm";

function HomePage() {
  const heroRef = useRef(null);
  const nextSectionRef = useRef(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY; // keep track of scroll direction

    const handleScroll = () => {
      if (!heroRef.current || !nextSectionRef.current || isAutoScrolling)
        return;

      const heroHeight = heroRef.current.offsetHeight;
      const scrollY = window.scrollY;
      const scrollingDown = scrollY > lastScrollY;
      lastScrollY = scrollY;

      // Going DOWN — from hero to manifesto
      if (
        scrollingDown &&
        scrollY > heroHeight * 0.1 &&
        scrollY < heroHeight * 0.8
      ) {
        setIsAutoScrolling(true);
        nextSectionRef.current.scrollIntoView({ behavior: "smooth" });

        setTimeout(() => {
          setIsAutoScrolling(false);
        }, 1200);
      }

      // Going UP — from manifesto back to hero
      if (
        !scrollingDown &&
        scrollY < heroHeight * 0.7 &&
        scrollY > heroHeight * 0.1
      ) {
        setIsAutoScrolling(true);
        heroRef.current.scrollIntoView({ behavior: "smooth" });

        setTimeout(() => {
          setIsAutoScrolling(false);
        }, 1200);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isAutoScrolling]);

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section" ref={heroRef}>
        <video className="video-background" autoPlay loop muted playsInline>
          <source src={videoBackground} type="video/mp4" />
          {/* Your browser does not support the video tag. */}
        </video>

        <div className="grid-overlay"></div>

        <div className="hero-content">
          <h1 className="hero-title">
            Redefining possibilities through Next- Gen Tech
          </h1>
          <p className="hero-subtitle typing-text">
            Where Innovation meets purpose.
          </p>
        </div>
      </section>

      {/* Manifesto / Next Section */}
      <div ref={nextSectionRef}>
        <ServicesSection />
      </div>
      <Consulting />
      <ServiceCards />
      <ServicesCarousel />
      <NewForm />
      {/* <OrbitTechAnimation /> */}

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
          filter: brightness(0.8);
          // increased the brightness from 0.6 to 0.8 and add the gird bg
        }

        .grid-overlay {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          // background: url("https://cdn.ranosys.com/wp-content/uploads/2024/10/grid-slide.png")
            repeat;
          // mix-blend-mode: overlay;
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

        .gradient-text {
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
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
          // color: #f46b09ff;
          white-space: nowrap;
          overflow: hidden;
          animation: typingLoop 7s steps(28, end) infinite;
        }

        /* ✨ Typing + fade + reset loop */
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
          .hero-title {
            font-size: 1rem;
          }
          .hero-subtitle {
            font-size: 1rem;
          }
          .typing-text {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
}

export default HomePage;
