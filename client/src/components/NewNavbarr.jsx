// // import React, { useState, useEffect } from "react";
// // import { Navbar, Nav } from "react-bootstrap";
// // import { Link } from "react-router-dom";
// // import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
// // import logo from "../assets/logo.png";

// // export default function MyNavbar() {
// //   const [menuOpen, setMenuOpen] = useState(false);
// //   const [dropdownOpen, setDropdownOpen] = useState(false);
// //   const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

// //   useEffect(() => {
// //     const handleResize = () => {
// //       const mobile = window.innerWidth < 992;
// //       setIsMobile(mobile);
// //       if (!mobile) {
// //         setMenuOpen(false);
// //         setDropdownOpen(false);
// //       }
// //     };
// //     window.addEventListener("resize", handleResize);
// //     return () => window.removeEventListener("resize", handleResize);
// //   }, []);

// //   const toggleMenu = () => setMenuOpen(!menuOpen);
// //   const toggleDropdown = () => isMobile && setDropdownOpen(!dropdownOpen);
// //   const closeMenu = () => {
// //     setMenuOpen(false);
// //     setDropdownOpen(false);
// //   };

// //   return (
// //     <>
// //       <style>{`
// //         .navbar-custom {
// //           background: #fff;
// //           padding: 0.5rem 1rem;
// //           box-shadow: 0 4px 12px rgba(0,0,0,0.08);
// //           position: sticky;
// //           top: 0;
// //           z-index: 1050;
// //         }
// //         .navbar-brand img {
// //           width: 50px;
// //           height: 50px;
// //         }
// //         .nav-link {
// //           color: #333;
// //           font-weight: 500;
// //           padding: 0.5rem 1rem;
// //         }
// //         .nav-link:hover {
// //           color: #0d6efd;
// //         }
// //         .navbar-toggler {
// //           border: none;
// //           font-size: 1.5rem;
// //         }

// //         /* Mobile menu */
// //         @media (max-width: 991px) {
// //           .mobile-menu {
// //             position: fixed;
// //             top: 60px;
// //             left: 0;
// //             width: 100vw;
// //             background: #fff;
// //             z-index: 1100;
// //             flex-direction: column;
// //             display: flex;
// //             max-height: ${menuOpen ? "100vh" : "0"};
// //             overflow: hidden;
// //             transition: max-height 0.3s ease;
// //           }
// //           .mobile-menu .nav-link {
// //             text-align: center;
// //             padding: 1rem;
// //             border-bottom: 1px solid #f0f0f0;
// //           }
// //           .mobile-dropdown {
// //             display: ${dropdownOpen ? "flex" : "none"};
// //             flex-direction: column;
// //             background: #f9f9f9;
// //           }
// //           .mobile-dropdown .nav-link {
// //             padding-left: 2rem;
// //             border-bottom: none;
// //           }
// //         }

// //         /* Desktop dropdown */
// //         @media (min-width: 992px) {
// //           .desktop-dropdown {
// //             position: relative;
// //           }
// //           .desktop-dropdown-menu {
// //             position: absolute;
// //             top: 100%;
// //             left: 0;
// //             background: #fff;
// //             min-width: 200px;
// //             display: none;
// //             flex-direction: column;
// //             box-shadow: 0 8px 25px rgba(0,0,0,0.1);
// //             z-index: 1000;
// //           }
// //           .desktop-dropdown-menu .nav-link {
// //             padding: 0.5rem 1rem;
// //             border-bottom: none;
// //           }
// //         }
// //       `}</style>

// //       <Navbar className="navbar-custom" expand="lg">
// //         <Navbar.Brand as={Link} to="/">
// //           <img src={logo} alt="Logo" />
// //         </Navbar.Brand>
// //         <Navbar.Toggle onClick={toggleMenu}>
// //           {menuOpen ? <FaTimes /> : <FaBars />}
// //         </Navbar.Toggle>

// //         {/* Mobile Menu */}
// //         {isMobile && (
// //           <div className="mobile-menu">
// //             <Nav className="flex-column">
// //               <Nav.Link as={Link} to="/" onClick={closeMenu}>
// //                 Home
// //               </Nav.Link>
// //               <Nav.Link as={Link} to="/about" onClick={closeMenu}>
// //                 About Us
// //               </Nav.Link>
// //               <Nav.Link onClick={toggleDropdown} className="dropdown-toggle">
// //                 Services <FaChevronDown />
// //               </Nav.Link>
// //               <div className="mobile-dropdown">
// //                 <Nav.Link as={Link} to="/services/it" onClick={closeMenu}>
// //                   IT Services
// //                 </Nav.Link>
// //                 <Nav.Link as={Link} to="/services/digital" onClick={closeMenu}>
// //                   Digital Services
// //                 </Nav.Link>
// //                 <Nav.Link as={Link} to="/services/cloud" onClick={closeMenu}>
// //                   Cloud Services
// //                 </Nav.Link>
// //               </div>
// //               <Nav.Link as={Link} to="/solutions" onClick={closeMenu}>
// //                 Solutions
// //               </Nav.Link>
// //               <Nav.Link as={Link} to="/contact" onClick={closeMenu}>
// //                 Contact Us
// //               </Nav.Link>
// //               <Nav.Link as={Link} to="/careers" onClick={closeMenu}>
// //                 Careers
// //               </Nav.Link>
// //             </Nav>
// //           </div>
// //         )}

// //         {/* Desktop Menu */}
// //         {!isMobile && (
// //           <Navbar.Collapse>
// //             <Nav className="ms-auto d-flex align-items-center">
// //               <Nav.Link as={Link} to="/">
// //                 Home
// //               </Nav.Link>
// //               <Nav.Link as={Link} to="/about">
// //                 About Us
// //               </Nav.Link>

// //               {/* Desktop Dropdown */}
// //               <div
// //                 className="desktop-dropdown"
// //                 onMouseEnter={() => setDropdownOpen(true)}
// //                 onMouseLeave={() => setDropdownOpen(false)}
// //               >
// //                 <Nav.Link as={Link} to="/services" className="dropdown-toggle">
// //                   Services <FaChevronDown />
// //                 </Nav.Link>
// //                 <div
// //                   className="desktop-dropdown-menu"
// //                   style={{ display: dropdownOpen ? "flex" : "none" }}
// //                 >
// //                   <Nav.Link as={Link} to="/services/it">
// //                     IT Services
// //                   </Nav.Link>
// //                   <Nav.Link as={Link} to="/services/digital">
// //                     Digital Services
// //                   </Nav.Link>
// //                   <Nav.Link as={Link} to="/services/cloud">
// //                     Cloud Services
// //                   </Nav.Link>
// //                 </div>
// //               </div>

// //               <Nav.Link as={Link} to="/solutions">
// //                 Solutions
// //               </Nav.Link>
// //               <Nav.Link as={Link} to="/contact">
// //                 Contact Us
// //               </Nav.Link>
// //               <Nav.Link as={Link} to="/careers">
// //                 Careers
// //               </Nav.Link>
// //             </Nav>
// //           </Navbar.Collapse>
// //         )}
// //       </Navbar>
// //     </>
// //   );
// // }
// import React, { useState, useEffect } from "react";
// import { Navbar, Nav } from "react-bootstrap";
// import { Link } from "react-router-dom";
// import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
// import logo from "../assets/logo.png";

// export default function MyNavbar() {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [dropdownOpen, setDropdownOpen] = useState(false);
//   const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleResize = () => {
//       const mobile = window.innerWidth < 992;
//       setIsMobile(mobile);
//       if (!mobile) {
//         setMenuOpen(false);
//         setDropdownOpen(false);
//       }
//     };

//     const handleScroll = () => setScrolled(window.scrollY > 80);

//     window.addEventListener("resize", handleResize);
//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("resize", handleResize);
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const toggleMenu = () => setMenuOpen(!menuOpen);
//   const toggleDropdown = () => isMobile && setDropdownOpen(!dropdownOpen);
//   const closeMenu = () => {
//     setMenuOpen(false);
//     setDropdownOpen(false);
//   };

//   return (
//     <>
//       <style>{`
//         .navbar-custom {
//           transition: background 0.3s ease, box-shadow 0.3s ease;
//           padding: 0.5rem 1rem;
//           position: fixed;
//           width: 100%;
//           top: 0;
//           z-index: 1050;
//         }

//         .transparent-navbar {
//           background: rgba(255,255,255,0);
//           box-shadow: none;
//         }

//         .glassy-navbar {
//           background: rgba(255,255,255,0.95);
//           box-shadow: 0 4px 12px rgba(0,0,0,0.08);
//         }

//         .navbar-brand img { width: 50px; height: 50px; }

//         /* Dynamic text color based on scroll */
//         .nav-link {
//           font-weight: 500;
//           padding: 0.5rem 1rem;
//           transition: color 0.25s ease;
//           color: ${scrolled ? "#111" : "#fff"};
//         }
//         .nav-link:hover { color: #0d6efd; }

//         .navbar-toggler { border: none; font-size: 1.5rem; color: ${
//           scrolled ? "#111" : "#fff"
//         }; }

//         /* Mobile menu */
//         @media (max-width: 991px) {
//           .mobile-menu {
//             position: fixed;
//             top: 60px;
//             left: 0;
//             width: 100vw;
//             background: #fff;
//             z-index: 1100;
//             flex-direction: column;
//             display: flex;
//             max-height: ${menuOpen ? "100vh" : "0"};
//             overflow: hidden;
//             transition: max-height 0.3s ease;
//           }
//           .mobile-menu .nav-link { text-align: center; padding: 1rem; border-bottom: 1px solid #f0f0f0; }
//           .mobile-dropdown {
//             display: ${dropdownOpen ? "flex" : "none"};
//             flex-direction: column;
//             background: #f9f9f9;
//           }
//           .mobile-dropdown .nav-link { padding-left: 2rem; border-bottom: none; }
//         }

//         /* Desktop dropdown */
//         @media (min-width: 992px) {
//           .desktop-dropdown { position: relative; }
//           .desktop-dropdown-menu {
//             position: absolute;
//             top: 100%;
//             left: 0;
//             background: #fff;
//             min-width: 200px;
//             display: none;
//             flex-direction: column;
//             box-shadow: 0 8px 25px rgba(0,0,0,0.1);
//             z-index: 1000;
//           }
//           .desktop-dropdown-menu .nav-link { padding: 0.5rem 1rem; border-bottom: none; color: #111; }
//           .nav-link.dropdown-toggle::after {
//   display: none !important;
// }
//         }
//       `}</style>

//       <Navbar
//         className={`navbar-custom ${
//           scrolled ? "glassy-navbar" : "transparent-navbar"
//         }`}
//         expand="lg"
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
//               <Nav.Link as={Link} to="/" onClick={closeMenu}>
//                 Home
//               </Nav.Link>
//               <Nav.Link as={Link} to="/about" onClick={closeMenu}>
//                 About Us
//               </Nav.Link>
//               <Nav.Link onClick={toggleDropdown} className="dropdown-toggle">
//                 Services <FaChevronDown />
//               </Nav.Link>
//               <div className="mobile-dropdown">
//                 <Nav.Link as={Link} to="/services/it" onClick={closeMenu}>
//                   IT Services
//                 </Nav.Link>
//                 <Nav.Link as={Link} to="/services/digital" onClick={closeMenu}>
//                   Digital Services
//                 </Nav.Link>
//                 <Nav.Link as={Link} to="/services/cloud" onClick={closeMenu}>
//                   Cloud Services
//                 </Nav.Link>
//               </div>
//               <Nav.Link as={Link} to="/solutions" onClick={closeMenu}>
//                 Solutions
//               </Nav.Link>
//               <Nav.Link as={Link} to="/contact" onClick={closeMenu}>
//                 Contact Us
//               </Nav.Link>
//               <Nav.Link as={Link} to="/careers" onClick={closeMenu}>
//                 Careers
//               </Nav.Link>
//             </Nav>
//           </div>
//         )}

//         {/* Desktop Menu */}
//         {!isMobile && (
//           <Navbar.Collapse>
//             <Nav className="ms-auto d-flex align-items-center">
//               <Nav.Link as={Link} to="/">
//                 Home
//               </Nav.Link>
//               <Nav.Link as={Link} to="/about">
//                 About Us
//               </Nav.Link>

//               {/* Desktop Dropdown */}
//               <div
//                 className="desktop-dropdown"
//                 onMouseEnter={() => setDropdownOpen(true)}
//                 onMouseLeave={() => setDropdownOpen(false)}
//               >
//                 <Nav.Link as={Link} to="/services" className="dropdown-toggle">
//                   Services <FaChevronDown />
//                 </Nav.Link>
//                 <div
//                   className="desktop-dropdown-menu"
//                   style={{ display: dropdownOpen ? "flex" : "none" }}
//                 >
//                   <Nav.Link as={Link} to="/services/it">
//                     IT Services
//                   </Nav.Link>
//                   <Nav.Link as={Link} to="/services/digital">
//                     Digital Services
//                   </Nav.Link>
//                   <Nav.Link as={Link} to="/services/cloud">
//                     Cloud Services
//                   </Nav.Link>
//                 </div>
//               </div>

//               <Nav.Link as={Link} to="/solutions">
//                 Solutions
//               </Nav.Link>
//               <Nav.Link as={Link} to="/contact">
//                 Contact Us
//               </Nav.Link>
//               <Nav.Link as={Link} to="/careers">
//                 Careers
//               </Nav.Link>
//             </Nav>
//           </Navbar.Collapse>
//         )}
//       </Navbar>
//     </>
//   );
// }
import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import logo from "../assets/logo.png";

export default function MyNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const services = [
    { path: "/services", label: "Managed IT Services" },
    { path: "/services", label: "Software Development" },
    { path: "/services", label: "IT Consulting" },
    { path: "/services", label: "Artificial Intelligence" },
    { path: "/services", label: "View All Services →", viewAll: true },
  ];

  // Handle resize, scroll, click outside
  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth < 992;
      setIsMobile(mobile);
      if (!mobile) {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
    };

    const handleScroll = () => setScrolled(window.scrollY > 80);

    const handleClickOutside = (e) => {
      if (
        dropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setDropdownOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const toggleDropdownForMobile = (e) => {
    e.preventDefault();
    if (isMobile && menuOpen) setDropdownOpen(!dropdownOpen);
  };

  const handleNavItemClick = () => {
    setDropdownOpen(false);
    if (isMobile) setMenuOpen(false);
  };

  const getLinkColor = () => (scrolled ? "#111" : "#fff");

  return (
    <>
      <style>{`
        .navbar-custom {
          transition: background 0.3s ease, box-shadow 0.3s ease;
          padding: 0.5rem 1rem;
          position: fixed;
          width: 100%;
          top: 0;
          z-index: 1050;
        }
        .transparent-navbar { background: rgba(255,255,255,0); box-shadow: none; }
        .glassy-navbar { background: #fff; box-shadow: 0 4px 12px rgba(0,0,0,0.08); }

        .navbar-brand img { width: 50px; height: 50px; }

        .nav-link {
          font-weight: 500;
          padding: 0.5rem 1rem;
          transition: color 0.25s ease;
          color: ${getLinkColor()};
        }
        .nav-link:hover { color: #0d6efd; }
        .nav-link.active { color: ${getLinkColor()} !important; }

        /* Remove extra bootstrap arrow */
        .nav-link.dropdown-toggle::after { display: none !important; }

        .navbar-toggler { border: none; font-size: 1.5rem; color: ${getLinkColor()}; }

        /* Mobile menu */
        @media (max-width: 991px) {
          .mobile-menu {
            position: fixed;
            top: 60px;
            left: 0;
            width: 100vw;
            background: #fff;
            z-index: 1100;
            flex-direction: column;
            display: flex;
            max-height: ${menuOpen ? "100vh" : "0"};
            overflow: hidden;
            transition: max-height 0.3s ease;
          }
          .mobile-menu .nav-link { color: #111 !important; text-align: center; padding: 1rem; border-bottom: 1px solid #f0f0f0; }
          .mobile-menu .nav-link:hover { color: #0d6efd !important; }

          .dropdown-menu-custom {
            position: static !important; /* Important for mobile */
            max-height: 0;
            overflow: hidden;
            padding: 0;
            transition: max-height 0.3s ease, padding 0.3s ease;
            background: #f9f9f9;
          }
          .dropdown-menu-custom.show {
            max-height: 500px; /* expand */
            padding: 0.5rem 0;
          }
          .dropdown-item-custom {
            margin: 0.2rem 1rem;
            padding: 0.75rem 1rem;
            color: #111;
            border-radius: 6px;
          }
        }

        /* Desktop dropdown */
        .dropdown-container { position: relative; }
        .dropdown-menu-custom {
          position: absolute;
          top: 100%;
          right: 0;
          min-width: 240px;
          display: none;
          flex-direction: column;
          background: #fff;
          border-radius: 12px;
          padding: 12px 0;
          box-shadow: 0 10px 30px rgba(13,30,70,0.12);
          opacity: 0;
          visibility: hidden;
          pointer-events: none;
          transition: opacity 0.22s ease, transform 0.22s ease, visibility 0.22s;
          z-index: 1000;
          text-align: left;
        }
        .dropdown-menu-custom.show {
          display: flex;
          opacity: 1;
          visibility: visible;
          pointer-events: auto;
          transform: translateY(0);
        }

        .dropdown-item-custom {
          padding: 14px 20px;
          color: #222;
          text-decoration: none;
          font-size: 1rem;
          border-radius: 8px;
          margin: 6px 12px;
          transition: background 0.18s ease, color 0.18s ease;
        }
        .dropdown-item-custom:hover { background: #f7fbff; color: #0d6efd; }

        @media (min-width: 992px) {
          .dropdown-container:hover .dropdown-menu-custom { display: flex; opacity: 1; visibility: visible; }
        }
      `}</style>

      <Navbar
        className={`navbar-custom ${
          scrolled ? "glassy-navbar" : "transparent-navbar"
        }`}
        expand="lg"
        expanded={menuOpen}
      >
        <Navbar.Brand as={Link} to="/">
          <img src={logo} alt="Logo" />
        </Navbar.Brand>
        <Navbar.Toggle onClick={toggleMenu}>
          {menuOpen ? <FaTimes /> : <FaBars />}
        </Navbar.Toggle>

        {/* Mobile Menu */}
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

              {/* Services Dropdown */}
              <div className="dropdown-container">
                <Link
                  to="/services"
                  className="nav-link dropdown-toggle"
                  onClick={toggleDropdownForMobile}
                >
                  Services{" "}
                  <FaChevronDown
                    className={dropdownOpen ? "open" : ""}
                    size={12}
                  />
                </Link>
                <div
                  className={`dropdown-menu-custom ${
                    dropdownOpen ? "show" : ""
                  }`}
                >
                  {services.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      className="dropdown-item-custom"
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

        {/* Desktop Menu */}
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
                  className="nav-link dropdown-toggle"
                  onClick={(e) => e.preventDefault()}
                >
                  Services{" "}
                  <FaChevronDown
                    className={dropdownOpen ? "open" : ""}
                    size={12}
                  />
                </Link>
                <div
                  className={`dropdown-menu-custom ${
                    dropdownOpen ? "show" : ""
                  }`}
                >
                  {services.map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      className="dropdown-item-custom"
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
