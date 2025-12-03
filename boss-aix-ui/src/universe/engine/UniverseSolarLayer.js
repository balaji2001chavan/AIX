import * as THREE from "three";

export function loadSolarLayer(scene) {
  const loader = new THREE.TextureLoader();

  // ☀️ SUN
  const sun = new THREE.Mesh(
    new THREE.SphereGeometry(120, 32, 32),
    new THREE.MeshBasicMaterial({
      map: loader.load("https://i.ibb.co/8DdLc2M/sun.jpg"),
    })
  );
  sun.position.set(-300, 0, -400);
  scene.add(sun);

  // 🌍 EARTH
  const earth = new THREE.Mesh(
    new THREE.SphereGeometry(90, 32, 32),
    new THREE.MeshStandardMaterial({
      map: loader.load("https://i.ibb.co/ZGrqzKH/earth.jpg"),
    })
  );
  earth.position.set(200, 0, -400);
  scene.add(earth);

  // 🌙 MOON
  const moon = new THREE.Mesh(
    new THREE.SphereGeometry(30, 32, 32),
    new THREE.MeshStandardMaterial({
      map: loader.load("https://i.ibb.co/4W0NqfD/moon.jpg"),
    })
  );
  moon.position.set(300, 0, -400);
  scene.add(moon);

  // LIGHT
  const light = new THREE.PointLight(0xffffff, 1);
  light.position.set(-300, 0, -400);
  scene.add(light);

  function animate() {
    requestAnimationFrame(animate);

    sun.rotation.y += 0.0004;

    earth.rotation.y += 0.0012;

    const t = Date.now() * 0.001;
    moon.position.x = 200 + Math.sin(t) * 140;
    moon.position.z = -400 + Math.cos(t) * 140;
  }

  animate();
}
