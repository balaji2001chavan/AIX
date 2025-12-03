import * as THREE from "three";

export function loadSkyLayer(scene) {
  // ⭐ STARFIELD
  const stars = new THREE.BufferGeometry();
  const count = 9000;
  const positions = new Float32Array(count * 3);

  for (let i = 0; i < count * 3; i++) {
    positions[i] = (Math.random() - 0.5) * 5000;
  }

  stars.setAttribute("position", new THREE.BufferAttribute(positions, 3));

  const starMaterial = new THREE.PointsMaterial({
    color: 0xffffff,
    size: 2,
    transparent: true,
    opacity: 0.9,
  });

  const starField = new THREE.Points(stars, starMaterial);

  scene.add(starField);

  // 🌌 GALAXY BACKDROP
  const galaxyTexture = new THREE.TextureLoader().load(
    "https://i.ibb.co/7J5gV0D/milkyway-hd.jpg"
  );

  const galaxyGeo = new THREE.SphereGeometry(2500, 64, 64);
  const galaxyMat = new THREE.MeshBasicMaterial({
    map: galaxyTexture,
    side: THREE.BackSide,
    opacity: 0.9,
    transparent: true,
  });

  const galaxy = new THREE.Mesh(galaxyGeo, galaxyMat);
  scene.add(galaxy);

  // 3D MOTION
  function animate() {
    requestAnimationFrame(animate);
    starField.rotation.y += 0.0003;
    galaxy.rotation.y += 0.0001;
  }
  animate();
}
