$(function() {
  "use strict";
  d3.json('data/station-nodes.json', function(err, data) {
    console.log(data);
  });
  var svg = d3.select('.map').append("svg").attr('width', 283).attr('height', 283);
});