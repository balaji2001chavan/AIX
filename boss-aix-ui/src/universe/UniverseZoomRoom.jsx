import { useState } from "react";

export default function UniverseZoomRoom() {
  const [zoomLevel, setZoomLevel] = useState(1);

  function zoomIn() {
    if (zoomLevel < 5) setZoomLevel(zoomLevel + 0.2);
  }

  function zoomOut() {
    if (zoomLevel > 1) setZoomLevel(zoomLevel - 0.2);
  }

  return (
    <div
      style={{
        position: "absolute",
        right: 20,
        bottom: 20,
        zIndex: 999,
        padding: "15px",
        background: "rgba(0,0,0,0.45)",
        borderRadius: "14px",
        backdropFilter: "blur(6px)",
        color: "white",
        fontFamily: "Trebuchet MS",
        userSelect: "none",
      }}
    >
      <div style={{ marginBottom: "10px", fontSize: "18px" }}>
        🔭 Galaxy Zoom Control
      </div>

      <div
        style={{
          display: "flex",
          gap: "10px",
        }}
      >
        <button
          onClick={zoomIn}
          style={{
            padding: "8px 15px",
            background: "#4a9eff",
            border: "none",
            borderRadius: "8px",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          ➕ Zoom In
        </button>

        <button
          onClick={zoomOut}
          style={{
            padding: "8px 15px",
            background: "#ff5252",
            border: "none",
            borderRadius: "8px",
            color: "white",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          ➖ Zoom Out
        </button>
      </div>

      <div style={{ marginTop: "10px", textAlign: "center" }}>
        Level: {zoomLevel.toFixed(1)}x
      </div>
    </div>
  );
}