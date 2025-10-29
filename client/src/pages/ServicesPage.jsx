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
// import serviceHero from "../assets/ServicesImg.jpg";

// const ServicesPage = () => {
//   const navigate = useNavigate();

//   const offerings = [
//     {
//       icon: (
//         <FaDigitalTachograph
//           className="why-icon"
//           style={{ color: "#f4b400" }}
//         />
//       ),
//       title: "Digital Transformation",
//       description:
//         "Empowering organizations with Salesforce, cloud adoption, and integrated digital strategies to accelerate transformation.",
//       route: "/services/digital-transformation",
//     },
//     {
//       icon: <FaCode className="why-icon" style={{ color: "#34a853" }} />,
//       title: "Software Development and Implementation",
//       description:
//         "From concept to deployment, we engineer scalable software solutions that transform business operations.",
//       route: "/services/software-development",
//     },
//     {
//       icon: <FaUserTie className="why-icon" style={{ color: "#4285f4" }} />,
//       title: "IT Consulting and Recruitment",
//       description:
//         "Strategic IT consulting and specialized recruitment solutions to build the team and systems your business needs.",
//       route: "/services/it-consulting",
//     },
//     {
//       icon: <FaCloud className="why-icon" style={{ color: "#00bcd4" }} />,
//       title: "Cloud and AI",
//       description:
//         "Integrating artificial intelligence and cloud solutions to enable intelligent scaling and automation.",
//       route: "/services/cloud-ai",
//     },
//     {
//       icon: (
//         <FaChalkboardTeacher
//           className="why-icon"
//           style={{ color: "#9c27b0" }}
//         />
//       ),
//       title: "Training and Enablement",
//       description:
//         "Comprehensive training programs to upskill teams and promote digital innovation across organizations.",
//       route: "/services/training-enablement",
//     },
//     {
//       icon: <FaCube className="why-icon" style={{ color: "#ff7043" }} />,
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
//             font-size: 1.5rem;
//             position: relative;
//           }

//           .our-title::after {
//             content: '';
//             display: block;
//             width: 60px;
//             height: 4px;
//             background: linear-gradient(90deg, #2196f3, #007bff);
//             border-radius: 2px;
//             margin-top: 6px;
//             margin-left: auto;
//             margin-right: auto;
//           }

//           .why-grid {
//             display: grid;
//             grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
//             gap: 2rem;
//             padding: 0 2rem;
//           }

//           .why-card {
//             background: #fff;
//             border-radius: 16px;
//             box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
//             padding: 2rem;
//             text-align: center;
//             transition: all 0.4s ease;
//             border-top: 4px solid transparent;
//             cursor: pointer;
//           }

//           .why-card:hover {
//             transform: translateY(-8px);
//             box-shadow: 0 10px 25px rgba(0, 93, 255, 0.25);
//             border-top: 4px solid #0055ff;
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
//           }

//           .why-text {
//             color: #555;
//             font-size: 1rem;
//             line-height: 1.6;
//           }

//           .cta-section {
//             background: #554ecd;
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
//         `}
//       </style>

//       <div className="services-page">
//         {/* Hero Section */}
//         <div
//           className="jumbotron jumbotron-fluid d-flex align-items-center justify-content-center text-white text-center rounded-0"
//           style={{
//             backgroundImage: `url(${serviceHero})`,
//             backgroundSize: "cover",
//             backgroundPosition: "contain",
//             backgroundRepeat: "no-repeat",
//             minHeight: "90vh",
//             position: "relative",
//           }}
//         >
//           <div
//             className="w-100 h-100 position-absolute"
//             style={{ backgroundColor: "rgba(28, 28, 28, 0.5)" }}
//           ></div>

//           <div className="container position-relative">
//             <h1 className="Business-title">Business Services</h1>
//             <p className="lead mt-3">
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
//                 {item.icon}
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
import serviceHero from "../assets/ServicesImg.jpg";

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
            background: #554ecd;
            padding: 60px 20px;
            text-align: center;
            border-radius: 12px;
            margin: 60px 0;
          }

          .cta-section h2 {
            font-size: 1.75rem;
            font-weight: 500;
            margin-bottom: 15px;
            color: white;
          }

          .cta-section p {
            font-size: 1.2rem;
            margin-bottom: 30px;
            color: white;
            line-height: 1.5;
          }

          .cta-button {
            display: inline-block;
            padding: 14px 45px;
            font-size: 1rem;
            font-weight: 600;
            color: #2563eb;
            background: white;
            border: none;
            border-radius: 30px;
            cursor: pointer;
            transition: all 0.4s ease;
          }

          .cta-button:hover {
            background: #f0f4ff;
            color: #1e40af;
          }
        `}
      </style>

      <div className="services-page">
        {/* Hero Section */}
        <div
          className="jumbotron jumbotron-fluid d-flex align-items-center justify-content-center text-white text-center rounded-0"
          style={{
            backgroundImage: `url(${serviceHero})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            minHeight: "90vh",
            position: "relative",
          }}
        >
          <div
            className="w-100 h-100 position-absolute"
            style={{ backgroundColor: "rgba(28, 28, 28, 0.55)" }}
          ></div>

          <div className="container position-relative">
            <h1 className="Business-title">Business Services</h1>
            <p className="lead mt-3">
              We provide comprehensive solutions to help your business thrive in
              a competitive market.
            </p>
          </div>
        </div>

        {/* Offerings Section */}
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
//https://chatgpt.com/c/6900630c-e358-8320-9ca1-341d10c7996e improvised Servicespage design
