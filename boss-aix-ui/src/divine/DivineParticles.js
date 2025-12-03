export function generateFeathers(x, y) {
  const colors = [
    "rgba(0,255,200,0.8)",
    "rgba(100,200,255,0.7)",
    "rgba(170,0,255,0.7)",
    "rgba(255,210,80,0.6)"
  ];

  return {
    x: x - 20 + Math.random() * 40,
    y: y - 20 + Math.random() * 40,
    size: 15 + Math.random() * 20,
    opacity: 0.6,
    color: colors[Math.floor(Math.random() * colors.length)],
  };
}
