import React, { useEffect, useRef, useState } from "react";
import { generateFeathers } from "./DivineParticles";
import { linkMotion } from "./DivineMotionLink";

export default function DivineNode({ onOpen }) {
  const nodeRef = useRef(null);

  const [pos, setPos] = useState({ x: 100, y: 300 });
  const [size, setSize] = useState(90); // default small mode
  const [opacity, setOpacity] = useState(0.7);
  const [feathers, setFeathers] = useState([]);

  // Floating animation (constant)
  useEffect(() => {
    let t = 0;

    const float = () => {
      t += 0.03;

      setPos((prev) => ({
        x: prev.x + Math.sin(t) * 0.5,
        y: prev.y + Math.cos(t) * 0.5,
      }));

      requestAnimationFrame(float);
    };

    float();
  }, []);

  // Motion-tilt effect (phone movement)
  useEffect(() => {
    linkMotion((motion) => {
      setPos((prev) => ({
        x: prev.x + motion.tiltX * 2,
        y: prev.y + motion.tiltY * 2,
      }));
    });
  }, []);

  // Feather trail generator
  useEffect(() => {
    const id = setInterval(() => {
      setFeathers((prev) => [...prev, generateFeathers(pos.x, pos.y)].slice(-20));
    }, 120);

    return () => clearInterval(id);
  }, [pos]);

  // Handle tap
  function handleTap() {
    setSize(230);
    setOpacity(1);

    setTimeout(() => {
      onOpen(); // open AIX panel
    }, 300);
  }

  return (
    <>
      {/* Feather Trail */}
      {feathers.map((f, i) => (
        <div
          key={i}
          style={{
            position: "fixed",
            left: f.x,
            top: f.y,
            width: f.size,
            height: f.size,
            background: f.color,
            borderRadius: "50%",
            opacity: f.opacity,
            filter: "blur(4px)",
            pointerEvents: "none",
            transition: "all 0.3s linear",
          }}
        ></div>
      ))}

      {/* Divine Shadow Node */}
      <div
        ref={nodeRef}
        onClick={handleTap}
        style={{
          position: "fixed",
          left: pos.x,
          top: pos.y,
          width: size,
          height: size * 1.3,
          background:
            "radial-gradient(circle at 50% 30%, rgba(0,255,180,0.9), rgba(90,0,180,0.4), rgba(0,0,0,0))",
          borderRadius: "60% 60% 40% 40%",
          filter: "blur(3px)",
          opacity,
          transition: "all 0.4s ease-out",
          boxShadow:
            "0 0 25px rgba(0,255,200,0.9), 0 0 55px rgba(120,0,255,0.5)",
          cursor: "pointer",
          animation: "pulse 4s infinite ease-in-out",
        }}
      ></div>

      <style>
        {`
          @keyframes pulse {
            0% { transform: scale(1); opacity: 0.7; }
            50% { transform: scale(1.07); opacity: 1; }
            100% { transform: scale(1); opacity: 0.7; }
          }
        `}
      </style>
    </>
  );
}
