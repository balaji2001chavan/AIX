import React from "react";

export default function DivinePanel({
  onClose,
  onOpenUniverse,
  onOpenHologram,
  onOpenAIEngine,
  onOpenLeads,
  onOpenAutoMarketing,
}) {
  return (
    <div
      style={{
        position: "fixed",
        bottom: 0,
        width: "100vw",
        height: "48vh",
        background: "rgba(0,0,0,0.85)",
        backdropFilter: "blur(16px)",
        borderTop: "1px solid #444",
        zIndex: 9999,
        padding: 20,
        color: "white",
        animation: "slideUp 0.4s ease-out",
        fontFamily: "monospace",
      }}
    >
      <button
        onClick={onClose}
        style={{
          position: "absolute",
          right: 20,
          top: 15,
          background: "#222",
          color: "white",
          padding: "6px 12px",
          borderRadius: 6,
          border: "none",
          cursor: "pointer",
        }}
      >
        ✕
      </button>

      <h2 style={{ marginBottom: 10 }}>AIX Divine Intelligence Panel</h2>
      <p style={{ marginBottom: 20 }}>
        भविष्यातील स्मार्ट इंटेलिजन्स फीचर्स येथे उपलब्ध आहेत.
      </p>

      {/* UNIVERSAL BUTTONS */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
        <button
          onClick={onOpenUniverse}
          style={btn}
        >
          🌌 Universe Map
        </button>

        <button
          onClick={onOpenHologram}
          style={btn}
        >
          ✨ Hologram AI
        </button>

        <button
          onClick={onOpenAIEngine}
          style={btn}
        >
          🧠 Super Intelligence Core
        </button>

        <button
          onClick={onOpenAutoMarketing}
          style={btn}
        >
          🚀 Auto Marketing Engine
        </button>

        <button
          onClick={onOpenLeads}
          style={btn}
        >
          🏡 Property Lead Generator
        </button>
      </div>

      <style>
        {`
           @keyframes slideUp {
             from { transform: translateY(100px); opacity: 0; }
             to { transform: translateY(0); opacity: 1; }
           }
        `}
      </style>
    </div>
  );
}

const btn = {
  padding: "12px 18px",
  background: "linear-gradient(45deg, #00f7ff, #9b3dff)",
  color: "white",
  border: "none",
  borderRadius: 10,
  cursor: "pointer",
  minWidth: "140px",
  textAlign: "center",
  fontSize: "15px",
};
