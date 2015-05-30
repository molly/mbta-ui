(($) ->
  d3.json("dist/data/station-nodes.json", (err, data) ->
    keys = _.keys(data)
    jsonCircles = []
    _.each keys, (k) =>
      jsonCircles.push
        x_axis: data[k][0]
        y_axis: data[k][1]
        radius: .1
        color: "red"

    max_x = _.max(jsonCircles, (circ) -> circ.x_axis).x_axis + 2
    max_y = _.max(jsonCircles, (circ) -> circ.y_axis).y_axis + 2
    width = $("body").width()
    height = $("body").height()

    svgContainer = d3.select(".map").append("svg")
      .attr("viewBox", "0 0 #{max_x} #{max_y}")
      .attr("preserveAspectRatio", "maxXmaxY")
      .attr("width", width)
      .attr("height", height)

    circles = svgContainer.selectAll("circle")
      .data(jsonCircles)
      .enter()
      .append("circle")

    circleAttributes = circles
      .attr("cx", (d) -> d.x_axis + 1)
      .attr("cy", (d) -> d.y_axis + 1)
      .attr("r", (d) -> d.radius )
      .style("fill", (d) -> d.color )
  );
) jQuery, d3, _