import React from "react";
import { Container, Button } from "react-bootstrap";
import backgroundImage from "../assets/SolutionImg.jpg";

export default function HeroSection() {
  return (
    <>
      <style>
        {`
    .hero-section {
  // background: url("https://images.unsplash.com/photo-1518770660439-4636190af475") 
  //             center center/cover no-repeat;
  background-image: url(${backgroundImage}); 
  min-height: 90vh;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
              background-size: cover;

}

/* Dark overlay for better text visibility */
.hero-section::before {
  content: "";
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

       .hero-section .container {
          position: relative;
          z-index: 1;
          }
        .title{
           font-weight: 600;
           font-size: 3rem;
          }
          .subtitle{
          font-size: 1.25rem;
          margin-bottom: 2rem;
          color: #f5f4f4ff;
          }

    
    `}
      </style>
      <div className="hero-section d-flex align-items-center">
        <Container className="text-center text-white">
          <h1 className="display-4 title">Our Solutions</h1>
          <p className="subtitle">
            Empowering businesses with innovative IT solutions tailored to your
            needs.
          </p>
          {/* <Button variant="primary" size="lg">
            Get Started
          </Button> */}
        </Container>
      </div>
    </>
  );
}
