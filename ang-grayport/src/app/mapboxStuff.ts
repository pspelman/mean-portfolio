import * as mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
import * as $ from 'jquery';


export class MapboxStuff {
  initMapboxMap() {
    mapboxgl.accessToken = 'pk.eyJ1IjoicHNwZWxtYW4iLCJhIjoiY2poanJsNDBmMDRsYTMwcjA2aDFuODN4cSJ9.itOSiLnm059ORfgzcu8RXw';
    var map = new mapboxgl.Map({
      container: 'map',
      // style: 'mapbox://styles/mapbox/streets-v10'
      style: 'mapbox://styles/pspelman/cjidcr3ui0zpc2rlr0w0dssen'
    });
  }

  travelMapOne() {
    mapboxgl.accessToken = 'pk.eyJ1IjoicHNwZWxtYW4iLCJhIjoiY2poanJsNDBmMDRsYTMwcjA2aDFuODN4cSJ9.itOSiLnm059ORfgzcu8RXw';

    // mapboxgl.accessToken = 'pk.eyJ1Ijoia3Jpc2F1YnVjaG9uIiwiYSI6ImNpZjVzcWhhaDBhNDZzeWt1MWVmbnZhcjgifQ.aMXr9Q4RmmLY_KzI-LFW5w';
    var map = new mapboxgl.Map({
      container: 'map', // container id
      // style: 'mapbox://styles/krisaubuchon/cir4yrcgi0007bsm8tv1myves',

      style: 'mapbox://styles/pspelman/cjidcr3ui0zpc2rlr0w0dssen',
      // style: 'mapbox://styles/mapbox/streets-v10',
      center: [-0.1278, 51.51830379],
      zoom: 1
      //stylesheet location
      // starting zoom

    });


    var zoomThreshold = 8;

    map.on('load', function () {
      map.addSource("route", {
        "type": "geojson",
        "data": {
          "type": "Feature",
          "properties": {},
          // "geometry": {
          //   "type": "LineString",
          //   "coordinates": [
          //     [-0.1278, 51.51830379],
          //     [2.3522, 48.8566],
          //     [12.4964, 41.9028]
          //   ]
          // }
        }
      });


      map.addLayer({
        "id": "route",
        "type": "line",
        "source": "route",
        "maxzoom": zoomThreshold,

        "layout": {
          "line-join": "round",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#aa7d41",
          "line-width": 3
        }
      });
    });


    map.on('load', function () {
      map.addSource("routes", {
        "type": "geojson",
        "data": {
          "type": "Feature",
          "properties": {},
          // "geometry": {
          //   "type": "LineString",
          //   "coordinates": [
          //
          //     [-20.4964, 41.9028],
          //     [2.1734, 41.38],
          //     [-47.6062, 122.3321],
          //   ],
          // }
        }
      });

      map.addLayer({
        "id": "routes",
        "type": "line",
        "source": "routes",
        "maxzoom": zoomThreshold,

        "layout": {
          "line-join": "round",
          "line-cap": "round"
        },
        "paint": {
          "line-color": "#aa5c3e",
          "line-width": 3,
          "line-dasharray": [3, 3]

        }
      });

    });


    map.on('load', function () {
      map.addSource("points", {


        "type": "geojson",
        "data": {
          "features": [
            {
              "type": "Feature",
              "properties": {
                "wikidata": "Q17",
                "short_code": "jp",
                "place_name": "Japan",
                "title": "Japan",
                "icon": "marker"
              },
              "geometry": {
                "coordinates": [
                  138.59223,
                  36.386493
                ],
                "type": "Point"
              },
              "id": "country.3178"
            },
            {
              "type": "Feature",
              "properties": {
                "wikidata": "Q239",
                "place_name": "Brussels, Brussels Hoofstedelijk Gewest#Région de Bruxelles-Capitale, Belgium",
                "title": "Brussels",
                "icon": "marker"
              },
              "geometry": {
                "coordinates": [
                  4.3547,
                  50.8467
                ],
                "type": "Point"
              },
              "id": "place.10706876915101710"
            },
            {
              "type": "Feature",
              "properties": {
                "wikidata": "Q5083",
                "place_name": "Seattle, Washington, United States",
                "title": "Seattle",
                "icon": "marker",
                "paint": {
                  "line-color": "#aa5c3e",
                  "line-width": 3,
                  "line-dasharray": [3, 3],
                }
              },
              "geometry": {
                "coordinates": [
                  -122.3301,
                  47.6038
                ],
                "type": "Point"
              },
              "id": "place.11115494111229470"
            },
            {
              "type": "Feature",
              "properties": {
                "wikidata": "Q12191",
                "place_name": "Nantes, Loire-Atlantique, France",
                "title": "Nantes",
                "icon": "marker"
              },
              "geometry": {
                "coordinates": [
                  -1.55389,
                  47.21722
                ],
                "type": "Point"
              },
              "id": "place.12071176627705910"
            },
            {
              "type": "Feature",
              "properties": {
                "wikidata": "Q6548",
                "place_name": "Orléans, Loiret, France",
                "title": "Orléans",
                "icon": "marker"
              },
              "geometry": {
                "coordinates": [
                  1.90417,
                  47.90222
                ],
                "type": "Point"
              },
              "id": "place.12443446772426320"
            },
            {
              "type": "Feature",
              "properties": {
                "wikidata": "Q202158",
                "place_name": "Hämeenlinna, Kanta-Häme, Finland",
                "title": "Hämeenlinna",
                "icon": "marker"
              },
              "geometry": {
                "coordinates": [
                  24.44139,
                  61
                ],
                "type": "Point"
              },
              "id": "place.12478886521563480"
            },
            {
              "type": "Feature",
              "properties": {
                "wikidata": "Q60",
                "place_name": "New York, New York, United States",
                "title": "New York",
                "icon": "marker"
              },
              "geometry": {
                "coordinates": [
                  -73.9808,
                  40.7648
                ],
                "type": "Point"
              },
              "id": "place.15278078705964500"
            },
            {
              "type": "Feature",
              "properties": {
                "wikidata": "Q853258",
                "place_name": "Puerto Vallarta, Jalisco, Mexico",
                "title": "Puerto Vallarta",
                "icon": "marker"
              },
              "geometry": {
                "coordinates": [
                  -105.217199,
                  20.640933
                ],
                "type": "Point"
              },
              "id": "place.15390272565935930"
            },
            {
              "type": "Feature",
              "properties": {
                "wikidata": "Q1297",
                "place_name": "Chicago, Illinois, United States",
                "title": "Chicago",
                "icon": "marker"
              },
              "geometry": {
                "coordinates": [
                  -87.6244,
                  41.8756
                ],
                "type": "Point"
              },
              "id": "place.1924128844701850"
            },
            {
              "type": "Feature",
              "properties": {
                "wikidata": "Q131335",
                "place_name": "Sioux Falls, South Dakota, United States",
                "title": "Sioux Falls",
                "icon": "marker"
              },
              "geometry": {
                "coordinates": [
                  -96.7003,
                  43.55
                ],
                "type": "Point"
              },
              "id": "place.2520482512517020"
            },
            {
              "type": "Feature",
              "properties": {
                "wikidata": "Q12994",
                "place_name": "Brugge, West-Vlanderen, Belgium",
                "title": "Brugge",
                "icon": "marker"
              },
              "geometry": {
                "coordinates": [
                  3.22,
                  51.20944
                ],
                "type": "Point"
              },
              "id": "place.4444179141570110"
            },
            {
              "type": "Feature",
              "properties": {
                "wikidata": "Q24639",
                "place_name": "Vancouver, British Columbia, Canada",
                "title": "Vancouver, BC",
                "icon": "marker"
              },
              "geometry": {
                "coordinates": [
                  -123.1139,
                  49.2609
                ],
                "type": "Point"
              },
              "id": "place.5944060364130490"
            },
            {
              "type": "Feature",
              "properties": {
                "wikidata": "Q47465",
                "place_name": "Aix-en-Provence, Bouches-du-Rhône, France",
                "title": "Aix-en-Provence",
                "icon": "marker"
              },
              "geometry": {
                "coordinates": [
                  5.44556,
                  43.52778
                ],
                "type": "Point"
              },
              "id": "place.7566872016053800"
            },
            {
              "type": "Feature",
              "properties": {
                "wikidata": "Q84",
                "place_name": "London, Greater London, England, United Kingdom",
                "title": "London",
                "icon": "marker"
              },
              "geometry": {
                "coordinates": [
                  -0.1275,
                  51.50722
                ],
                "type": "Point"
              },
              "id": "place.8500383470913397"
            },
            {
              "type": "Feature",
              "properties": {
                "wikidata": "Q100",
                "place_name": "Boston, Massachusetts, United States",
                "title": "Boston",
                "icon": "marker"
              },
              "geometry": {
                "coordinates": [
                  -71.0596,
                  42.3605
                ],
                "type": "Point"
              },
              "id": "place.9391334652012190"
            },
            {
              "type": "Feature",
              "properties": {
                "wikidata": "Q1757",
                "place_name": "Helsinki, Uusimaa, Finland",
                "title": "Helsinki",
                "icon": "marker"
              },
              "geometry": {
                "coordinates": [
                  24.94861,
                  60.17333
                ],
                "type": "Point"
              },
              "id": "place.9573073199195940"
            },
            {
              "type": "Feature",
              "properties": {
                "short_code": "ID-BA",
                "wikidata": "Q4648",
                "place_name": "Bali, Indonesia",
                "title": "Bali",
                "icon": "marker"
              },
              "geometry": {
                "coordinates": [
                  115.161182,
                  -8.452404
                ],
                "type": "Point"
              },
              "id": "region.224749"
            }
          ],
          "type": "FeatureCollection"
        }

        // "type": "geojson",
        // "data": {
        //   "type": "FeatureCollection",
        //   "features": [{
        //     "type": "Feature",
        //     "geometry": {
        //       "type": "Point",
        //       "coordinates": [-0.1278, 51.51830379]
        //     },
        //     "properties": {
        //       "title": "London",
        //       "icon": "marker"
        //     }
        //   }, {
        //     "type": "Feature",
        //     "geometry": {
        //       "type": "Point",
        //       "coordinates": [2.3522, 48.8566]
        //     },
        //     "properties": {
        //       "title": "Paris",
        //       "icon": "marker",
        //
        //     }
        //   }, {
        //     "type": "Feature",
        //     "geometry": {
        //       "type": "Point",
        //       "coordinates": [12.4964, 41.9028]
        //     },
        //     "properties": {
        //       "title": "Rome",
        //       "icon": "marker"
        //     }            }, {
        //     "type": "Feature",
        //     "geometry": {
        //       "type": "Point",
        //       "coordinates": [47.6062, 122.3321]
        //     },
        //     "properties": {
        //       "title": "Seattle",
        //       "icon": "marker"
        //     }
        //   }]
        // }
      });

      map.addLayer({
        "id": "points",
        "type": "symbol",
        "source": "points",
        "maxzoom": zoomThreshold,

        "layout": {
          "icon-image": "{icon}-15",
          "text-field": "{title}",
          "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
          "text-offset": [0, 0.6],
          "text-anchor": "top"
        },
        "paint": {
          "text-color": "#ffe9c5"
        }

      });
    });


    map.on('load', function () {
      map.addSource("roman", {
        "type": "geojson",
        "data": {
          "type": "FeatureCollection",
          "features": [{
            "type": "Feature",
            "geometry": {
              "type": "Point",
              "coordinates": [12.492373, 41.890251]
            },
            "properties": {
              "title": "Colosseum",
              "icon": "marker"
            }

          },
            {
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [12.4534, 41.9029]
              },
              "properties": {
                "title": "Vatican City",
                "icon": "marker"
              }

            },

            {
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [12.4695565, 41.8947181]
              },
              "properties": {
                "title": "Pantheon",
                "icon": "marker"
              }
            },


            {
              "type": "Feature",
              "geometry": {
                "type": "Point",
                "coordinates": [12.4843, 41.8958]
              },
              "properties": {
                "title": "Trajan's Column",
                "icon": "marker"
              }

            }]
        }
      });

      map.addLayer({
        "id": "roman",
        "type": "symbol",
        "source": "roman",
        "minzoom": zoomThreshold,
        "layout": {
          "icon-image": "{icon}-15",
          "text-field": "{title}",
          "text-font": ["Open Sans Semibold", "Arial Unicode MS Bold"],
          "text-offset": [0, 0.6],
          "text-anchor": "top"
        }
      });
    });
    map.scrollZoom.disable();

    //
    //
    // document.getElementById('fly').addEventListener('click', function () {
    //   // Fly to a random location by offsetting the point -74.50, 40
    //   // by up to 5 degrees.
    //   map.flyTo({
    //     center: [12.4964, 41.9028],
    //     zoom: 10,
    //     speed: .7
    //   });
    // });
    //
    // document.getElementById('hide').addEventListener('click', function () {
    //   // Fly to a random location by offsetting the point -74.50, 40
    //   // by up to 5 degrees.
    //   map.flyTo({
    //     center: [12.4964, 41.9028],
    //     zoom: 4,
    //     speed: .7
    //   });
    // });
    // map.addControl(new mapboxgl.Navigation({position:'bottom-left'}));
    //
    //

    $("#fly").click(function () {
      console.log(`stuff fly`,);
      $("#woolwich").show();
    });

    $("#hide").click(function () {
      $("#woolwich").hide();
    });

  };


}
