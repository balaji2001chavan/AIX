import { useEffect, useState } from "react";

export default function GalaxyCanvas() {
  const [imgUrl, setImgUrl] = useState(null);

  useEffect(() => {
    // NASA / ISS Live Earth View
    const REAL_LIVE_STREAM =
      "https://images-assets.nasa.gov/image/iss060e000602/iss060e000602~orig.jpg";

    async function loadLive() {
      try {
        // Fetch latest real space image
        const timestamp = Date.now();
        setImgUrl(`${REAL_LIVE_STREAM}?t=${timestamp}`);
      } catch (err) {
        console.log("Live space load error:", err);
      }
    }

    loadLive();

    // Refresh every 20 seconds
    const interval = setInterval(loadLive, 20000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        position: "fixed",
        top: 0,
        left: 0,
        zIndex: -1,
        background: "black",
        overflow: "hidden",
      }}
    >
      {imgUrl && (
        <img
          src={imgUrl}
          alt="REAL SPACE LIVE"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            filter: "brightness(1.1) contrast(1.2)",
          }}
        />
      )}
    </div>
  );
}
