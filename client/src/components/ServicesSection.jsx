// import React from "react";
// import { motion } from "framer-motion";

// export default function ManifestoSection() {
//   // Animation variants for paragraphs
//   const paragraphVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.7, ease: "easeOut" },
//     },
//   };

//   return (
//     <>
//       <style>
//         {`
//         /* --- Sliding Diagonals Background Animation Styles --- */
//         @keyframes slide {
//           0% { transform: translateX(-25%); }
//           100% { transform: translateX(25%); }
//         }

//         .manifesto-bg-animation {
//           animation: slide 3s ease-in-out infinite alternate;
//           // background-image: linear-gradient(-60deg, #1e88e5 50%, #42a5f5 50%);
//           position: absolute;
//           top: 0;
//           left: -50%;
//           width: 200%;
//           height: 100%;
//           opacity: 0.9;
//           z-index: 0;
//         }

//         .manifesto-bg-animation.bg2 {
//           animation-direction: alternate-reverse;
//           animation-duration: 4s;
//           // background-image: linear-gradient(-60deg, #90caf9 50%, #bbdefb 50%);
//           opacity: 0.7;
//         }

//         .manifesto-bg-animation.bg3 {
//           animation-duration: 5s;
//           // background-image: linear-gradient(-60deg, #e3f2fd 50%, #f0f8ff 50%);
//           opacity: 0.5;
//         }

//         /* --- Manifesto Section General Styles --- */
//         .manifesto-section {
//           position: relative;
//           color: #212529;
//           padding: 50px 8%;
//           text-align: center;
//           overflow: hidden;
//           // font-family: 'Inter', 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
//           min-height: 100vh;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//         }

//         /* Subtle radial pattern overlay */
//         .manifesto-section::before {
//           content: "";
//           position: absolute;
//           top: 0;
//           left: 0;
//           width: 100%;
//           height: 100%;
//           // background-image: radial-gradient(circle at center, rgba(0,0,0,0.03) 1px, transparent 1px);
//           background-size: 20px 20px;
//           z-index: 1;
//           opacity: 0.6;
//         }

//         /* Content directly on background (no card) */
//         .manifesto-content {
//           position: relative;
//           z-index: 2;
//           max-width: 900px;
//           margin: 0 auto;
//           padding: 0;
//         }

//         /* --- Text Styling --- */
//         .manifesto-main-heading {
//           font-size: 3rem;
//           font-weight: 700;
//           margin-bottom: 20px;
//           letter-spacing: 1.5px;
//           text-transform: uppercase;
//           color: #212529;
//           line-height: 1.2;
//         }

//         .manifesto-subheading {
//           font-size: 1.8rem;
//           font-weight: 600;
//           margin-bottom: 20px;
//           letter-spacing: 1px;
//           color: #343a40;
//           opacity: 0.9;
//         }

//         .manifesto-paragraph {
//           font-size: 1rem;
//           line-height: 1.5;
//           color: #343a40;
//           opacity: 0.95;
//           max-width: 800px;
//           margin: 20px auto; /* spacing between paragraphs */
//         }

//         .manifesto-highlight {
//           color: #007bff;
//           font-weight: 700;
//         }

//         .manifesto-separator {
//           width: 80px;
//           height: 3px;
//           background: linear-gradient(90deg, #007bff, #6610f2);
//           border-radius: 2px;
//           margin: 30px auto;
//           opacity: 0.8;
//         }

//         .manifesto-closing-statement {
//           font-size: 1.3rem;
//           margin-top: 30px;
//           font-weight: 600;
//           color: #212529;
//           line-height: 1.6;
//         }

//         .manifesto-ending-highlight {
//           color: #007bff;
//           font-weight: 800;
//         }

//         /* --- Media Queries --- */
//         @media (max-width: 992px) {
//           .manifesto-main-heading { font-size: 2.5rem; }
//           .manifesto-subheading { font-size: 1.5rem; }
//           .manifesto-paragraph { font-size: 1.1rem; line-height: 1.8; }
//           .manifesto-closing-statement { font-size: 1.25rem; }
//         }

//         @media (max-width: 768px) {
//           .manifesto-section { padding: 80px 5%; }
//           .manifesto-main-heading { font-size: 2rem; }
//           .manifesto-subheading { font-size: 1.3rem; margin-bottom: 40px; }
//           .manifesto-paragraph { font-size: 1rem; line-height: 1.7; margin-bottom: 25px; }
//           .manifesto-closing-statement { font-size: 1.1rem; }
//         }
//         `}
//       </style>

//       <section className="manifesto-section">
//         <div className="manifesto-bg-animation"></div>
//         <div className="manifesto-bg-animation bg2"></div>
//         <div className="manifesto-bg-animation bg3"></div>

//         <div className="manifesto-content">
//           <motion.h2
//             className="manifesto-subheading"
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.3, duration: 0.9 }}
//             viewport={{ once: true, amount: 0.5 }}
//           >
//             Our core beliefs
//           </motion.h2>

//           {[
//             {
//               text: (
//                 <>
//                   At NextMetaForce, we believe transformation is more than
//                   technology <br />
//                   it’s a movement of{" "}
//                   <span className="manifesto-highlight">
//                     intent, intelligence, and imagination.
//                   </span>
//                 </>
//               ),
//             },
//             {
//               text: (
//                 <>
//                   We don’t just implement systems. We ignite ecosystems <br />
//                   where data breathes, people connect, and innovation compounds.
//                 </>
//               ),
//             },
//             {
//               text: (
//                 <>
//                   Every engagement is a force multiplier <br />
//                   blending human empathy with engineered precision. We turn CRMs
//                   into living engines of growth, clouds into catalysts of
//                   possibility, and AI into augmentation that empowers, not
//                   replaces.
//                 </>
//               ),
//             },
//             {
//               text: (
//                 <>
//                   Our expertise spans Salesforce, Oracle, and Microsoft Dynamics{" "}
//                   <br />
//                   but our essence transcends platforms. We’re architects of
//                   outcomes, designing intelligent, scalable, and adaptive
//                   systems that think forward.
//                 </>
//               ),
//             },
//             {
//               text: (
//                 <>
//                   From Manufacturing to Financial Services, Telecom to Public
//                   Sector, Health to Nonprofits <br />
//                   we build digital experiences that don’t just transform
//                   business, they transform belief.
//                 </>
//               ),
//             },
//             {
//               text: (
//                 <>
//                   We champion the frontier <br />
//                   exploring Generative AI, Web3, Blockchain, and Machine
//                   Learning to craft solutions that move faster, think deeper,
//                   and last longer.
//                 </>
//               ),
//             },
//             {
//               text: (
//                 <>
//                   Our people are our power source. We nurture curiosity,
//                   celebrate bold thinking, and honor balance <br />
//                   because transformation without humanity is just transaction.
//                 </>
//               ),
//             },
//           ].map((item, i) => (
//             <motion.p
//               key={i}
//               className="manifesto-paragraph"
//               variants={paragraphVariants}
//               initial="hidden"
//               whileInView="visible"
//               viewport={{ once: true, amount: 0.8 }}
//               transition={{ delay: 0.5 + i * 0.1 }}
//             >
//               {item.text}
//             </motion.p>
//           ))}

//           <div className="manifesto-separator"></div>

//           <motion.p
//             className="manifesto-closing-statement"
//             variants={paragraphVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.5 }}
//             transition={{ delay: 0.9 }}
//           >
//             We’re not chasing the next trend - we’re creating the next{" "}
//             <span className="manifesto-ending-highlight">force</span>.<br />
//             <span className="manifesto-ending-highlight">Nextmetaforce</span> -
//             Empowering the human side of transformation.
//           </motion.p>
//         </div>
//       </section>
//     </>
//   );
// }
import React from "react";
import { motion } from "framer-motion";

export default function ManifestoSection() {
  const paragraphVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: "easeOut" },
    },
  };

  return (
    <>
      <style>
        {`
        /* ------------------------------
           Background & Animated Layers
        ------------------------------ */
        @keyframes gradientShift {
          0% { background-position: 0% 50%; }
          100% { background-position: 100% 50%; }
        }

        @keyframes gridDrift {
          from { background-position: 0 0; }
          to { background-position: 80px 80px; }
        }

        .manifesto-section {
          position: relative;
          overflow: hidden;
          background: #ffffff;
          color: #212529;
          padding: 80px 8%;
          text-align: center;
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        /* Animated gradient layer */
        .gradient-layer {
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, #f8fbff, #ffffff, #e7f0ff);
          background-size: 200% 200%;
          animation: gradientShift 16s ease-in-out infinite alternate;
          opacity: 0.9;
          z-index: 0;
        }

        /* Visible moving grid layer */
        .grid-layer {
          position: absolute;
          inset: 0;
          background-image:
        linear-gradient(to right, #e0e0e0 1px, transparent 1px),
        linear-gradient(to bottom, #e0e0e0 1px, transparent 1px);
          background-size: 20px 20px;
          animation: gridDrift 25s linear infinite;
          filter: drop-shadow(0 0 2px rgba(205, 230, 248, 0.15));
          z-index: 1;
          opacity: 0.5;
        }

        /* Fading overlay at bottom */
        .fade-overlay {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 200px;
          background: linear-gradient(to top, rgba(0, 60, 140, 0.25), transparent);
          z-index: 2;
        }

        /* ------------------------------
                   Content
        ------------------------------ */
        .manifesto-content {
          position: relative;
          z-index: 3;
          max-width: 900px;
          margin: 0 auto;
        }

        .manifesto-subheading {
          font-size: 1.8rem;
          font-weight: 600;
          margin-bottom: 20px;
          color: #1c2b4a;
        }

        .manifesto-paragraph {
          font-size: 1.05rem;
          line-height: 1.7;
          color: #343a40;
          max-width: 800px;
          margin: 20px auto;
        }

        .manifesto-highlight {
          color: #007bff;
          font-weight: 700;
        }

        .manifesto-separator {
          width: 80px;
          height: 3px;
          background: linear-gradient(90deg, #007bff, #6610f2);
          border-radius: 2px;
          margin: 30px auto;
          opacity: 0.9;
        }

        .manifesto-closing-statement {
          font-size: 1.3rem;
          margin-top: 30px;
          font-weight: 600;
          color: #212529;
          line-height: 1.6;
        }

        .manifesto-ending-highlight {
          color: #f18723ff;
          font-weight: 800;
        }

        /* Responsive Adjustments */
        @media (max-width: 992px) {
          .manifesto-subheading { font-size: 1.5rem; }
        }

        @media (max-width: 768px) {
          .manifesto-section { padding: 80px 5%; }
          .manifesto-subheading { font-size: 1.3rem; }
        }
        `}
      </style>

      <section className="manifesto-section">
        {/* Background layers */}
        <div className="gradient-layer"></div>
        <div className="grid-layer"></div>
        <div className="fade-overlay"></div>

        {/* Content */}
        <div className="manifesto-content">
          <motion.h2
            className="manifesto-subheading"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.9 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            Our core beliefs
          </motion.h2>

          {[
            {
              text: (
                <>
                  At NextMetaForce, we believe transformation is more than
                  technology <br />
                  it’s a movement of{" "}
                  <span className="manifesto-highlight">
                    intent, intelligence, and imagination.
                  </span>
                </>
              ),
            },
            {
              text: (
                <>
                  We don’t just implement systems. We ignite ecosystems <br />
                  where data breathes, people connect, and innovation compounds.
                </>
              ),
            },
            {
              text: (
                <>
                  Every engagement is a force multiplier <br />
                  blending human empathy with engineered precision. We turn CRMs
                  into living engines of growth, clouds into catalysts of
                  possibility, and AI into augmentation that empowers, not
                  replaces.
                </>
              ),
            },
            {
              text: (
                <>
                  Our expertise spans Salesforce, Oracle, and Microsoft Dynamics{" "}
                  <br />
                  but our essence transcends platforms. We’re architects of
                  outcomes, designing intelligent, scalable, and adaptive
                  systems that think forward.
                </>
              ),
            },
            {
              text: (
                <>
                  From Manufacturing to Financial Services, Telecom to Public
                  Sector, Health to Nonprofits <br />
                  we build digital experiences that don’t just transform
                  business, they transform belief.
                </>
              ),
            },
            {
              text: (
                <>
                  We champion the frontier <br />
                  exploring Generative AI, Web3, Blockchain, and Machine
                  Learning to craft solutions that move faster, think deeper,
                  and last longer.
                </>
              ),
            },
            {
              text: (
                <>
                  Our people are our power source. We nurture curiosity,
                  celebrate bold thinking, and honor balance <br />
                  because transformation without humanity is just transaction.
                </>
              ),
            },
          ].map((item, i) => (
            <motion.p
              key={i}
              className="manifesto-paragraph"
              variants={paragraphVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.8 }}
              transition={{ delay: 0.5 + i * 0.1 }}
            >
              {item.text}
            </motion.p>
          ))}

          <div className="manifesto-separator"></div>

          <motion.p
            className="manifesto-closing-statement"
            variants={paragraphVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.9 }}
          >
            We’re not chasing the next trend – we’re creating the next force.
            <br />
            <span className="manifesto-ending-highlight">NextMetaForce</span> –
            Empowering the human side of transformation.
          </motion.p>
        </div>
      </section>
    </>
  );
}
