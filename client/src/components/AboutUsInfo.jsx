import React from "react";
import commitment from "../assets/commitment1.jpg";

const AboutUsInfo = () => {
  return (
    <>
      <style>
        {`
        /* === About Us Section === */
        .aboutus-section {
          //  background: linear-gradient(135deg, #f4f8ff 0%, #ffffff 100%);
          background:var(--bg-NewForm);
          border-radius:5px;
          box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
          

        }

        /* Glassmorphic text container */
        .aboutus-content {
          background: rgba(255, 255, 255, 0.08);
          backdrop-filter: blur(12px);
          border-radius: 20px;
          padding: 3rem 2rem;
          box-shadow: 0 30px 35px rgba(141, 178, 242, 0.15);
          transition: transform 0.4s ease, box-shadow 0.4s ease;
        }

        .aboutus-content:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(0, 93, 255, 0.25);
        }

        /* Heading with underline */
        .aboutus-heading {
          font-size: 1.2rem;
          font-weight: 600;
          // color: #0a0a0a;
          margin-bottom: 1.5rem;
          position: relative;
          display: block;
        }

        .aboutus-heading::after {
  content: "";
  position: absolute;
  bottom: -6px;
  left: 40%;
  transform: translateX(-160%);
  width: 80px;
  height: 4px;
  border-radius: 2px;
  background: linear-gradient(90deg, #009dff, #0055ff);
  z-index: 2;
}


        .aboutus-text {
          // color: #333;
          font-size: 1.05rem;
          line-height: 1.8;
          margin-bottom: 1.5rem;
        }

        /* Black button */
        .custom-black-btn {
          font-size: 1rem;
          background-color: #000;
          border: 1px solid #000;
          color: #fff;
          border-radius: 5px;
          padding: 12px 25px;
          font-weight: 500;
          letter-spacing: 0.5px;
          transition: all 0.3s ease;
        }

        .custom-black-btn:hover {
          background-color: #fff;
          color: #000;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
          border:1px solid black;
        }

        /* Image styling */
        .aboutus-image {
          border-radius: 20px;
          transition: transform 0.5s ease, box-shadow 0.5s ease;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }

        .aboutus-image:hover {
          transform: scale(1.03);
          box-shadow: 0 15px 35px rgba(0, 93, 255, 0.35);
        }

        @media (max-width: 768px) {
          .aboutus-heading {
            font-size: 2rem;
          }
        }
        `}
      </style>

      <div className="container aboutus-section">
        <div className="row align-items-center g-5">
          {/* Left Column: Text */}
          <div className="col-lg-6">
            <div className="aboutus-content">
              <h2 className="aboutus-heading">Our Commitment To Excellence</h2>
              <p className="aboutus-text">
                We are a leading IT company specializing in innovative solutions
                that drive business growth and efficiency. Our team of experts
                is dedicated to providing cutting-edge technology services—from
                cloud computing to custom software development—ensuring our
                clients stay ahead in a rapidly evolving digital world.
              </p>
              <p className="aboutus-text">
                At the heart of our work is a commitment to quality and client
                satisfaction. We believe in building long-term partnerships by
                understanding your unique challenges and delivering tailored
                solutions that exceed expectations. Your success is our ultimate
                goal.
              </p>
              <button type="button" className="btn custom-black-btn">
                Contact Us
              </button>
            </div>
          </div>

          {/* Right Column: Image */}
          <div className="col-lg-6 text-center">
            <img
              src={commitment}
              className="img-fluid aboutus-image"
              alt="Commitment to excellence"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsInfo;
