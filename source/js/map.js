const mapContainer = document.querySelector(".map");
const interactiveMap = L.map("map__canvas");

const LOCATION = {
  lat: 59.968137,
  lng: 30.316272,
};

const MAP_ZOOM = 20;

const deleteClass = () => {
  mapContainer.classList.remove("no-js");
};

const initMap = () => {
  interactiveMap
    .on("load", () => {
      deleteClass();
    })
    .setView(LOCATION, MAP_ZOOM);
  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    foo: "bar",
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(interactiveMap);

  L.marker(LOCATION, {
    icon: L.icon({
      iconUrl: "../img/map-pin.svg",
      iconSize: [38, 52],
      iconAnchor: [19, 52],
    }),
  }).addTo(interactiveMap);
};

export { initMap };
