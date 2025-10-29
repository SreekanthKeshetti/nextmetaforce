import React, { useRef } from "react";
import Slider from "react-slick";
import { Container, Row, Col } from "react-bootstrap";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import healthServiceImg from "../assets/healthService.jpg";
import financeServiceImg from "../assets/finService.jpg";
import logisticServiceImg from "../assets/logisticService.jpg";
import manfacServiceImg from "../assets/manfacService.jpg";
import retailServiceImg from "../assets/retailService.jpg";

const stories = [
  {
    title: "Financial Services Transformation",
    text: "Helping banks and financial institutions enhance customer experiences.",
    image: financeServiceImg,
  },
  {
    title: "Healthcare Innovation",
    text: "Transforming healthcare delivery with digital solutions.",
    image: healthServiceImg,
  },
  {
    title: "Retail & Consumer Goods",
    text: "Optimizing retail operations for enhanced customer engagement.",
    image: retailServiceImg,
  },
  {
    title: "Manufacturing Excellence",
    text: "Driving efficiency and innovation in manufacturing.",
    image: manfacServiceImg,
  },
  {
    title: "Logistics & Supply Chain",
    text: "Streamlining logistics for global operations.",
    image: logisticServiceImg,
  },
];

export default function Industries() {
  const sliderRef = useRef(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: false,
    responsive: [
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  const next = () => sliderRef.current.slickNext();
  const prev = () => sliderRef.current.slickPrev();

  return (
    <>
      <style>{`
        .customer-carousel {
          // background: linear-gradient(to right, #64b5f6, #3949ab);
          background-color: #dedbdbff;
          padding: 60px 0;
        }

        .customer-carousel h2 {
          font-size: 1.85rem;
          // color: #fff;
          margin: 0;
          text-align: center;
          position: relative;
          display: inline-block;
        }


        .arrow-btn {
          background: #fff;
          color: #0071ce;
          border: none;
          font-size: 1.5rem;
          width: 40px;
          height: 40px;
          border-radius: 50%;
          cursor: pointer;
          transition: background 0.3s, color 0.3s;
        }

        .arrow-btn:hover {
          background: #005bb5;
          color: #fff;
        }

        .story-card-wrapper {
          outline: none;
        }

        .story-card {
          position: relative;
          border-radius: 12px;
          overflow: hidden;
          background: #fff;
          cursor: pointer;
        }

        .story-card img {
          width: 100%;
          height: 250px;
          object-fit: cover;
          display: block;
          transition: transform 0.3s ease;
        }

        .story-info {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          padding: 40px;
          color: #fff;
           background: rgba(0,0,0,0);
          transform: translateY(100%);
          transition: transform 0.5s ease, background 0.5s ease;
          z-index: 2;
        }

        .story-info h5 {
          font-size: 1.2rem;
          margin-bottom: 10px;
        }

        .story-info p {
          font-size: 0.95rem;
          margin: 0;
        }

        .story-card:hover .story-info {
          transform: translateY(0);
          background: rgba(145, 177, 240, 0.68);
        }
      `}</style>

      <section className="customer-carousel py-5">
        <Container>
          <Row className="align-items-center mb-4">
            <Col>
              <h2 className="fw-bold">Customer Stories and Insights</h2>
            </Col>
            <Col className="text-end">
              <button className="arrow-btn me-2" onClick={prev}>
                &lt;
              </button>
              <button className="arrow-btn" onClick={next}>
                &gt;
              </button>
            </Col>
          </Row>
          <Slider ref={sliderRef} {...settings}>
            {stories.map((story, idx) => (
              <div key={idx} className="story-card-wrapper px-2">
                <div className="story-card">
                  <img
                    src={story.image}
                    alt={story.title}
                    className="img-fluid"
                    loading="lazy" /* lazy loading */
                    width="400" /* helps faster layout paint */
                    height="250"
                  />
                  <div className="story-info">
                    <h5>{story.title}</h5>
                    <p>{story.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </Container>
      </section>
    </>
  );
}
