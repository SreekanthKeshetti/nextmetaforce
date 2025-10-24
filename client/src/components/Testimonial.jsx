import React from "react";

const Testimonials = () => {
  const testimonialsData = [
    {
      id: 1,
      quote:
        "Our company's digital transformation has been a seamless and successful journey, thanks to their dedicated team. They truly understand our needs and deliver beyond expectations.",
      author: "Jane Doe",
      title: "CEO",
      company: "InnovateTech Solutions",
      image: "https://placehold.co/100x100/525252/FFF?text=JD",
    },
    {
      id: 2,
      quote:
        "The team's technical expertise and quick response to our queries made our partnership a true pleasure. We highly recommend their services to anyone looking for reliable IT solutions.",
      author: "John Smith",
      title: "Director of Operations",
      company: "Global Innovations Inc.",
      image: "https://placehold.co/100x100/525252/FFF?text=JS",
    },
    {
      id: 3,
      quote:
        "Working with them has been a game-changer for our business. Their innovative approach and commitment to quality have significantly improved our operational efficiency.",
      author: "Emily White",
      title: "Lead Developer",
      company: "FutureWeb Co.",
      image: "https://placehold.co/100x100/525252/FFF?text=EW",
    },
    {
      id: 4,
      quote:
        "They provided a solution that was not only robust but also perfectly tailored to our specific business challenges. The results were immediate and impactful.",
      author: "David Lee",
      title: "CTO",
      company: "NextGen Systems",
      image: "https://placehold.co/100x100/525252/FFF?text=DL",
    },
    {
      id: 5,
      quote:
        "An outstanding partner! Their support throughout the project lifecycle was invaluable, and the final product exceeded all our expectations.",
      author: "Sarah Jones",
      title: "Product Manager",
      company: "Apex Dynamics",
      image: "https://placehold.co/100x100/525252/FFF?text=SJ",
    },
  ];

  const animatedTestimonials = [
    ...testimonialsData,
    ...testimonialsData,
    ...testimonialsData,
  ];

  return (
    <>
      <style>
        {`
          body {
            // background-color: #f8f9fa;
          }
          .testimonials-section {
            padding: 5rem 0;
            // background-color: #f8f9fa;
          }

          // /* Heading underline */
          // .testimonials-section h2 {
          //   position: relative;
          //   display: inline-block;
          //   margin-bottom: 3rem;
          // }
          // .testimonials-section h2::after {
          //   content: "";
          //   position: absolute;
          //   bottom: -10px;
          //   left: 50%;
          //   transform: translateX(-50%);
          //   width: 80px;
          //   height: 4px;
          //   border-radius: 2px;
          //   background: linear-gradient(90deg, #009dff, #0055ff);
          // }
          /* Heading underline and center alignment */
.testimonials-section h2 {
font-size:1.5rem;
font-weight:500;
  position: relative;
  display: inline-block;
  margin: 0 auto 3rem auto; /* center the heading */
  text-align: center;       /* ensure text is centered */
  left:50%; 
  transform: translateX(-50%);
}
   /* Above left 30% will also make center but making use of trnaform is a modern way. */
.testimonials-section h2::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 4px;
  border-radius: 2px;
  background: linear-gradient(90deg, #009dff, #0055ff);
}


          .testimonials-carousel {
            overflow: hidden;
          }
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(calc(-350px * ${
                testimonialsData.length
              } - 1.5rem * ${testimonialsData.length}));
            }
          }
          .carousel-wrapper {
            display: flex;
            gap: 1.5rem;
            animation: scroll 60s linear infinite;
            width: calc(350px * ${animatedTestimonials.length} + 1.5rem * ${
          animatedTestimonials.length - 1
        });
          }
          .testimonial-card {
            background-color: rgba(255, 255, 255, 0.4);
            border: 1px solid rgba(255, 255, 255, 0.2);
            backdrop-filter: blur(10px);
            border-radius: 1rem;
            padding: 2rem;
            flex-shrink: 0;
            width: 350px;
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
          }
          .testimonial-image {
            width: 80px;
            height: 80px;
            border-radius: 50%;
            object-fit: cover;
            margin-bottom: 1rem;
          }
          .testimonial-text {
            font-style: italic;
            font-size: 1rem;
            margin-bottom: 1rem;
          }
          .testimonial-author {
            font-weight: bold;
            font-size: 1.1rem;
            margin-bottom: 0.25rem;
          }
          .testimonial-title {
            color: #6c757d;
            font-size: 0.9rem;
          }
          @media (max-width: 768px) {
            .carousel-wrapper {
              animation: none;
              flex-direction: column;
              width: 100%;
            }
            .testimonial-card {
              width: 100%;
              transform: scale(1);
              opacity: 1;
              box-shadow: none;
            }
            .testimonials-carousel {
              overflow: visible;
            }
          }
        `}
      </style>

      <div className="container testimonials-section">
        <h2 className="text-center  mb-5">What Our Clients Say</h2>
        <div className="testimonials-carousel">
          <div className="carousel-wrapper">
            {animatedTestimonials.map((testimonial, index) => (
              <div
                key={`${testimonial.id}-${index}`}
                className="testimonial-card"
              >
                <img
                  src={testimonial.image}
                  alt={testimonial.author}
                  className="testimonial-image"
                />
                <p className="testimonial-text">"{testimonial.quote}"</p>
                <h5 className="testimonial-author">{testimonial.author}</h5>
                <p className="testimonial-title">
                  {testimonial.title} at {testimonial.company}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
