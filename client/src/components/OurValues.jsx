import React, { useState } from "react";
import forwardImg from "../assets/Thinkingforward.jpg";
import integrity from "../assets/Integrity.jpg";
import clientImg from "../assets/ClientCentric.avif";
import peopleImg from "../assets/Meeting.jpg";
import teamworkImg from "../assets/Teamwork.avif";
import { Link } from "react-router-dom";

const values = [
  {
    src: forwardImg,
    title: "Forward Thinking",
    text: "We embrace innovation and anticipate change to stay ahead in a fast-evolving world.",
  },
  {
    src: integrity,
    title: "Integrity",
    text: "We act with honesty, transparency, and accountability in all we do.",
  },
  {
    src: clientImg,
    title: "Client–Centric",
    text: "Our clients’ success drives every decision and every solution we create.",
  },
  {
    src: peopleImg,
    title: "People First",
    text: "We value, empower, and nurture our people to reach their full potential.",
  },
  {
    src: teamworkImg,
    title: "Teamwork",
    text: "Collaboration and trust fuel our shared success and collective growth.",
  },
];

export default function ValuesGallery() {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleActivate = (index) => {
    setActiveIndex(index === activeIndex ? null : index);
  };

  return (
    <>
      <style>
        {`
        .stretchy-gallery-container {
          padding: 4rem 0;
        }
        .gallery-header {
          text-align: center;
          margin-bottom: 3rem;
        }
        .gallery-header h3 {
          font-size: 1.1rem;
          color: #333;
          margin-bottom: 0.5rem;
        }
        .gallery-header .underline {
          display: block;
          width: 60px;
          height: 4px;
          background: linear-gradient(90deg, #009dff, #0055ff);
          border-radius: 2px;
          margin: 0.5rem auto 1rem auto;
        }
        .gallery-header h2 {
          font-size: 1.5rem;
          color: #1a1a1a;
          margin-bottom: 1rem;
        }
        .gallery-header p {
          font-size: 1.1rem;
          color: #555;
          max-width: 800px;
          margin: 0 auto;
          line-height: 1.6;
        }
        .stretchy-gallery {
          display: flex;
          height: 450px;
          max-width: 1100px;
          margin: 0 auto;
          overflow: hidden;
        }
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
        .overlay {
          position: absolute;
          bottom: 0;
          width: 100%;
          padding: 1rem;
          background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
          color: white;
          border-radius: 0 0 12px 12px;
          transition: background 0.3s ease;
        }
        .gallery-item:hover .overlay {
          // background: linear-gradient(to top, rgba(0, 157, 255, 0.7), transparent);
          background: linear-gradient(to top, rgba(0, 0, 0, 0.6), transparent);

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
        <div className="gallery-header">
          <h3>Our Core Values</h3>
          <span className="underline"></span>
          <h2>What Drives Us</h2>
          <p>
            These values define who we are, how we work, and what drives our
            passion to innovate and deliver impact every day.
          </p>
        </div>

        <div className="stretchy-gallery">
          {values.map((val, index) => (
            <div
              key={index}
              className={`gallery-item ${
                activeIndex === index ? "active" : ""
              }`}
              onClick={() => handleActivate(index)}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <img src={val.src} alt={val.title} />
              <div className="overlay">
                <h2>{val.title}</h2>
                <p className={activeIndex === index ? "show" : ""}>
                  {val.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
