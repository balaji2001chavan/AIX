import React from "react";
import BossConsole from "./components/BossConsole.jsx";
import "./App.css";

export default function App() {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      overflow: "hidden",
      background: "linear-gradient(180deg, #001020 0%, #001a33 60%, #001033 100%)",
      color: "#fff",
      fontFamily: "Inter, Roboto, sans-serif"
    }}>
      {/* Header */}
      <header style={{
        position: "absolute",
        top: 10,
        left: 18,
        zIndex: 50,
        fontSize: 14,
        opacity: 0.9
      }}>
        AIX Boss Console — Live · Local
      </header>

      {/* Optional: If you have UniverseWallpaper.jsx, you can render it here */}
      {/* <UniverseWallpaper /> */}

      {/* Centered content placeholder (you can keep or remove) */}
      <div style={{
        position: "absolute",
        inset: 0,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        pointerEvents: "none"
      }}>
        {/* subtle stars layer or logo can go here */}
      </div>

      {/* BossConsole is fixed bottom UI */}
      <BossConsole />
    </div>
  );
}