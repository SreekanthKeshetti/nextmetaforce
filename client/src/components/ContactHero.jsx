import React from "react";
import { Container } from "react-bootstrap";
import contactImage from "../assets/Contact.jpg";

export default function ContactHero() {
  return (
    <>
      <style>
        {`
          .contact-hero {
            background-image: url(${contactImage});
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            background-attachment: scroll;
            min-height: 90vh;
            display: flex;
            justify-content: center;
            align-items: center;
            position: relative;
            overflow: hidden;
          }

          .contact-hero::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.55);
            z-index: 0;
          }

          .contact-hero .container {
            position: relative;
            z-index: 1;
            text-align: center;
            color: #fff;
          }

          .contact-title {
            font-weight: 700;
            font-size: 2.8rem;
            margin-bottom: 1rem;
          }

          .contact-subtitle {
            font-size: 1.25rem;
            color: #f5f5f5;
            max-width: 700px;
            margin: 0 auto;
          }

          @media (max-width: 992px) {
            .contact-hero {
              min-height: 80vh;
              background-position: center top;
            }

            .contact-title {
              font-size: 2.2rem;
            }

            .contact-subtitle {
              font-size: 1.1rem;
            }
          }

          @media (max-width: 576px) {
            .contact-hero {
              min-height: 70vh;
              background-position: top center;
              background-size: cover;
            }

            .contact-title {
              font-size: 1.8rem;
            }

            .contact-subtitle {
              font-size: 1rem;
              padding: 0 1rem;
            }
          }
        `}
      </style>

      <div className="contact-hero">
        <Container>
          <h1 className="contact-title">Get in Touch</h1>
          <p className="contact-subtitle">
            Thanks for your interest in <strong>Nextmetaforce</strong>.<br />
            Let us connect over phone or email and we’ll link you with the right
            person.
          </p>
        </Container>
      </div>
    </>
  );
}
