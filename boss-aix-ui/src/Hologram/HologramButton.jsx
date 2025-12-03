export default function HologramButton({ onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "10px 18px",
        margin: "10px 8px",
        background: "linear-gradient(45deg,#6ebcff,#ab57ff)",
        color: "white",
        border: "none",
        borderRadius: 10,
        cursor: "pointer",
      }}
    >
      ✨ Open Hologram
    </button>
  );
}
