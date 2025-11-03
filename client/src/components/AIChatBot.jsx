import React, { useState, useRef, useEffect } from "react";

const QUICK_OPTIONS = [
  { id: "talk-sales", label: "Talk to Sales" },
  { id: "explore-services", label: "Explore Services" },
  { id: "schedule-call", label: "Schedule a Call" },
  { id: "careers", label: "Career Opportunities" },
];

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      role: "bot",
      text: "Hi there 👋 I’m Nextmetaforce, your virtual assistant. How can I help you today?",
    },
  ]);
  const [showQuickReplies, setShowQuickReplies] = useState(true);
  const [flow, setFlow] = useState(null);
  const [formData, setFormData] = useState({});
  const [submitting, setSubmitting] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const chatRef = useRef(null);

  useEffect(() => {
    if (chatRef.current)
      chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages, isTyping]);

  const pushBot = async (text) => {
    setIsTyping(true);
    await new Promise((r) => setTimeout(r, 800 + text.length * 25));
    setIsTyping(false);
    setMessages((prev) => [...prev, { role: "bot", text }]);
  };

  const pushUser = (text) =>
    setMessages((prev) => [...prev, { role: "user", text }]);

  const resetChat = () => {
    setMessages([
      {
        role: "bot",
        text: "Hi there 👋 I’m Nextmetaforce, your virtual assistant. How can I help you today?",
      },
    ]);
    setFlow(null);
    setShowQuickReplies(true);
    setFormData({});
  };

  const handleQuickOption = async (opt) => {
    pushUser(opt.label);
    setShowQuickReplies(false);

    if (opt.id === "talk-sales" || opt.id === "schedule-call") {
      await pushBot(
        "Great! I’ll guide you step by step. What’s your full name?"
      );
      setFlow({ type: "contact-flow", step: "name", topic: opt.id });
    } else if (opt.id === "explore-services") {
      await pushBot(
        "We offer Digital Transformation,Software Devlopment,IT Consulting,Cloud AI,Tarining& Enablement Cloud & DevOps, and Web Development. Which one interests you?"
      );
      setFlow({ type: "service-flow", step: "service" });
    } else if (opt.id === "careers") {
      await pushBot(
        "You can view current openings at our Careers page: [Link]"
      );
    }
  };

  const validateInput = (value, step) => {
    switch (step) {
      case "name":
        return /^[a-zA-Z\s]{3,50}$/.test(value);
      case "email":
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
      case "phone":
        return /^[0-9]{10}$/.test(value);
      default:
        return true;
    }
  };

  const handleFlowInput = async (input) => {
    if (!flow) return;
    const currentStep = flow.step;

    if (!validateInput(input, currentStep)) {
      let errorMsg = "";
      if (currentStep === "name")
        errorMsg = "Please enter a valid name (letters only).";
      else if (currentStep === "email")
        errorMsg = "Please enter a valid email address.";
      else if (currentStep === "phone")
        errorMsg = "Please enter a valid 10-digit phone number.";
      await pushBot(errorMsg);
      return;
    }

    pushUser(input);
    const newFormData = { ...formData };

    switch (currentStep) {
      case "name":
        newFormData.name = input;
        setFormData(newFormData);
        await pushBot("Thanks! Can I have your email?");
        setFlow({ ...flow, step: "email" });
        break;

      case "email":
        newFormData.email = input;
        setFormData(newFormData);
        await pushBot("Great! Please provide your phone number.");
        setFlow({ ...flow, step: "phone" });
        break;

      case "phone":
        newFormData.phone = input;
        setFormData(newFormData);
        if (flow.topic === "talk-sales") {
          await pushBot("Finally, can you briefly describe your requirements?");
          setFlow({ ...flow, step: "message" });
        } else if (flow.topic === "schedule-call") {
          await pushBot(
            "When would you like us to call you? Please provide date and time."
          );
          setFlow({ ...flow, step: "datetime" });
        }
        break;

      case "message":
        newFormData.message = input;
        setFormData(newFormData);
        await pushBot(
          "✅ Thanks! Your sales request has been recorded. Our team will contact you shortly."
        );
        await submitFlow(newFormData, flow.topic);
        setFlow(null);
        setShowQuickReplies(true);
        break;

      case "datetime":
        newFormData.datetime = input;
        setFormData(newFormData);
        await pushBot(
          "✅ Your call request has been recorded. Our team will contact you shortly."
        );
        await submitFlow(newFormData, flow.topic);
        setFlow(null);
        setShowQuickReplies(true);
        break;

      case "service":
        newFormData.service = input;
        setFormData(newFormData);
        await pushBot(
          `Great choice! We will reach out regarding ${input} shortly.`
        );
        await submitFlow(newFormData, "service-inquiry");
        setFlow(null);
        setShowQuickReplies(true);
        break;

      default:
        break;
    }
  };

  const submitFlow = async (data, topic) => {
    setSubmitting(true);
    try {
      await fetch("http://localhost:5000/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, topic }),
      });
    } catch (err) {
      await pushBot("❌ Sorry, something went wrong. Please try again later.");
      console.error(err);
    }
    setSubmitting(false);
  };

  return (
    <>
      <style>{`
        .chat-btn {
          position: fixed; bottom: 20px; right: 20px; width: 60px; height: 60px;
          border-radius: 50%; background: linear-gradient(to right, #42a5f5, #1a237e);
          color: white; border: none; cursor: pointer; font-size: 28px;
          box-shadow: 0 6px 20px rgba(0,0,0,0.3); transition: transform 0.2s ease; z-index: 1001;
        }
        .chat-btn:hover { transform: scale(1.1); }
        .chat-popup {
          position: fixed; bottom: 90px; right: 20px; width: 360px; max-height: 400px;
          background: white; border-radius: 20px; box-shadow: 0 8px 25px rgba(0,0,0,0.3);
          display: flex; flex-direction: column; overflow: hidden; z-index: 1000;
        }
        .chat-header {
          background: linear-gradient(to right, #42a5f5, #1a237e); color: white;
          padding: 0.75rem 1rem; display: flex; justify-content: space-between;
          align-items: center; font-weight: 600; font-size: 0.95rem;
        }
        .chat-header button {
          background: rgba(255,255,255,0.15);
          border: 1px solid rgba(255,255,255,0.3);
          padding: 5px 12px;
          border-radius: 8px;
          color: white;
          cursor: pointer;
          font-size: 0.85rem;
          font-weight: 500;
          transition: all 0.3s ease;
        }
        .chat-header button:hover {
          background: white;
          color: #1a237e;
          transform: scale(1.05);
          box-shadow: 0 0 8px rgba(255,255,255,0.5);
        }
        .chat-body {
          flex: 1; padding: 0.75rem; overflow-y: auto;
          display: flex; flex-direction: column; gap: 0.5rem; background: #f5f7fa;
        }
        .message-user {
          align-self: flex-end; background: linear-gradient(to right, #42a5f5, #1a237e);
          color: white; padding: 0.5rem 0.75rem; border-radius: 16px 16px 4px 16px;
          max-width: 80%; word-break: break-word;
        }
        .message-bot {
          align-self: flex-start; background: #e3f2fd; color: #212529;
          padding: 0.5rem 0.75rem; border-radius: 16px 16px 16px 4px;
          max-width: 80%; word-break: break-word;
        }
        .typing-indicator {
          display: inline-block; width: 30px; height: 10px; position: relative;
        }
        .typing-indicator span {
          display: inline-block; width: 6px; height: 6px; margin: 0 2px;
          background: #90caf9; border-radius: 50%; animation: bounce 1.4s infinite ease-in-out both;
        }
        @keyframes bounce {
          0%, 80%, 100% { transform: scale(0); }
          40% { transform: scale(1); }
        }
        .quick-replies {
          display: flex; flex-wrap: wrap; gap: 0.5rem; margin-top: 0.5rem;
          justify-content: flex-start;
        }
        .quick-chip {
          padding: 0.5rem 0.9rem;
          border-radius: 25px;
          background: linear-gradient(to right, #42a5f5, #1a237e);
          color: white;
          cursor: pointer;
          font-size: 0.85rem;
          font-weight: 500;
          border: none;
          transition: 0.3s;
        }
        .quick-chip:hover {
          background: linear-gradient(to right, #1a237e, #42a5f5);
          transform: scale(1.05);
        }
        .form-chat {
          display: flex; flex-direction: column; gap: 0.5rem; margin-top: 0.5rem;
        }
        .form-chat input {
          padding: 0.5rem 0.6rem; border-radius: 6px; border: 1px solid #90caf9;
        }
        .form-chat button {
          align-self: flex-end;
          background: linear-gradient(to right, #42a5f5, #1a237e);
          color: white;
          border: none;
          padding: 0.5rem 0.9rem;
          border-radius: 6px;
          cursor: pointer;
          transition: 0.3s;
        }
        .form-chat button:hover {
          background: linear-gradient(to right, #1a237e, #42a5f5);
        }
          html[data-theme="dark"] .chat-popup input,
html[data-theme="dark"] .chat-popup textarea,
html[data-theme="dark"] .chat-popup select {
  background: #ffffff !important;
  color: #000000 !important;
  border: 1px solid #90caf9 !important;
}
      `}</style>

      <button className="chat-btn" onClick={() => setIsOpen(!isOpen)}>
        {isOpen ? "✖" : "💬"}
      </button>

      {isOpen && (
        <div className="chat-popup">
          <div className="chat-header">
            <span>Nextmetaforce — Virtual Assistant</span>
            <button onClick={resetChat}>⟳ Reset</button>
          </div>
          <div ref={chatRef} className="chat-body">
            {messages.map((m, idx) => (
              <div
                key={idx}
                className={m.role === "bot" ? "message-bot" : "message-user"}
              >
                {m.text}
              </div>
            ))}

            {isTyping && (
              <div className="message-bot">
                <div className="typing-indicator">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>
            )}

            {showQuickReplies && !flow && (
              <div className="quick-replies">
                {QUICK_OPTIONS.map((opt) => (
                  <div
                    key={opt.id}
                    className="quick-chip"
                    onClick={() => handleQuickOption(opt)}
                  >
                    {opt.label}
                  </div>
                ))}
              </div>
            )}

            {flow && (
              <form
                className="form-chat"
                onSubmit={(e) => {
                  e.preventDefault();
                  const input = e.target.elements[0].value.trim();
                  if (input) {
                    e.target.elements[0].value = "";
                    handleFlowInput(input);
                  }
                }}
              >
                <input
                  type="text"
                  placeholder="Type your answer…"
                  disabled={submitting}
                />
                <button type="submit" disabled={submitting}>
                  {submitting ? "Sending…" : "Submit"}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </>
  );
}
