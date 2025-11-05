import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ConsultingImg from "../assets/ConsultingImg.jpg";
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
              <div className="text-wrapper">
                <h2 className="consulting-heading">
                  About Us
                  <span className="underline"></span>
                </h2>
                <p className="consulting-text">
                  When it comes to leveraging a consulting and solutions
                  partner, you need a visionary with experience whose primary
                  focus is delivering outcomes and business value to your
                  company.
                </p>
                <Link to="/about" className="know-us-button">
                  Know Us
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <style jsx="true">{`
        .consulting-section {
          // reducing the padding to 50px to redcue the gap between the section
          padding: 50px 0;
          // background-color: #f9f9f9;
          background-color: var(--bg-consulting);
          position: relative;
          overflow: hidden;
        }

        /* Image */
        .image-col {
          display: flex;
          justify-content: center;
          align-items: center;
        }

        .image-wrapper {
          position: relative;
          max-width: 90%;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.15);
          margin: 10px;
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
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .text-wrapper {
          max-width: 90%;
        }

        .consulting-heading {
          font-family: "Montserrat", sans-serif;
          font-size: 1.5rem;
          font-weight: 600;
          color: var(--consulting-Heading);
          position: relative;
          margin-bottom: 25px;
          display: inline-block;
        }

        .consulting-heading .underline {
          display: block;
          width: 80px;
          height: 4px;
          // background: linear-gradient(90deg, #ff6a00, #ffb300);
          background: linear-gradient(90deg, #2196f3, #007bff);
          border-radius: 2px;
          margin-top: 8px;
        }

        .consulting-text {
          font-family: "Poppins", sans-serif;
          font-size: 1.1rem;
          line-height: 1.7;
          color: var(--consulting-text);
          margin-bottom: 30px;
        }

        .know-us-button {
          display: inline-block;
          background-color: transparent;
          border: 2px solid #ff6a00;
          color: #ff6a00;
          font-size: 1rem;
          font-weight: 500;
          padding: 12px 28px;
          text-transform: uppercase;
          letter-spacing: 1px;
          border-radius: 30px;
          transition: all 0.3s ease-in-out;
          text-decoration: none;
        }

        .know-us-button:hover {
          background-color: #ff6a00;
          color: white !important;
          border-color: #ff6a00;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .consulting-section {
            padding: 60px 20px;
          }

          .text-wrapper {
            text-align: center;
          }

          .consulting-heading {
            font-size: 1.7rem;
          }

          .consulting-text {
            font-size: 1rem;
          }
        }
      `}</style>
    </>
  );
}

export default Consulting;
