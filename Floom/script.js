let map;
let center = { lat: -25.344, lng: 131.036 };
let markers = [];

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: center,
  });

  map.addListener("click", (event) => {
    addMarker({
      lat: event.latLng.lat(),
      lng: event.latLng.lng(),
    });
  });

  getMyLocation();
}

function setMarkers(map) {
  markers.forEach((item) => {
    item.setMap(map);
  });
}

function addMarker(markerLocation) {
  setMarkers(null);
  markers = [];
  const bounds = new google.maps.LatLngBounds();
  const markerObj = new google.maps.Marker({
    position: markerLocation,
  });
  markers.push(markerObj);
  bounds.extend(markerLocation);

  const antipodeLocation = getAntipode(markerLocation);
  const antipodeObj = new google.maps.Marker({
    position: antipodeLocation,
  });
  renderAntipode(antipodeLocation);
  markers.push(antipodeObj);
  bounds.extend(antipodeLocation);

  setMarkers(map);
  map.fitBounds(bounds);
}

function renderAntipode(markerlocation) {
  const url = `https://maps.googleapis.com/maps/api/staticmap?center=${markerlocation.lat},${markerlocation.lng}&zoom=10&size=900x9900&maptype=satellite&key=API`;
  document.querySelector("#antipodeImg").setAttribute("src", url);
}

function getMyLocation() {
  navigator.geolocation.getCurrentPosition(
    (position) => {
      const coords = {
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      };
      addMarker(coords);
      console.log(coords);
    },
    () => {
      console.log("Error: no geo access");
    }
  );
}

function getAntipode(point) {
  return {
    lat: point.lat * -1,
    lng: point.lng < 0 ? point.lng + 180 : point.lng - 180,
  };
}
