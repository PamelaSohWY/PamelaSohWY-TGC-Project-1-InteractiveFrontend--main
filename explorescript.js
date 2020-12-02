


// For Set Up of Map
//To put map on to html page with Tiong Bahru Co-ordinate
async function main(){
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

}

 let requests = [
    createHotelFromJSON(map, "data/hoteltb.json"),
    createFoodFromJSON(map, "data/food.json")
    applyGeoJSON(map, "data/trees.geojson")
  ];

   let layers = [];
  for (r of requests) {
    layers.push(await r);
  }

main();
