Line = require('./Line.cjsx')
LineStore = require('../stores/LineStore.cjsx')
GeneralStore = require('general-store')

Lines = React.createClass
  mixins: [
    GeneralStore.StoreDependencyMixin(
      lines:
        stores: [LineStore]
        deref: (props, state) =>
          LineStore.get()
    )
  ]

  render: ->
    <section className="fill-height">
      {@renderLine("red")}
      {@renderLine("orange")}
      {@renderLine("green")}
      {@renderLine("blue")}
    </section>

  renderLine: (color) ->
    if @state.lines.fetched
      <Line line={color} data={@state.lines.data[color]} fetched={true} />
    else
      <Line line={color} fetched={false} />

module.exports = Lines