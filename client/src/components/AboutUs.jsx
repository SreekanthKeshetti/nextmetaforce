//Final Code
// import React from "react";
// import { Container } from "react-bootstrap";
// // import OldAboutUs from "../components/OldAboutUs";

// export default function VisionSection() {
//   return (
//     <>
//       <style>
//         {`
// /* --- Base Layout --- */
// .vision-section {
//   position: relative;
//   // min-height: 90vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 3rem 1rem;
//   text-align: center;
//   overflow: hidden;
//   transition: background 0.6s ease, color 0.6s ease;
// }

// /* ================================
//    🌤 LIGHT MODE
// ================================ */
// :root .vision-section,
// html:not([data-theme="dark"]) .vision-section {
//   background: #f8f9fb;
//   color: #1a1a1a;
// }

// :root .vision-section::before,
// html:not([data-theme="dark"]) .vision-section::before {
//   content: "";
//   position: absolute;
//   inset: 0;
//   background-image:
//     linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px),
//     linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
//   background-size: 2rem 2rem;
//   opacity: 0.4;
//   z-index: 0;
// }

// :root .vision-title,
// html:not([data-theme="dark"]) .vision-title {
//   background: linear-gradient(to right, #f6a709, #f77102, #e6333f);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// }

// :root .vision-subtitle,
// html:not([data-theme="dark"]) .vision-subtitle {
//   color: #555;
// }

// :root .glow-underline,
// html:not([data-theme="dark"]) .glow-underline {
//   background: linear-gradient(to right, #f6a709, #f77102, #e6333f);
//   box-shadow: none;
// }

// /* ================================
//    🌑 DARK MODE (DataFactz Style)
// ================================ */
// html[data-theme="dark"] .vision-section {
//   background: radial-gradient(
//       circle at 20% 20%,
//       rgba(255, 140, 0, 0.18),
//       transparent 60%
//     ),
//     radial-gradient(
//       circle at 80% 80%,
//       rgba(255, 69, 0, 0.25),
//       transparent 70%
//     ),
//     linear-gradient(180deg, #070707 0%, #0b0b0d 100%);
//   color: #ffffff;
// }

// html[data-theme="dark"] .vision-section::before {
//   content: "";
//   position: absolute;
//   inset: 0;
//   background-image:
//     linear-gradient(to right, rgba(255, 165, 0, 0.15) 1px, transparent 1px),
//     linear-gradient(to bottom, rgba(255, 140, 0, 0.15) 1px, transparent 1px);
//   background-size: 60px 60px;
//   opacity: 0.35;
//   animation: moveGrid 40s linear infinite;
//   z-index: 0;
// }

// html[data-theme="dark"] .vision-section::after {
//   content: "";
//   position: absolute;
//   inset: 0;
//   background:
//     radial-gradient(circle at 70% 30%, rgba(255, 140, 0, 0.35), transparent 60%),
//     radial-gradient(circle at 30% 70%, rgba(255, 69, 0, 0.2), transparent 60%);
//   filter: blur(120px);
//   z-index: 1;
// }

// html[data-theme="dark"] .vision-title {
//   background: linear-gradient(to right, #ffa500, #ff6a00, #ff3c00);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// }

// html[data-theme="dark"] .vision-subtitle {
//   color: #d3d3d3;
// }

// html[data-theme="dark"] .glow-underline {
//   background: linear-gradient(to right, #ffa500, #ff3c00);
//   box-shadow: 0 0 25px rgba(255, 140, 0, 0.9);
// }

// /* ================================
//    ✨ Shared Styles
// ================================ */
// .vision-content {
//   position: relative;
//   z-index: 2;
//   max-width: 900px;
//   margin: 0 auto;
//   animation: fadeInUp 1.6s ease forwards;
// }

// .vision-title {
//   font-size: 2.2rem;
//   font-weight: 600;
//   margin-bottom: 1.2rem;
// }

// .vision-subtitle {
//   font-size: 1.25rem;
//   line-height: 1.8;
//   max-width: 720px;
//   margin: 0 auto 2rem;
// }

// .glow-underline {
//   width: 90px;
//   height: 3px;
//   margin: 1.5rem auto;
//   border-radius: 3px;
// }

// /* Animations */
// @keyframes fadeInUp {
//   from { opacity: 0; transform: translateY(30px); }
//   to { opacity: 1; transform: translateY(0); }
// }

// @keyframes moveGrid {
//   from { background-position: 0 0; }
//   to { background-position: 120px 120px; }
// }
//         `}
//       </style>

//       <section className="vision-section">
//         <Container>
//           <div className="vision-content">
//             <h1 className="vision-title">Our Vision</h1>
//             <p className="vision-subtitle">
//               Empowering organizations through <strong>AI-driven</strong> and{" "}
//               <strong>cloud-native</strong> innovation — shaping a smarter,
//               connected, and more sustainable digital future.
//             </p>
//             <div className="glow-underline"></div>
//             <p
//               className="mt-5"
//               style={{
//                 color: "var(--vision-footer-color, #666)",
//                 fontSize: "1rem",
//                 letterSpacing: "0.5px",
//               }}
//             >
//               <strong>NextMetaForce</strong> — Transforming ideas into
//               intelligent outcomes.
//             </p>
//           </div>
//         </Container>
//       </section>
//       {/* <OldAboutUs /> */}
//     </>
//   );
// }

// import React from "react";
// import { Container } from "react-bootstrap";

// export default function VisionSection() {
//   return (
//     <>
//       <style>
//         {`
// /* --- Base Layout --- */
// .vision-section {
//   position: relative;
//   // min-height: 100vh;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   padding: 4rem 1.5rem;
//   text-align: center;
//   overflow: hidden;
//   transition: background 0.6s ease, color 0.6s ease;
// }

// /* ================================
//    🌤 LIGHT MODE
// ================================ */
// :root .vision-section,
// html:not([data-theme="dark"]) .vision-section {
//   background: #f8f9fb;
//   color: #1a1a1a;
// }

// :root .vision-section::before,
// html:not([data-theme="dark"]) .vision-section::before {
//   content: "";
//   position: absolute;
//   inset: 0;
//   background-image:
//     linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px),
//     linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
//   background-size: 2rem 2rem;
//   opacity: 0.4;
//   z-index: 0;
// }

// :root .vision-title,
// html:not([data-theme="dark"]) .vision-title {
//   background: linear-gradient(to right, #f6a709, #f77102, #e6333f);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// }

// :root .vision-subtitle,
// html:not([data-theme="dark"]) .vision-subtitle {
//   color: #555;
// }

// :root .glow-underline,
// html:not([data-theme="dark"]) .glow-underline {
//   background: linear-gradient(to right, #f6a709, #f77102, #e6333f);
//   box-shadow: none;
// }

// /* ================================
//    🌑 DARK MODE (DataFactz Style)
// ================================ */
// html[data-theme="dark"] .vision-section {
//   background: radial-gradient(
//       circle at 20% 20%,
//       rgba(255, 140, 0, 0.18),
//       transparent 60%
//     ),
//     radial-gradient(
//       circle at 80% 80%,
//       rgba(255, 69, 0, 0.25),
//       transparent 70%
//     ),
//     linear-gradient(180deg, #070707 0%, #0b0b0d 100%);
//   color: #ffffff;
// }

// html[data-theme="dark"] .vision-section::before {
//   content: "";
//   position: absolute;
//   inset: 0;
//   background-image:
//     linear-gradient(to right, rgba(255, 165, 0, 0.15) 1px, transparent 1px),
//     linear-gradient(to bottom, rgba(255, 140, 0, 0.15) 1px, transparent 1px);
//   background-size: 60px 60px;
//   opacity: 0.35;
//   animation: moveGrid 40s linear infinite;
//   z-index: 0;
// }

// html[data-theme="dark"] .vision-section::after {
//   content: "";
//   position: absolute;
//   inset: 0;
//   background:
//     radial-gradient(circle at 70% 30%, rgba(255, 140, 0, 0.35), transparent 60%),
//     radial-gradient(circle at 30% 70%, rgba(255, 69, 0, 0.2), transparent 60%);
//   filter: blur(120px);
//   z-index: 1;
// }

// html[data-theme="dark"] .vision-title {
//   background: linear-gradient(to right, #ffa500, #ff6a00, #ff3c00);
//   -webkit-background-clip: text;
//   -webkit-text-fill-color: transparent;
// }

// html[data-theme="dark"] .vision-subtitle {
//   color: #d3d3d3;
// }

// html[data-theme="dark"] .glow-underline {
//   background: linear-gradient(to right, #ffa500, #ff3c00);
//   box-shadow: 0 0 25px rgba(255, 140, 0, 0.9);
// }

// /* ================================
//    ✨ Shared Styles
// ================================ */
// .vision-content {
//   position: relative;
//   z-index: 2;
//   max-width: 1000px;
//   margin: 0 auto;
//   animation: fadeInUp 1.6s ease forwards;
//   padding: 1rem;
// }

// .vision-title {
//   font-size: clamp(2rem, 4vw, 2.2rem);
//   font-weight: 600;
//   margin-bottom: 1.2rem;
//   line-height: 1.2;
//   letter-spacing: 0.5px;
// }

// .vision-subtitle {
//   font-size: clamp(1rem, 1.6vw, 1.3rem);
//   line-height: 1.6;
//   max-width: 850px;
//   margin: 0 auto 2rem;
//   padding: 0 0.5rem;
//   text-wrap: balance;
// }

// .glow-underline {
//   width: 100px;
//   height: 3px;
//   margin: 1.2rem auto 2rem;
//   border-radius: 3px;
// }

// .vision-footer {
//   font-size: clamp(0.9rem, 1.5vw, 1rem);
//   letter-spacing: 0.6px;
//   color: var(--vision-footer-color, #666);
// }

// /* Animations */
// @keyframes fadeInUp {
//   from { opacity: 0; transform: translateY(30px); }
//   to { opacity: 1; transform: translateY(0); }
// }

// @keyframes moveGrid {
//   from { background-position: 0 0; }
//   to { background-position: 120px 120px; }
// }
//         `}
//       </style>

//       <section className="vision-section">
//         <Container>
//           <div className="vision-content">
//             <h1 className="vision-title">Our Vision</h1>
//             <p className="vision-subtitle">
//               Empowering organizations through <strong>AI-driven</strong> and{" "}
//               <strong>cloud-native</strong> innovation shaping a smarter,
//               connected and more sustainable digital future.
//             </p>
//             <div className="glow-underline"></div>
//             <p className="vision-footer">
//               <strong>NextMetaForce</strong> — Transforming ideas into
//               intelligent outcomes.
//             </p>
//           </div>
//         </Container>
//       </section>
//     </>
//   );
// }
import React from "react";
import { Container } from "react-bootstrap";

export default function VisionSection() {
  return (
    <>
      <style>
        {`
/* --- Base Layout --- */
.vision-section {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4rem 1rem;
  text-align: center;
  overflow: hidden;
  transition: background 0.6s ease, color 0.6s ease;
}

/* ================================
   🌤 LIGHT MODE
================================ */
:root .vision-section,
html:not([data-theme="dark"]) .vision-section {
  background: #f8f9fb;
  color: #1a1a1a;
}

:root .vision-section::before,
html:not([data-theme="dark"]) .vision-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(to right, rgba(0, 0, 0, 0.08) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(0, 0, 0, 0.08) 1px, transparent 1px);
  background-size: 2rem 2rem;
  opacity: 0.4;
  z-index: 0;
}

/* ✨ Light Mode Warm Glows */
:root .vision-section::after,
html:not([data-theme="dark"]) .vision-section::after {
  content: "";
  position: absolute;
  inset: 0;
  background:
    radial-gradient(circle at 20% 30%, rgba(255, 200, 120, 0.25), transparent 60%),
    radial-gradient(circle at 80% 70%, rgba(255, 170, 80, 0.18), transparent 60%),
    radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.5), transparent 60%);
  filter: blur(100px);
  z-index: 1;
}

:root .vision-title,
html:not([data-theme="dark"]) .vision-title {
  background: linear-gradient(to right, #f6a709, #f77102, #e6333f);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

:root .vision-subtitle,
html:not([data-theme="dark"]) .vision-subtitle {
  color: #555;
}

:root .glow-underline,
html:not([data-theme="dark"]) .glow-underline {
  background: linear-gradient(to right, #f6a709, #f77102, #e6333f);
  box-shadow: none;
}

/* ================================
   🌑 DARK MODE (DataFactz Style)
================================ */
html[data-theme="dark"] .vision-section {
  background: radial-gradient(
      circle at 20% 20%,
      rgba(255, 140, 0, 0.18),
      transparent 60%
    ),
    radial-gradient(
      circle at 80% 80%,
      rgba(255, 69, 0, 0.25),
      transparent 70%
    ),
    linear-gradient(180deg, #070707 0%, #0b0b0d 100%);
  color: #ffffff;
}

html[data-theme="dark"] .vision-section::before {
  content: "";
  position: absolute;
  inset: 0;
  background-image: 
    linear-gradient(to right, rgba(255, 165, 0, 0.15) 1px, transparent 1px),
    linear-gradient(to bottom, rgba(255, 140, 0, 0.15) 1px, transparent 1px);
  background-size: 60px 60px;
  opacity: 0.35;
  animation: moveGrid 40s linear infinite;
  z-index: 0;
}

html[data-theme="dark"] .vision-section::after {
  content: "";
  position: absolute;
  inset: 0;
  // background: 
  //   radial-gradient(circle at 70% 30%, rgba(255, 140, 0, 0.35), transparent 60%),
  //   radial-gradient(circle at 30% 70%, rgba(255, 69, 0, 0.2), transparent 60%);
  background: radial-gradient(circle at 70% 30%, rgb(196 143 77 / 35%), transparent 60%), radial-gradient(circle at 30% 70%, rgba(255, 69, 0, 0.2), transparent 60%);
  filter: blur(120px);
  z-index: 1;
}

html[data-theme="dark"] .vision-title {
  background: linear-gradient(to right, #ffa500, #ff6a00, #ff3c00);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

html[data-theme="dark"] .vision-subtitle {
  color: #d3d3d3;
}

html[data-theme="dark"] .glow-underline {
  background: linear-gradient(to right, #ffa500, #ff3c00);
  box-shadow: 0 0 25px rgba(255, 140, 0, 0.9);
}

/* ================================
   ✨ Shared Styles
================================ */
.vision-content {
  position: relative;
  z-index: 2;
  max-width: 850px;
  margin: 0 auto;
  animation: fadeInUp 1.6s ease forwards;
}

.vision-title {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin-bottom: 1.2rem;
  line-height: 1.2;
}

.vision-subtitle {
  font-size: clamp(1.1rem, 2vw, 1.3rem);
  line-height: 1.7;
  max-width: 700px;
  margin: 0 auto 2rem;
  color: inherit;
}

.glow-underline {
  width: 90px;
  height: 3px;
  margin: 1.5rem auto;
  border-radius: 3px;
}

/* Animations */
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(30px); }
  to { opacity: 1; transform: translateY(0); }
}

@keyframes moveGrid {
  from { background-position: 0 0; }
  to { background-position: 120px 120px; }
}
        `}
      </style>

      <section className="vision-section">
        <Container>
          <div className="vision-content">
            <h1 className="vision-title">Our Vision</h1>
            <p className="vision-subtitle">
              Empowering organizations through <strong>AI-driven</strong> and{" "}
              <strong>cloud-native</strong> innovation — shaping a smarter,
              connected, and more sustainable digital future.
            </p>
            <div className="glow-underline"></div>
            <p
              className="mt-5"
              style={{
                color: "var(--vision-footer-color)",
                fontSize: "1rem",
                letterSpacing: "0.5px",
              }}
            >
              <strong>NextMetaForce</strong> — Where Innovation meets purpose.
            </p>
          </div>
        </Container>
      </section>
    </>
  );
}
