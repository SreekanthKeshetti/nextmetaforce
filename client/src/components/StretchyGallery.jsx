import React, { useState } from "react";
import { Link } from "react-router-dom";
// import retailImg from "../assets/retail1.webp";
// import finImg from "../assets/fin2.webp";
// import manfacImg from "../assets/Factory.webp";
// import hospitalImg from "../assets/hospital1.webp";
// import fashImg from "../assets/fashionImage.webp";
// import logImg from "../assets/log1.webp";

const retailImg =
  "https://res.cloudinary.com/dgysfehjv/image/upload/v1763617566/retail1_jobibk.webp";
const finImg =
  "https://res.cloudinary.com/dgysfehjv/image/upload/v1763617514/fin2_q2sqsr.webp";
const manfacImg =
  "https://res.cloudinary.com/dgysfehjv/image/upload/v1763617552/Factory_gmibvz.webp";
const hospitalImg =
  "https://res.cloudinary.com/dgysfehjv/image/upload/v1763617524/hospital1_mvryon.webp";
const fashImg =
  "https://res.cloudinary.com/dgysfehjv/image/upload/v1763617511/fashionImage_b0y281.webp";
const logImg =
  "https://res.cloudinary.com/dgysfehjv/image/upload/v1763617584/log1_ajxfqx.webp";
const images = [
  {
    src: retailImg,
    title: "Retail & Consumer Goods",
    text: "Delivering seamless, intelligent, and personalized shopping experiences that drive loyalty and delight customers globally.",
  },
  {
    src: finImg,
    title: "Financial Services",
    text: "Empowering financial institutions with secure, AI-powered solutions that enhance trust, efficiency, and customer engagement.",
  },
  {
    src: manfacImg,
    title: "Manufacturing",
    text: "Simplifying complex industrial processes with smart, scalable technologies that optimize output and operational performance.",
  },
  {
    src: hospitalImg,
    title: "Healthcare",
    text: "Enabling patient-first, data-driven care solutions that empower better outcomes, healing, and healthcare system efficiency.",
  },
  {
    src: fashImg,
    title: "Fashion & Apparel",
    text: "Fusing creativity with cutting-edge technology to help fashion brands captivate, connect, and scale globally.",
  },
  {
    src: logImg,
    title: "Logistics & Transport",
    text: "Streamlining logistics operations with tech-driven, agile solutions that ensure speed, visibility, and seamless delivery outcomes.",
  },
];

export default function StretchGallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleActivate = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <style>
        {`
        /* === Stretchy Gallery Section === */
        .stretchy-gallery-container {
          // background: linear-gradient(to bottom, #f4f8ff, #ffffff);
          // padding: 4rem 0;
        }

        /* Gallery header */
        .gallery-header {
          text-align: center;
          margin-bottom: 3rem;
          padding: 0 1rem;
        }

        .gallery-header h3 {
          font-size: 1.1rem;
          // color: #333;
          margin-bottom: 0.5rem;
        }

        .gallery-header .underline {
          display: block;
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #009dff, #0055ff);
          border-radius: 2px;
          margin: 0.5rem auto 1rem auto;
          transition: width 0.3s ease;
        }

        .gallery-header h2 {
          font-size: 1.5rem;
          // color: #1a1a1a;
          margin-bottom: 1rem;
        }

        .gallery-header p {
          font-size: 1.1rem;
          // color: #555;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }

        /* Gallery flex container */
        .stretchy-gallery {
          display: flex;
          height: 500px;
          max-width: 1200px;
          margin: 0 auto;
          overflow: hidden;
        }

        /* Gallery item */
        .gallery-item {
          position: relative;
          flex: 1;
          min-width: 100px;
          cursor: pointer;
          transition: all 0.5s ease-in-out;
        }

        .gallery-item.active {
          flex: 3;
        }

        /* Image styling with hover scale and shadow */
        .gallery-item img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          border-radius: 12px;
          transition: transform 0.5s ease, box-shadow 0.5s ease;
        }

        .gallery-item:hover img {
          transform: scale(1.05);
          box-shadow: 0 15px 35px rgba(0, 93, 255, 0.25);
        }

        /* Overlay content */
        .overlay {
          position: absolute;
          bottom: 0;
          width: 100%;
          padding: 1rem;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);
          color: white;
          border-radius: 0 0 12px 12px;
          transition: background 0.3s ease;
        }

         .gallery-item:hover .overlay {
          // background: linear-gradient(to top, rgba(81, 183, 246, 0.7), transparent);
          background:linear-gradient(to top, rgba(0, 0, 0, 0.6), rgba(255, 255, 255, 0.15));
       }

        .overlay h2 {
          font-size: 1.2rem;
          margin: 0;
          font-weight: 600;
        }

        .overlay p {
          opacity: 0;
          max-height: 0;
          overflow: hidden;
          transform: translateY(10px);
          transition: all 0.4s ease;
          font-size: 0.95rem;
          margin-top: 0.5rem;
        }

        .overlay p.show {
          opacity: 1;
          max-height: 150px;
          transform: translateY(0);
        }

        /* Talk to Our Experts Button */
        .talk-experts-button-container {
          text-align: center;
          margin-top: 3rem;
        }

        .talk-experts-button {
          // background: #f8f8f8;
          // color: #333;
          // border: 1.5px solid #333;
          // padding: 14px 28px;
          // font-size: 1.15rem;
          // cursor: pointer;
          // transition: all 0.3s ease;
          // text-decoration: none;
          // display: inline-block;
          // border-radius: 6px;
          // font-weight: 500;
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

        .talk-experts-button:hover {
          // background-color: black !important;
          // color: white;
          // border-color: black;
          // box-shadow: 0 5px 20px rgba(0, 157, 255, 0.5);
                    background-color: #ff6a00;
          color: white !important;
          border-color: #ff6a00;

        }

        /* Responsive adjustments */
        @media (max-width: 992px) {
          .stretchy-gallery {
            flex-direction: column;
            height: auto;
          }

          .gallery-item {
            flex: none;
            width: 100%;
            height: 250px;
            margin-bottom: 1rem;
          }

          .gallery-item.active {
            height: 350px;
          }
        }
        `}
      </style>

      <div className="stretchy-gallery-container">
        {/* Header */}
        <div className="gallery-header">
          <h3>Key Industries</h3>
          <span className="underline"></span>
          <h2>Industries We Serve</h2>
          <p>
            Empowering diverse industries with innovative digital solutions and
            strategic consulting for accelerated growth.
          </p>
        </div>

        {/* Gallery */}
        <div className="stretchy-gallery">
          {images.map((img, index) => (
            <div
              key={index}
              className={`gallery-item ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => handleActivate(index)}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <img src={img.src} alt={img.title} />
              <div className="overlay">
                <h2>{img.title}</h2>
                <p className={activeIndex === index ? "show" : ""}>
                  {img.text}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="talk-experts-button-container">
          <Link to="/contact" className="talk-experts-button">
            Talk to Our Experts
          </Link>
        </div>
      </div>
    </>
  );
}
