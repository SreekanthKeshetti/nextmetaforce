import React, { useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const locations = [
  {
    country: "India",
    address: "316 Gowra Palladium, Hitech City, Hyderabad, Telangana 500081",
    phone: "+91 7093693648",
    email: "info@nextmetaforce.com",
    flag: "https://flagcdn.com/w40/in.png",
    coords: { top: "52%", left: "70%" },
  },
  {
    country: "USA",
    address: "5945 State Bridge Rd, Duluth, GA 30097",
    phone: "",
    email: "info@nextmetaforce.com",
    flag: "https://flagcdn.com/w40/us.png",
    coords: { top: "40%", left: "22%" },
  },
  {
    country: "Australia",
    address: `Unit 37, 23-33 Napier St
Parramatta 2150`,
    phone: "",
    email: "info@nextmetaforce.com",
    flag: "https://flagcdn.com/w40/au.png",
    coords: { top: "75%", left: "82%" },
  },
];

const Locations = () => {
  const [active, setActive] = useState(null);

  return (
    <>
      <style>{`
      /* ===============================
         World Map Section
         =============================== */
      .world-map-container {
        position: relative;
        width: 100%;
        max-width: 900px;
        margin: 0 auto;
        background-color: var(--bg-worldmap); /* <- uses theme variable */
        border-radius: 12px;
        padding: 12px;
        transition: background-color 0.35s ease;
      }

      .world-map {
        width: 100%;
        border-radius: 12px;
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.2);
        background-color: #fff;
        filter: none !important;
        mix-blend-mode: normal !important;
      }

      /* Optional glow in dark mode */
      html[data-theme="dark"] .world-map-container {
        box-shadow: 0 0 20px rgba(255, 255, 255, 0.05);
      }

      /* ===============================
         Global Presence Heading Underline
         =============================== */
      .global-presence-heading {
        position: relative;
        display: inline-block;
      }

      .global-presence-heading::after {
        content: '';
        display: block;
        width: 60px;
        height: 4px;
        background: linear-gradient(90deg, #2196f3, #007bff);
        border-radius: 2px;
        margin-top: 6px;
        margin-left: auto;
        margin-right: auto;
      }

      /* ===============================
         Find Us on the Map Heading Underline
         =============================== */
      .find-us-heading {
        position: relative;
        display: inline-block;
      }

      .find-us-heading::after {
        content: '';
        display: block;
        width: 60px;
        height: 4px;
        background: linear-gradient(90deg, #2196f3, #007bff);
        border-radius: 2px;
        margin-top: 6px;
        margin-left: auto;
        margin-right: auto;
      }

      /* ===============================
         Map Markers
         =============================== */
      .map-marker {
        position: absolute;
        transform: translate(-50%, -100%);
        text-align: center;
        cursor: pointer;
        transition: transform 0.2s ease;
      }

      .map-marker:hover {
        transform: translate(-50%, -110%) scale(1.1);
      }

      .marker-icon {
        font-size: 1.6rem;
        color: #e63946; /* red marker color */
        animation: bounce 1.5s infinite;
      }

      .marker-label {
        display: block;
        font-size: 0.85rem;
        font-weight: 600;
        color: var(--nmf-text);
        margin-top: 4px;
        background: var(--nmf-surface);
        padding: 2px 6px;
        border-radius: 6px;
        box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
        white-space: nowrap;
      }

      /* ===============================
         Bounce Animation for Markers
         =============================== */
      @keyframes bounce {
        0%, 100% {
          transform: translate(-50%, -100%) scale(1);
        }
        50% {
          transform: translate(-50%, -120%) scale(1.1);
        }
      }

      /* ===============================
         Highlight Active Card
         =============================== */
      .highlight-card {
        border: 2px solid var(--nmf-primary) !important;
        box-shadow: 0 0 15px rgba(13, 110, 253, 0.5) !important;
        transform: translateY(-5px);
        transition: all 0.3s ease;
      }
      `}</style>

      <section className="py-5">
        <Container>
          <div className="text-center">
            <h2 className="mb-4 global-presence-heading">
              Our Global Presence
            </h2>
          </div>

          {/* Office Cards */}
          <Row className="g-4 mb-5">
            {locations.map((loc, index) => (
              <Col md={4} sm={12} key={index}>
                <Card
                  className={`h-100 shadow-sm border-0 rounded-3 ${
                    active === index ? "highlight-card" : ""
                  }`}
                >
                  <Card.Body className="text-center">
                    {/* <div className="fs-1 mb-2">{loc.flag}</div> */}
                    <img
                      src={loc.flag}
                      alt={`${loc.country} flag`}
                      width="24"
                      height="18"
                      style={{ borderRadius: "3px" }}
                    />
                    <Card.Title className="fw-bold">{loc.country}</Card.Title>
                    {/* <Card.Text> */}
                    {/* Replaced the Card.text tag with div.cardText to get rid of hydration error */}
                    <div className="card-text">
                      <p className="mb-1">{loc.address}</p>
                      {/* <p className="mb-1">
                        <FaPhoneAlt className="me-2 text-primary" />
                        {loc.phone}
                      </p> */}
                      {loc.phone && (
                        <p className="mb-1">
                          <FaPhoneAlt className="me-2 text-primary" />
                          {loc.phone}
                        </p>
                      )}
                      <p className="mb-0">
                        <FaEnvelope className="me-2 text-danger" />
                        {loc.email}
                      </p>
                      {/* </Card.Text> */}
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>

          {/* World Map */}
          <div className="text-center">
            <h3 className="mb-3 find-us-heading">Find Us on the Map</h3>
          </div>
          <div className="world-map-container">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
              alt="World Map"
              className="world-map"
            />
            {locations.map((loc, index) => (
              <div
                key={index}
                className="map-marker"
                style={{
                  top: loc.coords.top,
                  left: loc.coords.left,
                }}
                onClick={() => setActive(index)}
              >
                <FaMapMarkerAlt className="marker-icon" />
                <span className="marker-label">{loc.country}</span>
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
};

export default Locations;
