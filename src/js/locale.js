moment = require('moment')

moment.locale('en', {
  relativeTime : {
    future: "in %s",
    past:   "%s",
    s:  "s",
    m:  "1m",
    mm: "%dm",
    h:  "1h",
    hh: "%dh",
    d:  "1d",
    dd: "%dd",
    M:  "1mo",
    MM: "%dmo",
    y:  "1y",
    yy: "%dy"
  }
})