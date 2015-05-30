(function($) {
  var plotStations;
  plotStations = function() {
    return d3.json("dist/data/station-nodes.json", function(err, data) {
      var height, keys, max_x, max_y, stationAttributes, stations, svgContainer, width;
      keys = _.keys(data);
      stations = [];
      _.each(keys, (function(_this) {
        return function(k) {
          return stations.push({
            x_axis: data[k][0],
            y_axis: data[k][1],
            radius: .05,
            color: "#ccc"
          });
        };
      })(this));
      max_x = _.max(stations, function(s) {
        return s.x_axis;
      }).x_axis + 2;
      max_y = _.max(stations, function(s) {
        return s.y_axis;
      }).y_axis + 2;
      width = $("body").width();
      height = $("body").height();
      svgContainer = d3.select(".map").append("svg").attr("viewBox", "0 0 " + max_x + " " + max_y).attr("width", width).attr("height", height);
      stations = svgContainer.selectAll(".station").data(stations).enter().append("circle");
      return stationAttributes = stations.attr("cx", function(d) {
        return d.x_axis + 1;
      }).attr("cy", function(d) {
        return d.y_axis + 1;
      }).attr("r", function(d) {
        return d.radius;
      }).style("fill", function(d) {
        return d.color;
      });
    });
  };
  return plotStations();
})(jQuery, d3, _);
