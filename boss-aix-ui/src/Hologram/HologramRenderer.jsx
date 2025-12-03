import React, { useEffect, useRef } from "react";

export default function HologramRenderer() {
  const mountRef = useRef(null);
  const childRef = useRef(null);

  useEffect(() => {
    const mount = mountRef.current;
    if (!mount) return;

    const node = document.createElement("div");
    node.style.width = "180px";
    node.style.height = "180px";
    node.style.borderRadius = "12px";
    node.style.background = "radial-gradient(circle,#00ffd0,#0066ff)";
    node.style.opacity = "0.9";
    node.style.pointerEvents = "none";
    node.innerText = "AIX";

    childRef.current = node;
    if (!mount.contains(node)) mount.appendChild(node);

    return () => {
      const child = childRef.current;
      if (child && mount && mount.contains(child)) {
        try { mount.removeChild(child); } catch (e) { /* ignore */ }
      }
      childRef.current = null;
    };
  }, []);

  return <div ref={mountRef} style={{ position: "absolute", right: 24, top: 24, zIndex: 50 }} />;
}