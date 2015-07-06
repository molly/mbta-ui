Line = require('./line.cjsx')

Lines = React.createClass
  render: ->
    <section className="fill-height">
      <Line line="red" />
      <Line line="orange" />
      <Line line="green" />
      <Line line="blue" />
    </section>

module.exports = Lines