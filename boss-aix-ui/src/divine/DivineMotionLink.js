export function linkMotion(callback) {
  window.addEventListener("deviceorientation", (event) => {
    callback({
      tiltX: (event.beta || 0) / 50,
      tiltY: (event.gamma || 0) / 50,
    });
  });
}
