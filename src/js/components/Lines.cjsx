Line = require('./Line.cjsx')
LineContents = require('./LineContents.cjsx')
LineStore = require('../stores/LineStore.cjsx').LineStore
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
      {@renderLineContents("red")}
      {@renderLine("orange")}
      {@renderLineContents("orange")}
      {@renderLine("green")}
      {@renderLineContents("green")}
      {@renderLine("blue")}
      {@renderLineContents("blue")}
    </section>

  renderLine: (color) ->
    if @state.lines.fetched
      <Line line={color} data={@state.lines.data[color]} fetched={true} />
    else
      <Line line={color} fetched={false} />

  renderLineContents: (color) ->
    if @state.lines.fetched and @state.lines.expanded is color
      <LineContents line={color} data={@state.lines.data[color]} />

module.exports = Lines