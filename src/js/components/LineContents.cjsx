_ = require('underscore')
Tweet = require('./Tweet.cjsx')

LineContents = React.createClass
  propTypes:
    line: React.PropTypes.string.isRequired
    data: React.PropTypes.array.isRequired

  render: ->
    details = 
    <div className="full-row #{@props.line} contents" key={@props.line}>
      {_.map @props.data, (details) ->
        <Tweet key={details.tweet.idStr} details={details} />
      }
    </div>

module.exports = LineContents