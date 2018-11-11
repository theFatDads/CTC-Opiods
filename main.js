console.log('hello world');
//change opacity of title-card depending on how far you scroll
$(window).scroll(function() {
    var scrollTop = $(this).scrollTop();
  
    $('.oHeader').css({
      opacity: function() {
        var elementHeight = $(this).height();
        return (elementHeight - scrollTop * 1.5) / elementHeight;
      }
    });
  });
//Initializing Maps
var geocoder = new google.maps.Geocoder(); //Creating the needed URL.
  var CT = { //Connecticut centered location
    lat: 41.3,
    lng: -72.63,
  };
  //var VermontData = "http://geodata.vermont.gov/datasets/3a87ceb1e3b944b89598abe6c4169f85_0.geojson"
  var geocoded = "https://raw.githubusercontent.com/theFatDads/GoogleMapsData/master/geo-locations.json"
  var drugBox = "https://data.ct.gov/api/geospatial/uem2-db2e?method=export&format=GeoJSON";
  var processedCareFacilities = "https://data.ct.gov/resource/htz8-fxbk.json";
function initBox(){
  initgeoJSONMap("boxMap", {lat:41.8,lng:-72.63}, drugBox, ["location_name", "location_1_address", "city", "state"]);
}