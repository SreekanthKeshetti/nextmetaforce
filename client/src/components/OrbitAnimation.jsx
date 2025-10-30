// import React from "react";

// function OrbitHero() {
//   const icons = [
//     { id: 1, icon: "🤖", radius: 140, duration: 12 },
//     { id: 2, icon: "💡", radius: 180, duration: 16 },
//     { id: 3, icon: "📈", radius: 220, duration: 20 },
//     { id: 4, icon: "⚙️", radius: 260, duration: 24 },
//   ];

//   return (
//     <>
//       <style>
//         {`
//       :root {
//   --bg-color: #050710;
//   --ring-color: rgba(255, 140, 0, 0.25);
//   --ring-glow: rgba(255, 165, 0, 0.35);
//   --icon-glow: rgba(255, 200, 0, 0.8);
// }

// body {
//   background: var(--bg-color);
//   color: white;
//   font-family: "Poppins", sans-serif;
// }

// /* Main container */
// .orbit-hero {
//   position: relative;
//   width: 600px;
//   height: 600px;
//   margin: 100px auto;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }

// /* Glowing orbit ring */
// .orbit-ring {
//   position: absolute;
//   width: 450px;
//   height: 450px;
//   border-radius: 50%;
//   background: radial-gradient(circle at center, var(--ring-color), transparent 70%);
//   box-shadow: 0 0 50px var(--ring-glow);
//   border: 1px solid rgba(255, 165, 0, 0.3);
//   animation: pulse 3s ease-in-out infinite alternate;
// }

// @keyframes pulse {
//   from { transform: scale(1); opacity: 1; }
//   to { transform: scale(1.05); opacity: 0.8; }
// }

// /* Center rocket */
// .center-object {
//   position: absolute;
//   width: 120px;
//   height: 120px;
//   border-radius: 50%;
//   background: radial-gradient(circle, rgba(255, 140, 0, 0.3), transparent 70%);
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   box-shadow: 0 0 30px rgba(255, 165, 0, 0.3);
//   z-index: 5;
// }

// .rocket {
//   font-size: 2.5rem;
//   filter: drop-shadow(0 0 8px rgba(255, 165, 0, 0.5));
// }

// /* Orbiting icons */
// .orbit-item {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform-origin: center center;
//   animation: rotate-orbit linear infinite;
// }

// .orbit-icon {
//   position: absolute;
//   top: 0;
//   left: 50%;
//   transform: translateX(-50%);
//   font-size: 1.8rem;
//   filter: drop-shadow(0 0 10px var(--icon-glow));
// }

// @keyframes rotate-orbit {
//   from { transform: translate(-50%, -50%) rotate(0deg); }
//   to { transform: translate(-50%, -50%) rotate(360deg); }
// }

//       `}
//       </style>
//       <div className="orbit-hero">
//         {/* Glowing main circle */}
//         <div className="orbit-ring"></div>

//         {/* Rocket center */}
//         <div className="center-object">
//           <div className="rocket">🚀</div>
//         </div>

//         {/* Orbiting icons */}
//         {icons.map((item) => (
//           <div
//             key={item.id}
//             className="orbit-item"
//             style={{
//               width: `${item.radius * 2}px`,
//               height: `${item.radius * 2}px`,
//               animationDuration: `${item.duration}s`,
//             }}
//           >
//             <span className="orbit-icon">{item.icon}</span>
//           </div>
//         ))}
//       </div>
//     </>
//   );
// }

// export default OrbitHero;
// import React from "react";

// function OrbitTechAnimation() {
//   return (
//     <>
//       <style>
//         {`
//       .orbit-wrapper {
//   position: relative;
//   width: 400px;
//   height: 400px;
//   margin: 100px auto;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   border-radius: 50%;
//   background: radial-gradient(circle at center, rgba(255,165,0,0.08), transparent 80%);
// }

// /* Outer glowing ring */
// .outer-ring {
//   position: absolute;
//   width: 330px;
//   height: 330px;
//   border: 2px dashed rgba(255,165,0,0.4);
//   border-radius: 50%;
//   animation: ring-rotate 30s linear infinite;
//   box-shadow: 0 0 25px rgba(255,165,0,0.3);
// }

// @keyframes ring-rotate {
//   from { transform: rotate(0deg); }
//   to { transform: rotate(360deg); }
// }

// /* Center Core */
// .center-core {
//   position: absolute;
//   width: 140px;
//   height: 140px;
//   border-radius: 50%;
//   background: radial-gradient(circle, rgba(255,140,0,0.9), rgba(255,69,0,0.3));
//   box-shadow: 0 0 40px rgba(255,165,0,0.7);
//   color: #fff;
//   text-align: center;
//   animation: pulse 3s ease-in-out infinite;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
// }

// .center-core h3 {
//   font-size: 1.2rem;
//   margin: 0;
// }

// .center-core p {
//   font-size: 0.8rem;
//   opacity: 0.8;
//   margin: 0;
// }

// /* Orbit Base (perfect centering) */
// .orbit {
//   position: absolute;
//   top: 50%;
//   left: 50%;
//   transform-origin: center center;
// }

// .orbit img {
//   position: absolute;
//   top: -135px; /* FIXED orbit radius to fit inside wrapper */
//   left: -25px; /* half of icon width for perfect centering */
// }

// .orbit1 { animation: spin1 12s linear infinite; }
// .orbit2 { animation: spin2 16s linear infinite; }
// .orbit3 { animation: spin3 20s linear infinite; }
// .orbit4 { animation: spin4 24s linear infinite; }
// .orbit5 { animation: spin5 28s linear infinite; }

// /* Alternate spin directions for variety */
// @keyframes spin1 {
//   from { transform: rotate(0deg); }
//   to { transform: rotate(360deg); }
// }
// @keyframes spin2 {
//   from { transform: rotate(360deg); }
//   to { transform: rotate(0deg); }
// }
// @keyframes spin3 {
//   from { transform: rotate(0deg); }
//   to { transform: rotate(360deg); }
// }
// @keyframes spin4 {
//   from { transform: rotate(360deg); }
//   to { transform: rotate(0deg); }
// }
// @keyframes spin5 {
//   from { transform: rotate(0deg); }
//   to { transform: rotate(360deg); }
// }

// /* Orbiting Icons */
// .orbit-icon {
//   width: 50px;
//   height: 50px;
//   object-fit: contain;
//   filter: drop-shadow(0 0 12px rgba(255,165,0,0.8));
//   transition: transform 0.3s, filter 0.3s;
// }

// .orbit-icon:hover {
//   transform: scale(1.2);
//   filter: drop-shadow(0 0 18px rgba(255,200,0,1));
// }

// @keyframes pulse {
//   0%, 100% { transform: scale(1); }
//   50% { transform: scale(1.1); }
// }

// body {
//   background: #0b0c10;
//   color: #fff;
//   font-family: "Poppins", sans-serif;
// }

//       `}
//       </style>

//       <div className="orbit-wrapper">
//         <div className="outer-ring"></div>

//         <div className="center-core">
//           <h3>AI Core</h3>
//           <p>Innovation Engine</p>
//         </div>

//         <div className="orbit orbit1">
//           <img
//             src="https://cdn.worldvectorlogo.com/logos/amazon-web-services-2.svg"
//             alt="AWS"
//             className="orbit-icon"
//           />
//         </div>
//         <div className="orbit orbit2">
//           <img
//             src="https://cdn.worldvectorlogo.com/logos/salesforce-2.svg"
//             alt="Salesforce"
//             className="orbit-icon"
//           />
//         </div>
//         <div className="orbit orbit3">
//           <img
//             src="https://cdn.worldvectorlogo.com/logos/microsoft-dynamics-365-2.svg"
//             alt="Dynamics 365"
//             className="orbit-icon"
//           />
//         </div>
//         <div className="orbit orbit4">
//           <img
//             src="https://cdn.worldvectorlogo.com/logos/oracle-6.svg"
//             alt="Oracle"
//             className="orbit-icon"
//           />
//         </div>
//         <div className="orbit orbit5">
//           <img
//             src="https://cdn.worldvectorlogo.com/logos/azure-devops.svg"
//             alt="Azure DevOps"
//             className="orbit-icon"
//           />
//         </div>
//       </div>
//     </>
//   );
// }

// export default OrbitTechAnimation;
// import React from "react";
// import dynamicsLogo from "../assets/microsoft-dynamics.svg";

// const OrbitAnimation = () => {
//   const icons = [
//     {
//       name: "AWS",
//       src: "https://cdn.worldvectorlogo.com/logos/amazon-web-services-2.svg",
//     },
//     {
//       name: "Salesforce",
//       src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg",
//     },
//     {
//       name: "Oracle",
//       src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
//     },
//     {
//       name: "Azure",
//       src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
//     },
//     {
//       name: "Dynamics 365",
//       src: dynamicsLogo,
//     },
//   ];

//   return (
//     <>
//       <style>
//         {`
//       body {
//   background: #fffaf2;
// }

// /* Outer container */
// .orbit-wrapper {
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   min-height: 100vh;
// }

// /* Orbit area */
// .orbit-container {
//   position: relative;
//   width: 380px;
//   height: 380px;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   perspective: 1000px;
// }

// /* Rotating glowing border ring */
// .orbit-ring {
//   position: absolute;
//   width: 340px;
//   height: 340px;
//   border-radius: 50%;
//   border: 2px solid transparent;
//   background: conic-gradient(
//     from 0deg,
//     #ffa000,
//     #ffca28,
//     #ffffff,
//     #ffb300,
//     #ffa000
//   );
//   -webkit-mask: radial-gradient(farthest-side, transparent 78%, black 79%);
//   mask: radial-gradient(farthest-side, transparent 78%, black 79%);
//   animation: spin 16s linear infinite;
//   opacity: 0.85;
//   box-shadow: 0 0 50px rgba(255, 193, 7, 0.35);
// }

// @keyframes spin {
//   from {
//     transform: rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg);
//   }
// }

// /* Center glowing circle */
// .center-core {
//   width: 120px;
//   height: 120px;
//   background: radial-gradient(circle, #fff7e1, #ffcc80, #ffb300);
//   border-radius: 50%;
//   border: 2px solid rgba(255, 204, 128, 0.6);
//   box-shadow: 0 0 25px rgba(255, 160, 0, 0.6);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   color: #4e342e;
//   font-weight: 700;
//   text-align: center;
//   font-size: 18px;
//   letter-spacing: 1px;
//   z-index: 2;
// }

// /* Orbiting icons outside the ring */
// .orbit-icon {
//   position: absolute;
//   width: 58px;
//   height: 58px;
//   background: rgba(255, 255, 255, 0.8);
//   border-radius: 50%;
//   border: 1px solid rgba(255, 193, 7, 0.4);
//   box-shadow: 0 0 15px rgba(255, 171, 64, 0.4);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   backdrop-filter: blur(3px);
//   transition: transform 0.3s ease, box-shadow 0.3s ease;
// }

// .orbit-icon:hover {
//   transform: scale(1.1);
//   box-shadow: 0 0 25px rgba(255, 111, 0, 0.7);
// }

// .orbit-icon img {
//   width: 28px;
//   height: 28px;
//   object-fit: contain;
// }

// /* Orbit motion (outside circle, even spacing) */
// .orbit-1 {
//   animation: orbitPath1 14s linear infinite;
// }
// .orbit-2 {
//   animation: orbitPath2 16s linear infinite reverse;
// }
// .orbit-3 {
//   animation: orbitPath3 18s linear infinite;
// }
// .orbit-4 {
//   animation: orbitPath4 20s linear infinite reverse;
// }
// .orbit-5 {
//   animation: orbitPath5 22s linear infinite;
// }

// /* Perfect circular orbits, spaced evenly */
// @keyframes orbitPath1 {
//   from {
//     transform: rotate(0deg) translateX(200px) rotate(0deg);
//   }
//   to {
//     transform: rotate(360deg) translateX(200px) rotate(-360deg);
//   }
// }
// @keyframes orbitPath2 {
//   from {
//     transform: rotate(72deg) translateX(200px) rotate(0deg);
//   }
//   to {
//     transform: rotate(432deg) translateX(200px) rotate(-360deg);
//   }
// }
// @keyframes orbitPath3 {
//   from {
//     transform: rotate(144deg) translateX(200px) rotate(0deg);
//   }
//   to {
//     transform: rotate(504deg) translateX(200px) rotate(-360deg);
//   }
// }
// @keyframes orbitPath4 {
//   from {
//     transform: rotate(216deg) translateX(200px) rotate(0deg);
//   }
//   to {
//     transform: rotate(576deg) translateX(200px) rotate(-360deg);
//   }
// }
// @keyframes orbitPath5 {
//   from {
//     transform: rotate(288deg) translateX(200px) rotate(0deg);
//   }
//   to {
//     transform: rotate(648deg) translateX(200px) rotate(-360deg);
//   }
// }

//       `}
//       </style>
//       <div className="orbit-wrapper">
//         <div className="orbit-container">
//           <div className="orbit-ring"></div>

//           {/* Center Core */}
//           <div className="center-core">
//             <span>
//               AI <br />
//               Core
//             </span>
//           </div>

//           {/* Orbiting Icons */}
//           {icons.map((icon, index) => (
//             <div
//               key={index}
//               className={`orbit-icon orbit-${index + 1}`}
//               title={icon.name}
//             >
//               <img src={icon.src} alt={icon.name} />
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default OrbitAnimation;
import React from "react";
import dynamicsLogo from "../assets/microsoft-dynamics.svg";

const OrbitAnimation = () => {
  const icons = [
    {
      name: "AWS",
      src: "https://cdn.worldvectorlogo.com/logos/amazon-web-services-2.svg",
    },
    {
      name: "Salesforce",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/salesforce/salesforce-original.svg",
    },
    {
      name: "Oracle",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/oracle/oracle-original.svg",
    },
    {
      name: "Azure",
      src: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
    },
    {
      name: "Dynamics 365",
      src: "https://img.icons8.com/color/48/dynamics-365.png",
    },
  ];

  return (
    <>
      <style>{`
        /* page background */
        body {
          background: linear-gradient(135deg, #fffaf2 0%, #fff3e0 100%);
          margin: 0;
        }

        /* layout */
        .orbit-wrapper {
          display: flex;
          justify-content: center;
          align-items: center;
          min-height: 70vh;
          position: relative;
          padding: 40px 0;
        }

        .orbit-container {
          position: relative;
          width: 420px;
          height: 420px;
          display: flex;
          justify-content: center;
          align-items: center;
          perspective: 900px;
          z-index: 1;
        }

        /* THIN elegant ring:
           - smaller visual thickness
           - inner cutout so icons can orbit outside the ring
           - subtle gradient stroke and soft blur */
        .orbit-ring {
          position: absolute;
          width: 340px;         /* overall diameter of the ring */
          height: 340px;
          border-radius: 50%;
          z-index: 1;
          /* create a thin ring using conic-gradient + mask */
          background:
            conic-gradient(from 0deg, rgba(255,160,0,0.95), rgba(255,200,70,0.9), rgba(255,245,230,0.85), rgba(255,200,70,0.9), rgba(255,160,0,0.95));
          /* mask keeps only the thin stroke (ring width) visible */
          -webkit-mask: radial-gradient(farthest-side, transparent 83%, black 84%);
          mask: radial-gradient(farthest-side, transparent 83%, black 84%);
          filter: blur(6px);
          opacity: 0.95;
          pointer-events: none;
        }

        /* a crisp edge ring (on top of the blurred ring) for definition */
        .orbit-ring::after {
          content: "";
          position: absolute;
          inset: 0;
          border-radius: 50%;
          -webkit-mask: radial-gradient(farthest-side, transparent 82%, black 83%);
          mask: radial-gradient(farthest-side, transparent 82%, black 83%);
          background: linear-gradient(90deg, rgba(255,200,60,0.95), rgba(255,245,230,0.95));
          box-shadow: 0 0 12px rgba(255,180,0,0.18);
        }

        /* Center core */
        .center-core {
          width: 140px;
          height: 140px;
          border-radius: 50%;
          background: radial-gradient(circle, #fff8e1, #ffe082 40%, #ffca28 100%);
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          color: #5d4037;
          font-weight: 700;
          font-size: 18px;
          box-shadow:
            0 6px 18px rgba(255, 180, 0, 0.20),
            inset 0 -6px 18px rgba(255, 230, 160, 0.25);
          z-index: 3;
          transform-origin: center;
          animation: corePulse 3.4s ease-in-out infinite;
        }

        @keyframes corePulse {
          0%,100% { transform: scale(1); filter: drop-shadow(0 0 18px rgba(255,180,0,0.28)); }
          50%    { transform: scale(1.05); filter: drop-shadow(0 0 30px rgba(255,200,0,0.42)); }
        }

        /* icon container (round + subtle glass) */
        .orbit-icon {
          position: absolute;
          width: 70px;    /* increase or decrease this to control container size */
          height: 70px;   /* increase or decrease this to control container size */
          border-radius: 50%;
          background: rgba(255,255,255,0.95);
          border: 1px solid rgba(255,200,60,0.28);
          display: flex;
          justify-content: center;
          align-items: center;
          box-shadow: 0 6px 18px rgba(255,165,0,0.12);
          transition: transform 0.28s ease, box-shadow 0.28s ease;
          z-index: 4;
          backdrop-filter: blur(4px);
          /* gentle floating so icons feel alive */
          animation: float 3.6s ease-in-out infinite alternate;
        }

        .orbit-icon img {
          width: 36px;   /* icon visual size (change this to adjust logo size) */
          height: 36px;
          object-fit: contain;
          display: block;
          filter: saturate(1.2) contrast(1.02);
        }

        .orbit-icon:hover {
          transform: scale(1.15);
          box-shadow: 0 10px 30px rgba(255,140,0,0.22);
        }

        @keyframes float {
          0% { transform: translateY(-6px); }
          100% { transform: translateY(6px); }
        }

        /* Orbit keyframes:
           use translateX(distance) where distance places icons just OUTSIDE the ring.
           Choose distance = (ring radius / 2) + offset; here ring is 340px so we use ~220px */
        .orbit-1 { animation: orbitPath1 16s linear infinite; }
        .orbit-2 { animation: orbitPath2 18s linear infinite reverse; }
        .orbit-3 { animation: orbitPath3 20s linear infinite; }
        .orbit-4 { animation: orbitPath4 22s linear infinite reverse; }
        .orbit-5 { animation: orbitPath5 24s linear infinite; }

        @keyframes orbitPath1 {
          from { transform: rotate(0deg) translateX(220px) rotate(0deg); }
          to   { transform: rotate(360deg) translateX(220px) rotate(-360deg); }
        }
        @keyframes orbitPath2 {
          from { transform: rotate(72deg) translateX(220px) rotate(0deg); }
          to   { transform: rotate(432deg) translateX(220px) rotate(-360deg); }
        }
        @keyframes orbitPath3 {
          from { transform: rotate(144deg) translateX(220px) rotate(0deg); }
          to   { transform: rotate(504deg) translateX(220px) rotate(-360deg); }
        }
        @keyframes orbitPath4 {
          from { transform: rotate(216deg) translateX(220px) rotate(0deg); }
          to   { transform: rotate(576deg) translateX(220px) rotate(-360deg); }
        }
        @keyframes orbitPath5 {
          from { transform: rotate(288deg) translateX(220px) rotate(0deg); }
          to   { transform: rotate(648deg) translateX(220px) rotate(-360deg); }
        }

        /* small responsive tweak */
        @media (max-width: 520px) {
          .orbit-container { width: 300px; height: 300px; }
          .orbit-ring { width: 260px; height: 260px; -webkit-mask: radial-gradient(farthest-side, transparent 78%, black 79%); mask: radial-gradient(farthest-side, transparent 78%, black 79%); }
          .orbit-icon { width: 56px; height: 56px; }
          .orbit-icon img { width: 28px; height: 28px; }
          @keyframes orbitPath1 { from { transform: rotate(0deg) translateX(170px) rotate(0deg); } to { transform: rotate(360deg) translateX(170px) rotate(-360deg); } }
          /* same for other orbitPath@ rules — they will automatically use the smaller container */
        }
      `}</style>

      <div className="orbit-wrapper">
        <div className="orbit-container">
          <div className="orbit-ring" />

          <div className="center-core">
            <span>Nextmetaforce</span>
          </div>

          {icons.map((icon, i) => (
            <div
              key={icon.name}
              className={`orbit-icon orbit-${i + 1}`}
              title={icon.name}
              aria-label={icon.name}
            >
              <img src={icon.src} alt={icon.name} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default OrbitAnimation;
