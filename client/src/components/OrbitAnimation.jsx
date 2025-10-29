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
import React from "react";

function OrbitTechAnimation() {
  return (
    <>
      <style>
        {`
      .orbit-wrapper {
  position: relative;
  width: 400px;
  height: 400px;
  margin: 100px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: radial-gradient(circle at center, rgba(255,165,0,0.08), transparent 80%);
}

/* Outer glowing ring */
.outer-ring {
  position: absolute;
  width: 330px;
  height: 330px;
  border: 2px dashed rgba(255,165,0,0.4);
  border-radius: 50%;
  animation: ring-rotate 30s linear infinite;
  box-shadow: 0 0 25px rgba(255,165,0,0.3);
}

@keyframes ring-rotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Center Core */
.center-core {
  position: absolute;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(255,140,0,0.9), rgba(255,69,0,0.3));
  box-shadow: 0 0 40px rgba(255,165,0,0.7);
  color: #fff;
  text-align: center;
  animation: pulse 3s ease-in-out infinite;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.center-core h3 {
  font-size: 1.2rem;
  margin: 0;
}

.center-core p {
  font-size: 0.8rem;
  opacity: 0.8;
  margin: 0;
}

/* Orbit Base (perfect centering) */
.orbit {
  position: absolute;
  top: 50%;
  left: 50%;
  transform-origin: center center;
}

.orbit img {
  position: absolute;
  top: -135px; /* FIXED orbit radius to fit inside wrapper */
  left: -25px; /* half of icon width for perfect centering */
}

.orbit1 { animation: spin1 12s linear infinite; }
.orbit2 { animation: spin2 16s linear infinite; }
.orbit3 { animation: spin3 20s linear infinite; }
.orbit4 { animation: spin4 24s linear infinite; }
.orbit5 { animation: spin5 28s linear infinite; }

/* Alternate spin directions for variety */
@keyframes spin1 {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@keyframes spin2 {
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
}
@keyframes spin3 {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
@keyframes spin4 {
  from { transform: rotate(360deg); }
  to { transform: rotate(0deg); }
}
@keyframes spin5 {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}

/* Orbiting Icons */
.orbit-icon {
  width: 50px;
  height: 50px;
  object-fit: contain;
  filter: drop-shadow(0 0 12px rgba(255,165,0,0.8));
  transition: transform 0.3s, filter 0.3s;
}

.orbit-icon:hover {
  transform: scale(1.2);
  filter: drop-shadow(0 0 18px rgba(255,200,0,1));
}

@keyframes pulse {
  0%, 100% { transform: scale(1); }
  50% { transform: scale(1.1); }
}

body {
  background: #0b0c10;
  color: #fff;
  font-family: "Poppins", sans-serif;
}

      `}
      </style>

      <div className="orbit-wrapper">
        <div className="outer-ring"></div>

        <div className="center-core">
          <h3>AI Core</h3>
          <p>Innovation Engine</p>
        </div>

        <div className="orbit orbit1">
          <img
            src="https://cdn.worldvectorlogo.com/logos/amazon-web-services-2.svg"
            alt="AWS"
            className="orbit-icon"
          />
        </div>
        <div className="orbit orbit2">
          <img
            src="https://cdn.worldvectorlogo.com/logos/salesforce-2.svg"
            alt="Salesforce"
            className="orbit-icon"
          />
        </div>
        <div className="orbit orbit3">
          <img
            src="https://cdn.worldvectorlogo.com/logos/microsoft-dynamics-365-2.svg"
            alt="Dynamics 365"
            className="orbit-icon"
          />
        </div>
        <div className="orbit orbit4">
          <img
            src="https://cdn.worldvectorlogo.com/logos/oracle-6.svg"
            alt="Oracle"
            className="orbit-icon"
          />
        </div>
        <div className="orbit orbit5">
          <img
            src="https://cdn.worldvectorlogo.com/logos/azure-devops.svg"
            alt="Azure DevOps"
            className="orbit-icon"
          />
        </div>
      </div>
    </>
  );
}

export default OrbitTechAnimation;
