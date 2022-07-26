let counter = 0;

function getPosition() {
  navigator.geolocation.getCurrentPosition((pos) => {
    document.body.innerHTML += `<p>Messung: ${counter}</p>`;
    let date = new Date(pos.timestamp);
    document.body.innerHTML += `<p>Timestamp: ${date.toLocaleTimeString()}</>`;
    document.body.innerHTML += `<p>----------------</p>`;
    counter++;
    document.body.innerHTML += `<p>Lat: ${pos.coords.latitude}</>`;
    document.body.innerHTML += `<p>Lon: ${pos.coords.longitude}</>`;
    document.body.innerHTML += `<p>Alt: ${pos.coords.altitude}</>`;
    document.body.innerHTML += `<p>Accuracy: ${pos.coords.accuracy}</>`;
    document.body.innerHTML += `<p>Heading: ${pos.coords.heading}°</>`;
    document.body.innerHTML += `<p>Speed: ${pos.coords.speed} m/s</>`;
    document.body.innerHTML += `<p>----------------</p>`;
  });
}

setInterval(getPosition, 1000);
