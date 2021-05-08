let submitbtn = document.getElementById("submitButton");
submitbtn.addEventListener("click", function(event){ event.preventDefault(); });
submitbtn.addEventListener("click", function(){ alert("The website is under construction") });


/* Add Map with MapBox */
placeLocation()
function placeLocation(){
  mapboxgl.accessToken = 'pk.eyJ1Ijoid2FyaW9tZWppYSIsImEiOiJja24zbTE2Z3kxaXp3Mm90cHFtbnRxNWUyIn0.oVOxccs1_pWuZLIYsVxgrA';
  const myMap = new mapboxgl.Map({
    container: 'myMap',
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-89.56195923151516, 13.97741141361695],
    zoom: 16,
  });
  myMap.addControl(new mapboxgl.NavigationControl());
  const marker1 = new mapboxgl.Marker({ color: 'red', scale: 1.5 })
  .setLngLat([-89.56195923151516, 13.97741141361695])
  .addTo(myMap);
}
