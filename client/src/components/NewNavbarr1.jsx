import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import { FaBars, FaTimes, FaChevronDown } from "react-icons/fa";
import logo from "../assets/logo.webp";

export default function MyNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const [scrolled, setScrolled] = useState(false);
  const dropdownRef = useRef(null);
  const location = useLocation();

  const services = [
    { path: "/services", label: "Digital Transformation" },
    { path: "/services", label: "Software Development" },
    { path: "/services", label: "IT Consulting" },
    { path: "/services", label: "Cloud AI" },
    { path: "/services", label: "Training&Enablement" },
    { path: "/services", label: "Advanced technologies" },
    // { path: "/services", label: "View All Services →", viewAll: true },
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

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
    if (menuOpen) {
      setDropdownOpen(false);
    }
  };

  const toggleDropdownForMobile = (e) => {
    e.preventDefault();
    setDropdownOpen(!dropdownOpen);
  };

  const handleNavItemClick = () => {
    setDropdownOpen(false);
    if (isMobile) {
      setMenuOpen(false);
    }
  };

  // Determine link color based on scroll position
  // Default non-scrolled links are white, scrolled are dark grey
  const getLinkColor = () => (scrolled ? "#333" : "#fff");
  const getHoverColor = () => "#679ef0ff"; // Bootstrap primary blue
  // const getActiveColor = () => "#f1b96eff"; // Active page color
  // const getActiveColor = () => "#d48223ff";
  const getActiveColor = () => " #f49e09ff";

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

        .navbar-brand img { width: 105px; height: 75px; }

        .nav-link {
          font-weight: 500;
          padding: 0.5rem 1rem;
          transition: color 0.25s ease;
          color: ${getLinkColor()}; /* Default link color */
          text-decoration: none;
        }
        .nav-link:hover {
          color: ${getHoverColor()} !important; /* Hover color */
          text-decoration: none;
        }
        /* Active link styles for when it's the current page */
        .nav-link.active {
          color: ${getActiveColor()} !important; /* Active link color */
          font-weight: 600; /* Make active link bolder */
          text-decoration: none;
        }
        /* Special case: when scrolled, non-active links are dark, active is blue */
        .glassy-navbar .nav-link { color: #333; }
        .glassy-navbar .nav-link.active { color: ${getActiveColor()} !important; }
        .glassy-navbar .nav-link:hover { color: ${getHoverColor()} !important; }


        /* Remove extra bootstrap arrow for dropdown-toggle */
        .nav-link.dropdown-toggle::after { display: none !important; }
        .nav-link.dropdown-toggle svg {
          margin-left: 5px;
          transition: transform 0.2s ease-in-out;
        }
        .nav-link.dropdown-toggle svg.open {
          transform: rotate(180deg);
        }

        .navbar-toggler { border: none; font-size: 1.5rem; color: ${getLinkColor()}; }
        .navbar-toggler:focus { box-shadow: none; }


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
            max-height: ${menuOpen ? "calc(100vh - 60px)" : "0"};
            overflow-y: auto;
            transition: max-height 0.3s ease;
          }
          .mobile-menu .nav-link,
          .mobile-menu .dropdown-container > .nav-link {
             color: #111 !important; /* Mobile menu default link color */
             text-align: center;
             padding: 1rem;
             border-bottom: 1px solid #f0f0f0;
             width: 100%;
             text-decoration: none;
          }
          .mobile-menu .nav-link:hover,
          .mobile-menu .dropdown-container > .nav-link:hover {
            color: ${getHoverColor()} !important;
            text-decoration: none;
          }
          .mobile-menu .nav-link.active,
          .mobile-menu .dropdown-container > .nav-link.active {
            color: ${getActiveColor()} !important;
            font-weight: 600;
            background-color: #f0f8ff; /* Light background for active mobile link */
          }

          .dropdown-menu-custom {
            position: static !important;
            max-height: 0;
            overflow: hidden;
            padding: 0;
            transition: max-height 0.3s ease, padding 0.3s ease;
            background: #f9f9f9;
            width: 100%;
          }
          .dropdown-menu-custom.show {
            max-height: 500px;
            padding: 0.5rem 0;
            border-bottom: 1px solid #f0f0f0;
          }
          .dropdown-item-custom {
            display: block;
            text-align: center;
            margin: 0.2rem auto;
            padding: 0.75rem 1rem;
            color: #111;
            border-radius: 6px;
            width: 90%;
            text-decoration: none;

          }
          .dropdown-item-custom:hover { background: #e9e9e9; color: ${getHoverColor()};
          text-decoration: none;            
           }
          .dropdown-item-custom.active { background: #e0efff; color: ${getActiveColor()}; font-weight: 600; }
        }

        /* Desktop dropdown */
        @media (min-width: 992px) {
          .dropdown-container {
            position: relative;
            display: flex;
            align-items: center;
          }
          .dropdown-container:hover .dropdown-menu-custom.desktop-dropdown {
            display: flex;
            opacity: 1;
            visibility: visible;
            pointer-events: auto;
            transform: translateY(0);
            text-decoration: none;            
          }

          .dropdown-menu-custom.desktop-dropdown {
            position: absolute;
            top: 100%;
            left: auto;
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
            transform: translateY(10px);
          }

          .dropdown-item-custom {
            padding: 14px 20px;
            color: #222;
            text-decoration: none;
            font-size: 1rem;
            border-radius: 8px;
            margin: 6px 12px;
            transition: background 0.18s ease, color 0.18s ease;
            display: block;
            text-decoration: none;
          }
          .dropdown-item-custom:hover { background: #f7fbff; color: ${getHoverColor()};
          text-decoration: none;
          }
          // .dropdown-item-custom.active { background: #e0efff; color: ${getActiveColor()}; font-weight: 600; }
        }
          .navbar-brand img { width: 75px; height: 75px; }
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

              {/* Services Dropdown - Mobile */}
              <div className="dropdown-container">
                <Link
                  to="/services"
                  className={`nav-link dropdown-toggle ${
                    location.pathname.startsWith("/services") ? "active" : ""
                  }`}
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

              <div
                className="dropdown-container"
                ref={dropdownRef}
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
              >
                <Link
                  to="/services"
                  className={`nav-link dropdown-toggle ${
                    location.pathname.startsWith("/services") ? "active" : ""
                  }`}
                  onClick={() => {
                    handleNavItemClick();
                  }}
                >
                  Services{" "}
                  <FaChevronDown
                    className={dropdownOpen ? "open" : ""}
                    size={12}
                  />
                </Link>
                <div
                  className={`dropdown-menu-custom desktop-dropdown ${
                    dropdownOpen ? "show" : ""
                  }`}
                >
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
