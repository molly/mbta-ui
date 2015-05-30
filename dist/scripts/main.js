(function($) {
  return d3.json("dist/data/station-nodes.json", function(err, data) {
    var circleAttributes, circles, height, jsonCircles, keys, max_x, max_y, svgContainer, width;
    keys = _.keys(data);
    jsonCircles = [];
    _.each(keys, (function(_this) {
      return function(k) {
        return jsonCircles.push({
          x_axis: data[k][0],
          y_axis: data[k][1],
          radius: .1,
          color: "red"
        });
      };
    })(this));
    max_x = _.max(jsonCircles, function(circ) {
      return circ.x_axis;
    }).x_axis + 2;
    max_y = _.max(jsonCircles, function(circ) {
      return circ.y_axis;
    }).y_axis + 2;
    width = $("body").width();
    height = $("body").height();
    svgContainer = d3.select(".map").append("svg").attr("viewBox", "0 0 " + max_x + " " + max_y).attr("preserveAspectRatio", "maxXmaxY").attr("width", width).attr("height", height);
    circles = svgContainer.selectAll("circle").data(jsonCircles).enter().append("circle");
    return circleAttributes = circles.attr("cx", function(d) {
      return d.x_axis + 1;
    }).attr("cy", function(d) {
      return d.y_axis + 1;
    }).attr("r", function(d) {
      return d.radius;
    }).style("fill", function(d) {
      return d.color;
    });
  });
})(jQuery, d3, _);
