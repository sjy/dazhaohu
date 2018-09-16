(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define("dzh", ["exports"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports);
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports);
    global.dzh = mod.exports;
  }
})(this, function (_exports) {
  "use strict";

  Object.defineProperty(_exports, "__esModule", {
    value: true
  });
  _exports.say = say;
  _exports.default = _exports.random = void 0;
  var greetings = ["Hello", "Hey", "Hi there", "Hi", "Hiya", "How are things", "How's life", "What's new", "What's up", "Yo", "\u4F60\u597D", "\u548B\u5566", "\u5E72\u5565\u561E", "\u5403\u996D\u54A9", "\u563F!", "\u4F60\u5403\u4E86\u5417?", "\u5728\u54EA\u53D1\u8D22?", "\u4F60\u597D\u5417"];

  function say() {
    return greetings[random()];
  }

  var random = function random() {
    return Math.floor(Math.random() * greetings.length);
  };

  _exports.random = random;
  var _default = say;
  _exports.default = _default;
});
