import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ConsultingImg from "../assets/corporate.jpg";
import { Link } from "react-router-dom";

function Consulting() {
  return (
    <>
      <section className="consulting-section">
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
            </Col>
          </Row>
        </Container>
      </section>
      {/* for this color we need to create a variable with a name and use it */}

      <style jsx="true">{`
        .consulting-section {
          padding: 80px 0;
          // background-color: var(--bg-secondary);
          background-color: #f9f9f9ff;
          position: relative;
          overflow: hidden;
        }

        /* Image */
        .image-col {
          display: flex;
          justify-content: center;
          margin-bottom: 30px;
        }

        .image-wrapper {
          position: relative;
          max-width: 100%;
          overflow: hidden;
          border-radius: 10px;
          box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
        }

        .consulting-image {
          width: 100%;
          height: auto;
          display: block;
          transition: transform 0.5s ease;
        }

        .image-wrapper:hover .consulting-image {
          transform: scale(1.05);
        }

        /* Text */
        .text-col {
          text-align: left;
        }

        .consulting-heading {
          font-family: "Montserrat", sans-serif;
          font-size: 1.5rem;
          font-weight: 500;
          // color: #343a40;
          position: relative;
          display: inline-block;
          margin-bottom: 20px;
        }

        /* Gradient underline */
        .consulting-heading .underline {
          display: block;
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #2196f3, #007bff);
          border-radius: 2px;
          margin-top: 6px;
        }

        .consulting-text {
          font-family: "Poppins", sans-serif;
          font-size: 1.1rem;
          line-height: 1.5;
          // color: #555;
          margin-bottom: 25px;
        }

        .know-us-button {
          display: inline-block;
          background-color: transparent;
          border: 2px solid black;
          color: black;
          font-size: 1rem;
          font-weight: 500;
          padding: 12px 30px;
          text-transform: uppercase;
          letter-spacing: 1px;
          transition: all 0.3s ease-in-out;
          text-decoration: none;
        }

        .know-us-button:hover {
          background-color: black;
          color: white !important;
          border-color: black;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .consulting-section {
            padding: 60px 20px;
          }
          .consulting-heading {
            font-size: 1.6rem;
          }
          .consulting-text {
            font-size: 1rem;
            text-align: center;
          }
          .text-col {
            text-align: center;
          }
        }
      `}</style>
    </>
  );
}

export default Consulting;
