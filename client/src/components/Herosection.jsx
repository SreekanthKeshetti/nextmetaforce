// import React from "react";
// import { Container, Button } from "react-bootstrap";
// import backgroundImage from "../assets/SolutionImg.jpg";

// export default function HeroSection() {
//   return (
//     <>
//       <style>
//         {`
//     .hero-section {
//   // background: url("https://images.unsplash.com/photo-1518770660439-4636190af475")
//   //             center center/cover no-repeat;
//   background-image: url(${backgroundImage});
//   min-height: 90vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: relative;
//               background-size: cover;

// }

// /* Dark overlay for better text visibility */
// .hero-section::before {
//   content: "";
//   position: absolute;
//   top: 0; left: 0;
//   width: 100%; height: 100%;
//   background: rgba(0, 0, 0, 0.5);
// }

//        .hero-section .container {
//           position: relative;
//           z-index: 1;
//           }
//         .title{
//            font-weight: 600;
//            font-size: 2.5rem;
//           }
//           .subtitle{
//           font-size: 1.25rem;
//           margin-bottom: 2rem;
//           color: #f5f4f4ff;
//           }

//     `}
//       </style>
//       <div className="hero-section d-flex align-items-center">
//         <Container className="text-center text-white">
//           <h1 className="display-4 title">Our Solutions</h1>
//           <p className="subtitle">
//             Empowering businesses with innovative IT solutions tailored to your
//             needs.
//           </p>
//           {/* <Button variant="primary" size="lg">
//             Get Started
//           </Button> */}
//         </Container>
//       </div>
//     </>
//   );
// }
import React from "react";
import { Container } from "react-bootstrap";
import backgroundImage from "../assets/SolutionImg.jpg";

export default function HeroSection() {
  return (
    <>
      <style>
        {`
          .hero-section {
            background-image: url(${backgroundImage});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-attachment: scroll; /* ✅ prevents mobile issues */
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            overflow: hidden;
            
          }

          .hero-content{
                      transform: translateY(30px);
            animation: fadeInUp 1.2s ease forwards;

          }
             @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          /* Dark overlay for better text visibility */
          .hero-section::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.55);
            z-index: 0;
          }

          .hero-section .container {
            position: relative;
            z-index: 1;
            text-align: center;
            color: #fff;
          }

          .title {
            font-weight: 700;
            font-size: 2.8rem;
            margin-bottom: 1rem;
          }

          .subtitle {
            font-size: 1.25rem;
            color: #f5f5f5;
            max-width: 800px;
            margin: 0 auto;
          }

          /* ✅ Responsive adjustments */
          @media (max-width: 992px) {
            .hero-section {
              min-height: 80vh;
              background-position: center top;
            }

            .title {
              font-size: 2.2rem;
            }

            .subtitle {
              font-size: 1.1rem;
            }
          }

          @media (max-width: 576px) {
            .hero-section {
              min-height: 70vh;
              background-position: top center;
              background-size: cover;
            }

            .title {
              font-size: 1.8rem;
            }

            .subtitle {
              font-size: 1rem;
              padding: 0 1rem;
            }
          }
        `}
      </style>

      <div className="hero-section">
        <Container>
          <div className="hero-content">
            <h1 className="title">Our Solutions</h1>
            <p className="subtitle">
              Empowering businesses with innovative IT solutions tailored to
              your needs.
            </p>
          </div>
        </Container>
      </div>
    </>
  );
}
