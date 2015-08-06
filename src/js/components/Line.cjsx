Flux = require('flux')
ActionTypes = require('../actions/ActionTypes.coffee')
dispatcher = require('../stores/LineStore.cjsx').dispatcher

Line = React.createClass
  propTypes:
    line: React.PropTypes.string.isRequired
    data: React.PropTypes.array
    fetched: React.PropTypes.bool.isRequired

  getInitialState: ->
    isExpanded: false

  render: ->
    <div className="line full-row #{@props.line} header" onClick={@toggle}>
      <header>{@capitalize(@props.line) + " line"}</header>
      {@renderAlerts()}
    </div>

  renderAlerts: ->
    if @props.fetched
      <div className="alert-count">{@props.data.length}</div>

  toggle: ->
    dispatcher.dispatch
      actionType: ActionTypes.LINE_TOGGLED
      data: @props.line

  capitalize: (word) ->
    word.charAt(0).toUpperCase() + word.slice(1)

module.exports = Line