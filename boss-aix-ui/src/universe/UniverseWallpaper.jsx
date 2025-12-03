import React, { useEffect, useRef } from "react";

/**
 * UniverseWallpaper.jsx
 * - Canvas starfield + parallax
 * - Lightweight, no external images (no CORS)
 */

export default function UniverseWallpaper() {
  const canvasRef = useRef();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    const stars = [];
    const STAR_COUNT = Math.floor((width * height) / 50000) + 80;

    function rand(min, max) { return Math.random() * (max - min) + min; }

    for (let i = 0; i < STAR_COUNT; i++) {
      stars.push({
        x: rand(0, width),
        y: rand(0, height),
        z: rand(0.1, 1),
        size: rand(0.3, 1.8),
        twinkle: rand(0.01, 0.04)
      });
    }

    let t = 0;
    function draw() {
      t += 0.01;
      ctx.fillStyle = "#000010";
      ctx.fillRect(0, 0, width, height);

      // faint nebula gradient
      const g = ctx.createLinearGradient(0, 0, width, height);
      g.addColorStop(0, "rgba(4,8,20,0.2)");
      g.addColorStop(0.5, "rgba(12,18,40,0.08)");
      g.addColorStop(1, "rgba(2,4,10,0.2)");
      ctx.fillStyle = g;
      ctx.fillRect(0, 0, width, height);

      for (let s of stars) {
        const k = Math.sin(t * (0.5 + s.twinkle)) * 0.5 + 0.5;
        const alpha = 0.6 * k * s.z;
        ctx.beginPath();
        const r = s.size * (1 + 0.8 * (s.z - 0.1));
        ctx.fillStyle = `rgba(${200 + 55 * s.z}, ${200 + 55 * s.z}, ${255}, ${alpha})`;
        ctx.arc(s.x, s.y, r, 0, Math.PI * 2);
        ctx.fill();
      }

      requestAnimationFrame(draw);
    }

    draw();

    function onResize() {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    }
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  return <canvas ref={canvasRef} style={{ display: "block", width: "100%", height: "100%", position: "absolute", inset: 0 }} />;
}