// import React, { useState } from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import contactImage from "../assets/ContactUs.jpg";
// import LocationsMap from "../components/Locations";

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

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.firstName) newErrors.firstName = "First Name is required.";
//     if (!formData.lastName) newErrors.lastName = "Last Name is required.";
//     if (!formData.email) {
//       newErrors.email = "Email is required.";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email address is invalid.";
//     }
//     if (!formData.country) newErrors.country = "Country is required.";
//     if (!formData.message) newErrors.message = "Message is required.";
//     return newErrors;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({ ...prevState, [name]: value }));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const validationErrors = validateForm();
//     setErrors(validationErrors);

//     if (Object.keys(validationErrors).length === 0) {
//       setSubmitting(true); // start sending

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

//       setSubmitting(false); // reset button
//       setTimeout(() => setToastMessage(""), 3000);
//     }
//   };

//   return (
//     <>
//       <style>
//         {`
//           /* Hero Section */
//           .contact-hero-section {

//             background-image: url('${contactImage}');
//             background-size: 75%;
//             height: 90vh;
//             position: relative;
//             // transform: scaleX(-1);
//              background-size: cover;
//             background-position: center center;
//             background-repeat: no-repeat;
//             display: flex;
//             align-items: center;
//             justify-content: center;
//             text-align: center;
//             color: white;
//           }

//           // .contact-hero-section::before {
//           //   content: '';
//           //   position: absolute;
//           //   top:0;
//           //   left:0;
//           //   width:100%;
//           //   height:100%;
//           //   background-color: rgba(0,0,0,0.5);
//           // }

//           .hero-content {
//             position: relative;
//             z-index: 1;
//           }

//           .hero-heading {
//             font-size: 2rem;
//             font-weight: 600;
//             margin-bottom: 10px;
//                         // transform: scaleX(-1)

//           }

//           .hero-subheading {
//             font-size: 1.25rem;
//             font-weight: 400;
//                         // transform: scaleX(-1)

//           }

//           /* Contact Section */
//           .bg-custom-gray {
//             // background-color: #e9ecef;
//           }

//           .contact-card {
//             // background-color: white;
//             border-radius: 1rem;
//             box-shadow: 0 4px 30px rgba(0,0,0,0.1);
//             padding: 2rem;
//           }

//           /* Left Text Column */
//           // .send-message-underline {
//           //   font-size: 1.25rem;
//           //   font-weight: 400;
//           //   color: #6c757d;
//           //   opacity: 0.8;
//           //   border-bottom: 3px solid #009dff; /* gradient not required for light text */
//           //   padding-bottom: 4px;
//           //   display: inline;
//           // }

// .send-message-underline-wrapper {
//   font-weight: 500;
//   padding-bottom: 8px; /* Space for the pseudo-element to sit below */
//   position: relative;   /* For positioning the pseudo-element */
//   display: inline-block; /* Makes the h5 only as wide as its content */
//   transition: all 0.3s ease;
//   /* You can still add a small margin-bottom if needed for spacing to next element */
// }

// .send-message-underline-wrapper::after {
//   content: '';
//   display: block;
//   /* Set width to 100% of the h5's *content* width */
//   width: 60%;
//   height: 3px; /* Border thickness */
//   background: linear-gradient(90deg, #009dff, #0055ff);
//   position: absolute; /* Position relative to the .send-message-underline-wrapper */
//   left: 0;
//   bottom: 0; /* Aligns to the bottom of the padding-bottom */
//   border-radius: 2px; /* For rounded ends if you had them */
// }

//           .questions-heading {
//             font-size: 1.75rem;
//             font-weight: 600;
//             margin-top: 0.5rem;
//             margin-bottom: 0;
//           }

//           .help-text {
//             font-size: 1.75rem;
//             font-weight: 500;
//             margin-top: 0.25rem;
//             // color: #495057;
//           }

//           /* Form Controls */
//           /* Form Controls */
//           .form-control-futuristic {
//             border: 1px solid #ced4da; /* Changed to a light gray for default */
//             /* You could also use #343a40 for a darker gray/black if preferred */
//             border-radius: 8px;
//             padding: 10px 12px;
//             transition: all 0.3s ease;
//             /* Keep a subtle box-shadow for general styling, or remove if you only want it on focus */
//             box-shadow: 0 2px 5px rgba(0,0,0,0.05); /* Lighter default shadow */
//           }

//           .form-control-futuristic:focus {
//             border-color: #0055ff; /* Blue border on focus */
//             box-shadow: 0 0 10px rgba(0, 157, 255, 0.4); /* Stronger blue shadow on focus */
//             outline: none; /* Removes the browser's default focus outline */
//           }

//           .button-fixed {
//             background: linear-gradient(to right, #64b5f6, #3949ab);
//             color: white;
//             border-radius: 8px;
//             transition: all 0.3s ease;
//           }

//           .button-fixed:hover {
//             background: linear-gradient(to right, #3949ab, #64b5f6);
//             color: #fff;
//           }

//           @media (max-width: 991px) {
//             .hero-heading {
//               font-size: 2.5rem;
//             }
//             .hero-subheading {
//               font-size: 1rem;
//             }
//             .send-message-underline {
//               font-size: 1rem;
//             }
//             .questions-heading {
//               font-size: 1.25rem;
//             }
//             .help-text {
//               font-size: 1.25rem;
//             }
//           }
//         `}
//       </style>

//       {/* Hero Section */}
//       <div className="contact-hero-section">
//         <Container className="hero-content">
//           <Row>
//             <Col>
//               <h1 className="hero-heading">Let's Connect!</h1>
//               <p className="hero-subheading">
//                 We're ready to turn your vision to value.
//               </p>
//             </Col>
//           </Row>
//         </Container>
//       </div>

//       {/* Contact Form Section */}
//       <div className="py-5 bg-custom-gray">
//         <Container>
//           <Row className="contact-card mx-0">
//             {/* Left Text */}
//             <Col
//               lg={4}
//               className="d-flex flex-column justify-content-start p-4"
//             >
//               <h5 className="send-message-underline-wrapper mb-2">
//                 Send Us a Message
//               </h5>
//               <h3 className="questions-heading">Have questions?</h3>
//               <p className="help-text">We’re here to help.</p>
//             </Col>

//             {/* Right Form */}
//             <Col lg={8} className="p-4">
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
//                   placeholder="Please send your message here"
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
//                   {/* <Button type="submit" className="px-5 py-2 button-fixed">
//                     Send Message
//                   </Button> */}
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
//           </Row>
//         </Container>
//       </div>

//       {toastMessage && (
//         <div className="toast-message alert alert-success" role="alert">
//           {toastMessage}
//         </div>
//       )}

//       <LocationsMap />
//     </>
//   );
// }

// export default ContactUsPage;
// import React, { useState } from "react";
// import { Container, Row, Col, Form, Button } from "react-bootstrap";
// import contactImage from "../assets/ContactUs.jpg";
// import LocationsMap from "../components/Locations";

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

//   const validateForm = () => {
//     const newErrors = {};
//     if (!formData.firstName) newErrors.firstName = "First Name is required.";
//     if (!formData.lastName) newErrors.lastName = "Last Name is required.";
//     if (!formData.email) {
//       newErrors.email = "Email is required.";
//     } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
//       newErrors.email = "Email address is invalid.";
//     }
//     if (!formData.country) newErrors.country = "Country is required.";
//     if (!formData.message) newErrors.message = "Message is required.";
//     return newErrors;
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData((prevState) => ({ ...prevState, [name]: value }));
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
//       setTimeout(() => setToastMessage(""), 3000);
//     }
//   };

//   return (
//     <>
//       <style>
//         {`
//           /* HERO SECTION */
//           .contact-hero-section {
//             background-image: url('${contactImage}');
//             background-size: cover;
//             background-position: center center;
//             background-repeat: no-repeat;
//             height: 90vh;
//             position: relative;
//             display: flex;
//             align-items: center;
//             justify-content: flex-start;
//             color: white;
//             overflow: hidden;
//           }

//           .contact-hero-section::before {
//             content: '';
//             position: absolute;
//             top: 0; left: 0;
//             width: 100%; height: 100%;
//             background-color: rgba(0,0,0,0.4);
//             z-index: 0;
//           }

//           .hero-content {
//             position: relative;
//             z-index: 1;
//             text-align: left;
//             max-width: 600px;
//             margin-left: 10vw; /* 👈 pushes it to the left edge */
//             animation: fadeInLeft 1s ease forwards;
//           }

//           @keyframes fadeInLeft {
//             from {
//               opacity: 0;
//               transform: translateX(-40px);
//             }
//             to {
//               opacity: 1;
//               transform: translateX(0);
//             }
//           }

//           .hero-heading {
//             font-size: 3rem;
//             font-weight: 700;
//             margin-bottom: 10px;
//           }

//           .hero-subheading {
//             font-size: 1.25rem;
//             font-weight: 400;
//           }

//           @media (max-width: 768px) {
//             .hero-content {
//               margin-left: 0;
//               text-align: center;
//             }
//             .hero-heading {
//               font-size: 2rem;
//             }
//             .hero-subheading {
//               font-size: 1rem;
//             }
//           }

//           /* CONTACT FORM */
//           .bg-custom-gray {
//             background-color: #f9fafc;
//           }

//           .contact-card {
//             border-radius: 1rem;
//             box-shadow: 0 4px 30px rgba(0,0,0,0.1);
//             padding: 2rem;
//             background-color: white;
//           }

//           .send-message-underline-wrapper {
//             font-weight: 500;
//             padding-bottom: 8px;
//             position: relative;
//             display: inline-block;
//           }

//           .send-message-underline-wrapper::after {
//             content: '';
//             display: block;
//             width: 60%;
//             height: 3px;
//             background: linear-gradient(90deg, #009dff, #0055ff);
//             position: absolute;
//             left: 0;
//             bottom: 0;
//             border-radius: 2px;
//           }

//           .questions-heading {
//             font-size: 1.75rem;
//             font-weight: 600;
//             margin-top: 0.5rem;
//           }

//           .help-text {
//             font-size: 1.25rem;
//             font-weight: 500;
//             margin-top: 0.25rem;
//           }

//           .form-control-futuristic {
//             border: 1px solid #ced4da;
//             border-radius: 8px;
//             padding: 10px 12px;
//             transition: all 0.3s ease;
//             box-shadow: 0 2px 5px rgba(0,0,0,0.05);
//           }

//           .form-control-futuristic:focus {
//             border-color: #0055ff;
//             box-shadow: 0 0 10px rgba(0, 157, 255, 0.4);
//             outline: none;
//           }

//           .button-fixed {
//             background: linear-gradient(to right, #64b5f6, #3949ab);
//             color: white;
//             border-radius: 8px;
//             transition: all 0.3s ease;
//           }

//           .button-fixed:hover {
//             background: linear-gradient(to right, #3949ab, #64b5f6);
//             color: #fff;
//           }

//           .toast-message {
//             position: fixed;
//             bottom: 30px;
//             right: 30px;
//             z-index: 1000;
//           }
//         `}
//       </style>

//       {/* HERO SECTION */}
//       <div className="contact-hero-section">
//         <div className="hero-content">
//           <h1 className="hero-heading">Let's Connect!</h1>
//           <p className="hero-subheading">
//             We're ready to turn your vision to value.
//           </p>
//         </div>
//       </div>

//       {/* CONTACT FORM SECTION */}
//       <div className="py-5 bg-custom-gray">
//         <Container>
//           <Row className="contact-card mx-0">
//             {/* Left Text */}
//             <Col
//               lg={4}
//               className="d-flex flex-column justify-content-start p-4"
//             >
//               <h5 className="send-message-underline-wrapper mb-2">
//                 Send Us a Message
//               </h5>
//               <h3 className="questions-heading">Have questions?</h3>
//               <p className="help-text">We’re here to help.</p>
//             </Col>

//             {/* Right Form */}
//             <Col lg={8} className="p-4">
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
//                   placeholder="Please send your message here"
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
//           </Row>
//         </Container>
//       </div>

//       {toastMessage && (
//         <div className="toast-message alert alert-success" role="alert">
//           {toastMessage}
//         </div>
//       )}

//       <LocationsMap />
//     </>
//   );
// }

// export default ContactUsPage;
import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import contactImage from "../assets/Contact.jpg";
import LocationsMap from "../components/Locations";

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
    setFormData((prevState) => ({ ...prevState, [name]: value }));
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
          /* HERO SECTION */
          // .contact-hero-section {
          //   background-image: url('${contactImage}');
          //   background-size: cover;
          //   background-position: center center;
          //   background-repeat: no-repeat;
          //   height: 90vh;
          //   position: relative;
          //   display: flex;
          //   align-items: center;
          //   justify-content: flex-start;
          //   color: white;
          //   overflow: hidden;
          //   width: 100%;

          // }

          // .contact-hero-section::before {
          //   content: '';
          //   position: absolute;
          //   top: 0; left: 0;
          //   width: 100%; height: 100%;
          //   background-color: rgba(0,0,0,0.4);
          //   z-index: 0;
          // }
            .hero-content {
  position: relative;
  z-index: 1;
  text-align: left;
  max-width: 650px;
  margin-left: 8vw; /* slightly closer to left */
  margin-top: 3vh;  /* move content slightly down */
  // animation: fadeInLeft 1s ease forwards;
              transform: translateY(30px);
            animation: fadeInUp 1.2s ease forwards;

}
             @keyframes fadeInUp {
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

.contact-hero-section {
  background-image: url('${contactImage}');
  background-size: cover;
  background-position: center center;
  background-repeat: no-repeat;
  height: 100vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  color: white;
  overflow: hidden;
  width: 100%;
}

@media (max-width: 768px) {
  .contact-hero-section {
    width: 100%;
    min-height: 80vh; /* keep enough height for text */
    background-size: contain; /* show the entire image */
    background-repeat: no-repeat;
    background-position: center top;
    background-color: #000; /* fallback area color */
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
    padding: 40px 20px;
  }

  .hero-content {
    position: relative;
    z-index: 2;
    color: white;
    background: rgba(0, 0, 0, 0.4); /* optional for text readability */
    padding: 20px;
    border-radius: 12px;
  }

  .hero-heading {
    font-size: 1.8rem;
    font-weight: 600;
  }

  .hero-subheading {
    font-size: 1rem;
    line-height: 1.5;
  }
}


          @keyframes fadeInLeft {
            from {
              opacity: 0;
              transform: translateX(-40px);
            }
            to {
              opacity: 1;
              transform: translateX(0);
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

          // @media (max-width: 768px) {
          //   .hero-content {
          //     margin-left: 0;
          //     text-align: center;
          //   }
          //   .hero-heading {
          //     font-size: 1rem;
          //   }
          //   .hero-subheading {
          //     font-size: 1rem;
          //   }
          // }

          /* CONTACT FORM */
          .bg-custom-gray {
            background-color: var(--bg-contact);
          }

          .contact-card {
            border-radius: 1rem;
            box-shadow: 0 4px 30px rgba(0,0,0,0.1);
            padding: 2rem;
           background-color: var(--bg-ContactCard);
          }

          .send-message-underline-wrapper {
            font-weight: 500;
            padding-bottom: 8px;
            position: relative;
            display: inline-block;
            color:var(--Contact-Text);
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
            font-size: 1.75rem;
            font-weight: 600;
            margin-top: 0.5rem;
            color:var(--Contact-Text);
          }

          .help-text {
            color:var(--Contact-Text);
            font-size: 1.25rem;
            font-weight: 500;
            margin-top: 0.25rem;
          }

          .form-control-futuristic {
            border: 1px solid #ced4da;
            border-radius: 8px;
            padding: 10px 12px;
            transition: all 0.3s ease;
            box-shadow: 0 2px 5px rgba(0,0,0,0.05);
          }

          .form-control-futuristic:focus {
            border-color: #0055ff;
            box-shadow: 0 0 10px rgba(0, 157, 255, 0.4);
            outline: none;
          }

          .button-fixed {
            background: linear-gradient(to right, #64b5f6, #3949ab);
            color: white;
            border-radius: 8px;
            transition: all 0.3s ease;
          }

          .button-fixed:hover {
            background: linear-gradient(to right, #3949ab, #64b5f6);
            color: #fff;
          }

          .toast-message {
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 1000;
          }
        `}
      </style>

      {/* HERO SECTION */}
      <div className="contact-hero-section">
        <div className="hero-content">
          <h1 className="hero-heading">Get in touch</h1>
          <p className="hero-subheading">
            Thanks for your interest in <strong>Nextmetaforce</strong>.<br />{" "}
            Let us connect over phone or email and we’ll connect you with the
            right person.
          </p>
        </div>
      </div>

      {/* CONTACT FORM SECTION */}
      <div className="py-5 bg-custom-gray">
        <Container>
          <Row className="contact-card mx-0">
            {/* Left Text */}
            <Col
              lg={4}
              className="d-flex flex-column justify-content-start p-4"
            >
              <h5 className="send-message-underline-wrapper mb-2">
                Send Us a Message
              </h5>
              <h3 className="questions-heading">Have questions?</h3>
              <p className="help-text">We’re here to help.</p>
            </Col>

            {/* Right Form */}
            <Col lg={8} className="p-4">
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
          </Row>
        </Container>
      </div>

      {toastMessage && (
        <div className="toast-message alert alert-success" role="alert">
          {toastMessage}
        </div>
      )}

      <LocationsMap />
    </>
  );
}

export default ContactUsPage;
