padding = 100

(($) ->
  plot = (err, stations, network, colors) ->
    stations = addMargins(stations)
    plotMap(stations, network, colors)

  addMargins = (stations) ->
    keys = _.keys(stations)
    data = {}
    _.each keys, (k) ->
      data[k] =
        "spider-x": stations[k]["spider-x"] + padding/2
        "spider-y": stations[k]["spider-y"] + padding/2
    data

  plotMap = (station_data, network_data, color_data) ->
    keys = _.keys(station_data)
    stations = []
    _.each keys, (k) =>
      stations.push
        x: station_data[k]["spider-x"]
        y: station_data[k]["spider-y"]

    max_x = _.max(stations, (s) -> s.x).x + padding
    max_y = _.max(stations, (s) -> s.y).y + padding
    width = $("body").width()
    height = $("body").height()

    svg = d3.select(".map").append("svg")
      .attr("viewBox", "0 0 #{max_x} #{max_y}")
      .attr("width", width)
      .attr("height", height)

    network = []
    _.each network_data, (conn) ->
      network.push
        x1: station_data[conn["source"]]["spider-x"]
        y1: station_data[conn["source"]]["spider-y"]
        x2: station_data[conn["target"]]["spider-x"]
        y2: station_data[conn["target"]]["spider-y"]
        color: color_data[conn["line"]]

    svg.selectAll(".connection")
      .data(network)
      .enter()
      .append('line')
      .attr('x1', (c) -> c.x1)
      .attr('y1', (c) -> c.y1)
      .attr('x2', (c) -> c.x2)
      .attr('y2', (c) -> c.y2)
      .attr('stroke-width', 60)
      .attr('stroke', (c) -> c.color)

    svg.selectAll(".station")
      .data(stations)
      .enter()
      .append("circle")
      .attr("cx", (d) -> d.x)
      .attr("cy", (d) -> d.y)
      .attr("r", 20)
      .style("fill", "#fff")

  queue()
    .defer(d3.json, "dist/data/stations.json")
    .defer(d3.json, "dist/data/connections.json")
    .defer(d3.json, "dist/data/colors.json")
    .await(plot)
) jQuery, d3, _