if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'Glow'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'Glow'.");
}
var Glow = function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  function Engine(context) {
    this.context = context;
  }
  Engine.prototype.draw = function () {
    this.context.fillStyle = 'green';
    this.context.fillRect(0.0, 0.0, 50.0, 50.0);
  };
  Engine.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Engine',
    interfaces: []
  };
  _.Engine = Engine;
  Kotlin.defineModule('Glow', _);
  return _;
}(typeof Glow === 'undefined' ? {} : Glow, kotlin);
