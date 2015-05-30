scaling_factor = 50

(($) ->
  d3.json("dist/data/station-nodes.json", (err, data) ->
    keys = _.keys(data)
    jsonCircles = []
    _.each keys, (k) =>
      jsonCircles.push
        x_axis: data[k][0] * scaling_factor
        y_axis: data[k][1] * scaling_factor
        radius: 5
        color: "red"
    margin = {top: 10, right: 10, bottom: 10, left: 10}
    width = _.max(jsonCircles, (circ) -> circ.x_axis).x_axis - margin.left - margin.right
    height = _.max(jsonCircles, (circ) -> circ.y_axis).y_axis - margin.top - margin.bottom

    svgContainer = d3.select("body").append("svg")
      .attr("width", width + margin.left + margin.right)
      .attr("height", height + margin.top + margin.bottom)
    .append("g")
      .attr("transform", "translate(" + margin.left + "," + margin.top + ")");

    circles = svgContainer.selectAll("circle")
      .data(jsonCircles)
      .enter()
      .append("circle")

    circleAttributes = circles
      .attr("cx", (d) -> d.x_axis )
      .attr("cy", (d) -> d.y_axis )
      .attr("r", (d) -> d.radius )
      .style("fill", (d) -> d.color )
  );
) jQuery, d3, _