import React from "react";
import { motion } from "framer-motion";

export default function ManifestoSection() {
  // Animation variants for paragraphs to make them appear smoothly
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.7, // Slower transition for better reading flow
        ease: "easeOut",
      },
    },
  };

  return (
    <>
      <style>
        {`
        /* --- Sliding Diagonals Background Animation Styles --- */
        @keyframes slide {
            0% { transform: translateX(-25%); }
            100% { transform: translateX(25%); }
        }

        .manifesto-bg-animation {
            animation: slide 3s ease-in-out infinite alternate;
            /* Prominent and bluer gradients for active background */
            background-image: linear-gradient(-60deg, #1e88e5 50%, #42a5f5 50%); /* Deeper Blue to Mid-Blue */
            bottom: 0;
            left: -50%;
            opacity: 0.9; /* High opacity for maximum visibility */
            position: absolute;
            right: -50%;
            top: 0;
            z-index: 0; /* Ensures it's behind content and subtle pattern */
            width: 200%; /* Make it wide enough to slide */
            height: 100%;
        }

        .manifesto-bg-animation.bg2 {
            animation-direction: alternate-reverse;
            animation-duration: 4s;
            background-image: linear-gradient(-60deg, #90caf9 50%, #bbdefb 50%); /* Lighter Blue to Very Light Blue */
            opacity: 0.7; /* Increased opacity */
        }

        .manifesto-bg-animation.bg3 {
            animation-duration: 5s;
            background-image: linear-gradient(-60deg, #e3f2fd 50%, #f0f8ff 50%); /* Very Light Blue to Off-White Blue */
            opacity: 0.5; /* Increased opacity */
        }

        /* --- Manifesto Section General Styles --- */
        .manifesto-section {
          position: relative;
          // background-color: #f0f8ff; /* A very light, almost white blue as a fallback background */
          color: #212529; /* Default very dark gray/almost black for maximum contrast */
          padding: 100px 8%;
          text-align: center;
          overflow: hidden; /* Important to contain sliding backgrounds */
          font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Subtle radial pattern overlay - ensuring it doesn't obscure text */
        .manifesto-section::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background-image: radial-gradient(circle at center, rgba(0,0,0,0.03) 1px, transparent 1px);
          background-size: 20px 20px;
          z-index: 1; /* Above animated backgrounds, below content */
          opacity: 0.6; /* A little more visible, but still subtle */
        }

        /* Content box for readability - nearly opaque white for black text */
        .manifesto-content {
          position: relative;
          z-index: 2; /* Ensures content is above all backgrounds */
          max-width: auto;
          margin: 0 auto;
          // background-color: rgba(255, 255, 255, 0.95); /* Nearly opaque white for best black text visibility */
          padding: 40px;
          border-radius: 10px;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1); /* Clearer shadow */
        }

        /* --- Text Styling (Black Text with Blue Highlights) --- */
        .manifesto-main-heading {
          font-size: 3rem;
          font-weight: 700;
          margin-bottom: 20px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #212529; /* Black/very dark gray for main heading */
          line-height: 1.2;
        }

        .manifesto-subheading {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 20px;
          letter-spacing: 1px;
          color: #343a40; /* Dark gray for subheading */
          opacity: 0.9;
        }

        .manifesto-paragraph {
          font-size: 1rem;
          line-height: 1.5;
          color: #343a40; /* Dark gray for body text */
          // margin-bottom: 30px;
          opacity: 0.95;
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
        }

        .manifesto-highlight {
          color: #007bff; /* Vibrant blue for highlights */
          font-weight: 700;
          /* text-shadow removed as it's less fitting for dark text on light background */
        }

        .manifesto-separator {
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, #007bff, #6610f2); /* Blue to purple gradient */
          border-radius: 2px;
          margin: 20px auto;
          opacity: 0.8;
        }

        .manifesto-closing-statement {
          font-size: 1.3rem;
          margin-top: 30px;
          font-weight: 600;
          color: #212529; /* Black/very dark gray for closing statement */
          line-height: 1.6;
        }

        .manifesto-ending-highlight {
            color: #007bff; /* Vibrant blue for ending highlight */
            font-weight: 800;
            /* text-shadow removed */
        }

        /* --- Media Queries --- */
        @media (max-width: 992px) {
          .manifesto-main-heading { font-size: 2.5rem; }
          .manifesto-subheading { font-size: 1.5rem; }
          .manifesto-paragraph { font-size: 1.1rem; line-height: 1.8; }
          .manifesto-closing-statement { font-size: 1.25rem; }
          .manifesto-content { padding: 30px; }
        }

        @media (max-width: 768px) {
          .manifesto-section { padding: 80px 5%; }
          .manifesto-main-heading { font-size: 2rem; }
          .manifesto-subheading { font-size: 1.3rem; margin-bottom: 40px; }
          .manifesto-paragraph { font-size: 1rem; line-height: 1.7; margin-bottom: 25px; }
          .manifesto-closing-statement { font-size: 1.1rem; }
          .manifesto-content { padding: 20px; }
        }
        `}
      </style>

      <section className="manifesto-section">
        {/* Sliding Diagonals Background Animation elements */}
        <div className="manifesto-bg-animation"></div>
        <div className="manifesto-bg-animation bg2"></div>
        <div className="manifesto-bg-animation bg3"></div>

        <div className="manifesto-content">
          {/* Framer Motion for main heading - comes in when scrolled */}
          {/* <motion.h1
            className="manifesto-main-heading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.5 }} // Ensure scroll animation triggers
          >
            Our Vision & Philosophy
          </motion.h1> */}

          {/* Framer Motion for subheading - comes in when scrolled */}
          <motion.h2
            className="manifesto-subheading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            viewport={{ once: true, amount: 0.5 }} // Ensure scroll animation triggers
          >
            Our core beliefs
          </motion.h2>

          {/* Framer Motion for paragraphs - staggered entry when scrolled */}
          {[
            {
              text: (
                <>
                  At NextMetaForce, we believe transformation is more than
                  technology <br /> it’s a movement of{" "}
                  <span className="manifesto-highlight">
                    intent, intelligence, and imagination.
                  </span>
                </>
              ),
            },
            {
              text: (
                <>
                  We don’t just implement systems. We ignite ecosystems
                  <br /> where data breathes, people connect, and innovation
                  compounds.
                </>
              ),
            },
            {
              text: (
                <>
                  Every engagement is a force multiplier
                  <br /> blending human empathy with engineered precision. We
                  turn CRMs into living engines of growth, clouds into catalysts
                  of possibility, and AI into augmentation that empowers, not
                  replaces.
                </>
              ),
            },
            {
              text: (
                <>
                  Our expertise spans Salesforce, Oracle, and Microsoft Dynamics
                  <br /> but our essence transcends platforms. We’re architects
                  of outcomes, designing intelligent, scalable, and adaptive
                  systems that think forward.
                </>
              ),
            },
            {
              text: (
                <>
                  From Manufacturing to Financial Services, Telecom to Public
                  Sector, Health to Nonprofits
                  <br /> we build digital experiences that don’t just transform
                  business, they transform belief.
                </>
              ),
            },
            {
              text: (
                <>
                  We champion the frontier
                  <br /> exploring Generative AI, Web3, Blockchain, and Machine
                  Learning to craft solutions that move faster, think deeper,
                  and last longer.
                </>
              ),
            },
            {
              text: (
                <>
                  Our people are our power source. We nurture curiosity,
                  celebrate bold thinking, and honor balance
                  <br /> because transformation without humanity is just
                  transaction.
                </>
              ),
            },
          ].map((item, i) => (
            <motion.p
              key={i}
              className="manifesto-paragraph"
              variants={paragraphVariants}
              initial="hidden"
              whileInView="visible" // This line was the key addition for paragraphs
              viewport={{ once: true, amount: 0.8 }} // Trigger when 80% of element is in view
              transition={{ delay: 0.1 + i * 0.1 }} // Staggered delay for each paragraph
            >
              {item.text}
            </motion.p>
          ))}

          <div className="manifesto-separator"></div>

          {/* Framer Motion for closing statement - comes in when scrolled */}
          <motion.p
            className="manifesto-closing-statement"
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible" // This line was added for the closing statement
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.1 + 7 * 0.1 }} // Adjusted delay to follow previous paragraphs
          >
            We’re not chasing the next trend - we’re creating the next{" "}
            <span className="manifesto-ending-highlight">force</span>.
            <br />
            <span className="manifesto-ending-highlight">NextMetaForce</span> -
            Empowering the human side of transformation.
          </motion.p>
        </div>
      </section>
    </>
  );
}
