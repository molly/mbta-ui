Line = require('./line.cjsx')

Lines = React.createClass
  render: ->
    <div className="container-fluid">
      <Line />
      <Line />
      <Line />
      <Line />
    </div>

module.exports = Lines