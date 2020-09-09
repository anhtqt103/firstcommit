"use strict";
var displayColors = function (msg) {
    var colors = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        colors[_i - 1] = arguments[_i];
    }
    console.log(colors);
    console.log(msg);
};
var msg = 'hello';
displayColors(msg, 'red');
displayColors(msg, 'red', 'green');
displayColors(msg, 'red', 'green', 'blue');
//# sourceMappingURL=lesson11.js.map