import * as THREE from "three";
import { loadSkyLayer } from "./UniverseRealtimeSky";
import { loadSolarLayer } from "./UniverseSolarLayer";
import { adaptiveQuality } from "./UniverseAdaptiveRenderer";

let renderer, scene, camera;

export function startUniverseEngine() {
  const canvas = document.getElementById("AIX_UNIVERSE");

  renderer = new THREE.WebGLRenderer({
    canvas,
    antialias: true,
  });

  adaptiveQuality(renderer);

  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);

  scene = new THREE.Scene();

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    6000
  );

  camera.position.z = 800;

  // 🌌 Load starfield + galaxy
  loadSkyLayer(scene);

  // ☀️🌍🌙 Load Sun, Earth, Moon (real motion)
  loadSolarLayer(scene);

  // ♻ Resize auto
  window.addEventListener("resize", () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  });

  animate();
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}