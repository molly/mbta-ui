(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({"/home/molly/Programming/mbta-ui/src/js/App.js":[function(require,module,exports){
var Parent = require("./Parent");
React.render(React.createElement(Parent, null), document.getElementById('app'));

},{"./Parent":"/home/molly/Programming/mbta-ui/src/js/Parent.js"}],"/home/molly/Programming/mbta-ui/src/js/Child.js":[function(require,module,exports){
var Child = React.createClass({displayName: "Child",
  render: function(){
    return (
      React.createElement("div", null, 
        "and this is the ", React.createElement("b", null, this.props.name), "."
      )
    )
  }
});
module.exports = Child;

},{}],"/home/molly/Programming/mbta-ui/src/js/Parent.js":[function(require,module,exports){
var Child = require("./Child");
var Parent = React.createClass({displayName: "Parent",
  render: function(){
    return (
      React.createElement("div", null, 
        React.createElement("div", null, " This is the parent. "), 
        React.createElement(Child, {name: "child"})
      )
    )
  }
});
module.exports = Parent;

},{"./Child":"/home/molly/Programming/mbta-ui/src/js/Child.js"}]},{},["/home/molly/Programming/mbta-ui/src/js/App.js"])
//# sourceMappingURL=data:application/json;charset:utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyaWZ5L25vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCIvaG9tZS9tb2xseS9Qcm9ncmFtbWluZy9tYnRhLXVpL3NyYy9qcy9BcHAuanMiLCIvaG9tZS9tb2xseS9Qcm9ncmFtbWluZy9tYnRhLXVpL3NyYy9qcy9DaGlsZC5qcyIsIi9ob21lL21vbGx5L1Byb2dyYW1taW5nL21idGEtdWkvc3JjL2pzL1BhcmVudC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBLElBQUksTUFBTSxHQUFHLE9BQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQztBQUNqQyxLQUFLLENBQUMsTUFBTSxDQUFDLG9CQUFDLE1BQU0sRUFBQSxJQUFBLENBQUcsQ0FBQSxFQUFFLFFBQVEsQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7OztBQ0R4RCxJQUFJLDJCQUEyQixxQkFBQTtFQUM3QixNQUFNLEVBQUUsVUFBVTtJQUNoQjtNQUNFLG9CQUFBLEtBQUksRUFBQSxJQUFDLEVBQUE7QUFBQSxRQUFBLGtCQUFBLEVBQ2Esb0JBQUEsR0FBRSxFQUFBLElBQUMsRUFBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQVMsQ0FBQSxFQUFBLEdBQUE7QUFBQSxNQUNwQyxDQUFBO0tBQ1A7R0FDRjtDQUNGLENBQUMsQ0FBQztBQUNILE1BQU0sQ0FBQyxPQUFPLEdBQUcsS0FBSzs7O0FDVHRCLElBQUksS0FBSyxHQUFHLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUMvQixJQUFJLDRCQUE0QixzQkFBQTtFQUM5QixNQUFNLEVBQUUsVUFBVTtJQUNoQjtNQUNFLG9CQUFBLEtBQUksRUFBQSxJQUFDLEVBQUE7UUFDSCxvQkFBQSxLQUFJLEVBQUEsSUFBQyxFQUFBLHVCQUEyQixDQUFBLEVBQUE7UUFDaEMsb0JBQUMsS0FBSyxFQUFBLENBQUEsQ0FBQyxJQUFBLEVBQUksQ0FBQyxPQUFPLENBQUUsQ0FBQTtNQUNqQixDQUFBO0tBQ1A7R0FDRjtDQUNGLENBQUMsQ0FBQztBQUNILE1BQU0sQ0FBQyxPQUFPLEdBQUcsTUFBTSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJ2YXIgUGFyZW50ID0gcmVxdWlyZShcIi4vUGFyZW50XCIpO1xuUmVhY3QucmVuZGVyKDxQYXJlbnQgLz4sIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdhcHAnKSk7IiwidmFyIENoaWxkID0gUmVhY3QuY3JlYXRlQ2xhc3Moe1xuICByZW5kZXI6IGZ1bmN0aW9uKCl7XG4gICAgcmV0dXJuIChcbiAgICAgIDxkaXY+XG4gICAgICAgIGFuZCB0aGlzIGlzIHRoZSA8Yj57dGhpcy5wcm9wcy5uYW1lfTwvYj4uXG4gICAgICA8L2Rpdj5cbiAgICApXG4gIH1cbn0pO1xubW9kdWxlLmV4cG9ydHMgPSBDaGlsZDsiLCJ2YXIgQ2hpbGQgPSByZXF1aXJlKFwiLi9DaGlsZFwiKTtcbnZhciBQYXJlbnQgPSBSZWFjdC5jcmVhdGVDbGFzcyh7XG4gIHJlbmRlcjogZnVuY3Rpb24oKXtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgICAgPGRpdj4gVGhpcyBpcyB0aGUgcGFyZW50LiA8L2Rpdj5cbiAgICAgICAgPENoaWxkIG5hbWU9XCJjaGlsZFwiLz5cbiAgICAgIDwvZGl2PlxuICAgIClcbiAgfVxufSk7XG5tb2R1bGUuZXhwb3J0cyA9IFBhcmVudDsiXX0=
