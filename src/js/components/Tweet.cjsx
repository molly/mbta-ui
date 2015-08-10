moment = require('moment')

Tweet = React.createClass
  propTypes:
    details: React.PropTypes.object.isRequired

  render: ->
    <article className="tweet-container">
      <div className="tweet-profile-picture">
        <img src={@props.details.tweet.user.profileImageUrl} />
      </div>
      <div className="tweet-body">
        <header className="tweet-header">
          <div className="tweet-metadata">
            <a href="//twitter.com/#{@props.details.tweet.user.screenName}">
              <span className="name">{@props.details.tweet.user.name}</span>
              <span className="screenname">{@props.details.tweet.user.screenName}</span>
            </a>
          </div>
        </header>
        <p>{@props.details.tweet.text}</p>
      </div>
      <div className="timestamp">
        <a href="//twitter.com/#{@props.details.tweet.user.screenName}/status/#{@props.details.tweet.idStr}">
          <time datetime={@props.details.tweet.createdAt}>{moment(@props.details.createdAtAsTimestamp).fromNow()}</time>
        </a>
      </div>
    </article>

module.exports = Tweet