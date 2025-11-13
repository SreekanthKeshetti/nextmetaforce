// import React from "react";
// import { Container, Row, Col } from "react-bootstrap";

// function Footer() {
//   return (
//     <>
//       <style>
//         {`
//         .footer {
//           background-color: var(--bg-footer)!important;
//           color: var(--text-light);
//           padding: 60px 0;
//           font-family: "Inter", sans-serif;
//         }

//         // .footer h5 {
//         //   color: var(--accent-blue);
//         //   margin-bottom: 15px;
//         //   font-weight: 500;
//         //   font-size: 1.1rem;
//         // }

//         .footer h5 {
//   color: var(--accent-blue);
//   margin-bottom: 15px;
//   font-weight: 600;       /* make heading slightly bolder */
//   font-size: 1.15rem;     /* slightly bigger than before */
//   padding-bottom: 5px;    /* space for underline */
//   border-bottom: 2px solid #4c79f3ff;  /* subtle colored underline */
//   display: inline-block;   /* so underline fits text width */
// }

//         .footer ul {
//           list-style: none;
//           padding: 0;
//         }

//         .footer ul li {
//           margin-bottom: 8px;
//         }

//         .footer ul li a {
//           color: var(--footer-text);
//           text-decoration: none;
//           transition: color 0.3s ease;
//         }

//         .footer ul li a:hover {
//           color: #4c79f3ff !important;
//         }

//         .footer .company-name {
//           font-size: 1.5rem;
//           font-weight: 600;
//           margin-bottom: 15px;
//           color: var(--accent-blue);
//         }

//         .footer .contact-info p {
//           margin-bottom: 8px;
//           color: var(--text-muted);
//         }

//         .footer .contact-info .fa-solid {
//           margin-right: 10px;
//           color: var(--accent-blue);
//         }

//         .footer .social-icons a {
//           font-size: 1.7rem;
//           margin-right: 18px;
//           transition: transform 0.2s ease, opacity 0.2s ease;
//         }

//         /* Brand colors */
//         .footer .social-icons a[aria-label="LinkedIn"] i { color: #0a66c2; }
//         .footer .social-icons a[aria-label="Facebook"] i { color: #1877f2; }
//         .footer .social-icons a[aria-label="Instagram"] i { color: #e1306c; }
//         .footer .social-icons a[aria-label="WhatsApp"] i { color: #25d366; }

//         .footer .social-icons a:hover i {
//           transform: translateY(-4px);
//           opacity: 0.8;
//         }

//         @media (max-width: 767px) {
//           .footer .text-md-start { text-align: center !important; }
//           .footer .social-icons a { margin-right: 12px; }
//         }
//         `}
//       </style>

//       <footer className="footer">
//         <Container>
//           <Row>
//             {/* Column 1: Company Info */}
//             <Col md={3} sm={6} className="text-md-start text-center">
//               <p className="company-name">Nextmetaforce</p>
//               <div className="contact-info">
//                 <p>
//                   <i className="fa-solid fa-envelope"></i>
//                   <a href="mailto:info@nextmetaforce.com">
//                     info@nextmetaforce.com
//                   </a>
//                 </p>
//                 <p>
//                   <i className="fa-solid fa-phone"></i>
//                   <a href="tel:+1234567890">+91 7093693648</a>
//                 </p>
//               </div>
//             </Col>

//             {/* Column 2: Services + Technologies */}
//             <Col
//               md={3}
//               sm={6}
//               className="text-md-start text-center mt-4 mt-md-0"
//             >
//               <h5>Services</h5>
//               <ul>
//                 <li>
//                   <a href="/services#managed-it">Digital Transformation</a>
//                 </li>
//                 <li>
//                   <a href="/services#consulting">Software Development</a>
//                 </li>
//                 <li>
//                   <a href="/services#software">IT Consulting</a>
//                 </li>
//                 <li>
//                   <a href="/services#cloud">Cloud Solutions</a>
//                 </li>
//                 <li>
//                   <a href="/services#training">Training&Enablement</a>
//                 </li>
//                 <li>
//                   <a href="/services#ai">Artificial Intelligence</a>
//                 </li>
//               </ul>

//               {/* <h5 className="mt-3">Technologies Expertise</h5>
//               <ul>
//                 <li>
//                   <a href="/technologies/aws">AWS</a>
//                 </li>
//                 <li>
//                   <a href="/technologies/devops">DevOps</a>
//                 </li>
//                 <li>
//                   <a href="/technologies/salesforce">Salesforce</a>
//                 </li>
//                 <li>
//                   <a href="/technologies/azure">Azure</a>
//                 </li>
//                 <li>
//                   <a href="/technologies/dynamics">Microsoft Dynamics</a>
//                 </li>
//                 <li>
//                   <a href="/technologies/oracle">Oracle</a>
//                 </li>
//               </ul> */}
//             </Col>

//             {/* Column 3: Quick Links (Site Map) */}
//             <Col
//               md={3}
//               sm={6}
//               className="text-md-start text-center mt-4 mt-md-0"
//             >
//               <h5>Quick Links</h5>
//               <ul>
//                 <li>
//                   <a href="/">Home</a>
//                 </li>
//                 <li>
//                   <a href="/about">About Us</a>
//                 </li>
//                 <li>
//                   <a href="/services">Services</a>
//                 </li>
//                 <li>
//                   <a href="/solutions">Solutions</a>
//                 </li>
//                 <li>
//                   <a href="/contact">Contact Us</a>
//                 </li>
//                 <li>
//                   <a href="/careers">Careers</a>
//                 </li>
//               </ul>
//             </Col>

//             {/* Column 4: Industries + Socials */}
//             <Col
//               md={3}
//               sm={6}
//               className="text-md-start text-center mt-4 mt-md-0"
//             >
//               <h5>Industries We Serve</h5>
//               <ul>
//                 <li>
//                   <a href="/services">Retail & Consumer Goods</a>
//                 </li>
//                 <li>
//                   <a href="/services">Finance</a>
//                 </li>
//                 <li>
//                   <a href="/services">Healthcare</a>
//                 </li>
//                 <li>
//                   <a href="/services">Manufacturing</a>
//                 </li>
//                 <li>
//                   <a href="/services">Fashion & Apparel</a>
//                 </li>
//                 <li>
//                   <a href="/services">Logistics & Transport</a>
//                 </li>
//               </ul>

//               <div className="social-icons mt-3">
//                 <a
//                   href="https://www.linkedin.com/in/sreekanth-keshetti/"
//                   target="_blank"
//                   aria-label="LinkedIn"
//                   rel="noopener noreferrer"
//                 >
//                   <i className="fab fa-linkedin"></i>
//                 </a>
//                 <a
//                   href="https://facebook.com/nextmetaforce"
//                   target="_blank"
//                   aria-label="Facebook"
//                   rel="noopener noreferrer"
//                 >
//                   <i className="fab fa-facebook"></i>
//                 </a>
//                 <a
//                   href="https://instagram.com/nextmetaforce"
//                   target="_blank"
//                   aria-label="Instagram"
//                   rel="noopener noreferrer"
//                 >
//                   <i className="fab fa-instagram"></i>
//                 </a>
//                 <a
//                   href="https://api.whatsapp.com/send?phone=917093693648&text=Hi%20Nextmetaforce!%20I%27d%20like%20to%20learn%20more%20about%20your%20services."
//                   target="_blank"
//                   aria-label="WhatsApp"
//                   rel="noopener noreferrer"
//                 >
//                   <i className="fab fa-whatsapp"></i>
//                 </a>
//               </div>
//             </Col>
//           </Row>

//           <hr className="mt-5 mb-3 border-secondary" />
//           <div className="text-center">
//             <div>
//               &copy; {new Date().getFullYear()} NextMetaForce. All rights
//               reserved.
//               <p>Privacy Policy &nbsp;&nbsp;•Terms of Service </p>
//             </div>
//           </div>
//         </Container>
//       </footer>
//     </>
//   );
// }

// export default Footer;
import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  return (
    <>
      <style>
        {`
        .footer {
          background-color: var(--bg-footer)!important;
          color: var(--text-light);
          padding: 60px 0;
          font-family: "Inter", sans-serif;
        }

        .footer h5 {
          color: var(--accent-blue);
          margin-bottom: 15px;
          font-weight: 600;
          font-size: 1.15rem;
          padding-bottom: 5px;
          border-bottom: 2px solid #4c79f3ff;
          display: inline-block;
        }

        .footer ul {
          list-style: none;
          padding: 0;
        }

        .footer ul li {
          margin-bottom: 8px;
        }

        .footer ul li a {
          color: var(--footer-text);
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .footer ul li a:hover {
          color: #4c79f3ff !important;
        }

        .footer .company-name {
          font-size: 1.5rem;
          font-weight: 600;
          margin-bottom: 15px;
          color: var(--accent-blue);
        }

        .footer .contact-info p {
          margin-bottom: 8px;
          color: var(--text-muted);
        }

        .footer .contact-info .fa-solid {
          margin-right: 10px;
          color: var(--accent-blue);
        }

        .footer .social-icons a {
          font-size: 1.7rem;
          margin-right: 18px;
          transition: transform 0.2s ease, opacity 0.2s ease;
        }

        /* Brand colors */
        .footer .social-icons a[aria-label="LinkedIn"] i { color: #0a66c2; }
        .footer .social-icons a[aria-label="Facebook"] i { color: #1877f2; }
        .footer .social-icons a[aria-label="Instagram"] i { color: #e1306c; }
        .footer .social-icons a[aria-label="WhatsApp"] i { color: #25d366; }

        .footer .social-icons a:hover i {
          transform: translateY(-4px);
          opacity: 0.8;
        }

        @media (max-width: 767px) {
          .footer .text-md-start { text-align: center !important; }
          .footer .social-icons a { margin-right: 12px; }
        }
         
        `}
      </style>

      <footer className="footer">
        <Container>
          <Row>
            {/* Column 1: Company Info */}
            <Col md={3} sm={6} className="text-md-start text-center">
              <p className="company-name">Nextmetaforce</p>
              <div className="contact-info">
                <p>
                  <i className="fa-solid fa-envelope"></i>
                  <a href="mailto:info@nextmetaforce.com">
                    info@nextmetaforce.com
                  </a>
                </p>
                <p>
                  <i className="fa-solid fa-phone"></i>
                  <a href="tel:+917093693648">+91 7093693648</a>
                </p>

                {/* ✅ Office Address Added Here */}
                {/* ✅ Office Address Added Here (matches footer typography) */}
                <div className="mt-2">
                  <ul>
                    <i className="fa-solid fa-location-dot"></i>
                    316, 3rd Floor,
                    <br /> &nbsp;&nbsp;&nbsp;&nbsp;Gowra Palladium,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;HITEC City, Hyderabad,
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;Telangana – 500081.
                  </ul>
                </div>
              </div>
            </Col>

            {/* Column 2: Services */}
            <Col
              md={3}
              sm={6}
              className="text-md-start text-center mt-4 mt-md-0"
            >
              <h5>Services</h5>
              <ul>
                <li>
                  <a href="/services#managed-it">Digital Transformation</a>
                </li>
                <li>
                  <a href="/services#consulting">Software Development</a>
                </li>
                <li>
                  <a href="/services#software">IT Consulting</a>
                </li>
                <li>
                  <a href="/services#cloud">Cloud Solutions</a>
                </li>
                <li>
                  <a href="/services#training">Training & Enablement</a>
                </li>
                <li>
                  <a href="/services#ai">Artificial Intelligence</a>
                </li>
              </ul>
            </Col>

            {/* Column 3: Quick Links */}
            <Col
              md={3}
              sm={6}
              className="text-md-start text-center mt-4 mt-md-0"
            >
              <h5>Quick Links</h5>
              <ul>
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/about">About Us</a>
                </li>
                <li>
                  <a href="/services">Services</a>
                </li>
                <li>
                  <a href="/solutions">Solutions</a>
                </li>
                <li>
                  <a href="/contact">Contact Us</a>
                </li>
                <li>
                  <a href="/careers">Careers</a>
                </li>
              </ul>
            </Col>

            {/* Column 4: Industries + Socials */}
            <Col
              md={3}
              sm={6}
              className="text-md-start text-center mt-4 mt-md-0"
            >
              <h5>Industries We Serve</h5>
              <ul>
                <li>
                  <a href="/services">Retail & Consumer Goods</a>
                </li>
                <li>
                  <a href="/services">Finance</a>
                </li>
                <li>
                  <a href="/services">Healthcare</a>
                </li>
                <li>
                  <a href="/services">Manufacturing</a>
                </li>
                <li>
                  <a href="/services">Fashion & Apparel</a>
                </li>
                <li>
                  <a href="/services">Logistics & Transport</a>
                </li>
              </ul>

              <div className="social-icons mt-3">
                <a
                  href="https://www.linkedin.com/in/sreekanth-keshetti/"
                  target="_blank"
                  aria-label="LinkedIn"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                <a
                  href="https://facebook.com/nextmetaforce"
                  target="_blank"
                  aria-label="Facebook"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-facebook"></i>
                </a>
                <a
                  href="https://instagram.com/nextmetaforce"
                  target="_blank"
                  aria-label="Instagram"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-instagram"></i>
                </a>
                <a
                  href="https://api.whatsapp.com/send?phone=917093693648&text=Hi%20Nextmetaforce!%20I%27d%20like%20to%20learn%20more%20about%20your%20services."
                  target="_blank"
                  aria-label="WhatsApp"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>
              </div>
            </Col>
          </Row>

          <hr className="mt-5 mb-3 border-secondary" />
          <div className="text-center">
            <div>
              &copy; {new Date().getFullYear()} NextMetaForce. All rights
              reserved.
              <p>Privacy Policy &nbsp;&nbsp;•&nbsp;&nbsp;Terms of Service</p>
            </div>
          </div>
        </Container>
      </footer>
    </>
  );
}

export default Footer;
