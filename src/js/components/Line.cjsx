_ = require('underscore')

Line = React.createClass
  propTypes:
    line: React.PropTypes.string.isRequired
    data: React.PropTypes.object
    fetched: React.PropTypes.bool.isRequired

  render: ->
    <div className="line full-row #{@props.line}-bg">
      <header>{@capitalize(@props.line) + " line"}</header>
      {@renderAlerts()}
    </div>

  renderAlerts: ->
    if @props.fetched
      <div className="alert-count">{@props.data.length}</div>

  capitalize: (word) ->
    word.charAt(0).toUpperCase() + word.slice(1)

module.exports = Line