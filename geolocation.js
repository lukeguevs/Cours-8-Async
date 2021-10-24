// Nécessite une connection HTTPs
// Copiez le code dans la console de votre navigateur et acceptez de partager votre position
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
};

function handlePosition(pos) {
  const crd = pos.coords;

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
}

function error(err) {
  console.warn(err.message);
}
navigator.geolocation.getCurrentPosition(handlePosition, error, options);

// Avec Promise
function getPosition(options) {
  return new Promise((resolve, reject) => {
    return navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
}

getPosition(options)
  .then((pos) => {
    const crd = pos.coords;

    console.log("Your current position is:");
    console.log(`Latitude : ${crd.latitude}`);
    console.log(`Longitude: ${crd.longitude}`);
    console.log(`More or less ${crd.accuracy} meters.`);
  })
  .catch((err) => {
    console.warn(err.message);
  });

// Avec async/await

try {
  const pos = await getPosition(options);
  const crd = pos.coords;

  console.log("Your current position is:");
  console.log(`Latitude : ${crd.latitude}`);
  console.log(`Longitude: ${crd.longitude}`);
  console.log(`More or less ${crd.accuracy} meters.`);
} catch (err) {
  console.warn(err.message);
}
