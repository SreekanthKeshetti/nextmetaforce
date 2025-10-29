// // src/components/CustomCursor.jsx
// import React, { useEffect, useState } from "react";

// const CustomCursor = () => {
//   const [position, setPosition] = useState({ x: 0, y: 0 });

//   useEffect(() => {
//     const moveCursor = (e) => {
//       setPosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener("mousemove", moveCursor);
//     return () => window.removeEventListener("mousemove", moveCursor);
//   }, []);

//   return (
//     <>
//       <style>
//         {`
//           .custom-cursor {
//             position: fixed;
//             top: 0;
//             left: 0;
//             width: 12px;
//             height: 12px;
//             background-color: #ff6a00;
//             border-radius: 50%;
//             pointer-events: none;
//             transform: translate(-50%, -50%);
//             z-index: 9999;
//             mix-blend-mode: difference;
//             transition: transform 0.1s ease;
//           }
//         `}
//       </style>

//       <div
//         className="custom-cursor"
//         style={{
//           transform: `translate(${position.x}px, ${position.y}px)`,
//         }}
//       />
//     </>
//   );
// };

// export default CustomCursor;
// src/components/CustomCursor.jsx
import React, { useEffect, useRef, useState } from "react";

const CustomCursor = () => {
  const cursorRef = useRef(null);
  const [hovering, setHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    let mouseX = 0,
      mouseY = 0,
      currentX = 0,
      currentY = 0;

    const move = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const animate = () => {
      // Smooth trailing effect
      currentX += (mouseX - currentX) * 0.2;
      currentY += (mouseY - currentY) * 0.2;

      if (cursor) {
        cursor.style.transform = `translate3d(${currentX}px, ${currentY}px, 0)`;
      }

      requestAnimationFrame(animate);
    };

    // Detect hover over clickable items
    const addHover = () => setHovering(true);
    const removeHover = () => setHovering(false);
    const interactiveEls = document.querySelectorAll(
      "a, button, .hover-target"
    );

    interactiveEls.forEach((el) => {
      el.addEventListener("mouseenter", addHover);
      el.addEventListener("mouseleave", removeHover);
    });

    window.addEventListener("mousemove", move);
    animate();

    return () => {
      window.removeEventListener("mousemove", move);
      interactiveEls.forEach((el) => {
        el.removeEventListener("mouseenter", addHover);
        el.removeEventListener("mouseleave", removeHover);
      });
    };
  }, []);

  return (
    <>
      <style>
        {`
          .custom-cursor {
            position: fixed;
            top: 0;
            left: 0;
            width: 14px;
            height: 14px;
            background-color: #ffffff;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            mix-blend-mode: difference;
            // box-shadow: 0 0 10px #ff6a00, 0 0 20px #ff6a00;
            transition: width 0.25s ease, height 0.25s ease, background-color 0.25s ease, box-shadow 0.25s ease;
            transform: translate3d(0, 0, 0);
          }

          .custom-cursor.hover {
            width: 28px;
            height: 28px;
            background-color: #ffffff;
            box-shadow: 0 0 25px #ffffff, 0 0 45px #ffffff;
          }
        `}
      </style>

      <div
        ref={cursorRef}
        className={`custom-cursor ${hovering ? "hover" : ""}`}
      />
    </>
  );
};

export default CustomCursor;
