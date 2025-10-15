import React from "react";
import Footer from "./Footer";
import { Link } from "react-router-dom";

export default function Modal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <>
      <style>{`
        /* Overlay */
        .modal-overlay {
          position: fixed;
          top: 0; left: 0;
          width: 100vw; height: 100vh;
          background: #f9fafb;
          overflow-y: auto;
          z-index: 9999;
          padding: 30px 50px;
          box-sizing: border-box;
          font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        /* Close button */
        .modal-close {
          position: fixed;
          top: 25px; right: 35px;
          font-size: 2.5rem;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 10;
          color: #1e293b;
        }

        /* Top bar */
        .modal-topbar {
          display: flex;
          justify-content: flex-start;
          margin-bottom: 30px;
          font-size: 1.6rem;
          font-weight: 700;
          color: #2563eb;
        }

        /* Title section */
        .modal-title-section {
          text-align: center;
          margin-bottom: 50px;
        }

        .modal-title-section h2 {
          font-size: 2.2rem;
          font-weight: 700;
          margin-bottom: 10px;
          color: #1e3a8a;
        }

        .modal-title-section hr {
          width: 120px;
          border: 3px solid #3b82f6;
          margin: 0 auto;
          border-radius: 2px;
        }

        /* Two-column layout */
        .modal-two-column {
          display: flex;
          gap: 50px;
          margin-bottom: 70px;
          flex-wrap: wrap;
        }

        /* Left column: Form */
        .left-column { flex: 1; min-width: 320px; }

        .demo-form {
          display: flex;
          flex-direction: column;
          padding: 30px;
          border: 1px solid #93c5fd;
          border-radius: 15px;
          background: #ffffff;
          box-shadow: 0 8px 20px rgba(0,0,0,0.05);
        }

        .demo-form .form-row {
          display: flex;
          align-items: center;
          margin-bottom: 15px;
        }

        .demo-form .form-row label {
          width: 120px;
          font-weight: 600;
          color: #1e293b;
        }

        .demo-form .form-row input,
        .demo-form .form-row textarea {
          flex: 1;
          padding: 10px 12px;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          background: #f8fafc;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .demo-form .form-row input:focus,
        .demo-form .form-row textarea:focus {
          outline: none;
          border-color: #2563eb;
          box-shadow: 0 0 10px rgba(59,130,246,0.3);
        }

        .submit-btn {
          padding: 14px;
          margin-top: 10px;
          background: linear-gradient(to right, #2563eb, #3b82f6);
          color: white;
          border: none;
          font-weight: 600;
          font-size: 1.05rem;
          border-radius: 10px;
          cursor: pointer;
          transition: transform 0.2s, box-shadow 0.3s;
        }

        .submit-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 6px 15px rgba(59,130,246,0.5);
        }

        /* Right column: Highlights */
        .right-column { flex: 1; min-width: 320px; }

        .right-column h2 {
          font-size: 1.75rem;
          margin-bottom: 25px;
          color: #1e40af;
        }

        .demo-cards .card {
          display: flex;
          flex-direction: column;
          gap: 10px;
          background: #eff6ff;
          padding: 18px;
          border-radius: 12px;
          margin-bottom: 15px;
          box-shadow: 0 4px 15px rgba(0,0,0,0.05);
        }

        .demo-cards .card h4 {
          font-size: 1.1rem;
          font-weight: 600;
          margin-bottom: 5px;
          color: #1e40af;
        }

        .demo-cards .card p {
          font-size: 0.95rem;
          color: #334155;
        }

        .ceo-card {
          background: #e2e8f0;
          padding: 18px;
          border-radius: 12px;
          margin-top: 15px;
          font-style: italic;
          color: #1e293b;
          text-align: center;
        }

        /* Why Choose Us Section */
        .why-company-section {
          text-align: center;
          padding: 60px 20px;
          background: #f0f4f8;
          margin-bottom: 60px;
        }

        .why-company-section h3 {
          font-size: 2rem;
          font-weight: 700;
          margin-bottom: 20px;
          color: #1e3a8a;
        }

        .company-cards {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          margin-top: 30px;
        }

        .company-cards .card {
          background: #ffffff;
          padding: 25px;
          width: 220px;
          border-radius: 12px;
          box-shadow: 0 5px 20px rgba(0,0,0,0.08);
          text-align: center;
          transition: transform 0.3s;
        }

        .company-cards .card:hover { transform: translateY(-5px); }

        .company-cards .card .icon { font-size: 2.5rem; margin-bottom: 12px; }

        .company-cards .card h4 {
          margin-bottom: 10px;
          font-size: 1.2rem;
          font-weight: 600;
          color: #1e40af;
        }

        .company-cards .card p { font-size: 0.95rem; color: #475569; }

        /* FAQ Section */
        .faq-section {
          text-align: left;
          padding: 60px 20px;
          max-width: 800px;
          margin: 0 auto 60px auto;
        }

        .faq-section h3 {
          font-size: 2rem;
          margin-bottom: 30px;
          color: #1e3a8a;
          text-align: center;
        }

        .faq-cards { display: flex; flex-direction: column; gap: 15px; }

        .faq-card {
          padding: 18px 22px;
          border: 1px solid #cbd5e1;
          border-radius: 10px;
          background: #f8fafc;
          font-size: 0.95rem;
          color: #1e293b;
        }

        /* CTA Section */
        .cta-section {
          background:#554ecd;
          padding: 60px 20px;
          text-align: center;
          border-radius: 12px;
          margin: 60px 0;
        }

        .cta-section h2 {
          font-size: 1.5rem;
          font-weight: 500;
          margin-bottom: 15px;
          color: white;
        }

        .cta-section p {
          font-size: 0.85rem;
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

        @media (max-width: 768px) {
          .modal-two-column { flex-direction: column; }
          .demo-form .form-row { flex-direction: column; }
          .demo-form .form-row label { width: 100%; margin-bottom: 5px; }
          .company-cards { flex-direction: column; align-items: center; }
        }
      `}</style>

      <div className="modal-overlay">
        <button className="modal-close" onClick={onClose}>
          &times;
        </button>
        <div className="modal-topbar">Next Meta Force</div>

        <div className="modal-title-section">
          <h2>Schedule a Demo</h2>
          <hr />
        </div>

        <div className="modal-two-column">
          {/* Left: Form */}
          <div className="left-column">
            <form className="demo-form">
              <div className="form-row">
                <label>Name:</label>
                <input type="text" placeholder="Enter your name" required />
              </div>
              <div className="form-row">
                <label>Email:</label>
                <input type="email" placeholder="Enter your email" required />
              </div>
              <div className="form-row">
                <label>Company:</label>
                <input type="text" placeholder="Company Name" required />
              </div>
              <div className="form-row">
                <label>Message:</label>
                <textarea placeholder="Your message" rows="4"></textarea>
              </div>
              <button type="submit" className="submit-btn">
                Submit
              </button>
            </form>
          </div>

          {/* Right: Business Highlights */}
          <div className="right-column">
            <h2>Why Choose Us?</h2>
            <div className="demo-cards">
              <div className="card">
                <h4>Custom Solutions 💻</h4>
                <p>
                  Tailored software & analytics to solve business challenges.
                </p>
              </div>
              <div className="card">
                <h4>Expert Team 👨‍💻</h4>
                <p>Experienced professionals across multiple industries.</p>
              </div>
              <div className="card">
                <h4>Proven Results 📈</h4>
                <p>Deliver measurable impact and ROI for our clients.</p>
              </div>
              <div className="ceo-card">
                <p>"We deliver results that matter."</p>
              </div>
            </div>
          </div>
        </div>

        {/* Industries Section */}
        <div className="why-company-section">
          <h3>Industries We Serve</h3>
          <p>Our solutions cover a wide range of industries.</p>
          {/* <div className="company-cards">
            <div className="card">
              <div className="icon">🩺</div>
              <h4>Healthcare</h4>
              <p>
                AI-driven solutions improving patient outcomes & efficiency.
              </p>
            </div>
            <div className="card">
              <div className="icon">💼</div>
              <h4>Finance & Banking</h4>
              <p>Secure, real-time analytics for banking & fintech.</p>
            </div>
            <div className="card">
              <div className="icon">🛍️</div>
              <h4>Retail & E-commerce</h4>
              <p>Personalized experiences & sales optimization.</p>
            </div>
            <div className="card">
              <div className="icon">🏭</div>
              <h4>Manufacturing</h4>
              <p>IoT, ERP & automation for smart factories.</p>
            </div>
            <div className="card">
              <div className="icon">☁️</div>
              <h4>IT & Technology</h4>
              <p>Cloud, AI/ML & software development solutions.</p>
            </div>
            <div className="card">
              <div className="icon">🎓</div>
              <h4>Education & EdTech</h4>
              <p>Online learning platforms and LMS solutions.</p>
            </div>
            <div className="card">
              <div className="icon">🚚</div>
              <h4>Logistics & Supply Chain</h4>
              <p>Optimization, tracking & analytics for smooth operations.</p>
            </div>
          </div> */}
          <div className="company-cards">
            <div className="card">
              <img
                src="/images/industries/healthcare.png"
                alt="Healthcare"
                style={{ width: "60px", marginBottom: "12px" }}
              />
              <h4>Healthcare</h4>
              <p>
                AI-driven solutions improving patient outcomes & efficiency.
              </p>
            </div>
            <div className="card">
              <img
                src="/images/industries/finance.png"
                alt="Finance"
                style={{ width: "60px", marginBottom: "12px" }}
              />
              <h4>Finance & Banking</h4>
              <p>Secure, real-time analytics for banking & fintech.</p>
            </div>
            <div className="card">
              <img
                src="/images/industries/retail.png"
                alt="Retail"
                style={{ width: "60px", marginBottom: "12px" }}
              />
              <h4>Retail & E-commerce</h4>
              <p>Personalized experiences & sales optimization.</p>
            </div>
            <div className="card">
              <img
                src="/images/industries/manufacturing.png"
                alt="Manufacturing"
                style={{ width: "60px", marginBottom: "12px" }}
              />
              <h4>Manufacturing</h4>
              <p>IoT, ERP & automation for smart factories.</p>
            </div>
            <div className="card">
              <img
                src="/images/industries/it.png"
                alt="IT & Technology"
                style={{ width: "60px", marginBottom: "12px" }}
              />
              <h4>IT & Technology</h4>
              <p>Cloud, AI/ML & software development solutions.</p>
            </div>
            <div className="card">
              <img
                src="/images/industries/education.png"
                alt="Education"
                style={{ width: "60px", marginBottom: "12px" }}
              />
              <h4>Education & EdTech</h4>
              <p>Online learning platforms and LMS solutions.</p>
            </div>
            <div className="card">
              <img
                src="/images/industries/logistics.png"
                alt="Logistics"
                style={{ width: "60px", marginBottom: "12px" }}
              />
              <h4>Logistics & Supply Chain</h4>
              <p>Optimization, tracking & analytics for smooth operations.</p>
            </div>
          </div>
        </div>

        {/* FAQ */}
        <div className="faq-section">
          <h3>Frequently Asked Questions</h3>
          <div className="faq-cards">
            <div className="faq-card">
              Q: How long is a demo?
              <br />
              A: 30–45 minutes tailored to your needs.
            </div>
            <div className="faq-card">
              Q: Can the demo be customized?
              <br />
              A: Yes, it addresses your business requirements.
            </div>
            <div className="faq-card">
              Q: Which industries do you serve?
              <br />
              A: Healthcare, Retail, Finance, Manufacturing, IT, Education,
              Logistics.
            </div>
            <div className="faq-card">
              Q: Is post-demo support available?
              <br />
              A: Yes, our experts provide guidance and follow-ups.
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="cta-section">
          <h2>Take Your Business to the Next Level</h2>
          <p>
            Book a demo today and discover how we can transform your workflow.
          </p>
          <Link to="/contact" className="cta-button">
            Contact Us
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
}
