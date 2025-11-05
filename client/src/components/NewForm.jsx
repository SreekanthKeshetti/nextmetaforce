import React, { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

const ScrollContactSection = ({
  heading = "Time to break the ice?",
  description = "We would love to hear from you. Fill the form or email us at",
  email = "info@nextmetaforce.in",
  phone = null,
}) => {
  const initialData = {
    name: "",
    email: "",
    phoneNumber: "",
    company: "",
    subject: "",
    message: "",
  };

  const [formData, setFormData] = useState(initialData);
  const [errors, setErrors] = useState({});
  const [submitting, setSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePhoneChange = (value) => {
    setFormData((prev) => ({ ...prev, phoneNumber: value }));
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim()) errs.name = "Name is required";
    if (!formData.email.trim()) errs.email = "Email is required";
    else {
      const re = /\S+@\S+\.\S+/;
      if (!re.test(formData.email)) errs.email = "Invalid email";
    }
    if (!formData.phoneNumber.trim())
      errs.phoneNumber = "Phone number is required";
    if (!formData.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    setErrors({});
    setSubmitting(true);
    try {
      const response = await fetch("http://localhost:5000/api/contact-scroll", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        alert("Message sent successfully!");
        setFormData(initialData);
      } else {
        alert("Failed to send message.");
      }
    } catch (err) {
      console.error("Submit error:", err);
      alert("Error sending message.");
    }
    setSubmitting(false);
  };

  return (
    <>
      <section className="scroll-contact-section py-5">
        <div className="container">
          <div className="contact-box">
            <div className="row align-items-start">
              {/* Left text */}
              <div className="col-lg-5 mb-4 mb-lg-0">
                <div className="contact-title">
                  <h3>Contact Us</h3>
                  <span className="underline"></span>
                </div>
                <h2 className="">{heading}</h2>
                <p className="lead">
                  {description} <a href={`mailto:${email}`}>{email}</a>
                  {phone && (
                    <>
                      {" "}
                      or call us at <a href={`tel:${phone}`}>{phone}</a>
                    </>
                  )}
                </p>
              </div>

              {/* Form */}
              <div className="col-lg-7">
                <div className="scroll-form-wrapper">
                  <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="modern-form"
                  >
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={handleChange}
                      className={errors.name ? "is-invalid" : ""}
                    />
                    {errors.name && (
                      <div className="invalid-feedback">{errors.name}</div>
                    )}

                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email"
                      value={formData.email}
                      onChange={handleChange}
                      className={errors.email ? "is-invalid" : ""}
                    />
                    {errors.email && (
                      <div className="invalid-feedback">{errors.email}</div>
                    )}

                    <PhoneInput
                      country={"us"}
                      value={formData.phoneNumber}
                      onChange={handlePhoneChange}
                      inputProps={{
                        name: "phoneNumber",
                        required: true,
                      }}
                      containerClass="phone-input-container"
                      inputClass={
                        errors.phoneNumber
                          ? "is-invalid phone-input"
                          : "phone-input"
                      }
                    />
                    {errors.phoneNumber && (
                      <div className="invalid-feedback">
                        {errors.phoneNumber}
                      </div>
                    )}

                    <input
                      type="text"
                      name="company"
                      placeholder="Company"
                      value={formData.company}
                      onChange={handleChange}
                    />
                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      value={formData.subject}
                      onChange={handleChange}
                    />
                    <textarea
                      name="message"
                      rows="4"
                      placeholder="Your Message"
                      value={formData.message}
                      onChange={handleChange}
                      className={errors.message ? "is-invalid" : ""}
                    />
                    {errors.message && (
                      <div className="invalid-feedback">{errors.message}</div>
                    )}

                    <div className="text-end">
                      <button type="submit" disabled={submitting}>
                        {submitting ? "Sending…" : "Send Message"}
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>

        <style jsx="true">{`
          .scroll-contact-section {
            // background-color: #f5f7fa;
          }
          .contact-box {
            background: var(--bg-NewForm);
            box-shadow: 20px 20px 20px 40px rgba(0, 0, 0, 0.08);
            border-radius: 12px;
            padding: 3rem;
          }
          .contact-title h3 {
            font-family: "Montserrat", sans-serif;
            font-weight: 600;
            font-size: 1rem;
            letter-spacing: 1px;
            margin-bottom: 0.5rem;
          }
          .contact-title .underline {
            display: block;
            width: 60px;
            height: 4px;
            background: linear-gradient(90deg, #2196f3, #007bff);
            border-radius: 2px;
            margin-top: 6px;
            margin-bottom: 1.5rem;
          }
          .scroll-contact-section h2 {
            font-size: 1.2rem;
            margin-bottom: 1rem;
            font-weight: 500;
          }
          .scroll-contact-section .lead {
            // color: #555;
            font-size: 1.1rem;
          }

          /* Removed Scrollable wrapper */
          .scroll-form-wrapper {
            max-height: none;
            overflow-y: visible;
            padding-right: 0;
          }

          /* Form Fields */
          .modern-form input,
          .modern-form textarea {
            width: 100%;
            padding: 12px 16px;
            margin-bottom: 15px;
            border-radius: 8px;
            border: 1px solid #ccc;
            font-size: 1rem;
            outline: none;
          }
          .modern-form input:focus,
          .modern-form textarea:focus,
          .phone-input {
            border-color: #2196f3;
            box-shadow: 0 4px 12px rgba(33, 150, 243, 0.2);
          }

          .modern-form textarea {
            resize: none;
          }

          .phone-input-container {
            margin-bottom: 15px;
            width: 100%;
          }
          .phone-input {
            width: 100% !important;
          }

          /* Button */
          .modern-form button {
            background: linear-gradient(to right, #42a5f5, #1a237e);
            color: white;
            font-weight: 500;
            padding: 12px 20px;
            text-transform: uppercase;
            transition: all 0.3s ease-in-out;
            border-radius: 25px;
            border: none;
          }
          .modern-form button:hover {
            background: linear-gradient(to right, #1a237e, #42a5f5);
            color: white;
          }

          .invalid-feedback {
            color: #d9534f;
            font-size: 0.9rem;
            margin-top: -10px;
            margin-bottom: 10px;
          }

          .scroll-contact-section a {
            // color: #000;
            text-decoration: none;
          }
          .scroll-contact-section a:hover {
            color: #2196f3;
            text-decoration: none;
          }

          @media (max-width: 992px) {
            .scroll-form-wrapper {
              max-height: none;
              overflow-y: visible;
              padding-right: 0;
            }
          }
        `}</style>
      </section>
    </>
  );
};

export default ScrollContactSection;
