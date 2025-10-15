import React from "react";

function Values() {
  const valuesData = [
    {
      id: 1,
      image: "https://placehold.co/600x1200/041d36/FFFFFF?text=Innovation",
      heading: "Innovation",
      text: "We constantly explore new technologies and creative solutions to stay ahead.",
    },
    {
      id: 2,
      image: "https://placehold.co/600x1200/082747/FFFFFF?text=Integrity",
      heading: "Integrity",
      text: "Our business is built on a foundation of trust, transparency, and ethical conduct.",
    },
    {
      id: 3,
      image: "https://placehold.co/600x1200/0c3258/FFFFFF?text=Excellence",
      heading: "Excellence",
      text: "We are committed to delivering the highest quality in every project we undertake.",
    },
    {
      id: 4,
      image: "https://placehold.co/600x1200/041d36/FFFFFF?text=Collaboration",
      heading: "Collaboration",
      text: "We believe in the power of teamwork, working closely with clients to achieve goals.",
    },
    {
      id: 5,
      image: "https://placehold.co/600x1200/082747/FFFFFF?text=Customer+Focus",
      heading: "Customer Focus",
      text: "Your success is our priority and the driving force behind every decision we make.",
    },
  ];

  return (
    <>
      {/* Custom CSS for the Values section */}
      <style>
        {`
        .values-section {
          padding: 5rem 0;
          overflow: hidden;
        }

        .values-list {
          display: flex;
          justify-content: center;
          height: 500px;
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .value-card {
          position: relative;
          overflow: hidden;
          cursor: pointer;
          flex-grow: 1;
          transition: flex-grow 0.5s ease-in-out;
        }

        .value-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .value-card:hover {
          flex-grow: 5;
        }

        .card-content {
          position: absolute;
          bottom: 2rem;
          left: 1.5rem;
          color: white;
          text-align: left;
          width: 80%;
          z-index: 10;
        }

        .card-content h5 {
          font-weight: bold;
          font-size: 1.5rem;
          margin-bottom: 0.5rem;
        }

        .card-content p {
          font-size: 0.9rem;
          margin-bottom: 0;
          opacity: 0;
          transition: opacity 0.5s ease-in-out;
        }

        .value-card:hover .card-content p {
          opacity: 1;
        }

        @media (max-width: 768px) {
          .values-section {
            padding: 3rem 0;
          }
          .values-list {
            flex-direction: column;
            align-items: center;
            height: auto;
          }
          .value-card {
            width: 100%;
            height: 300px;
            margin-bottom: 1rem;
            flex-grow: 1 !important; /* Disable the hover effect on mobile */
          }
          .card-content p {
            opacity: 1; /* Always show text on mobile */
          }
        }
        `}
      </style>

      <div className="container-fluid values-section">
        <h2 className="text-center fw-bold display-5 mb-5">Our Core Values</h2>

        <ul className="values-list">
          {valuesData.map((value) => (
            <li key={value.id} className="value-card">
              <img src={value.image} alt={value.heading} />
              <div className="card-content">
                <h5>{value.heading}</h5>
                <p>{value.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default Values;
