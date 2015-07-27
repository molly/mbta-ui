Flux = require('flux')
GeneralStore = require('general-store')
$ = require('jquery')
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
      return lines = {
        fetched: true
        fetching: false
        data: data
        expanded: null
      }
  )
  .defineResponseTo(
    ActionTypes.LINE_EXPANDED
    (color) ->
      lines.expanded = color
      return lines
  )
  .register(dispatcher)

module.exports = {
  LineStore: LineStore
  dispatcher: dispatcher
}