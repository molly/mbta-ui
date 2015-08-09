$ = require('jquery')
_ = require('underscore')
Flux = require('flux')
GeneralStore = require('general-store')
ActionTypes = require('../actions/ActionTypes.coffee')

dispatcher = new Flux.Dispatcher();
baseUrl = "https://mbta-twitter.herokuapp.com"
lines = {
  fetched: false
  fetching: false
  data: null
  expanded: null
}

fetch = () ->
  lines.fetched = false
  lines.fetching = true
  $.get("#{baseUrl}/all/hours/1/line")
    .done (data) ->
      # Filter out retweets. If I never end up wanting them, I'll just stop storing
      # them in the DB, but for now I'm just doing this client-side.
      _.each _.keys(data), (line) ->
        data[line] = _.filter(data[line], (details) -> return !details.retweet)
      dispatcher.dispatch
        actionType: ActionTypes.LINE_FETCH_SUCCEEDED
        data: data

LineStore = GeneralStore.define()
  .defineGet( ->
    unless lines.fetched or lines.fetching
      fetch()
    return lines
  )
  .defineResponseTo(
    ActionTypes.LINE_FETCH_SUCCEEDED
    (data) ->
      console.log data
      return lines = {
        fetched: true
        fetching: false
        data: data
        expanded: null
      }
  )
  .defineResponseTo(
    ActionTypes.LINE_TOGGLED
    (color) ->
      if lines.expanded is color or lines.data[color].length is 0
        lines.expanded = null
      else
        lines.expanded = color
      return lines
  )
  .register(dispatcher)

module.exports = {
  LineStore: LineStore
  dispatcher: dispatcher
}