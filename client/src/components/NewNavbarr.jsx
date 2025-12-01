// import React, { useState, useEffect, useRef } from "react";
// import { Navbar, Nav } from "react-bootstrap";
// import { Link, useLocation } from "react-router-dom";
// import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
// import logo from "../assets/logo.webp";
// export default function MyNavbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
//   const dropdownRef = useRef(null);
//   const location = useLocation();

//   const services = [
//     { path: "/services", label: "Digital Transformation" },
//     { path: "/services", label: "Software Development" },
//     { path: "/services", label: "IT Consulting" },
//     { path: "/services", label: "Cloud AI" },
//     { path: "/services", label: "Training & Enablement" },
//     { path: "/services", label: "Advanced Technologies" },
//   ];

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 992);
//     const handleClickOutside = (e) => {
//       if (
//         dropdownOpen &&
//         dropdownRef.current &&
//         !dropdownRef.current.contains(e.target)
//       ) {
//         setDropdownOpen(false);
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [dropdownOpen]);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//     if (menuOpen) setDropdownOpen(false);
//   };

//   const toggleDropdownForMobile = (e) => {
//     e.preventDefault();
//     setDropdownOpen(!dropdownOpen);
//   };

//   const handleNavItemClick = () => {
//     setDropdownOpen(false);
//     if (isMobile) setMenuOpen(false);
//   };

//   const getHoverColor = () => "#679ef0ff";
//   const getActiveColor = () => "#f49e09ff";

//   return (
//     <>
//       <style>{`
//         .navbar-custom {
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   background: transparent;
//   box-shadow: none;
//   padding: 0.5rem 1rem;
//   z-index: 100; /* so it sits above the video */
// }

//         .navbar-brand img {
//           width: 75px;
//           height: 75px;
//           object-fit: contain;
//         }

//         .nav-link {
//           font-weight: 500;
//           padding: 0.5rem 1rem;
//           color: rgba(255, 255, 255, 0.8);
//           transition: all 0.3s ease;
//           position: relative;
//         }

//         .nav-link:hover {
//           color: ${getHoverColor()} !important;
//           text-shadow: 0 0 8px rgba(103, 158, 240, 0.8);
//           text-decoration:none;
//         }

//         .nav-link.active {
//           color: ${getActiveColor()} !important;
//           font-weight: 600;
//                     text-decoration:none;

//         }

//         .nav-link.dropdown-toggle::after {
//           display: none !important;
//         }

//         .nav-link.dropdown-toggle svg {
//           margin-left: 5px;
//           transition: transform 0.2s ease-in-out;
//         }

//         .nav-link.dropdown-toggle svg.open {
//           transform: rotate(180deg);
//         }

//         .navbar-toggler {
//           border: none;
//           font-size: 1.5rem;
//           color: #fff;
//         }

//         .navbar-toggler:focus {
//           box-shadow: none;
//         }

//         /* Mobile Menu */
//         @media (max-width: 991px) {
//           .mobile-menu {
//             background: rgba(0, 0, 0, 0.95);
//             backdrop-filter: blur(8px);
//             position: absolute;
//             top: 100%;
//             left: 0;
//             width: 100%;
//             flex-direction: column;
//             display: ${menuOpen ? "flex" : "none"};
//             z-index: 1100;
//           }

//           .mobile-menu .nav-link {
//             color: #fff !important;
//             text-align: center;
//             padding: 1rem;
//             border-bottom: 1px solid rgba(255, 255, 255, 0.1);
//           }

//           .dropdown-menu-custom {
//             background: rgba(0, 0, 0, 0.9);
//             padding: 0.5rem 0;
//             display: ${dropdownOpen ? "block" : "none"};
//           }

//           .dropdown-item-custom {
//             color: #ddd;
//             text-align: center;
//             display: block;
//             padding: 0.75rem;
//           }

//           .dropdown-item-custom:hover {
//             color: ${getHoverColor()};
//           }
//         }

//         /* Desktop Dropdown */
//         @media (min-width: 992px) {
//           .dropdown-container {
//             position: relative;
//           }

//           .dropdown-menu-custom.desktop-dropdown {
//             position: absolute;
//             top: 100%;
//             left: 0;
//             min-width: 240px;
//             background: rgba(20, 20, 20, 0.98);
//             border-radius: 10px;
//             padding: 10px 0;
//             box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
//             opacity: 0;
//             visibility: hidden;
//             transform: translateY(10px);
//             transition: all 0.25s ease;
//           }

//           .dropdown-container:hover .desktop-dropdown {
//             opacity: 1;
//             visibility: visible;
//             transform: translateY(0);
//           }

//           .dropdown-item-custom {
//             padding: 12px 18px;
//             color: #ddd;
//             display: block;
//             transition: all 0.2s ease;
//           }

//           .dropdown-item-custom:hover {
//             color: ${getHoverColor()};
//             background: rgba(255, 255, 255, 0.05);
//           }
//         }
//       `}</style>

//       <Navbar
//         className="navbar-custom"
//         expand="lg"
//         expanded={menuOpen}
//         // not fixed — scrolls with the page
//       >
//         <Navbar.Brand as={Link} to="/">
//           <img src={logo} alt="Logo" />
//         </Navbar.Brand>

//         <Navbar.Toggle onClick={toggleMenu}>
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </Navbar.Toggle>

//         {/* Mobile Menu */}
//         {isMobile && (
//           <div className="mobile-menu">
//             <Nav className="flex-column">
//               <Nav.Link as={Link} to="/" onClick={handleNavItemClick}>
//                 Home
//               </Nav.Link>
//               <Nav.Link as={Link} to="/about" onClick={handleNavItemClick}>
//                 About Us
//               </Nav.Link>

//               <div className="dropdown-container">
//                 <Link
//                   to="/services"
//                   className="nav-link dropdown-toggle"
//                   onClick={toggleDropdownForMobile}
//                 >
//                   Services <FaChevronDown size={12} />
//                 </Link>
//                 <div className="dropdown-menu-custom">
//                   {services.map((item, idx) => (
//                     <Link
//                       key={idx}
//                       to={item.path}
//                       className="dropdown-item-custom"
//                       onClick={handleNavItemClick}
//                     >
//                       {item.label}
//                     </Link>
//                   ))}
//                 </div>
//               </div>

//               <Nav.Link as={Link} to="/solutions" onClick={handleNavItemClick}>
//                 Solutions
//               </Nav.Link>
//               <Nav.Link as={Link} to="/contact" onClick={handleNavItemClick}>
//                 Contact Us
//               </Nav.Link>
//               <Nav.Link as={Link} to="/careers" onClick={handleNavItemClick}>
//                 Careers
//               </Nav.Link>
//             </Nav>
//           </div>
//         )}

//         {/* Desktop Menu */}
//         {!isMobile && (
//           <Navbar.Collapse>
//             <Nav className="ms-auto d-flex align-items-center">
//               <Nav.Link as={Link} to="/" onClick={handleNavItemClick}>
//                 Home
//               </Nav.Link>
//               <Nav.Link as={Link} to="/about" onClick={handleNavItemClick}>
//                 About Us
//               </Nav.Link>

//               <div className="dropdown-container" ref={dropdownRef}>
//                 <Link to="/services" className="nav-link dropdown-toggle">
//                   Services <FaChevronDown size={12} />
//                 </Link>
//                 <div className="dropdown-menu-custom desktop-dropdown">
//                   {services.map((item, idx) => (
//                     <Link
//                       key={idx}
//                       to={item.path}
//                       className="dropdown-item-custom"
//                       onClick={handleNavItemClick}
//                     >
//                       {item.label}
//                     </Link>
//                   ))}
//                 </div>
//               </div>

//               <Nav.Link as={Link} to="/solutions" onClick={handleNavItemClick}>
//                 Solutions
//               </Nav.Link>
//               <Nav.Link as={Link} to="/contact" onClick={handleNavItemClick}>
//                 Contact Us
//               </Nav.Link>
//               <Nav.Link as={Link} to="/careers" onClick={handleNavItemClick}>
//                 Careers
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         )}
//       </Navbar>
//     </>
//   );
// }

// WORKING
// import React, { useState, useEffect, useRef } from "react";
// import { Navbar, Nav } from "react-bootstrap";
// import { Link, useLocation } from "react-router-dom";
// import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
// // import logo from "../assets/logo.webp";
// const logo =
//   "https://res.cloudinary.com/dgysfehjv/image/upload/v1763617546/logo_cfgdcf.webp";

// export default function MyNavbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
//   const dropdownRef = useRef(null);
//   const location = useLocation();

//   const services = [
//     {
//       path: "/services/digital-transformation",
//       label: "Digital Transformation",
//     },
//     { path: "/services/software-development", label: "Software Development" },
//     { path: "/services/it-consulting", label: "IT Consulting" },
//     { path: "/services/cloud-ai", label: "Cloud AI" },
//     { path: "/services/training-enablement", label: "Training & Enablement" },
//     { path: "/services/advanced-technologies", label: "Advanced Technologies" },
//   ];

//   useEffect(() => {
//     const handleResize = () => setIsMobile(window.innerWidth < 992);
//     const handleClickOutside = (e) => {
//       if (
//         dropdownOpen &&
//         dropdownRef.current &&
//         !dropdownRef.current.contains(e.target)
//       ) {
//         setDropdownOpen(false);
//       }
//     };

//     window.addEventListener("resize", handleResize);
//     document.addEventListener("mousedown", handleClickOutside);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       document.removeEventListener("mousedown", handleClickOutside);
//     };
//   }, [dropdownOpen]);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//     if (menuOpen) setDropdownOpen(false);
//   };

//   const toggleDropdownForMobile = (e) => {
//     e.preventDefault();
//     setDropdownOpen(!dropdownOpen);
//   };

//   const handleNavItemClick = () => {
//     setDropdownOpen(false);
//     if (isMobile) setMenuOpen(false);
//   };

//   const getHoverColor = () => "#679ef0ff";
//   const getActiveColor = () => "#f49e09ff";

//   return (
//     <>
//       <style>{`
//         .navbar-custom {
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           background: transparent;
//           box-shadow: none;
//           padding: 0.5rem 1rem;
//           z-index: 100;
//         }

//         .navbar-brand img {
//           width: 75px;
//           height: 75px;
//           object-fit: contain;
//         }

//         .nav-link {
//           font-weight: 500;
//           padding: 0.5rem 1rem;
//           color: rgba(255, 255, 255, 0.85);
//           transition: all 0.3s ease;
//         }

//         .nav-link:hover {
//           color: ${getHoverColor()} !important;
//           text-shadow: 0 0 8px rgba(103, 158, 240, 0.8);
//           text-decoration: none;
//         }

//         /* ✅ Highlight active page */
//         .nav-link.active {
//           color: ${getActiveColor()} !important;
//           font-weight: 600;
//           text-decoration: none;
//         }

//         .nav-link.dropdown-toggle::after {
//           display: none !important;
//         }

//         .nav-link.dropdown-toggle svg {
//           margin-left: 5px;
//           transition: transform 0.2s ease-in-out;
//         }

//         .nav-link.dropdown-toggle svg.open {
//           transform: rotate(180deg);
//         }

//         .navbar-toggler {
//           border: none;
//           font-size: 1.5rem;
//           color: #fff;
//         }

//         .navbar-toggler:focus {
//           box-shadow: none;
//         }

//         /* Mobile Menu */
//         @media (max-width: 991px) {
//           .mobile-menu {
//             background: rgba(0, 0, 0, 0.95);
//             backdrop-filter: blur(8px);
//             position: absolute;
//             top: 100%;
//             left: 0;
//             width: 100%;
//             flex-direction: column;
//             display: ${menuOpen ? "flex" : "none"};
//             z-index: 1100;
//           }

//           .mobile-menu .nav-link {
//             color: #fff !important;
//             text-align: center;
//             padding: 1rem;
//             border-bottom: 1px solid rgba(255, 255, 255, 0.1);
//           }

//           .mobile-menu .nav-link.active {
//             color: ${getActiveColor()} !important;
//             background: rgba(255, 255, 255, 0.1);
//           }

//           .dropdown-menu-custom {
//             background: rgba(0, 0, 0, 0.9);
//             padding: 0.5rem 0;
//             display: ${dropdownOpen ? "block" : "none"};
//             text-decoration:none;
//           }

//           .dropdown-item-custom {
//             color: #ddd;
//             text-align: center;
//             display: block;
//             padding: 0.75rem;
//           }

//           .dropdown-item-custom:hover {
//             color: ${getHoverColor()};
//           }
//         }

//         /* Desktop Dropdown */
//         @media (min-width: 992px) {
//           .dropdown-container {
//             position: relative;
//           }

//           .dropdown-menu-custom.desktop-dropdown {
//             position: absolute;
//             top: 100%;
//             left: 0;
//             min-width: 240px;
//             background: rgba(20, 20, 20, 0.98);
//             border-radius: 10px;
//             padding: 10px 0;
//             box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
//             opacity: 0;
//             visibility: hidden;
//             transform: translateY(10px);
//             transition: all 0.25s ease;
//           }

//           .dropdown-container:hover .desktop-dropdown {
//             opacity: 1;
//             visibility: visible;
//             transform: translateY(0);
//           }

//           .dropdown-item-custom {
//             padding: 12px 18px;
//             color: #ddd;
//             display: block;
//             transition: all 0.2s ease;
//           }

//           .dropdown-item-custom:hover {
//             color: ${getHoverColor()};
//             background: rgba(255, 255, 255, 0.05);
//           }

//           .dropdown-item-custom.active {
//             color: ${getActiveColor()};
//             font-weight: 600;
//           }

//         }
//           .dropdown-item-custom,
// .dropdown-item-custom:hover,
// .dropdown-item-custom:focus,
// .dropdown-item-custom:active {
//   text-decoration: none !important;
//   border-bottom: none !important;
// }

// .navbar-custom.menu-open {
//   background: rgba(0, 0, 0, 0.95) !important;
//   backdrop-filter: blur(8px);
//   transition: background 0.3s ease;
// }

//       `}</style>

//       {/* <Navbar className="navbar-custom" expand="lg" expanded={menuOpen}> */}
//       <Navbar
//         className={`navbar-custom ${menuOpen ? "menu-open" : ""}`}
//         expand="lg"
//         expanded={menuOpen}
//       >
//         <Navbar.Brand as={Link} to="/">
//           <img src={logo} alt="Logo" />
//         </Navbar.Brand>

//         <Navbar.Toggle onClick={toggleMenu}>
//           {menuOpen ? <FaTimes /> : <FaBars />}
//         </Navbar.Toggle>

//         {/* Mobile Menu */}
//         {isMobile && (
//           <div className="mobile-menu">
//             <Nav className="flex-column">
//               <Nav.Link
//                 as={Link}
//                 to="/"
//                 className={location.pathname === "/" ? "active" : ""}
//                 onClick={handleNavItemClick}
//               >
//                 Home
//               </Nav.Link>
//               <Nav.Link
//                 as={Link}
//                 to="/about"
//                 className={location.pathname === "/about" ? "active" : ""}
//                 onClick={handleNavItemClick}
//               >
//                 About Us
//               </Nav.Link>

//               <div className="dropdown-container">
//                 <Link
//                   to="/services"
//                   className={`nav-link dropdown-toggle ${
//                     location.pathname.startsWith("/services") ? "active" : ""
//                   }`}
//                   onClick={toggleDropdownForMobile}
//                 >
//                   Services <FaChevronDown size={12} />
//                 </Link>
//                 <div className="dropdown-menu-custom">
//                   {services.map((item, idx) => (
//                     <Link
//                       key={idx}
//                       to={item.path}
//                       className={`dropdown-item-custom ${
//                         location.pathname === item.path ? "active" : ""
//                       }`}
//                       onClick={handleNavItemClick}
//                     >
//                       {item.label}
//                     </Link>
//                   ))}
//                 </div>
//               </div>

//               <Nav.Link
//                 as={Link}
//                 to="/solutions"
//                 className={location.pathname === "/solutions" ? "active" : ""}
//                 onClick={handleNavItemClick}
//               >
//                 Solutions
//               </Nav.Link>
//               <Nav.Link
//                 as={Link}
//                 to="/contact"
//                 className={location.pathname === "/contact" ? "active" : ""}
//                 onClick={handleNavItemClick}
//               >
//                 Contact Us
//               </Nav.Link>
//               <Nav.Link
//                 as={Link}
//                 to="/careers"
//                 className={location.pathname === "/careers" ? "active" : ""}
//                 onClick={handleNavItemClick}
//               >
//                 Careers
//               </Nav.Link>
//             </Nav>
//           </div>
//         )}

//         {/* Desktop Menu */}
//         {!isMobile && (
//           <Navbar.Collapse>
//             <Nav className="ms-auto d-flex align-items-center">
//               <Nav.Link
//                 as={Link}
//                 to="/"
//                 className={location.pathname === "/" ? "active" : ""}
//                 onClick={handleNavItemClick}
//               >
//                 Home
//               </Nav.Link>
//               <Nav.Link
//                 as={Link}
//                 to="/about"
//                 className={location.pathname === "/about" ? "active" : ""}
//                 onClick={handleNavItemClick}
//               >
//                 About Us
//               </Nav.Link>

//               <div className="dropdown-container" ref={dropdownRef}>
//                 <Link
//                   to="/services"
//                   className={`nav-link dropdown-toggle ${
//                     location.pathname.startsWith("/services") ? "active" : ""
//                   }`}
//                 >
//                   Services <FaChevronDown size={12} />
//                 </Link>
//                 <div className="dropdown-menu-custom desktop-dropdown">
//                   {services.map((item, idx) => (
//                     <Link
//                       key={idx}
//                       to={item.path}
//                       className={`dropdown-item-custom ${
//                         location.pathname === item.path ? "active" : ""
//                       }`}
//                       onClick={handleNavItemClick}
//                     >
//                       {item.label}
//                     </Link>
//                   ))}
//                 </div>
//               </div>

//               <Nav.Link
//                 as={Link}
//                 to="/solutions"
//                 className={location.pathname === "/solutions" ? "active" : ""}
//                 onClick={handleNavItemClick}
//               >
//                 Solutions
//               </Nav.Link>
//               <Nav.Link
//                 as={Link}
//                 to="/contact"
//                 className={location.pathname === "/contact" ? "active" : ""}
//                 onClick={handleNavItemClick}
//               >
//                 Contact Us
//               </Nav.Link>
//               <Nav.Link
//                 as={Link}
//                 to="/careers"
//                 className={location.pathname === "/careers" ? "active" : ""}
//                 onClick={handleNavItemClick}
//               >
//                 Careers
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         )}
//       </Navbar>
//     </>
//   );
// }

// WIth mobile menu altered
import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";

const logo =
  "https://res.cloudinary.com/dgysfehjv/image/upload/v1763617546/logo_cfgdcf.webp";

export default function MyNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const services = [
    {
      path: "/services/digital-transformation",
      label: "Digital Transformation",
    },
    { path: "/services/software-development", label: "Software Development" },
    { path: "/services/it-consulting", label: "IT Consulting" },
    { path: "/services/cloud-ai", label: "Cloud AI" },
    { path: "/services/training-enablement", label: "Training & Enablement" },
    { path: "/services/advanced-technologies", label: "Advanced Technologies" },
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 992);

    const handleClickOutside = (e) => {
      // Close dropdown if clicked outside (Desktop)
      if (
        !isMobile &&
        dropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen, isMobile]);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) setDropdownOpen(false); // Close dropdown when closing menu
  };

  // This function only toggles the dropdown, does not navigate
  const toggleDropdownOnly = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDropdownOpen(!dropdownOpen);
  };

  const handleNavItemClick = () => {
    setDropdownOpen(false);
    if (isMobile) setMenuOpen(false);
  };

  const getHoverColor = () => "#679ef0ff";
  const getActiveColor = () => "#f49e09ff";

  return (
    <>
      <style>{`
        /* --- GLOBAL NAVBAR STYLES --- */
        .navbar-custom {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          background: transparent;
          box-shadow: none;
          padding: 0.5rem 1rem;
          z-index: 100;
        }

        .navbar-custom.menu-open {
          background: rgba(0, 0, 0, 0.95) !important;
          backdrop-filter: blur(8px);
          transition: background 0.3s ease;
        }

        .navbar-brand img {
          width: 75px;
          height: 75px;
          object-fit: contain;
        }

        .nav-link {
          font-weight: 500;
          padding: 0.5rem 1rem;
          color: rgba(255, 255, 255, 0.85);
          transition: all 0.3s ease;
          cursor: pointer;
        }

        .nav-link:hover {
          color: ${getHoverColor()} !important;
          text-shadow: 0 0 8px rgba(103, 158, 240, 0.8);
          text-decoration: none;
        }

        .nav-link.active {
          color: ${getActiveColor()} !important;
          font-weight: 600;
          text-decoration: none;
        }

        .navbar-toggler {
          border: none;
          font-size: 1.5rem;
          color: #fff;
        }
        .navbar-toggler:focus {
          box-shadow: none;
        }

        /* Chevron Animation */
        .chevron-icon {
          transition: transform 0.3s ease;
          margin-left: 6px; /* Space between text and arrow */
          font-size: 12px;
        }
        .chevron-icon.open {
          transform: rotate(180deg);
        }

        /* --- MOBILE MENU SPECIFIC STYLES --- */
        @media (max-width: 991px) {
          .mobile-menu {
            background: rgba(0, 0, 0, 0.95);
            backdrop-filter: blur(8px);
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            flex-direction: column;
            display: ${menuOpen ? "flex" : "none"};
            z-index: 1100;
            border-top: 1px solid rgba(255,255,255,0.1);
          }

          /* General Mobile Link Styles */
          .mobile-menu .nav-link {
            color: #fff !important;
            text-align: center;
            padding: 1rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            display: block;
            width: 100%;
          }
          
          .mobile-menu .nav-link.active {
             color: ${getActiveColor()} !important;
             background: rgba(255, 255, 255, 0.05);
          }

          /* 
             SPLIT CONTAINER FOR SERVICES 
             This keeps text and arrow together in the center 
          */
          .mobile-split-container {
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 1rem;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
            width: 100%;
          }

          /* The "Services" Text Link */
          .mobile-service-link {
            color: rgba(255, 255, 255, 0.85);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.3s;
          }
          .mobile-service-link:hover {
            color: ${getHoverColor()};
          }
          .mobile-service-link.active {
            color: ${getActiveColor()};
            font-weight: 600;
          }

          /* The Arrow Trigger Area */
          .mobile-arrow-trigger {
            display: flex;
            align-items: center;
            justify-content: center;
            padding: 0 10px; /* Hit area padding */
            color: rgba(255, 255, 255, 0.85);
            cursor: pointer;
          }
          .mobile-arrow-trigger:hover {
            color: ${getHoverColor()};
          }

          /* Mobile Dropdown Items */
          .dropdown-menu-custom {
            background: rgba(20, 20, 20, 0.8);
            display: ${dropdownOpen ? "block" : "none"};
          }
          .dropdown-item-custom {
            color: #ccc;
            text-align: center;
            display: block;
            padding: 0.8rem;
            text-decoration: none;
            border-bottom: 1px solid rgba(255, 255, 255, 0.05);
            font-size: 0.95rem;
          }
          .dropdown-item-custom:hover {
            color: ${getHoverColor()};
            background: rgba(255, 255, 255, 0.05);
          }
          .dropdown-item-custom.active {
             color: ${getActiveColor()};
          }
        }

        /* --- DESKTOP MENU SPECIFIC STYLES --- */
        @media (min-width: 992px) {
          .dropdown-container {
            position: relative;
          }

          .nav-link.dropdown-toggle::after {
            display: none !important;
          }

          .dropdown-menu-custom.desktop-dropdown {
            position: absolute;
            top: 100%;
            left: 0;
            min-width: 240px;
            background: rgba(20, 20, 20, 0.98);
            border-radius: 10px;
            padding: 10px 0;
            box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
            opacity: 0;
            visibility: hidden;
            transform: translateY(10px);
            transition: all 0.25s ease;
            display: block; /* Always block, controlled by opacity */
          }

          .dropdown-container:hover .desktop-dropdown {
            opacity: 1;
            visibility: visible;
            transform: translateY(0);
          }

          .dropdown-item-custom {
            padding: 12px 18px;
            color: #ddd;
            display: block;
            text-decoration: none;
            transition: all 0.2s ease;
          }

          .dropdown-item-custom:hover {
            color: ${getHoverColor()};
            background: rgba(255, 255, 255, 0.05);
          }
          
          .dropdown-item-custom.active {
             color: ${getActiveColor()};
             font-weight: 600;
          }
        }
      `}</style>

      <Navbar
        className={`navbar-custom ${menuOpen ? "menu-open" : ""}`}
        expand="lg"
        expanded={menuOpen}
      >
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>

        <Navbar.Toggle onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </Navbar.Toggle>

        {/* ================= MOBILE MENU LAYOUT ================= */}
        {isMobile && (
          <div className="mobile-menu">
            <Nav className="flex-column">
              <Nav.Link
                as={Link}
                to="/"
                className={location.pathname === "/" ? "active" : ""}
                onClick={handleNavItemClick}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                className={location.pathname === "/about" ? "active" : ""}
                onClick={handleNavItemClick}
              >
                About Us
              </Nav.Link>

              {/* SERVICES SECTION (SPLIT BUTTON) */}
              <div>
                <div className="mobile-split-container">
                  {/* 1. Click Text -> Go to Page */}
                  <Link
                    to="/services"
                    className={`mobile-service-link ${
                      location.pathname === "/services" ? "active" : ""
                    }`}
                    onClick={handleNavItemClick}
                  >
                    Services
                  </Link>

                  {/* 2. Click Icon -> Toggle Dropdown */}
                  <div
                    className="mobile-arrow-trigger"
                    onClick={toggleDropdownOnly}
                  >
                    <FaChevronDown
                      className={`chevron-icon ${dropdownOpen ? "open" : ""}`}
                    />
                  </div>
                </div>

                {/* Dropdown Items */}
                <div className="dropdown-menu-custom">
                  {services.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      className={`dropdown-item-custom ${
                        location.pathname === item.path ? "active" : ""
                      }`}
                      onClick={handleNavItemClick}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Nav.Link
                as={Link}
                to="/solutions"
                className={location.pathname === "/solutions" ? "active" : ""}
                onClick={handleNavItemClick}
              >
                Solutions
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                className={location.pathname === "/contact" ? "active" : ""}
                onClick={handleNavItemClick}
              >
                Contact Us
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/careers"
                className={location.pathname === "/careers" ? "active" : ""}
                onClick={handleNavItemClick}
              >
                Careers
              </Nav.Link>
            </Nav>
          </div>
        )}

        {/* ================= DESKTOP MENU LAYOUT ================= */}
        {!isMobile && (
          <Navbar.Collapse>
            <Nav className="ms-auto d-flex align-items-center">
              <Nav.Link
                as={Link}
                to="/"
                className={location.pathname === "/" ? "active" : ""}
                onClick={handleNavItemClick}
              >
                Home
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/about"
                className={location.pathname === "/about" ? "active" : ""}
                onClick={handleNavItemClick}
              >
                About Us
              </Nav.Link>

              <div className="dropdown-container" ref={dropdownRef}>
                <Link
                  to="/services"
                  className={`nav-link dropdown-toggle ${
                    location.pathname.startsWith("/services") ? "active" : ""
                  }`}
                >
                  Services
                  <FaChevronDown className="chevron-icon" />
                </Link>
                <div className="dropdown-menu-custom desktop-dropdown">
                  {services.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      className={`dropdown-item-custom ${
                        location.pathname === item.path ? "active" : ""
                      }`}
                      onClick={handleNavItemClick}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Nav.Link
                as={Link}
                to="/solutions"
                className={location.pathname === "/solutions" ? "active" : ""}
                onClick={handleNavItemClick}
              >
                Solutions
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/contact"
                className={location.pathname === "/contact" ? "active" : ""}
                onClick={handleNavItemClick}
              >
                Contact Us
              </Nav.Link>
              <Nav.Link
                as={Link}
                to="/careers"
                className={location.pathname === "/careers" ? "active" : ""}
                onClick={handleNavItemClick}
              >
                Careers
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        )}
      </Navbar>
    </>
  );
}
