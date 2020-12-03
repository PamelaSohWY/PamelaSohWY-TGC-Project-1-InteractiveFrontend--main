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
L.marker([1.28, 103.8]).addTo(map).bindPopup("here");
axios.get("data/testjson.json").then(function(response){
    console.log("where are you2");
    Loc=response.data;
    L.marker([Loc[0]["lat"], Loc[0]["long"]]).addTo(map).bindPopup(Loc[0]["name"]);
})

L.marker([1.25, 104.2]).addTo(map).bindPopup("here2");

 axios.get("data/hotel.json").then(function(response){
    console.log("where are you3");
    Loc=response.data;
     console.log(Loc[0]["lat"], Loc[0]["long"]);
    L.marker([Loc[0]["lat"], Loc[0]["long"]]).addTo(map).bindPopup(Loc[0]["name"]);
})


  axios.get("data/trees.geojson").then(function(response){
    L.geoJson(response.data, {
    color: "red"
  }).addTo(map);
  });
  