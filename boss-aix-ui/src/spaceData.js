export async function getPlanetPosition(planetId = "399") {
  const res = await fetch(
    `https://ssd.jpl.nasa.gov/api/horizons.api?format=json&COMMAND='${planetId}'&EPHEM_TYPE='VECTORS'&CENTER='SUN'&OBJ_DATA='YES'`
  );
  const data = await res.json();

  const raw = data?.result?.vectors?.[0];
  if (!raw) return null;

  return {
    x: parseFloat(raw.x),
    y: parseFloat(raw.y),
    z: parseFloat(raw.z)
  };
}
