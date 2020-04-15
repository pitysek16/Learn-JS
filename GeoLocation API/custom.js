let latitude = document.getElementById('latitude');
let longitude = document.getElementById('longitude');
let accuracy = document.getElementById('accuracy');
let status = document.getElementById('status');
let allow = document.getElementById('allow');
let getButton = document.getElementById('get');
let blockGet = document.getElementById('blockGet');
let geoMap = document.getElementById('map');
let getMap = document.getElementById('get-map');
let blockData = document.getElementById('block-get');
let allowBlock = document.getElementById('allow-block');
let spinner = document.getElementById('spinner');


function checKingGeo(){
    if (window.navigator.geolocation) {
        allow.innerHTML = 'Congratulations! Your browser supports HTML5 Geolocation API';
        allow.classList.add('text-success');
        allowBlock.classList.add('d-block');
     
    } else {
        allow.innerHTML = 'Unfortunately, your browser does not support HTML5 Geolocation API';
        allow.classList.add('text-danger');
        allowBlock.classList.add('d-none');
    }
}

window.addEventListener('load', checKingGeo);

getButton.onclick = function () {
 
    showLoadStatus();
    navigator.geolocation.getCurrentPosition(updateLocation, handleError, {enableHighAccuracy: true, timeout: 4000, maximumAge: 100000});

    function updateLocation(pos){
        
        blockData.classList.add('d-block');
        status.classList.add('d-none');
        getButton.classList.add('d-none');
        allow.classList.add('d-none');

        latitude.innerHTML = pos.coords.latitude;
        longitude.innerHTML = pos.coords.longitude;
        accuracy.innerHTML = pos.coords.accuracy;
        
        hideLoadStatus();
    }

    function handleError(error){
  
        blockData.classList.add('d-none');
        status.classList.add('d-block', 'border', 'border-danger', 'p-3');

        switch (error.code) {
            case 0:
                updateStatus(`Error: ${error.message}`);
                break;
            case 1:
                updateStatus('You have banned the acquisition of location data');
                break;
            case 2:
                updateStatus(`The browser was unable to determine the location: ${error.message}`);
                break;
            case 3:
                updateStatus('Expired timeout');
                break;
        }
        hideLoadStatus();
    }

    function updateStatus(message) {
        status.innerHTML = message;
    }

    function showLoadStatus(){
        spinner.style.visibility = 'visible';
    }
    function hideLoadStatus(){
        spinner.style.visibility = 'hidden';
    }
}


getMap.onclick = function initMap() {
    getMap.style.display = 'none';
    navigator.geolocation.getCurrentPosition(updatePosition);

    function updatePosition(position) {
        let pos = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
        };

        let map = new google.maps.Map(geoMap, {
            zoom: 15,
            center: pos
          });

        let infowindow = new google.maps.InfoWindow({
            content: `
                <b>Your current location:</b><br/>
                Latitude: ${pos.lat}<br/>
                Longitude: ${pos.lng}
            `
          });
        
          let marker = new google.maps.Marker({
            position: pos,
            map: map
          });
          
          marker.addListener('click', function() {
            infowindow.open(map, marker);
          });
        }
}
        

