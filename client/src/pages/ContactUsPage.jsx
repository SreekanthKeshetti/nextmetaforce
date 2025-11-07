import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Locations from "../components/Locations";
import ConatctUsImage from "../assets/contactImg.webp";

function ContactUsPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
    message: "",
  });
  const [submitting, setSubmitting] = useState(false);
  const [errors, setErrors] = useState({});
  const [toastMessage, setToastMessage] = useState("");

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = "First Name is required.";
    if (!formData.lastName) newErrors.lastName = "Last Name is required.";
    if (!formData.email) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email address is invalid.";
    }
    if (!formData.country) newErrors.country = "Country is required.";
    if (!formData.message) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validateForm();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitting(true);
      try {
        const response = await fetch("http://localhost:5000/api/contact-page", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });
        if (response.ok) {
          setToastMessage("Form submitted successfully!");
          setFormData({
            firstName: "",
            lastName: "",
            email: "",
            country: "",
            message: "",
          });
        } else {
          alert("Failed to send email!");
        }
      } catch (error) {
        console.error(error);
        alert("Error sending email!");
      }
      setSubmitting(false);
      setTimeout(() => setToastMessage(""), 3000);
    }
  };

  return (
    <>
      <style>
        {`
/* ============================
   HERO SECTION
============================ */
.contact-hero-section {
  background-image: url(${ConatctUsImage});
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 90vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
  overflow: hidden;
  width: 100%;
}

.hero-content {
  position: relative;
  z-index: 1;
  text-align: left;
  max-width: 650px;
  margin-left: 8vw;
  margin-top: 3vh;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 1.2s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-heading {
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 16px;
}

.hero-subheading {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.6;
  opacity: 0.95;
}

/* Mobile Fix */
@media (max-width: 768px) {
  .contact-hero-section {
    background-size: cover;
    background-position: 20% center;
    justify-content: center;
    text-align: center;
    padding: 40px 20px;
  }

  .hero-content {
    // background: rgba(0, 0, 0, 0.4);
    padding: 20px;
    border-radius: 12px;
  }

  .hero-heading {
    font-size: 1.8rem;
  }
}

/* ============================
   CONTACT FORM + MAP SECTION
============================ */
.bg-custom-gray {
  background-color: var(--bg-contact, #f8f9fa);
}

.contact-card {
  display: flex; /* ✅ needed to align form + map side by side */
  flex-wrap: wrap;
  border-radius: 1rem;
  overflow: hidden;
  background-color: var(--bg-ContactCard, #fff);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
}

/* Left column */
.send-message-underline-wrapper {
  font-weight: 500;
  padding-bottom: 8px;
  position: relative;
  display: inline-block;
  color: var(--Contact-Text, #000);
}

.send-message-underline-wrapper::after {
  content: '';
  display: block;
  width: 60%;
  height: 3px;
  background: linear-gradient(90deg, #009dff, #0055ff);
  position: absolute;
  left: 0;
  bottom: 0;
  border-radius: 2px;
}

.questions-heading {
  font-size: 1.05rem;
  font-weight: 500;
  margin-top: 0.5rem;
  color: var(--Contact-Text, #000);
}

/* Form styling */
.form-control-futuristic {
  border: 1px solid #ced4da;
  border-radius: 8px;
  padding: 10px 12px;
  transition: all 0.3s ease;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
}

.form-control-futuristic:focus {
  border-color: #0055ff;
  box-shadow: 0 0 10px rgba(0, 157, 255, 0.4);
  outline: none;
}

/* Button */
.button-fixed {
  background: linear-gradient(to right, #64b5f6, #3949ab);
  color: white;
  border-radius: 8px;
  transition: all 0.3s ease;
  border: none;
}

.button-fixed:hover {
  background: linear-gradient(to right, #3949ab, #64b5f6);
}

/* Toast */
.toast-message {
  position: fixed;
  bottom: 30px;
  right: 30px;
  z-index: 1000;
}

/* ============================
   MAP STYLING
============================ */
.contact-map {
  flex: 1;
  height: 100%;
  min-height: 400px;
}

.contact-map iframe {
  width: 100%;
  height: 100%;
  border: 0;
  border-radius: 0 1rem 1rem 0;
}

/* Responsive */
@media (max-width: 992px) {
  .contact-card {
    flex-direction: column;
  }

  .contact-map iframe {
    border-radius: 0 0 1rem 1rem;
    min-height: 350px;
  }
}

`}
      </style>

      {/* HERO SECTION */}
      <div className="contact-hero-section">
        <div className="hero-content">
          {/* <h1 className="hero-heading">Get in touch</h1>
          <p className="hero-subheading">
            Thanks for your interest in <strong>Nextmetaforce</strong>.<br />
            Let us connect over phone or email and we’ll connect you with the
            right person.
          </p> */}
        </div>
      </div>

      {/* CONTACT FORM + MAP SECTION */}
      <div className="py-5 bg-custom-gray">
        <Container>
          <Row className="contact-card mx-0">
            {/* Left: Contact Form */}
            <Col lg={6} md={12} className="p-4">
              <h5 className="send-message-underline-wrapper mb-2">
                Send Us a Message
              </h5>
              <h3 className="questions-heading mb-4">Have questions?</h3>

              <Form onSubmit={handleSubmit} noValidate>
                <Row className="mb-3 g-3">
                  <Col md={6}>
                    <Form.Control
                      type="text"
                      placeholder="First Name"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      isInvalid={!!errors.firstName}
                      className="form-control-futuristic"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.firstName}
                    </Form.Control.Feedback>
                  </Col>
                  <Col md={6}>
                    <Form.Control
                      type="text"
                      placeholder="Last Name"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      isInvalid={!!errors.lastName}
                      className="form-control-futuristic"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.lastName}
                    </Form.Control.Feedback>
                  </Col>
                </Row>

                <Row className="mb-3 g-3">
                  <Col md={6}>
                    <Form.Control
                      type="email"
                      placeholder="Email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      isInvalid={!!errors.email}
                      className="form-control-futuristic"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </Col>
                  <Col md={6}>
                    <Form.Control
                      type="text"
                      placeholder="Country"
                      name="country"
                      value={formData.country}
                      onChange={handleChange}
                      isInvalid={!!errors.country}
                      className="form-control-futuristic"
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.country}
                    </Form.Control.Feedback>
                  </Col>
                </Row>

                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="Please send your message here"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  isInvalid={!!errors.message}
                  className="form-control-futuristic mb-3"
                />
                <Form.Control.Feedback type="invalid">
                  {errors.message}
                </Form.Control.Feedback>

                <div className="d-flex justify-content-end">
                  <Button
                    type="submit"
                    className="px-5 py-2 button-fixed"
                    disabled={submitting}
                  >
                    {submitting ? "Sending…" : "Send Message"}
                  </Button>
                </div>
              </Form>
            </Col>

            {/* Right: Map */}
            <Col
              lg={6}
              md={12}
              className="p-0 d-flex align-items-stretch justify-content-center"
            >
              <iframe
                title="Nextmetaforce Office Location"
                src="https://www.google.com/maps?q=316,+3rd+floor,+Gowra+Palladium,+Silpa+Gram+Craft+Village,+HITEC+City,+Hyderabad,+Telangana+500081&output=embed"
                width="100%"
                height="100%"
                style={{ border: "0", borderRadius: "0 1rem 1rem 0" }}
                allowFullScreen=""
                loading="lazy"
              ></iframe>
            </Col>
          </Row>
        </Container>
      </div>

      {toastMessage && (
        <div className="toast-message alert alert-success" role="alert">
          {toastMessage}
        </div>
      )}
      <Locations />
    </>
  );
}

export default ContactUsPage;
// import React, { useState } from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import Locations from "../components/Locations";
// import ConatctUsImage from "../assets/contactImg.webp";

// function ContactUsPage() {
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     country: "",
//     message: "",
//   });
//   const [submitting, setSubmitting] = useState(false);
//   const [errors, setErrors] = useState({});
//   const [toastMessage, setToastMessage] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prev) => ({ ...prev, [name]: value }));
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.firstName.trim())
//       newErrors.firstName = "First Name is required.";
//     if (!formData.lastName.trim())
//       newErrors.lastName = "Last Name is required.";
//     if (!formData.email.trim()) newErrors.email = "Email is required.";
//     else if (!/\S+@\S+\.\S+/.test(formData.email))
//       newErrors.email = "Email is invalid.";
//     if (!formData.country.trim()) newErrors.country = "Country is required.";
//     if (!formData.message.trim()) newErrors.message = "Message is required.";
//     return newErrors;
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       setSubmitting(true);
//       try {
//         const response = await fetch("http://localhost:5000/api/contact-page", {
//           method: "POST",
//           headers: { "Content-Type": "application/json" },
//           body: JSON.stringify(formData),
//         });
//         if (response.ok) {
//           setToastMessage("Form submitted successfully!");
//           setFormData({
//             firstName: "",
//             lastName: "",
//             email: "",
//             country: "",
//             message: "",
//           });
//         } else {
//           alert("Failed to send email!");
//         }
//       } catch (error) {
//         console.error(error);
//         alert("Error sending email!");
//       }
//       setSubmitting(false);

//       // Hide toast after 3 seconds
//       setTimeout(() => setToastMessage(""), 3000);
//     }
//   };

//   return (
//     <>
//       {/* HERO SECTION + styles omitted for brevity */}

//       {/* CONTACT FORM + MAP SECTION */}
//       <div className="py-5 bg-custom-gray">
//         <Container>
//           <Row className="contact-card mx-0">
//             {/* Left: Contact Form */}
//             <Col lg={6} md={12} className="p-4">
//               <h5 className="send-message-underline-wrapper mb-2">
//                 Send Us a Message
//               </h5>
//               <h3 className="questions-heading mb-4">Have questions?</h3>

//               <Form onSubmit={handleSubmit} noValidate>
//                 <Row className="mb-3 g-3">
//                   <Col md={6}>
//                     <Form.Control
//                       type="text"
//                       placeholder="First Name"
//                       name="firstName"
//                       value={formData.firstName}
//                       onChange={handleChange}
//                       isInvalid={!!errors.firstName}
//                       className="form-control-futuristic"
//                     />
//                     <Form.Control.Feedback type="invalid">
//                       {errors.firstName}
//                     </Form.Control.Feedback>
//                   </Col>
//                   <Col md={6}>
//                     <Form.Control
//                       type="text"
//                       placeholder="Last Name"
//                       name="lastName"
//                       value={formData.lastName}
//                       onChange={handleChange}
//                       isInvalid={!!errors.lastName}
//                       className="form-control-futuristic"
//                     />
//                     <Form.Control.Feedback type="invalid">
//                       {errors.lastName}
//                     </Form.Control.Feedback>
//                   </Col>
//                 </Row>

//                 <Row className="mb-3 g-3">
//                   <Col md={6}>
//                     <Form.Control
//                       type="email"
//                       placeholder="Email"
//                       name="email"
//                       value={formData.email}
//                       onChange={handleChange}
//                       isInvalid={!!errors.email}
//                       className="form-control-futuristic"
//                     />
//                     <Form.Control.Feedback type="invalid">
//                       {errors.email}
//                     </Form.Control.Feedback>
//                   </Col>
//                   <Col md={6}>
//                     <Form.Control
//                       type="text"
//                       placeholder="Country"
//                       name="country"
//                       value={formData.country}
//                       onChange={handleChange}
//                       isInvalid={!!errors.country}
//                       className="form-control-futuristic"
//                     />
//                     <Form.Control.Feedback type="invalid">
//                       {errors.country}
//                     </Form.Control.Feedback>
//                   </Col>
//                 </Row>

//                 <Form.Control
//                   as="textarea"
//                   rows={4}
//                   placeholder="Your message"
//                   name="message"
//                   value={formData.message}
//                   onChange={handleChange}
//                   isInvalid={!!errors.message}
//                   className="form-control-futuristic mb-3"
//                 />
//                 <Form.Control.Feedback type="invalid">
//                   {errors.message}
//                 </Form.Control.Feedback>

//                 <div className="d-flex justify-content-end">
//                   <Button
//                     type="submit"
//                     className="px-5 py-2 button-fixed"
//                     disabled={submitting}
//                   >
//                     {submitting ? "Sending…" : "Send Message"}
//                   </Button>
//                 </div>
//               </Form>
//             </Col>

//             {/* Right: Map */}
//             <Col
//               lg={6}
//               md={12}
//               className="p-0 d-flex align-items-stretch justify-content-center"
//             >
//               <iframe
//                 title="Nextmetaforce Office Location"
//                 src="https://www.google.com/maps?q=316,+3rd+floor,+Gowra+Palladium,+Silpa+Gram+Craft+Village,+HITEC+City,+Hyderabad,+Telangana+500081&output=embed"
//                 width="100%"
//                 height="100%"
//                 style={{ border: "0", borderRadius: "0 1rem 1rem 0" }}
//                 allowFullScreen=""
//                 loading="lazy"
//               ></iframe>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       {/* Toast message */}
//       {toastMessage && (
//         <div className="toast-message alert alert-success" role="alert">
//           {toastMessage}
//         </div>
//       )}

//       <Locations />
//     </>
//   );
// }

// export default ContactUsPage;
