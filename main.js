// 

const tampilanArea = L.latLngBounds(
  [-8.41588881812499, 125.19748144811572]
  [-11.33188525484632, 122.31844017304712],
)

const peta = L.map('peta', {
  center: [
    -10.168398085111578, 
    123.60111216928792
  ],
  zoom: 12,
  minZoom: 6,
  maxZoom: 15,
  // maxBound: tampilanArea // fungsi ini tidak berjalan di browser terbaru
})

L.tileLayer(
  "https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
    attribution: "© OpenStreetMap contributors",
    minZoom: 0,
    maxZoom: 20
  }
).addTo(peta)

const pantaiNamosain = L.marker([
  -10.17257953762943, 
  123.56104213121834
]).addTo(peta)

pantaiNamosain.bindPopup(`
  <h4>Pantai Namosain</h4>
  <img id="namosain" src="./media/pantai namosain.jpg" alt="Foto Pantai Namosain">
`)

const garis = L.polyline([
  [-10.195950123929919, 123.52703185051459],
  [-10.182236097778729, 123.61336458842223],
  [-10.143987670268743, 123.61684229163217]
]).addTo(peta)

const area1 = L.polygon([
  [-10.188820069028539, 123.5561547554247],
  [-10.186259597868457, 123.58645868143866],
  [-10.170899001383011, 123.57150165139018]
]).addTo(peta)

const area2 = L.polygon([
  [
    [-10.149007340116345, 123.54353887448549],
    [-10.134153320921383, 123.61507165486397],
    [-10.094723242905584, 123.55771629304508]
  ],
  [
    [-10.122378336132286, 123.55511477998978],
    [-10.113287766599598, 123.58125536863486],
    [-10.132236512941851, 123.57748458157269]
  ]
]).addTo(peta)


fetch("./data/objek.geojson")
  .then(response => response.json())
  .then(data => objek(data))

function objek(data){
  const geojson = L.geoJSON(data)
  geojson.addTo(peta)

  geojson.eachLayer(tampilanPopup)
}

function tampilanPopup(feature){
  const nama = feature.feature.properties.nama
  const foto = feature.feature.properties.foto

  feature.bindPopup(`
    <h4>${nama}</h4>
    <img class="popup" src="${foto}">
  `)
}


// fetch("./data/titik.geojson")
//   .then(response => response.json())
//   .then(data => L.geoJSON(data).addTo(peta))


// const geojsonInput = {
//   "type": "FeatureCollection",
//   "name": "titik",
//   "crs": { "type": "name", "properties": { "name": "urn:ogc:def:crs:OGC:1.3:CRS84" } },
//   "features": [
//     { "type": "Feature", "properties": { }, "geometry": { "type": "Point", "coordinates": [ 123.556553302818941, -10.181978240354216 ] } },
//     { "type": "Feature", "properties": { }, "geometry": { "type": "Point", "coordinates": [ 123.558556624799223, -10.198935030194676 ] } },
//     { "type": "Feature", "properties": { }, "geometry": { "type": "Point", "coordinates": [ 123.577788515809885, -10.217073852363479 ] } },
//     { "type": "Feature", "properties": { }, "geometry": { "type": "Point", "coordinates": [ 123.62707023652473, -10.223777068302535 ] } },
//     { "type": "Feature", "properties": { }, "geometry": { "type": "Point", "coordinates": [ 123.614649640247009, -10.191836948876212 ] } },
//     { "type": "Feature", "properties": { }, "geometry": { "type": "Point", "coordinates": [ 123.627470900920798, -10.166598046777143 ] } },
//     { "type": "Feature", "properties": { }, "geometry": { "type": "Point", "coordinates": [ 123.658722723813128, -10.198935030194676 ] } },
//     { "type": "Feature", "properties": { }, "geometry": { "type": "Point", "coordinates": [ 123.689974546705486, -10.169358648893262 ] } },
//     { "type": "Feature", "properties": { }, "geometry": { "type": "Point", "coordinates": [ 123.665934682942122, -10.1500339333955 ] } },
//     { "type": "Feature", "properties": { }, "geometry": { "type": "Point", "coordinates": [ 123.627871565316852, -10.149245144695872 ] } },
//     { "type": "Feature", "properties": { }, "geometry": { "type": "Point", "coordinates": [ 123.644699469951178, -10.111775444851036 ] } },
//     { "type": "Feature", "properties": { }, "geometry": { "type": "Point", "coordinates": [ 123.643497476763017, -10.076273802668888 ] } },
//     { "type": "Feature", "properties": { }, "geometry": { "type": "Point", "coordinates": [ 123.60303037276141, -10.098364173673261 ] } },
//     { "type": "Feature", "properties": { }, "geometry": { "type": "Point", "coordinates": [ 123.556152638422887, -10.08929152609122 ] } },
//     { "type": "Feature", "properties": { }, "geometry": { "type": "Point", "coordinates": [ 123.54413270654122, -10.10783101140877 ] } },
//     { "type": "Feature", "properties": { }, "geometry": { "type": "Point", "coordinates": [ 123.538122740600372, -10.141357150805787 ] } },
//     { "type": "Feature", "properties": { }, "geometry": { "type": "Point", "coordinates": [ 123.516486863213373, -10.128341536274293 ] } }
//   ]
// }

// L.geoJSON(geojsonInput).addTo(peta)