// import React from "react";
// import { Container } from "react-bootstrap";
// import SolutionImg from "../assets/SolutionImg.webp";

// export default function HeroSection() {
//   return (
//     <>
//       <style>
//         {`
//           .hero-section {
//             background-image: url(${SolutionImg});
//             background-size: cover;
//             background-position: center;
//             background-repeat: no-repeat;
//             background-attachment: scroll; /* ✅ prevents mobile issues */
//             min-height: 100vh;
//             display: flex;
//             justify-content: center;
//             align-items: center;
//             position: relative;
//             overflow: hidden;

//           }

//           .hero-content{
//                       transform: translateY(30px);
//             animation: fadeInUp 1.2s ease forwards;

//           }
//              @keyframes fadeInUp {
//             to {
//               opacity: 1;
//               transform: translateY(0);
//             }
//           }

//           /* Dark overlay for better text visibility */
//           .hero-section::before {
//             content: "";
//             position: absolute;
//             top: 0;
//             left: 0;
//             width: 100%;
//             height: 100%;
//             // background: rgba(0, 0, 0, 0.55);
//             z-index: 0;
//           }

//           .hero-section .container {
//             position: relative;
//             z-index: 1;
//             text-align: center;
//             color: #fff;
//           }

//           .title {
//             font-weight: 600;
//             font-size: 2.5rem;
//             margin-bottom: 1rem;
//           }

//           .subtitle {
//             font-size: 1.25rem;
//             color: #f5f5f5;
//             max-width: 800px;
//             margin: 0 auto;
//           }

//           /* ✅ Responsive adjustments */
//           @media (max-width: 992px) {
//             .hero-section {
//               min-height: 80vh;
//               // background-position: center top;
//                background-position: 30% center;

//             }

//             .title {
//               font-size: 2.2rem;
//             }

//             .subtitle {
//               font-size: 1.1rem;
//             }
//           }

//           @media (max-width: 576px) {
//             .hero-section {
//               min-height: 70vh;
//               background-position: 30% center;
//               background-size: cover;
//             }

//             .title {
//               font-size: 1.8rem;
//             }

//             .subtitle {
//               font-size: 1rem;
//               padding: 0 1rem;
//             }
//           }
//         `}
//       </style>

//       <div className="hero-section">
//         <Container>
//           <div className="hero-content">
//             {/* <h1 className="title">Our Solutions</h1>
//             <p className="subtitle">
//               Empowering businesses with innovative IT solutions tailored to
//               your needs.
//             </p> */}
//           </div>
//         </Container>
//       </div>
//     </>
//   );
// }

// Carousel Code
import React from "react";
import { Carousel, Container } from "react-bootstrap";
import SolutionImg1 from "../assets/SolutionImg.webp";
import SolutionImg2 from "../assets/Agent.png";
import SolutionImg3 from "../assets/NFT.jpg";

export default function HeroSection() {
  return (
    <>
      <style>
        {`
          .hero-carousel {
            position: relative;
            height: 100vh;
            overflow: hidden;
          }

          .hero-carousel .carousel-item {
            height: 100vh;
            min-height: 400px;
            background-size:cover;
            background-position: center;
            position: relative;
          }

          .hero-carousel .carousel-overlay {
            position: absolute;
            inset: 0;
            // background: rgba(0, 0, 0, 0.55);
            z-index: 1;
          }

          .hero-carousel .carousel-caption {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            z-index: 2;
            text-align: center;
            color: white;
            max-width: 800px;
          }

          .hero-carousel h1 {
            font-size: 2.8rem;
            font-weight: 600;
            margin-bottom: 1rem;
            animation: fadeInUp 1.2s ease forwards;
          }

          .hero-carousel p {
            font-size: 1.25rem;
            color: #f5f4f4ff;
            animation: fadeInUp 1.5s ease forwards;
          }

          @keyframes fadeInUp {
            from { opacity: 0; transform: translateY(30px); }
            to { opacity: 1; transform: translateY(0); }
          }

          @media (max-width: 992px) {
            .hero-carousel,
            .hero-carousel .carousel-item {
              height: 80vh;
             background-position: 30% center;

            }

            .hero-carousel h1 {
              font-size: 2rem;
            }

            .hero-carousel p {
              font-size: 1.1rem;
              padding: 0 1rem;
            }
          }

          @media (max-width: 576px) {
            .hero-carousel,
            .hero-carousel .carousel-item {

               min-height: 70vh;
               background-position: 30% center;
               background-size: cover;

            }

            .hero-carousel h1 {
              font-size: 1.8rem;
            }

            .hero-carousel p {
              font-size: 1rem;
              padding: 0 1rem;
            }
          }
        `}
      </style>

      {/* ✅ Hero Carousel Section */}
      <Carousel
        fade
        indicators={true}
        controls={true}
        interval={4000}
        className="hero-carousel"
      >
        <Carousel.Item style={{ backgroundImage: `url(${SolutionImg1})` }}>
          <div className="carousel-overlay"></div>
          <Container>
            {/* <div className="carousel-caption">
              <h1>Our Solutions</h1>
              <p>
                Empowering businesses with innovative IT solutions tailored to
                your needs.
              </p>
            </div> */}
          </Container>
        </Carousel.Item>

        <Carousel.Item style={{ backgroundImage: `url(${SolutionImg2})` }}>
          <div className="carousel-overlay"></div>
          <Container>
            {/* <div className="carousel-caption">
              <h1>Transform Challenges into Opportunities</h1>
              <p>
                Leverage data, automation, and strategy for measurable success.
              </p>
            </div> */}
          </Container>
        </Carousel.Item>

        <Carousel.Item style={{ backgroundImage: `url(${SolutionImg3})` }}>
          <div className="carousel-overlay"></div>
          <Container>
            {/* <div className="carousel-caption">
              <h1>Future-Ready Technology</h1>
              <p>
                Driving innovation with AI, cloud, and modern digital
                ecosystems.
              </p>
            </div> */}
          </Container>
        </Carousel.Item>
      </Carousel>
    </>
  );
}
