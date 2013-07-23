var map
var canvas

$(document).ready(function () {
  var display_map = function (lat, long, zoom) {
    var mapOptions = {
      center: new google.maps.LatLng(lat, long),
      zoom: zoom,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    canvas = $('#map_canvas')[0];
    map = new google.maps.Map(canvas, mapOptions);
  };

  var add_marker = function (lat, long, title) {
    var latlng = new google.maps.LatLng(lat, long);
    var marker = new google.maps.Marker({position: latlng, map: map, title: title});
  };

  display_map(-33.875832,151.205851, 13);
});