export function adaptiveQuality(renderer) {
  const w = window.innerWidth;

  if (w < 500) {
    renderer.setPixelRatio(1);
  } else if (w < 1280) {
    renderer.setPixelRatio(1.5);
  } else if (w < 1920) {
    renderer.setPixelRatio(2);
  } else {
    renderer.setPixelRatio(3);
  }
}
