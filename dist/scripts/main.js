var padding;

padding = 100;

(function($) {
  var addMargins, plot, plotMap;
  plot = function(err, stations, network, colors) {
    stations = addMargins(stations);
    return plotMap(stations, network, colors);
  };
  addMargins = function(stations) {
    var data, keys;
    keys = _.keys(stations);
    data = {};
    _.each(keys, function(k) {
      return data[k] = {
        "spider-x": stations[k]["spider-x"] + padding / 2,
        "spider-y": stations[k]["spider-y"] + padding / 2
      };
    });
    return data;
  };
  plotMap = function(station_data, network_data, color_data) {
    var height, keys, max_x, max_y, network, stations, svg, width;
    keys = _.keys(station_data);
    stations = [];
    _.each(keys, (function(_this) {
      return function(k) {
        return stations.push({
          x: station_data[k]["spider-x"],
          y: station_data[k]["spider-y"]
        });
      };
    })(this));
    max_x = _.max(stations, function(s) {
      return s.x;
    }).x + padding;
    max_y = _.max(stations, function(s) {
      return s.y;
    }).y + padding;
    width = $("body").width();
    height = $("body").height();
    svg = d3.select(".map").append("svg").attr("viewBox", "0 0 " + max_x + " " + max_y).attr("width", width).attr("height", height);
    network = [];
    _.each(network_data, function(conn) {
      return network.push({
        x1: station_data[conn["source"]]["spider-x"],
        y1: station_data[conn["source"]]["spider-y"],
        x2: station_data[conn["target"]]["spider-x"],
        y2: station_data[conn["target"]]["spider-y"],
        color: color_data[conn["line"]]
      });
    });
    svg.selectAll(".connection").data(network).enter().append('line').attr('x1', function(c) {
      return c.x1;
    }).attr('y1', function(c) {
      return c.y1;
    }).attr('x2', function(c) {
      return c.x2;
    }).attr('y2', function(c) {
      return c.y2;
    }).attr('stroke-width', 60).attr('stroke', function(c) {
      return c.color;
    });
    return svg.selectAll(".station").data(stations).enter().append("circle").attr("cx", function(d) {
      return d.x;
    }).attr("cy", function(d) {
      return d.y;
    }).attr("r", 20).style("fill", "#fff");
  };
  return queue().defer(d3.json, "dist/data/stations.json").defer(d3.json, "dist/data/connections.json").defer(d3.json, "dist/data/colors.json").await(plot);
})(jQuery, d3, _);
