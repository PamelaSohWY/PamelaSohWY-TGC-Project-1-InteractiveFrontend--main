// For Set Up of Map
//To put map on to html page with Tiong Bahru Co-ordinate
async function main(){
    let tiongbahru = [1.2849401462512304, 103.83355013310388];
    let map=L.map("themap").setView(tiongbahru,30);

//For application of token at mapbox.com 
L.tileLayer('https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    id: 'mapbox/streets-v11',
    tileSize: 512,
    zoomOffset: -1,
    accessToken:  "pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw" 
}).addTo(map);

// //code ok//
//     console.log("where are you");
// L.marker([1.28, 103.8]).addTo(map).bindPopup("here");
// axios.get("data/testjson.json").then(function(response){
//     console.log("where are you2");
//     Loc=response.data;
//     L.marker([Loc[0]["lat"], Loc[0]["long"]]).addTo(map).bindPopup(Loc[0]["name"]);
// })

// L.marker([1.25, 104.2]).addTo(map).bindPopup("here2");

//  axios.get("data/hotel.json").then(function(response){
//     console.log("where are you3");
//     Loc=response.data;
//      console.log(Loc[0]["lat"], Loc[0]["long"]);
//     L.marker([Loc[0]["lat"], Loc[0]["long"]]).addTo(map).bindPopup(Loc[0]["name"]);
// })


//   axios.get("data/trees.geojson").then(function(response){
//     L.geoJson(response.data, {
//     color: "red"
//   }).addTo(map);
//   });
//   //codeok//

let foodRequest = createLayersFromJSON(map, "./data/food.json");
let hotelRequest = createLayersFromJSON(map, "./data/hotel.json");
  
let treesRequest=  applyGeoJSON(map, "./data/trees.geojson");
  let foodLayer = await foodRequest;
  let hotelLayer = await hotelRequest;
let treesLayer=  await treesRequest;
//console.log(treesLayer)for testing

//   let layers = [];
//   for (r of requests) {
//     layers.push(await r);
//   }

//   let layers = [foodLayer, hotelLayer];

  let baseLayers = {
    Food: foodLayer,
    Hotels: hotelLayer
  };

  let overlayLayers = {
   "Trees": treesLayer
  };

  L.control.layers(baseLayers, overlayLayers).addTo(map);
 //treesLayer.addTo(map);

  document
    .querySelector("#btn-toggle-trees")
    .addEventListener("click", function() {
      // if the map has the nature layer shown
      if (map.hasLayer(treesLayer)) {
         // console.log(treesLayer) for testing
        map.removeLayer(treesLayer);
      } else {
        //  console.log(treesLayer) for testing
        map.addLayer(treesLayer);
      }
    });

async function createLayersFromJSON(map, jsonFile) {
  let response = await axios.get(jsonFile);

  let layer = L.layerGroup();
  for (let location of response.data) {
    L.marker(location.coordinates)
      .bindPopup(`<h3>${location.name}  ${location.address}</h3>`)
      .addTo(layer);
  }
  return layer;
}

//to apply geo json

async function applyGeoJSON(map, jsonFile) {
let response = await axios.get(jsonFile);

let layer = L.layerGroup();
  L.geoJSON(response.data, {
      color:"red"
  }).addTo(layer);
 return layer;
 }

}

main();