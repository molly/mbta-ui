_ = require('underscore')

LineContents = React.createClass
  propTypes:
    line: React.PropTypes.string.isRequired
    data: React.PropTypes.array
    expanded: React.PropTypes.string

  render: ->
    details = 
    <div className="full-row #{@props.line} contents" key={@props.line}>
      <li>
      {_.map @props.data, (details) ->
          <ul className="tweet" key={details.tweet.idStr}>{details.tweet.text}</ul>
      }
      </li>
    </div>

module.exports = LineContents