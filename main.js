const peta = L.map('peta').setView([-8.12046, 111.80451], 13)

const OSM = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: 'OpenStreetMap contributors'
}).addTo(peta);

const pelayanan = new L.GeoJSON.AJAX('./pusat.geojson').addTo(peta);
const jalan = new L.GeoJSON.AJAX('./jalan.geojson', {
    color: 'red'
}).addTo(peta);
const ruang = new L.GeoJSON.AJAX('./ruang.geojson', {
    color: 'green',
    opacity: 0.1
}).addTo(peta);

const basemap = {
    'OpenStreetMap': OSM
}

const layer = {
    'Pusat Pelayanan': pelayanan,
    'Jaringan Jalan': jalan,
    'Pola Ruang': ruang
}

L.control.layers(basemap, layer).addTo(peta);