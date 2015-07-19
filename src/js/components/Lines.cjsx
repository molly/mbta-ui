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
      <Line line="red" />
      <Line line="orange" />
      <Line line="green" />
      <Line line="blue" />
    </section>

module.exports = Lines