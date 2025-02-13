var wms_layers = [];


        var lyr_ESRIGrayDark_0 = new ol.layer.Tile({
            'title': 'ESRI Gray Dark',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'http://services.arcgisonline.com/ArcGIS/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_OpenTopoMap_1 = new ol.layer.Tile({
            'title': 'OpenTopoMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.opentopomap.org/{z}/{x}/{y}.png'
            })
        });
var format_negara_2 = new ol.format.GeoJSON();
var features_negara_2 = format_negara_2.readFeatures(json_negara_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_negara_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_negara_2.addFeatures(features_negara_2);
var lyr_negara_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_negara_2, 
                style: style_negara_2,
                popuplayertitle: 'negara',
                interactive: true,
    title: 'negara<br />\
    <img src="styles/legend/negara_2_0.png" /> Afghanistan<br />\
    <img src="styles/legend/negara_2_1.png" /> Aland<br />\
    <img src="styles/legend/negara_2_2.png" /> Albania<br />\
    <img src="styles/legend/negara_2_3.png" /> Algeria<br />\
    <img src="styles/legend/negara_2_4.png" /> American Samoa<br />\
    <img src="styles/legend/negara_2_5.png" /> Andorra<br />\
    <img src="styles/legend/negara_2_6.png" /> Angola<br />\
    <img src="styles/legend/negara_2_7.png" /> Anguilla<br />\
    <img src="styles/legend/negara_2_8.png" /> Antarctica<br />\
    <img src="styles/legend/negara_2_9.png" /> Antigua and Barbuda<br />\
    <img src="styles/legend/negara_2_10.png" /> Argentina<br />\
    <img src="styles/legend/negara_2_11.png" /> Armenia<br />\
    <img src="styles/legend/negara_2_12.png" /> Aruba<br />\
    <img src="styles/legend/negara_2_13.png" /> Ashmore and Cartier Islands<br />\
    <img src="styles/legend/negara_2_14.png" /> Australia<br />\
    <img src="styles/legend/negara_2_15.png" /> Austria<br />\
    <img src="styles/legend/negara_2_16.png" /> Azerbaijan<br />\
    <img src="styles/legend/negara_2_17.png" /> Bahrain<br />\
    <img src="styles/legend/negara_2_18.png" /> Bangladesh<br />\
    <img src="styles/legend/negara_2_19.png" /> Barbados<br />\
    <img src="styles/legend/negara_2_20.png" /> Belarus<br />\
    <img src="styles/legend/negara_2_21.png" /> Belgium<br />\
    <img src="styles/legend/negara_2_22.png" /> Belize<br />\
    <img src="styles/legend/negara_2_23.png" /> Benin<br />\
    <img src="styles/legend/negara_2_24.png" /> Bermuda<br />\
    <img src="styles/legend/negara_2_25.png" /> Bhutan<br />\
    <img src="styles/legend/negara_2_26.png" /> Bolivia<br />\
    <img src="styles/legend/negara_2_27.png" /> Bosnia and Herzegovina<br />\
    <img src="styles/legend/negara_2_28.png" /> Botswana<br />\
    <img src="styles/legend/negara_2_29.png" /> Brazil<br />\
    <img src="styles/legend/negara_2_30.png" /> British Indian Ocean Territory<br />\
    <img src="styles/legend/negara_2_31.png" /> British Virgin Islands<br />\
    <img src="styles/legend/negara_2_32.png" /> Brunei<br />\
    <img src="styles/legend/negara_2_33.png" /> Bulgaria<br />\
    <img src="styles/legend/negara_2_34.png" /> Burkina Faso<br />\
    <img src="styles/legend/negara_2_35.png" /> Burundi<br />\
    <img src="styles/legend/negara_2_36.png" /> Cabo Verde<br />\
    <img src="styles/legend/negara_2_37.png" /> Cambodia<br />\
    <img src="styles/legend/negara_2_38.png" /> Cameroon<br />\
    <img src="styles/legend/negara_2_39.png" /> Canada<br />\
    <img src="styles/legend/negara_2_40.png" /> Cayman Islands<br />\
    <img src="styles/legend/negara_2_41.png" /> Central African Republic<br />\
    <img src="styles/legend/negara_2_42.png" /> Chad<br />\
    <img src="styles/legend/negara_2_43.png" /> Chile<br />\
    <img src="styles/legend/negara_2_44.png" /> China<br />\
    <img src="styles/legend/negara_2_45.png" /> Colombia<br />\
    <img src="styles/legend/negara_2_46.png" /> Comoros<br />\
    <img src="styles/legend/negara_2_47.png" /> Cook Islands<br />\
    <img src="styles/legend/negara_2_48.png" /> Costa Rica<br />\
    <img src="styles/legend/negara_2_49.png" /> Croatia<br />\
    <img src="styles/legend/negara_2_50.png" /> Cuba<br />\
    <img src="styles/legend/negara_2_51.png" /> Curaçao<br />\
    <img src="styles/legend/negara_2_52.png" /> Cyprus<br />\
    <img src="styles/legend/negara_2_53.png" /> Czechia<br />\
    <img src="styles/legend/negara_2_54.png" /> Democratic Republic of the Congo<br />\
    <img src="styles/legend/negara_2_55.png" /> Denmark<br />\
    <img src="styles/legend/negara_2_56.png" /> Djibouti<br />\
    <img src="styles/legend/negara_2_57.png" /> Dominica<br />\
    <img src="styles/legend/negara_2_58.png" /> Dominican Republic<br />\
    <img src="styles/legend/negara_2_59.png" /> East Timor<br />\
    <img src="styles/legend/negara_2_60.png" /> Ecuador<br />\
    <img src="styles/legend/negara_2_61.png" /> Egypt<br />\
    <img src="styles/legend/negara_2_62.png" /> El Salvador<br />\
    <img src="styles/legend/negara_2_63.png" /> Equatorial Guinea<br />\
    <img src="styles/legend/negara_2_64.png" /> Eritrea<br />\
    <img src="styles/legend/negara_2_65.png" /> Estonia<br />\
    <img src="styles/legend/negara_2_66.png" /> eSwatini<br />\
    <img src="styles/legend/negara_2_67.png" /> Ethiopia<br />\
    <img src="styles/legend/negara_2_68.png" /> Falkland Islands<br />\
    <img src="styles/legend/negara_2_69.png" /> Faroe Islands<br />\
    <img src="styles/legend/negara_2_70.png" /> Federated States of Micronesia<br />\
    <img src="styles/legend/negara_2_71.png" /> Fiji<br />\
    <img src="styles/legend/negara_2_72.png" /> Finland<br />\
    <img src="styles/legend/negara_2_73.png" /> France<br />\
    <img src="styles/legend/negara_2_74.png" /> French Polynesia<br />\
    <img src="styles/legend/negara_2_75.png" /> French Southern and Antarctic Lands<br />\
    <img src="styles/legend/negara_2_76.png" /> Gabon<br />\
    <img src="styles/legend/negara_2_77.png" /> Gambia<br />\
    <img src="styles/legend/negara_2_78.png" /> Georgia<br />\
    <img src="styles/legend/negara_2_79.png" /> Germany<br />\
    <img src="styles/legend/negara_2_80.png" /> Ghana<br />\
    <img src="styles/legend/negara_2_81.png" /> Greece<br />\
    <img src="styles/legend/negara_2_82.png" /> Greenland<br />\
    <img src="styles/legend/negara_2_83.png" /> Grenada<br />\
    <img src="styles/legend/negara_2_84.png" /> Guam<br />\
    <img src="styles/legend/negara_2_85.png" /> Guatemala<br />\
    <img src="styles/legend/negara_2_86.png" /> Guernsey<br />\
    <img src="styles/legend/negara_2_87.png" /> Guinea<br />\
    <img src="styles/legend/negara_2_88.png" /> Guinea-Bissau<br />\
    <img src="styles/legend/negara_2_89.png" /> Guyana<br />\
    <img src="styles/legend/negara_2_90.png" /> Haiti<br />\
    <img src="styles/legend/negara_2_91.png" /> Heard Island and McDonald Islands<br />\
    <img src="styles/legend/negara_2_92.png" /> Honduras<br />\
    <img src="styles/legend/negara_2_93.png" /> Hong Kong S.A.R.<br />\
    <img src="styles/legend/negara_2_94.png" /> Hungary<br />\
    <img src="styles/legend/negara_2_95.png" /> Iceland<br />\
    <img src="styles/legend/negara_2_96.png" /> India<br />\
    <img src="styles/legend/negara_2_97.png" /> Indian Ocean Territories<br />\
    <img src="styles/legend/negara_2_98.png" /> Indonesia<br />\
    <img src="styles/legend/negara_2_99.png" /> Iran<br />\
    <img src="styles/legend/negara_2_100.png" /> Iraq<br />\
    <img src="styles/legend/negara_2_101.png" /> Ireland<br />\
    <img src="styles/legend/negara_2_102.png" /> Isle of Man<br />\
    <img src="styles/legend/negara_2_103.png" /> Israel<br />\
    <img src="styles/legend/negara_2_104.png" /> Italy<br />\
    <img src="styles/legend/negara_2_105.png" /> Ivory Coast<br />\
    <img src="styles/legend/negara_2_106.png" /> Jamaica<br />\
    <img src="styles/legend/negara_2_107.png" /> Japan<br />\
    <img src="styles/legend/negara_2_108.png" /> Jersey<br />\
    <img src="styles/legend/negara_2_109.png" /> Jordan<br />\
    <img src="styles/legend/negara_2_110.png" /> Kazakhstan<br />\
    <img src="styles/legend/negara_2_111.png" /> Kenya<br />\
    <img src="styles/legend/negara_2_112.png" /> Kiribati<br />\
    <img src="styles/legend/negara_2_113.png" /> Kosovo<br />\
    <img src="styles/legend/negara_2_114.png" /> Kuwait<br />\
    <img src="styles/legend/negara_2_115.png" /> Kyrgyzstan<br />\
    <img src="styles/legend/negara_2_116.png" /> Laos<br />\
    <img src="styles/legend/negara_2_117.png" /> Latvia<br />\
    <img src="styles/legend/negara_2_118.png" /> Lebanon<br />\
    <img src="styles/legend/negara_2_119.png" /> Lesotho<br />\
    <img src="styles/legend/negara_2_120.png" /> Liberia<br />\
    <img src="styles/legend/negara_2_121.png" /> Libya<br />\
    <img src="styles/legend/negara_2_122.png" /> Liechtenstein<br />\
    <img src="styles/legend/negara_2_123.png" /> Lithuania<br />\
    <img src="styles/legend/negara_2_124.png" /> Luxembourg<br />\
    <img src="styles/legend/negara_2_125.png" /> Macao S.A.R<br />\
    <img src="styles/legend/negara_2_126.png" /> Madagascar<br />\
    <img src="styles/legend/negara_2_127.png" /> Malawi<br />\
    <img src="styles/legend/negara_2_128.png" /> Malaysia<br />\
    <img src="styles/legend/negara_2_129.png" /> Maldives<br />\
    <img src="styles/legend/negara_2_130.png" /> Mali<br />\
    <img src="styles/legend/negara_2_131.png" /> Malta<br />\
    <img src="styles/legend/negara_2_132.png" /> Marshall Islands<br />\
    <img src="styles/legend/negara_2_133.png" /> Mauritania<br />\
    <img src="styles/legend/negara_2_134.png" /> Mauritius<br />\
    <img src="styles/legend/negara_2_135.png" /> Mexico<br />\
    <img src="styles/legend/negara_2_136.png" /> Moldova<br />\
    <img src="styles/legend/negara_2_137.png" /> Monaco<br />\
    <img src="styles/legend/negara_2_138.png" /> Mongolia<br />\
    <img src="styles/legend/negara_2_139.png" /> Montenegro<br />\
    <img src="styles/legend/negara_2_140.png" /> Montserrat<br />\
    <img src="styles/legend/negara_2_141.png" /> Morocco<br />\
    <img src="styles/legend/negara_2_142.png" /> Mozambique<br />\
    <img src="styles/legend/negara_2_143.png" /> Myanmar<br />\
    <img src="styles/legend/negara_2_144.png" /> Namibia<br />\
    <img src="styles/legend/negara_2_145.png" /> Nauru<br />\
    <img src="styles/legend/negara_2_146.png" /> Nepal<br />\
    <img src="styles/legend/negara_2_147.png" /> Netherlands<br />\
    <img src="styles/legend/negara_2_148.png" /> New Caledonia<br />\
    <img src="styles/legend/negara_2_149.png" /> New Zealand<br />\
    <img src="styles/legend/negara_2_150.png" /> Nicaragua<br />\
    <img src="styles/legend/negara_2_151.png" /> Niger<br />\
    <img src="styles/legend/negara_2_152.png" /> Nigeria<br />\
    <img src="styles/legend/negara_2_153.png" /> Niue<br />\
    <img src="styles/legend/negara_2_154.png" /> Norfolk Island<br />\
    <img src="styles/legend/negara_2_155.png" /> North Korea<br />\
    <img src="styles/legend/negara_2_156.png" /> North Macedonia<br />\
    <img src="styles/legend/negara_2_157.png" /> Northern Cyprus<br />\
    <img src="styles/legend/negara_2_158.png" /> Northern Mariana Islands<br />\
    <img src="styles/legend/negara_2_159.png" /> Norway<br />\
    <img src="styles/legend/negara_2_160.png" /> Oman<br />\
    <img src="styles/legend/negara_2_161.png" /> Pakistan<br />\
    <img src="styles/legend/negara_2_162.png" /> Palau<br />\
    <img src="styles/legend/negara_2_163.png" /> Palestine<br />\
    <img src="styles/legend/negara_2_164.png" /> Panama<br />\
    <img src="styles/legend/negara_2_165.png" /> Papua New Guinea<br />\
    <img src="styles/legend/negara_2_166.png" /> Paraguay<br />\
    <img src="styles/legend/negara_2_167.png" /> Peru<br />\
    <img src="styles/legend/negara_2_168.png" /> Philippines<br />\
    <img src="styles/legend/negara_2_169.png" /> Pitcairn Islands<br />\
    <img src="styles/legend/negara_2_170.png" /> Poland<br />\
    <img src="styles/legend/negara_2_171.png" /> Portugal<br />\
    <img src="styles/legend/negara_2_172.png" /> Puerto Rico<br />\
    <img src="styles/legend/negara_2_173.png" /> Qatar<br />\
    <img src="styles/legend/negara_2_174.png" /> Republic of Serbia<br />\
    <img src="styles/legend/negara_2_175.png" /> Republic of the Congo<br />\
    <img src="styles/legend/negara_2_176.png" /> Romania<br />\
    <img src="styles/legend/negara_2_177.png" /> Russia<br />\
    <img src="styles/legend/negara_2_178.png" /> Rwanda<br />\
    <img src="styles/legend/negara_2_179.png" /> Saint Barthelemy<br />\
    <img src="styles/legend/negara_2_180.png" /> Saint Helena<br />\
    <img src="styles/legend/negara_2_181.png" /> Saint Kitts and Nevis<br />\
    <img src="styles/legend/negara_2_182.png" /> Saint Lucia<br />\
    <img src="styles/legend/negara_2_183.png" /> Saint Martin<br />\
    <img src="styles/legend/negara_2_184.png" /> Saint Pierre and Miquelon<br />\
    <img src="styles/legend/negara_2_185.png" /> Saint Vincent and the Grenadines<br />\
    <img src="styles/legend/negara_2_186.png" /> Samoa<br />\
    <img src="styles/legend/negara_2_187.png" /> San Marino<br />\
    <img src="styles/legend/negara_2_188.png" /> São Tomé and Principe<br />\
    <img src="styles/legend/negara_2_189.png" /> Saudi Arabia<br />\
    <img src="styles/legend/negara_2_190.png" /> Senegal<br />\
    <img src="styles/legend/negara_2_191.png" /> Seychelles<br />\
    <img src="styles/legend/negara_2_192.png" /> Siachen Glacier<br />\
    <img src="styles/legend/negara_2_193.png" /> Sierra Leone<br />\
    <img src="styles/legend/negara_2_194.png" /> Singapore<br />\
    <img src="styles/legend/negara_2_195.png" /> Sint Maarten<br />\
    <img src="styles/legend/negara_2_196.png" /> Slovakia<br />\
    <img src="styles/legend/negara_2_197.png" /> Slovenia<br />\
    <img src="styles/legend/negara_2_198.png" /> Solomon Islands<br />\
    <img src="styles/legend/negara_2_199.png" /> Somalia<br />\
    <img src="styles/legend/negara_2_200.png" /> Somaliland<br />\
    <img src="styles/legend/negara_2_201.png" /> South Africa<br />\
    <img src="styles/legend/negara_2_202.png" /> South Georgia and the Islands<br />\
    <img src="styles/legend/negara_2_203.png" /> South Korea<br />\
    <img src="styles/legend/negara_2_204.png" /> South Sudan<br />\
    <img src="styles/legend/negara_2_205.png" /> Spain<br />\
    <img src="styles/legend/negara_2_206.png" /> Sri Lanka<br />\
    <img src="styles/legend/negara_2_207.png" /> Sudan<br />\
    <img src="styles/legend/negara_2_208.png" /> Suriname<br />\
    <img src="styles/legend/negara_2_209.png" /> Sweden<br />\
    <img src="styles/legend/negara_2_210.png" /> Switzerland<br />\
    <img src="styles/legend/negara_2_211.png" /> Syria<br />\
    <img src="styles/legend/negara_2_212.png" /> Taiwan<br />\
    <img src="styles/legend/negara_2_213.png" /> Tajikistan<br />\
    <img src="styles/legend/negara_2_214.png" /> Thailand<br />\
    <img src="styles/legend/negara_2_215.png" /> The Bahamas<br />\
    <img src="styles/legend/negara_2_216.png" /> Togo<br />\
    <img src="styles/legend/negara_2_217.png" /> Tonga<br />\
    <img src="styles/legend/negara_2_218.png" /> Trinidad and Tobago<br />\
    <img src="styles/legend/negara_2_219.png" /> Tunisia<br />\
    <img src="styles/legend/negara_2_220.png" /> Turkey<br />\
    <img src="styles/legend/negara_2_221.png" /> Turkmenistan<br />\
    <img src="styles/legend/negara_2_222.png" /> Turks and Caicos Islands<br />\
    <img src="styles/legend/negara_2_223.png" /> Tuvalu<br />\
    <img src="styles/legend/negara_2_224.png" /> Uganda<br />\
    <img src="styles/legend/negara_2_225.png" /> Ukraine<br />\
    <img src="styles/legend/negara_2_226.png" /> United Arab Emirates<br />\
    <img src="styles/legend/negara_2_227.png" /> United Kingdom<br />\
    <img src="styles/legend/negara_2_228.png" /> United Republic of Tanzania<br />\
    <img src="styles/legend/negara_2_229.png" /> United States of America<br />\
    <img src="styles/legend/negara_2_230.png" /> United States Virgin Islands<br />\
    <img src="styles/legend/negara_2_231.png" /> Uruguay<br />\
    <img src="styles/legend/negara_2_232.png" /> Uzbekistan<br />\
    <img src="styles/legend/negara_2_233.png" /> Vanuatu<br />\
    <img src="styles/legend/negara_2_234.png" /> Vatican<br />\
    <img src="styles/legend/negara_2_235.png" /> Venezuela<br />\
    <img src="styles/legend/negara_2_236.png" /> Vietnam<br />\
    <img src="styles/legend/negara_2_237.png" /> Wallis and Futuna<br />\
    <img src="styles/legend/negara_2_238.png" /> Western Sahara<br />\
    <img src="styles/legend/negara_2_239.png" /> Yemen<br />\
    <img src="styles/legend/negara_2_240.png" /> Zambia<br />\
    <img src="styles/legend/negara_2_241.png" /> Zimbabwe<br />\
    <img src="styles/legend/negara_2_242.png" /> <br />' });
var format_kota_3 = new ol.format.GeoJSON();
var features_kota_3 = format_kota_3.readFeatures(json_kota_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_kota_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_kota_3.addFeatures(features_kota_3);
cluster_kota_3 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_kota_3
});
var lyr_kota_3 = new ol.layer.Vector({
                declutter: false,
                source:cluster_kota_3, 
                style: style_kota_3,
                popuplayertitle: 'kota',
                interactive: true,
                title: '<img src="styles/legend/kota_3.png" /> kota'
            });

lyr_ESRIGrayDark_0.setVisible(false);lyr_OpenTopoMap_1.setVisible(true);lyr_negara_2.setVisible(true);lyr_kota_3.setVisible(true);
var layersList = [lyr_ESRIGrayDark_0,lyr_OpenTopoMap_1,lyr_negara_2,lyr_kota_3];
lyr_negara_2.set('fieldAliases', {'ADMIN': 'ADMIN', 'CONTINENT': 'CONTINENT', 'SUBREGION': 'SUBREGION', });
lyr_kota_3.set('fieldAliases', {'NAME': 'NAME', 'ADM0NAME': 'ADM0NAME', });
lyr_negara_2.set('fieldImages', {'ADMIN': 'TextEdit', 'CONTINENT': 'TextEdit', 'SUBREGION': 'TextEdit', });
lyr_kota_3.set('fieldImages', {'NAME': 'TextEdit', 'ADM0NAME': 'TextEdit', });
lyr_negara_2.set('fieldLabels', {'ADMIN': 'no label', 'CONTINENT': 'no label', 'SUBREGION': 'no label', });
lyr_kota_3.set('fieldLabels', {'NAME': 'header label - always visible', 'ADM0NAME': 'header label - always visible', });
lyr_kota_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});