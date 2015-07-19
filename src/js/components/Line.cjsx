_ = require('underscore')

Line = React.createClass
  render: ->
    <div className="line full-row #{@props.line}-bg">
      <header>{@capitalize(@props.line) + " line"}</header>
      <div className="alert-count">1</div>
    </div>

  capitalize: (word) ->
    word.charAt(0).toUpperCase() + word.slice(1)

module.exports = Line