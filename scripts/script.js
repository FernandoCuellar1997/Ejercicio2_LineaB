let mapx=document.getElementById('map')
var map = L.map(mapx, {
    center: [1.6195696361119176, -75.60781118675924],//-->Latitud y longitud en grados decimales0
    layers: OSM,
    zoom: 15
});
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
    + 'contributors', maxZoom: 18 }).addTo(map);
    var OSM = L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
    + 'contributors', maxZoom: 18
});
L.control.scale()
    .addTo(map);

var iconf=L.icon({
    iconUrl: './leaflet/images/marker-icon.png'
});
var myIcon = L.divIcon({className: 'my-div-icon'});
L.marker([1.6203307647396874, -75.60422341895665], {icon: iconf}).addTo(map)
.bindPopup('Universidad de la Amazonia').openPopup();

L.marker([1.6152680372707118, -75.61326149012142], {icon: iconf}).addTo(map)
.bindPopup('Parque Santander').openPopup();


var circle = L.circle([1.6152682406796133, -75.61390292080321], 500, { color: 'red',
fillColor: '#f03',
fillOpacity: 0.5
}).addTo(map);

var polygon = L.polygon([
    [1.6151689502685878, -75.61369304143149],
    [1.6153879205748283, -75.61304499680297],
    [1.6147066795445748, -75.6128472367051],
    [1.614530286740605, -75.6134891964075]
    ]).addTo(map)
    .bindPopup ('Parque Santander');

var pointA = new L.LatLng(1.6219077069895054, -75.6027450975144); 
var pointB = new L.LatLng(1.6203307647396874, -75.6042663342975); var latlngs = [pointA, pointB];
var polyline = L.polyline(
latlngs, {color: 'red'}
)
.addTo(map)
.bindPopup ('Avda. Juan Carlos I');
