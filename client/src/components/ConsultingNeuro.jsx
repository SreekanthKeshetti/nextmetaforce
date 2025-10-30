//suttle background
// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";
// import ConsultingImg from "../assets/ConsultingImg.jpg";
// import { Link } from "react-router-dom";

// function Consulting() {
//   return (
//     <>
//       <section className="consulting-section soft-spill-bg">
//         <Container>
//           <Row className="align-items-center">
//             {/* Image Side */}
//             <Col md={6} className="image-col">
//               <div className="image-wrapper">
//                 <img
//                   src={ConsultingImg}
//                   alt="Corporate Consulting"
//                   className="consulting-image"
//                 />
//               </div>
//             </Col>

//             {/* Text Side */}
//             <Col md={6} className="text-col">
//               <div className="text-wrapper">
//                 <h2 className="consulting-heading">
//                   About Us
//                   <span className="underline"></span>
//                 </h2>
//                 <p className="consulting-text">
//                   When it comes to leveraging a consulting and solutions
//                   partner, you need a visionary with experience whose primary
//                   focus is delivering outcomes and business value to your
//                   company.
//                 </p>
//                 <Link to="/about" className="know-us-button">
//                   Know Us
//                 </Link>
//               </div>
//             </Col>
//           </Row>
//         </Container>
//       </section>

//       <style jsx="true">{`
//         /* 🔥 Balanced subtle background glow */
//         .soft-spill-bg {
//           position: relative;
//           overflow: hidden;
//           background: linear-gradient(180deg, #fafafa 0%, #ffffff 100%);
//           isolation: isolate;
//         }

//         .soft-spill-bg::before {
//           content: "";
//           position: absolute;
//           inset: 0;
//           background: radial-gradient(
//               circle at 15% 30%,
//               rgba(255, 140, 0, 0.18),
//               transparent 65%
//             ),
//             radial-gradient(
//               circle at 85% 65%,
//               rgba(255, 87, 34, 0.15),
//               transparent 70%
//             ),
//             radial-gradient(
//               circle at 50% 100%,
//               rgba(255, 255, 255, 0.2),
//               transparent 80%
//             );
//           filter: blur(100px) saturate(110%);
//           opacity: 0.9;
//           z-index: -1;
//           transition: all 0.3s ease;
//         }

//         /* 🌙 Dark Mode (auto adapts via prefers-color-scheme) */
//         @media (prefers-color-scheme: dark) {
//           .soft-spill-bg {
//             background: radial-gradient(
//               circle at 50% 50%,
//               #0a0a0a,
//               #0e0e0e 80%
//             );
//           }

//           .soft-spill-bg::before {
//             background: radial-gradient(
//                 circle at 20% 30%,
//                 rgba(255, 160, 0, 0.3),
//                 transparent 70%
//               ),
//               radial-gradient(
//                 circle at 80% 70%,
//                 rgba(255, 77, 0, 0.25),
//                 transparent 70%
//               ),
//               radial-gradient(
//                 circle at 50% 90%,
//                 rgba(255, 255, 255, 0.08),
//                 transparent 70%
//               );
//             filter: blur(120px) brightness(1.4);
//           }
//         }

//         /* Main section layout */
//         .consulting-section {
//           padding: 70px 0;
//           position: relative;
//         }

//         /* Image */
//         .image-col {
//           display: flex;
//           justify-content: center;
//           align-items: center;
//         }

//         .image-wrapper {
//           position: relative;
//           max-width: 90%;
//           border-radius: 15px;
//           overflow: hidden;
//           box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
//         }

//         .consulting-image {
//           width: 100%;
//           height: auto;
//           display: block;
//           transition: transform 0.5s ease;
//         }

//         .image-wrapper:hover .consulting-image {
//           transform: scale(1.05);
//         }

//         /* Text */
//         .text-col {
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         .text-wrapper {
//           max-width: 90%;
//         }

//         .consulting-heading {
//           font-family: "Montserrat", sans-serif;
//           font-size: 1.5rem;
//           font-weight: 600;
//           color: #222;
//           position: relative;
//           margin-bottom: 25px;
//           display: inline-block;
//         }

//         .consulting-heading .underline {
//           display: block;
//           width: 80px;
//           height: 4px;
//           background: linear-gradient(90deg, #ff7a00, #ffc107);
//           border-radius: 2px;
//           margin-top: 8px;
//         }

//         .consulting-text {
//           font-family: "Poppins", sans-serif;
//           font-size: 1.1rem;
//           line-height: 1.7;
//           color: #555;
//           margin-bottom: 30px;
//         }

//         .know-us-button {
//           display: inline-block;
//           background-color: transparent;
//           border: 2px solid #ff7a00;
//           color: #ff7a00;
//           font-size: 1rem;
//           font-weight: 500;
//           padding: 12px 28px;
//           text-transform: uppercase;
//           letter-spacing: 1px;
//           border-radius: 30px;
//           transition: all 0.3s ease-in-out;
//           text-decoration: none;
//         }

//         .know-us-button:hover {
//           background-color: #ff7a00;
//           color: white !important;
//           border-color: #ff7a00;
//         }

//         /* Responsive */
//         @media (max-width: 768px) {
//           .consulting-section {
//             padding: 60px 20px;
//           }

//           .text-wrapper {
//             text-align: center;
//           }

//           .consulting-heading {
//             font-size: 1.7rem;
//           }

//           .consulting-text {
//             font-size: 1rem;
//           }
//         }
//       `}</style>
//     </>
//   );
// }

// export default Consulting;

//Advanced Background
import React, { useEffect, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import ConsultingImg from "../assets/ConsultingImg.jpg";
import { Link } from "react-router-dom";

export default function Consulting() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    let particles = [];
    const numParticles = 50;
    let animationFrameId;

    const resize = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.size = 2 + Math.random() * 2;
      }
      move() {
        this.x += this.vx;
        this.y += this.vy;
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }
      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,165,0,0.9)";
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < numParticles; i++) particles.push(new Particle());
    };

    const drawLines = () => {
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 150) {
            const opacity = 1 - dist / 150;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `rgba(255, 165, 0, ${opacity * 0.5})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach((p) => {
        p.move();
        p.draw();
      });
      drawLines();
      animationFrameId = requestAnimationFrame(animate);
    };

    initParticles();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="consulting-section">
      {/* Animated Background */}
      <canvas ref={canvasRef} className="network-canvas" />

      <Container>
        <Row className="align-items-center">
          {/* Image Side */}
          <Col md={6} className="image-col">
            <div className="image-wrapper">
              <img
                src={ConsultingImg}
                alt="Corporate Consulting"
                className="consulting-image"
              />
            </div>
          </Col>

          {/* Text Side */}
          <Col md={6} className="text-col">
            <div className="text-wrapper">
              <h2 className="consulting-heading">
                About Us
                <span className="underline"></span>
              </h2>
              <p className="consulting-text">
                When it comes to leveraging a consulting and solutions partner,
                you need a visionary with experience whose primary focus is
                delivering outcomes and business value to your company.
              </p>
              <Link to="/about" className="know-us-button">
                Know Us
              </Link>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx="true">{`
        .consulting-section {
          position: relative;
          padding: 80px 0;
          overflow: hidden;
          background: radial-gradient(circle at 50% 50%, #fafafa, #f3f3f3);
        }

        /* Canvas background */
        .network-canvas {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          z-index: 0;
          pointer-events: none;
        }

        .text-col,
        .image-col {
          position: relative;
          z-index: 1;
        }

        .image-wrapper {
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
          transition: transform 0.5s ease;
        }

        .image-wrapper:hover {
          transform: scale(1.03);
        }

        .consulting-image {
          width: 100%;
          height: auto;
          display: block;
        }

        .consulting-heading {
          font-size: 1.8rem;
          font-weight: 600;
          color: #222;
          position: relative;
        }

        .consulting-heading .underline {
          display: block;
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #ff7a00, #ffc107);
          border-radius: 2px;
          margin-top: 8px;
        }

        .consulting-text {
          margin-top: 20px;
          font-size: 1.1rem;
          color: #555;
          line-height: 1.6;
        }

        .know-us-button {
          display: inline-block;
          background: transparent;
          border: 2px solid #ff7a00;
          color: #ff7a00;
          font-weight: 500;
          padding: 10px 24px;
          border-radius: 30px;
          margin-top: 20px;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .know-us-button:hover {
          background: #ff7a00;
          color: #fff;
        }

        @media (max-width: 768px) {
          .consulting-section {
            padding: 60px 20px;
          }
          .text-wrapper {
            text-align: center;
          }
        }
      `}</style>
    </section>
  );
}
