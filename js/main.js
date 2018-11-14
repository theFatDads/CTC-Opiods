if ($(window).width() > $("#nav-buttons").width()) {
  $('#nav-buttons').addClass('btn-group btn-group-lg')
} else {
  $('#nav-buttons').removeClass('btn-group btn-group-lg')
}
//Resets the app on a reload
// window.onbeforeunload = function () {
//   window.scrollTo(0, 0);
// }

//change opacity of title-card depending on how far you scroll
$(window).scroll(function () {
  var scrollTop = $(this).scrollTop();
  $('.oHeader').css({
    opacity: function () {
      var elementHeight = $(this).height();
      return (elementHeight - scrollTop * 1.5) / elementHeight;
    }
  });
})
//Changes button layout for use on mobile
buttonWidth = $("#nav-buttons").width();
$(window).on('resize', function () {
  if ($(window).width() > buttonWidth) {
    $('#nav-buttons').addClass('btn-group btn-group-lg');
  } else {
    $('#nav-buttons').removeClass('btn-group btn-group-lg');
  }
});
//Initializing Maps
var geocoder = new google.maps.Geocoder(); //Creating the needed URL.
var CT = { //Connecticut centered location
  lat: 41.8,
  lng: -72.63,
};
//var VermontData = "http://geodata.vermont.gov/datasets/3a87ceb1e3b944b89598abe6c4169f85_0.geojson"
//var geocoded = "https://raw.githubusercontent.com/theFatDads/GoogleMapsData/master/geo-locations.json"
var drugBoxLocations = "https://data.ct.gov/api/geospatial/uem2-db2e?method=export&format=GeoJSON";
var substanceAbuseCareFacilities = "https://map-update.herokuapp.com/substance-abuse-care-facilities-converted.json"
var naloxoneLocations = "https://map-update.herokuapp.com/pharmacies-with-naxalone-converted.json"

function initMaps(center) {
  initgeoJSONMap("boxMap", center, drugBoxLocations, ["location_name", "location_1_address", "city", "state"]);
  initGeocodeMap("careMap", center, substanceAbuseCareFacilities)
  initGeocodeMap("naloxoneMap",center,naloxoneLocations)
}

function centerToUser(position) {
  var userPos = {
    lat: position.coords.latitude,
    lng: position.coords.longitude
  };
  initMaps(userPos)
}
navigator.geolocation.getCurrentPosition(centerToUser, initMaps(CT));