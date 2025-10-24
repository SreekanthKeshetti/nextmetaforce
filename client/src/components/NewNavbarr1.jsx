import React, { useState, useEffect, useRef } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import logo from "../assets/logo.png";

function MyNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handleScroll);

    const handleResize = () => {
      const mobileStatus = window.innerWidth < 992;
      setIsMobile(mobileStatus);
      if (!mobileStatus) {
        setDropdownOpen(false);
        setMenuOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);

    const handleClickOutside = (e) => {
      if (
        dropdownOpen &&
        dropdownRef.current &&
        !dropdownRef.current.contains(e.target)
      ) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownOpen]);

  const toggleMenu = (expanded) => {
    setMenuOpen(expanded);
    if (!expanded) setDropdownOpen(false);
  };

  const toggleDropdownForMobile = (e) => {
    e.preventDefault();
    if (isMobile && menuOpen) {
      setDropdownOpen((prev) => !prev);
    }
  };

  const handleNavItemClick = () => {
    setDropdownOpen(false);
    if (isMobile) setMenuOpen(false);
  };

  return (
    <>
      <style>{`
        .navbar-custom {
          padding: 0.8rem 1.2rem;
          transition: background 0.25s ease, box-shadow 0.25s ease;
          width: 100%; z-index: 1050; top: 0;
        }
        .transparent-navbar { background-color: rgba(0, 0, 0, 0); position: absolute; }
        .glassy-navbar {
          background: rgba(255,255,255,0.88);
          backdrop-filter: blur(8px);
          box-shadow: 0 6px 18px rgba(0,0,0,0.08);
          position: sticky;
          border-bottom: 1px solid rgba(0,0,0,0.04);
        }
        .brand-wrap img { display: block; }

        .nav-link {
          transition: color 0.2s;
          font-weight: 500;
          color: #111;
          text-decoration: none;
          text-align: center;
        }
        .nav-link:hover { color: #0d6efd; }
        .transparent-navbar .nav-link { color: #fff !important; }
        .transparent-navbar .navbar-toggler .navbar-toggler-icon { filter: invert(1) !important; }

        .dropdown-container {
          position: relative;
         }
        .nav-link.dropdown-toggle {
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          user-select: none;
        }
        .nav-link.dropdown-toggle::after {
          display: none !important; /* remove default triangle */
        }
        .dropdown-arrow { margin-left: 6px; transition: transform 0.28s cubic-bezier(.2,.9,.2,1); }
        .dropdown-arrow.open { transform: rotate(180deg); }

        .dropdown-menu-custom {
          position: absolute;
          top: 100%;
          right:5px ; /* align with parent link */
          min-width: 240px;
          display: flex;
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
        .dropdown-menu-custom.show { opacity: 1; visibility: visible; pointer-events: auto; transform: translateY(0); }

        .dropdown-item-custom {
          padding: 14px 20px;
          color: #222;
          text-decoration: none;
          font-size: 1rem;
          border-radius: 8px;
          margin: 6px 12px;
          transition: background 0.18s ease, color 0.18s ease;
        }
        .dropdown-item-custom:hover {
          background: #f7fbff;
          color: #0d6efd;
        }

        @media (max-width: 991px) {
          .navbar-collapse.show {
            background: #fff;
            box-shadow: 0 8px 25px rgba(0,0,0,0.1);
            border-radius: 12px;
            padding: 1rem 0;
          }

          /* Mobile menu main links */
          .navbar-collapse.show .nav-link {
            color: #111 !important;
          }
          .navbar-collapse.show .nav-link:hover {
            color: #0d6efd !important;
          }

          .dropdown-menu-custom {
            position: static;
            max-height: 0;
            overflow: hidden;
            padding: 0;
            transition: max-height 0.4s ease;
            background: transparent;
          }
          .dropdown-menu-custom.show {
            max-height: 500px;
            padding: 10px 0;
          }

          .dropdown-item-custom {
            margin: 6px 12px;
            color: #111;
            font-size: 1rem;
          }
          .dropdown-item-custom:hover {
            background: #f7fbff;
            color: #0d6efd;
          }
        }
      `}</style>

      <Navbar
        expand="lg"
        className={`navbar-custom ${
          scrolled ? "glassy-navbar" : "transparent-navbar"
        }`}
        expanded={menuOpen}
        onToggle={toggleMenu}
      >
        <Container fluid>
          <Navbar.Brand as={Link} to="/" className="mx-2 brand-wrap">
            <img src={logo} alt="Logo" width="50" height="50" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center flex-column flex-lg-row">
              <Nav.Link as={Link} to="/" onClick={handleNavItemClick}>
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about" onClick={handleNavItemClick}>
                About Us
              </Nav.Link>

              {/* Services Dropdown */}
              <div
                className="dropdown-container"
                ref={dropdownRef}
                onMouseEnter={() => !isMobile && setDropdownOpen(true)}
                onMouseLeave={() => !isMobile && setDropdownOpen(false)}
              >
                <Link
                  to="/services"
                  className="nav-link dropdown-toggle"
                  onClick={isMobile ? toggleDropdownForMobile : undefined}
                  aria-expanded={dropdownOpen}
                >
                  Services
                  <FaChevronDown
                    className={`dropdown-arrow ${dropdownOpen ? "open" : ""}`}
                    size={12}
                  />
                </Link>

                <div
                  className={`dropdown-menu-custom ${
                    dropdownOpen ? "show" : ""
                  }`}
                >
                  {[
                    { path: "/services", label: "Managed IT services" },
                    {
                      path: "/services",
                      label: "Software Development ",
                    },
                    { path: "/services", label: "IT Consulting" },
                    { path: "/services", label: "Artificial Intelligence" },
                    // { path: "/services/consulting", label: "IT Consulting" },
                    {
                      path: "/services",
                      label: "View All Services →",
                      viewAll: true,
                    },
                  ].map((item, idx) => (
                    <Link
                      key={idx}
                      to={item.path}
                      className={`dropdown-item-custom ${
                        item.viewAll ? "view-all" : ""
                      }`}
                      onClick={handleNavItemClick}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              </div>

              <Nav.Link as={Link} to="/solutions" onClick={handleNavItemClick}>
                Solutions
              </Nav.Link>
              <Nav.Link as={Link} to="/contact" onClick={handleNavItemClick}>
                Contact Us
              </Nav.Link>
              <Nav.Link as={Link} to="/careers" onClick={handleNavItemClick}>
                Careers
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default MyNavbar;
