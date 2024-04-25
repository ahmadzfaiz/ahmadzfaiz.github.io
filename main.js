// const PI = 3.14

// let angka = 5

// // console.log(PI)
// // console.log(angka)

// angka = 7

// // PI = 4

// // console.log(angka)

// let nama = "Faiz"

// // console.log(nama)

// let perempuan = false

// // console.log(perempuan)

// // console.log(typeof(PI))
// // console.log(typeof(angka))
// // console.log(typeof(nama))
// // console.log(typeof(perempuan))

// let data = null

// console.log(data)
// console.log(typeof(data))

// let variabel

// console.log(variabel)
// console.log(typeof(variabel))


// FUNGSI
// function f(x){
//   return 5 + x
// }

// console.log(f(5))
// console.log(f(2))

// function f(x, y){
//   return 10 / x + y
// }

// console.log(f(2,3))
// console.log(f(5,3))

// LOGIKA CONDITIONAL
// let nama = 'faiz'

// nama = 'agus'

// if(nama === 'faiz'){
//   console.log('Hasilnya adalah WEBGIS')
// } else if(nama === 'bambang'){
//   console.log('Hasilnya adalah LEMARI')
// } else{
//   console.log('Hasilnya adalah TIDAK ADA')
// }

// const angka1 = 5
// const angka2 = 2 + 3

// console.log(angka1 > angka2)


// LOOP
// let percobaan = 0

// if(percobaan < 3){
//   console.log('Anda bisa login')
//   percobaan = percobaan + 1
//   console.log('percobaan ke-' + percobaan)
// } else{
//   console.log('Tunggu selama 15 menit')
// }

// while(percobaan < 10){
//   console.log('Anda bisa login')
//   percobaan = percobaan + 1
//   console.log('percobaan ke-' + percobaan)
// }

// if(percobaan >= 10){
//   console.log('Mohon tunggu selama 15 menit')
// }

// const nama = 'ENVIROSAINS'

// for(let i=0; i<nama.length; i++){
//   console.log(nama[i])
// }

// ARRAY & OBJECT

// const siswa = ['faiz', 'bagus', 'zainal']
// console.log(siswa[3])

// const lokasi = [
//   [2, 5],
//   [4, 7],
//   [6, 3]
// ]

// console.log(lokasi[1][0])

// const rumah = {
//   pemilik: 'faiz',
//   harga: 500000000,
//   lokasi: [100, 5]
// }

// console.log(rumah.lokasi[1])

// ALGORITMA WEBGIS
// Konfigurasi tampilan peta
const settingPeta = {
  center: [0, 110],
  zoom: 5
}
const peta = L.map('peta', settingPeta)

// Konfigurasi Basemap
const urlBasemap = 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
const settingBasemap = {
  attribution: 'OpenStreetMap'
}
const basemap = L.tileLayer(urlBasemap, settingBasemap)
basemap.addTo(peta)

const urlBasemap2 = 'http://services.arcgisonline.com/ArcGIS/rest/services/NatGeo_World_Map/MapServer/tile/{z}/{y}/{x}'
const settingBasemap2 = {
  attribution: 'ESRI'
}
const basemap2 = L.tileLayer(urlBasemap2, settingBasemap2)
// basemap2.addTo(peta)

// Konfigurasi Layer
const balikpapan = L.marker([-1.246346253716088, 116.85033780476381])
// balikpapan.addTo(peta)
balikpapan.bindPopup('Balikpapan')

const palembang = L.marker([-2.9693631451481286, 104.76914637884609])
// palembang.addTo(peta)
palembang.bindPopup('<img src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-sBSCjoXYXyQ%2FUHF-KMkuGNI%2FAAAAAAAAAAk%2FXlrX316sK-E%2Fs1600%2Fpalembang.jpg&f=1&nofb=1&ipt=38d701471802481d6edfd0e010adf6ae1c8c3323960a89f4930bfa2510e94765&ipo=images" alt="" height="50">')

const denpasar = L.marker([-8.65196333171677, 115.21568508602427])
// denpasar.addTo(peta)
denpasar.bindPopup('<a href="https://en.wikipedia.org/wiki/Denpasar">Kota Denpasar</a>')

const settingPolygon = {
  color: 'rgb(10, 215, 102)'
}
const polygon = L.polygon([
  [-1.246346253716088, 116.85033780476381],
  [-2.9693631451481286, 104.76914637884609],
  [-8.65196333171677, 115.21568508602427]
], settingPolygon)
// polygon.addTo(peta)

fetch('./data/lokasi.geojson')
  .then(response => response.json())
  .then(json => L.geoJSON(json).addTo(peta))

// Konfigurasi Layer Group & Control
const kota = L.layerGroup([balikpapan, palembang, denpasar])

const toogleBasemap = {
  'OSM basemap': basemap,
  'ESRI NatGeo': basemap2
}

const toogleLayer = {
  kota: kota,
  polygon: polygon
}

const layerControl = L.control.layers(toogleBasemap, toogleLayer)
layerControl.addTo(peta)