(($) ->
  plotStations = () ->
    d3.json("dist/data/station-nodes.json", (err, data) ->
      keys = _.keys(data)
      stations = []
      _.each keys, (k) =>
        stations.push
          x_axis: data[k][0]
          y_axis: data[k][1]
          radius: .05
          color: "#ccc"

      max_x = _.max(stations, (s) -> s.x_axis).x_axis + 2
      max_y = _.max(stations, (s) -> s.y_axis).y_axis + 2
      width = $("body").width()
      height = $("body").height()

      svgContainer = d3.select(".map").append("svg")
        .attr("viewBox", "0 0 #{max_x} #{max_y}")
        .attr("width", width)
        .attr("height", height)

      stations = svgContainer.selectAll(".station")
        .data(stations)
        .enter()
        .append("circle")

      stationAttributes = stations
        .attr("cx", (d) -> d.x_axis + 1)
        .attr("cy", (d) -> d.y_axis + 1)
        .attr("r", (d) -> d.radius )
        .style("fill", (d) -> d.color )
    );

  plotStations()
) jQuery, d3, _