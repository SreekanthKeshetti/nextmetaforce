import React from "react";
import { Container, Carousel, Row, Col, Card } from "react-bootstrap";
// import salesForce from "../assets/salesForce.webp";
// import microsoftAzure from "../assets/Azure.webp";
// import oracle from "../assets/oracle.webp";
// import microSoftDyamincs from "../assets/Dynamicsimages.webp";
// import Aws from "../assets/AWS1.webp";
// import Devops from "../assets/Devops1.webp";

const salesForce =
  "https://res.cloudinary.com/dgysfehjv/image/upload/v1763617567/salesForce_clr1q6.webp";
const microsoftAzure =
  "https://res.cloudinary.com/dgysfehjv/image/upload/v1763617502/Azure_fzzxhf.webp";
const Devops =
  "https://res.cloudinary.com/dgysfehjv/image/upload/v1763617508/Devops1_ipkpms.webp";
const oracle =
  "https://res.cloudinary.com/dgysfehjv/image/upload/v1763617556/oracle_a41lsx.webp";
const microSoftDyamincs =
  "https://res.cloudinary.com/dgysfehjv/image/upload/v1763617509/Dynamicsimages_jdd8h9.webp";
const Aws =
  "https://res.cloudinary.com/dgysfehjv/image/upload/v1763617501/AWS1_lsqwys.webp";
const services = [
  {
    id: 1,
    title: "SalesForce",
    description:
      "Building fast, responsive, and modern websites for your business.",
    image: salesForce,
  },
  {
    id: 2,
    title: "Microsoft Azure",
    description:
      "Crafting intuitive and powerful mobile applications for iOS and Android.",
    image: microsoftAzure,
  },
  {
    id: 3,
    title: "DevOps",
    description:
      "Designing beautiful and user-friendly interfaces that convert visitors to customers.",
    image: Devops,
  },
  {
    id: 4,
    title: "Oracle",
    description:
      "Creating and executing data-driven strategies to grow your online presence.",
    image: oracle,
  },
  {
    id: 5,
    title: "Microsoft Dynamics",
    description: "Helping businesses integrate smart ERP and CRM solutions.",
    image: microSoftDyamincs,
  },
  {
    id: 6,
    title: "AWS",
    description: "Cloud infrastructure services tailored for your business.",
    image: Aws,
  },
];

// Split services into groups of 3 per slide
const chunkArray = (array, size) =>
  array.reduce((acc, _, i) => {
    if (i % size === 0) acc.push(array.slice(i, i + size));
    return acc;
  }, []);

function ServicesCarousel() {
  const groupedServices = chunkArray(services, 3);

  return (
    <>
      <Container className="carousel-container services-carousel-section">
        <h2 className="carousel-heading">
          <span>Industry Leading </span>
          <span className="gradient-text">Digital Platforms</span>
        </h2>
        <div className="carousel-underline"></div>

        <Carousel
          interval={4000}
          controls
          indicators
          className="custom-carousel"
        >
          {groupedServices.map((group, idx) => (
            <Carousel.Item key={idx}>
              <Row className="justify-content-center">
                {group.map((service) => (
                  <Col md={4} sm={6} xs={12} key={service.id} className="mb-4">
                    <Card className="service-card h-100">
                      <Card.Img
                        variant="top"
                        src={service.image}
                        alt={service.title}
                      />
                      <Card.Body>
                        <Card.Title>{service.title}</Card.Title>
                        <Card.Text>{service.description}</Card.Text>
                      </Card.Body>
                    </Card>
                  </Col>
                ))}
              </Row>
            </Carousel.Item>
          ))}
        </Carousel>
      </Container>

      <style jsx="true">{`
        /* Scoped to carousel section only */
        .services-carousel-section {
          // Removing the padding to remove the extra space between the components
          // padding: 60px 20px;
          text-align: center;
        }

        .services-carousel-section .carousel-heading {
          font-family: "Montserrat", sans-serif;
          font-weight: 600;
          font-size: 1.5rem;
          margin-bottom: 10px;
          display: inline-block;
          position: relative;
        }

        .services-carousel-section .carousel-underline {
          width: 80px;
          height: 4px;
          background: linear-gradient(90deg, #2196f3, #007bff);
          margin: 0 auto 30px auto;
          border-radius: 2px;
        }

        .services-carousel-section .gradient-text {
          background: linear-gradient(90deg, #2196f3, #007bff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .services-carousel-section .service-card {
          border: none;
          border-radius: 12px;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.1);
          transition: transform 0.3s ease, box-shadow 0.3s ease;
          height: 100%;
          cursor: pointer;
        }

        .services-carousel-section .service-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.2);
        }

        .services-carousel-section .service-card img {
          height: 200px;
          object-fit: cover;
          border-top-left-radius: 12px;
          border-top-right-radius: 12px;
        }

        .services-carousel-section .service-card .card-body {
          // background: #fff;
          // color: #333;
          border-bottom-left-radius: 12px;
          border-bottom-right-radius: 12px;
          padding: 15px;
        }

        .services-carousel-section .service-card .card-title {
          font-size: 1.2rem;
          font-weight: 600;
          // color: #222; /* scoped only to this carousel */
        }

        .services-carousel-section .service-card .card-text {
          font-size: 0.95rem;
          // color: #555;
        }

        .services-carousel-section .carousel-indicators [data-bs-target] {
          background-color: #333;
        }

        @media (max-width: 768px) {
          .services-carousel-section .carousel-heading {
            font-size: 1.8rem;
          }
        }
      `}</style>
    </>
  );
}

export default ServicesCarousel;
