import { useEffect, useRef } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls.js";

export default function SpaceView() {
  const mountRef = useRef(null);

  useEffect(() => {
    const scene = new THREE.Scene();

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      5000
    );
    camera.position.set(0, 50, 300);

    const renderer = new THREE.WebGLRenderer({ antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    mountRef.current.appendChild(renderer.domElement);

    const controls = new OrbitControls(camera, renderer.domElement);

    // 🌌 REAL MILKY WAY BACKGROUND — NASA SURVEY DATA
    const spaceTexture = new THREE.TextureLoader().load(
      "https://cdn.jsdelivr.net/gh/frostoven/astro-data/milkyway_8k.jpg",
      () => console.log("Real Galaxy Loaded ✔")
    );

    const spaceSphere = new THREE.Mesh(
      new THREE.SphereGeometry(4000, 64, 64),
      new THREE.MeshBasicMaterial({
        map: spaceTexture,
        side: THREE.BackSide,
      })
    );
    scene.add(spaceSphere);

    // ☀ REALISTIC SUN
    const sunTexture = new THREE.TextureLoader().load(
      "https://raw.githubusercontent.com/frostoven/astro-data/main/sun.jpg"
    );
    const sun = new THREE.Mesh(
      new THREE.SphereGeometry(70, 64, 64),
      new THREE.MeshBasicMaterial({ map: sunTexture })
    );
    sun.position.set(0, 0, 0);
    scene.add(sun);

    const pointLight = new THREE.PointLight(0xffffff, 6);
    pointLight.position.set(0, 0, 0);
    scene.add(pointLight);

    // 🔁 Animation
    function animate() {
      requestAnimationFrame(animate);
      sun.rotation.y += 0.002;
      renderer.render(scene, camera);
    }
    animate();

    // 📏 Resize Fix
    window.addEventListener("resize", () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    });
  }, []);

  return <div ref={mountRef} style={{ width: "100vw", height: "100vh" }} />;
}

