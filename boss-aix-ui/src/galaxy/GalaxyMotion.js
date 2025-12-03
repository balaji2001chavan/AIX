// GalaxyMotion.js
// SAFE DEVICE MOTION ENGINE (gyroscope + accelerometer)

export function startMotionTracking(callback) {
  if (typeof window === "undefined") return;

  // iPhone permission
  if (window.DeviceMotionEvent?.requestPermission) {
    window.DeviceMotionEvent.requestPermission().catch(() => {});
  }

  window.addEventListener("deviceorientation", (event) => {
    const { alpha, beta, gamma } = event;

    callback({
      rotX: beta ? beta / 50 : 0,   // Up-down tilt
      rotY: gamma ? gamma / 50 : 0, // Left-right tilt
      rotZ: alpha ? alpha / 200 : 0 // Phone rotation
    });
  });
}
