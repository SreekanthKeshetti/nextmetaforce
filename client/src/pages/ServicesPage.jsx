// import React from "react";
// import {
//   FaDigitalTachograph,
//   FaCode,
//   FaUserTie,
//   FaCloud,
//   FaChalkboardTeacher,
//   FaCube,
// } from "react-icons/fa";
// import { useNavigate, Link } from "react-router-dom";
// import StretchyGallery from "../components/StretchyGallery";
// import TechStackCarousel from "../components/TechStackCarousel";
// import NewForm from "../components/NewForm";
// import serviceHero from "../assets/SERVICES.jpg";

// const ServicesPage = () => {
//   const navigate = useNavigate();

//   const offerings = [
//     {
//       icon: <FaDigitalTachograph style={{ color: "#f4b400" }} />,
//       title: "Digital Transformation",
//       description:
//         "Empowering organizations with Salesforce, cloud adoption, and integrated digital strategies to accelerate transformation.",
//       route: "/services/digital-transformation",
//     },
//     {
//       icon: <FaCode style={{ color: "#34a853" }} />,
//       title: "Software Development and Implementation",
//       description:
//         "From concept to deployment, we engineer scalable software solutions that transform business operations.",
//       route: "/services/software-development",
//     },
//     {
//       icon: <FaUserTie style={{ color: "#4285f4" }} />,
//       title: "IT Consulting and Recruitment",
//       description:
//         "Strategic IT consulting and specialized recruitment solutions to build the team and systems your business needs.",
//       route: "/services/it-consulting",
//     },
//     {
//       icon: <FaCloud style={{ color: "#00bcd4" }} />,
//       title: "Cloud and AI",
//       description:
//         "Integrating artificial intelligence and cloud solutions to enable intelligent scaling and automation.",
//       route: "/services/cloud-ai",
//     },
//     {
//       icon: <FaChalkboardTeacher style={{ color: "#9c27b0" }} />,
//       title: "Training and Enablement",
//       description:
//         "Comprehensive training programs to upskill teams and promote digital innovation across organizations.",
//       route: "/services/training-enablement",
//     },
//     {
//       icon: <FaCube style={{ color: "#ff7043" }} />,
//       title: "Advanced Technologies – Blockchain/Web3/IoT",
//       description:
//         "Building decentralized, connected, and intelligent systems with blockchain, Web3, and IoT solutions.",
//       route: "/services/advanced-technologies",
//     },
//   ];

//   return (
//     <>
//       <style>
//         {`
//           .Business-title {
//             font-size: 2.5rem;
//           }

//           .our-title {
//             font-size: 1.6rem;
//             position: relative;
//           }

//           .our-title::after {
//             content: '';
//             display: block;
//             width: 60px;
//             height: 4px;
//             background: linear-gradient(90deg, #ff6a00, #ee0979);
//             border-radius: 2px;
//             margin: 8px auto 0;
//           }
//              .subTitle{
//           font-size: 1.25rem;
//           margin-bottom: 2rem;
//           color: #f5f4f4ff;
//           }

//           .why-grid {
//             display: grid;
//             grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
//             gap: 2rem;
//             padding: 2rem;
//           }

//           /* Glowing animated border card */
//           .why-card {
//             position: relative;
//             border-radius: 20px;
//             overflow: hidden;
//             background: #fff;
//             text-align: center;
//             padding: 2rem;
//             z-index: 1;
//             transition: transform 0.4s ease;
//             cursor: pointer;
//             min-height: 320px;
//             display: flex;
//             flex-direction: column;
//             justify-content: center;
//           }

//           .why-card::before {
//             content: "";
//             position: absolute;
//             inset: 0;
//             padding: 2px;
//             border-radius: 20px;
//             background: linear-gradient(90deg, #ff6a00, #ee0979, #00c6ff, #ff6a00);
//             background-size: 300% 300%;
//             animation: glowBorder 6s linear infinite;
//             -webkit-mask:
//               linear-gradient(#fff 0 0) content-box,
//               linear-gradient(#fff 0 0);
//             -webkit-mask-composite: xor;
//             mask-composite: exclude;
//             z-index: 0;
//           }

//           @keyframes glowBorder {
//             0% { background-position: 0% 50%; }
//             50% { background-position: 100% 50%; }
//             100% { background-position: 0% 50%; }
//           }

//           .why-card:hover {
//             transform: translateY(-8px);
//           }

//           .why-icon {
//             font-size: 2.5rem;
//             margin-bottom: 1rem;
//             transition: transform 0.3s ease;
//           }

//           .why-card:hover .why-icon {
//             transform: scale(1.1);
//           }

//           .why-heading {
//             font-size: 1.25rem;
//             font-weight: 600;
//             color: #0a0a0a;
//             margin-bottom: 0.8rem;
//             position: relative;
//             z-index: 1;
//           }

//           .why-text {
//             color: #555;
//             font-size: 1rem;
//             line-height: 1.6;
//             position: relative;
//             z-index: 1;
//           }

//           .cta-section {
//             background: linear-gradient(90deg, #009dff86, #0055ffbb);
//             padding: 60px 20px;
//             text-align: center;
//             border-radius: 12px;
//             margin: 60px 0;
//           }

//           .cta-section h2 {
//             font-size: 1.75rem;
//             font-weight: 500;
//             margin-bottom: 15px;
//             color: white;
//           }

//           .cta-section p {
//             font-size: 1.2rem;
//             margin-bottom: 30px;
//             color: white;
//             line-height: 1.5;
//           }

//           .cta-button {
//             display: inline-block;
//             padding: 14px 45px;
//             font-size: 1rem;
//             font-weight: 600;
//             color: #2563eb;
//             background: white;
//             border: none;
//             border-radius: 30px;
//             cursor: pointer;
//             transition: all 0.4s ease;
//           }

//           .cta-button:hover {
//             background: #f0f4ff;
//             color: #1e40af;
//           }

//           /* Hero section styling */
//           .hero-section {
//             position: relative;
//             background-image: url(${serviceHero});
//             background-size: cover;
//             background-position: center center;
//             background-repeat: no-repeat;
//             min-height: 90vh;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             text-align: center;
//             color: white;
//             overflow: hidden;
//           }

//           .hero-overlay {
//             position: absolute;
//             inset: 0;
//             background: rgba(0, 0, 0, 0.55);
//             z-index: 1;
//           }

//           .hero-content {
//             position: relative;
//             z-index: 2;
//             max-width: 800px;
//             padding: 0 1rem;
//           }

//           @media (max-width: 768px) {
//             .Business-title {
//               font-size: 2rem;
//             }
//             .hero-section {
//               background-position: center top;
//             }
//           }
//         `}
//       </style>

//       <div className="services-page">
//         {/* Hero Section */}
//         <div className="hero-section">
//           <div className="hero-overlay"></div>
//           <div className="hero-content">
//             <h1 className="Business-title">Business Services</h1>
//             <p className=" subTitle">
//               We provide comprehensive solutions to help your business thrive in
//               a competitive market.
//             </p>
//           </div>
//         </div>

//         {/* Offerings Section */}
//         <div className="container my-5">
//           <h2 className="text-center our-title">Our Offerings</h2>
//           <p className="text-center mt-3">
//             Empowering your organization through transformative technology and
//             strategic innovation.
//           </p>

//           <div className="why-grid">
//             {offerings.map((item, index) => (
//               <div
//                 key={index}
//                 className="why-card"
//                 onClick={() => navigate(item.route)}
//               >
//                 <div className="why-icon">{item.icon}</div>
//                 <h4 className="why-heading">{item.title}</h4>
//                 <p className="why-text">{item.description}</p>
//               </div>
//             ))}
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="cta-section">
//           <h2>Take Your Business to the Next Level</h2>
//           <p>Discover how we can transform your workflow.</p>
//           <Link to="/contact" className="cta-button">
//             Contact Us
//           </Link>
//         </div>
//       </div>

//       <StretchyGallery />
//       <TechStackCarousel />
//       <NewForm />
//     </>
//   );
// };

// export default ServicesPage;
import React from "react";
import {
  FaDigitalTachograph,
  FaCode,
  FaUserTie,
  FaCloud,
  FaChalkboardTeacher,
  FaCube,
} from "react-icons/fa";
import { useNavigate, Link } from "react-router-dom";
import StretchyGallery from "../components/StretchyGallery";
import TechStackCarousel from "../components/TechStackCarousel";
import NewForm from "../components/NewForm";
import serviceHero from "../assets/SERVICES.jpg";

const ServicesPage = () => {
  const navigate = useNavigate();

  const offerings = [
    {
      icon: <FaDigitalTachograph style={{ color: "#f4b400" }} />,
      title: "Digital Transformation",
      description:
        "Empowering organizations with Salesforce, cloud adoption, and integrated digital strategies to accelerate transformation.",
      route: "/services/digital-transformation",
    },
    {
      icon: <FaCode style={{ color: "#34a853" }} />,
      title: "Software Development and Implementation",
      description:
        "From concept to deployment, we engineer scalable software solutions that transform business operations.",
      route: "/services/software-development",
    },
    {
      icon: <FaUserTie style={{ color: "#4285f4" }} />,
      title: "IT Consulting and Recruitment",
      description:
        "Strategic IT consulting and specialized recruitment solutions to build the team and systems your business needs.",
      route: "/services/it-consulting",
    },
    {
      icon: <FaCloud style={{ color: "#00bcd4" }} />,
      title: "Cloud and AI",
      description:
        "Integrating artificial intelligence and cloud solutions to enable intelligent scaling and automation.",
      route: "/services/cloud-ai",
    },
    {
      icon: <FaChalkboardTeacher style={{ color: "#9c27b0" }} />,
      title: "Training and Enablement",
      description:
        "Comprehensive training programs to upskill teams and promote digital innovation across organizations.",
      route: "/services/training-enablement",
    },
    {
      icon: <FaCube style={{ color: "#ff7043" }} />,
      title: "Advanced Technologies – Blockchain/Web3/IoT",
      description:
        "Building decentralized, connected, and intelligent systems with blockchain, Web3, and IoT solutions.",
      route: "/services/advanced-technologies",
    },
  ];

  return (
    <>
      <style>
        {`
          .Business-title {
            font-size: 2.5rem;
          }

          .our-title {
            font-size: 1.6rem;
            position: relative;
          }

          .our-title::after {
            content: '';
            display: block;
            width: 60px;
            height: 4px;
            background: linear-gradient(90deg, #ff6a00, #ee0979);
            border-radius: 2px;
            margin: 8px auto 0;
          }
             .subTitle{
          font-size: 1.25rem;
          margin-bottom: 2rem;
          color: #f5f4f4ff;
          }
            

          .why-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            padding: 2rem;
          }

          /* Glowing animated border card */
          .why-card {
            position: relative;
            border-radius: 20px;
            overflow: hidden;
            background: #fff;
            text-align: center;
            padding: 2rem;
            z-index: 1;
            transition: transform 0.4s ease;
            cursor: pointer;
            min-height: 320px;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .why-card::before {
            content: "";
            position: absolute;
            inset: 0;
            padding: 2px;
            border-radius: 20px;
            background: linear-gradient(90deg, #ff6a00, #ee0979, #00c6ff, #ff6a00);
            background-size: 300% 300%;
            animation: glowBorder 6s linear infinite;
            -webkit-mask: 
              linear-gradient(#fff 0 0) content-box, 
              linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            z-index: 0;
          }

          @keyframes glowBorder {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
          }

          .why-card:hover {
            transform: translateY(-8px);
          }

          .why-icon {
            font-size: 2.5rem;
            margin-bottom: 1rem;
            transition: transform 0.3s ease;
          }

          .why-card:hover .why-icon {
            transform: scale(1.1);
          }

          .why-heading {
            font-size: 1.25rem;
            font-weight: 600;
            color: #0a0a0a;
            margin-bottom: 0.8rem;
            position: relative;
            z-index: 1;
          }

          .why-text {
            color: #555;
            font-size: 1rem;
            line-height: 1.6;
            position: relative;
            z-index: 1;
          }

          .cta-section {
            // background: linear-gradient(90deg, #009dff86, #0055ffbb);
            // background:#dbdbdb45;
            // background:#b8d1e645;
            background:var(--Cta-bg);
            padding: 60px 20px;
            text-align: center;
            border-radius: 12px;
            margin: 60px 0;
          }

          .cta-section h2 {
            font-size: 1.75rem;
            font-weight: 500;
            margin-bottom: 15px;
            // color: white;
          }

          .cta-section p {
            font-size: 1.2rem;
            margin-bottom: 30px;
            // color: white;
            line-height: 1.5;
          }

          .cta-button {
            // display: inline-block;
            // padding: 14px 45px;
            // font-size: 1rem;
            // font-weight: 600;
            // color: #2563eb;
            // // background: white;
            // border: ;
            // border-radius: 30px;
            // cursor: pointer;
            // transition: all 0.4s ease;
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

          .cta-button:hover {
            background-color: #ff6a00;
          color: white !important;
          border-color: #ff6a00;
          }

          .hero-section {
      position: relative;
      background-image: url(${serviceHero});
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      min-height: 90vh;
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      color: white;
      overflow: hidden;
    }

    .hero-overlay {
      position: absolute;
      inset: 0;
      background: rgba(0, 0, 0, 0.55);
      z-index: 1;
    }

    .hero-content {
      position: relative;
      z-index: 2;
      max-width: 800px;
      padding: 0 1rem;
    }

              /* Typing animation */
.typing-text {
  display: inline-block;
  white-space: nowrap;
  overflow: hidden;
  border-right: none; /* No cursor */
  // animation: typing 6s steps(80, end) 1;
}

@keyframes typing {
  from {
    width: 0;
  }
  to {
    width: 100%;
  }
}


    @media (max-width: 992px) {
      .hero-section {
        background-position: center top;
        background-size: cover;
        min-height: 70vh;
      }
        
    }

    @media (max-width: 768px) {
      .hero-section {
        background-position: center;
        background-size: cover;
        min-height: 65vh;
      }
      .Business-title {
        font-size: 2rem;
      }
      .subTitle {
        font-size: 1.1rem;
      }
      .typing-text{
  white-space: wrap;

      }
    }

    @media (max-width: 480px) {
      .hero-section {
        background-position: top;
        background-size: cover;
        min-height: 60vh;
      }
      .Business-title {
        font-size: 1.7rem;
      }
      .subTitle {
        font-size: 1rem;
        padding: 0 10px;
      }
    }

          // /* Hero section styling */
          // .hero-section {
          //   position: relative;
          //   background-image: url(${serviceHero});
          //   background-size: cover;
          //   background-position: center center;
          //   background-repeat: no-repeat;
          //   min-height: 90vh;
          //   display: flex;
          //   align-items: center;
          //   justify-content: center;
          //   text-align: center;
          //   color: white;
          //   overflow: hidden;
          // }

          // .hero-overlay {
          //   position: absolute;
          //   inset: 0;
          //   background: rgba(0, 0, 0, 0.55);
          //   z-index: 1;
          // }

          // .hero-content {
          //   position: relative;
          //   z-index: 2;
          //   max-width: 800px;
          //   padding: 0 1rem;
          // }

          /* New background for offerings section */
          // .offerings-background {
          //   // background: linear-gradient(135deg, #ffffffff 0%, #f1f2f5ff 100%); /* Soft, techy gradient */
          //    background-color: #f9f9f9;
          //   padding: 4rem 0; /* Add some padding to make it stand out */
          //   margin-bottom: 4rem; /* Space before the next section */
          // }

          // @media (max-width: 768px) {
          //   .Business-title {
          //     font-size: 2rem;
          //   }
          //   .hero-section {
          //     background-position: center top;
          //   }
          // }
        `}
      </style>

      <div className="services-page">
        {/* Hero Section */}
        <div className="hero-section">
          <div className="hero-overlay"></div>
          <div className="hero-content">
            <h1 className="Business-title">Business Services</h1>
            <p className=" subTitle typing-text">
              We provide comprehensive solutions to help your business thrive in
              a competitive market.
            </p>
          </div>
        </div>

        {/* Offerings Section */}
        <div className="offerings-background">
          {" "}
          <div className="container my-5">
            <h2 className="text-center our-title">Our Offerings</h2>
            <p className="text-center mt-3">
              Empowering your organization through transformative technology and
              strategic innovation.
            </p>

            <div className="why-grid">
              {offerings.map((item, index) => (
                <div
                  key={index}
                  className="why-card"
                  onClick={() => navigate(item.route)}
                >
                  <div className="why-icon">{item.icon}</div>
                  <h4 className="why-heading">{item.title}</h4>
                  <p className="why-text">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="cta-section">
          <h2>Take Your Business to the Next Level</h2>
          <p>Discover how we can transform your workflow.</p>
          <Link to="/contact" className="cta-button">
            Contact Us
          </Link>
        </div>
      </div>

      <StretchyGallery />
      <TechStackCarousel />
      <NewForm />
    </>
  );
};

export default ServicesPage;
