import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import image1 from "../assets/1.webp";
import image2 from "../assets/2.webp";
import image3 from "../assets/3.webp";
import image4 from "../assets/4.webp";

const services = [
  {
    id: 1,
    title: "Digital Transformation",
    description:
      "We build fast, scalable, and responsive web applications tailored to your business needs.",
    image: image1,
  },
  {
    id: 2,
    title: "Software Development",
    description:
      "We create intuitive and powerful mobile applications for iOS and Android platforms.",
    image: image3,
  },
  {
    id: 3,
    title: "IT Consulting & Recruitment",
    description:
      "Our designs focus on user-centric experiences that are both beautiful and functional.",
    image: image2,
  },
  {
    id: 4,
    title: "Artificial Intelligence",
    description:
      "We provide expert advice and solutions to help you optimize your technology infrastructure.",
    image: image4,
  },
];

function ServiceCards() {
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleCardClick = (id) => {
    setHoveredCard(hoveredCard === id ? null : id);
  };

  return (
    <>
      <style>
        {`
          .services-container {
            padding: 50px 0;
            text-align: center;
          }

          .services-heading {
            font-weight: 600;
            font-size: 1.5rem;
            margin-bottom: 10px;
            position: relative;
            display: inline-block;
          }

          /* Blue underline */
          .services-heading::after {
            content: "";
            display: block;
            width: 80px;
            height: 4px;
            background: linear-gradient(90deg, #2196f3, #007bff);
            margin: 8px auto 0 auto;
            border-radius: 2px;
            margin-bottom:10px;
          }

          .service-card-wrapper {
            margin-bottom: 30px;
          }

          .service-card {
            position: relative;
            border-radius: 15px;
            min-height: 300px;
            display: flex;
            flex-direction: column;
            justify-content: flex-end;
            padding: 25px;
            cursor: pointer;
            transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
            text-align: left;
            border: 1px solid #e0e0e0;
            background-size: cover;
            background-position: center;
            color: white; 
            overflow: hidden;
            box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
            will-change: transform, box-shadow;           
          }

          .card-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(48, 47, 47, 0.4);
            transition: background 0.3s ease-in-out;
          }

          .service-card:hover {
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
          }

          .service-card.expanded {
            min-height: 350px;
            transform: translateY(-10px);
            box-shadow: 0 15px 30px rgba(0, 0, 0, 0.3);
          }

          .service-card:hover .card-overlay,
          .service-card.expanded .card-overlay {
            background: rgba(0, 0, 0, 0.6);
          }

          .card-content {
            position: relative;
            z-index: 2;
            transition: transform 0.3s ease-in-out;
          }

          .card-content-hover {
            max-height: 0;
            opacity: 0;
            transform: translateY(20px);
            overflow: hidden;
            transition: all 0.5s ease-in-out;
          }

          .service-card:hover .card-content-hover,
          .service-card.expanded .card-content-hover {
            max-height: 200px;
            opacity: 1;
            transform: translateY(0);
          }

          .card-title {
            font-weight: bold;
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
            color: #fff !important;
          }

          .card-description {
            font-size: 1rem;
            margin-top: 5px;
          }

          .arrow-icon {
            margin-top: 10px;
            font-size: 1.25rem;
            color: #fff;
            transition: transform 0.3s ease-in-out;
          }

          .service-card:hover .arrow-icon,
          .service-card.expanded .arrow-icon {
            transform: translateX(5px);
          }
        `}
      </style>

      <Container className="services-container">
        <h2 className="services-heading">Our Services</h2>
        <Row>
          {services.map((service) => (
            <Col
              key={service.id}
              lg={3}
              md={6}
              sm={12}
              className="service-card-wrapper"
            >
              <div
                className={`service-card ${
                  hoveredCard === service.id ? "expanded" : ""
                }`}
                style={{ backgroundImage: `url(${service.image})` }}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => handleCardClick(service.id)}
              >
                <div className="card-overlay"></div>
                <div className="card-content">
                  <h3 className="card-title">{service.title}</h3>
                  <div className="card-content-hover">
                    <p className="card-description">{service.description}</p>
                    <i className="fa-solid fa-arrow-right arrow-icon"></i>
                  </div>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default ServiceCards;
