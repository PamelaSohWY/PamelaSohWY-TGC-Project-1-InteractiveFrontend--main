


// For Set Up of Map
//To put map on to html page with Tiong Bahru Co-ordinate
// async function main(){
    let tiongbahru = [1.2865, 103.8270];
    let map=L.map("themap").setView(tiongbahru,15);

//For application of token at mapbox.com 
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken:  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw" 
}).addTo(map);

    console.log("where are you");
L.marker[1.28, 103.8].addTo(map).bindPopup("here");
axios.get("data/testjson.json").then(function(response){
    console.log("where are you2");
    Loc=response.data;
    L.marker([Loc[0]["lat"], Loc[0]["long"]]).addTo(map).bindPopup(Loc[0]["name"]);
})

//async loading of files
//   let hotelRequest = createLayersFromJSON(map, "data/hoteltlb.json");
//   let foodRequest = createLayersFromJSON(map, "data/food.json");
//   applyGeoJSON(map, "data/trees.geojson");

//   let hotelLayer = await hotelRequest;
//   let foodLayer = await foodRequest;
//   let muralLayer = await muralRequest;
//   let layers = [];
//   for (r of requests) {
//     layers.push(await r);
//   }

//  let [hotelLayer, foodLayer, muralLayer] = layers;

//  let baseLayers={
//      Hotel: hotelLayer,
//      Food: foodLayer, 
     
//  };

// let overlayLayers = {
//     "artist": muralLayer
//   };

// L.control.layers(baseLayers,overlayLayers).addto(map); 

// document
//     .querySelector("#btn-toggle-mural")
//     .addEventListener("click", function() {
//       if (map.hasLayer(muralLayer)) {
//         map.removeLayer(muralLayer);
//       } else {
//         map.addLayer(muralLayer);
//       }
//     });
// }

// async function createLayersFromJSON(map, jsonFile) {
//   let response = await axios.get(jsonFile);

//   let layer = L.layerGroup();
//   for (let location of response.data) {
//     L.marker(location.coordinates)
//       .bindPopup(`<h1>${location.name}</h1>`)
//       .addTo(layer);
//   }
//   return layer;
// }

// async function applyGeoJSON(map, jsonFile) {
//   let response = await axios.get(jsonFile);
//   L.geoJson(response.data, {
//     color: "blue"
//   }).addTo(map);
// }

// }//end of async function

// main();
