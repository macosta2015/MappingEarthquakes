//This code is not done, please do not use
console.log("working");

// let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
  let streets = L.tileLayer('https://api.mapbox.com/styles/v1/mapbox/satellite-streets-v11/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data © <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery (c) <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        accessToken: API_KEY
  });    

//The object with Zoom level and feature layer
let map = L.map('mapid',{
  center: [43.7,-79.3],
  zoom: 11,
  layers: [satelliteStreets]
});

//Pass our map layers into our layer control and add the layer control to the map.
L.control.layers(baseMaps).addTo(map);



