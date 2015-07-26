Flux = require('flux')
GeneralStore = require('general-store')
$ = require('jquery')
Actions = require('../actions/Actions.coffee')

dispatcher = new Flux.Dispatcher();
baseUrl = "https://mbta-twitter.herokuapp.com"
lines = {
  fetched: false
  fetching: false
  data: null
}

fetch = () ->
  lines.fetched = false
  lines.fetching = true
  $.get("#{baseUrl}/all/hours/1/line")
    .done (data) ->
      dispatcher.dispatch
        actionType: Actions.LINE_FETCH_SUCCEEDED
        data: data

LineStore = GeneralStore.define()
  .defineGet( ->
    unless lines.fetched or lines.fetching
      fetch()
    return lines
  )
  .defineResponseTo(
    Actions.LINE_FETCH_SUCCEEDED
    (data) ->
      return lines = {
        fetched: true
        fetching: false
        data: data
      }
  )
  .register(dispatcher)

module.exports = LineStore