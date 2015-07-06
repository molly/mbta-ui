_ = require('underscore')

Line = React.createClass
  render: ->
    <div className="line full-row #{@props.line}-bg">
      <div className="content">
        <header>{@capitalize(@props.line)} line</header>
        <div className="alerts">1</div>
      </div>
    </div>

  capitalize: (word) ->
    word.charAt(0).toUpperCase() + word.slice(1)

module.exports = Line