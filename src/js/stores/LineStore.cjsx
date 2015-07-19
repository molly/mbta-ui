Flux = require('flux')
GeneralStore = require('general-store')

dispatcher = new Flux.Dispatcher();
lines = {}

LineStore = GeneralStore.define()
  .defineGet( ->
    return lines
  )
  .register(dispatcher)

module.exports = LineStore