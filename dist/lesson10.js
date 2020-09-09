"use strict";
var getBonus = function (value, tax) {
    if (value === void 0) { value = 10; }
    if (tax === void 0) { tax = value * 0.1; }
    console.log(value + tax);
    console.log(arguments.length);
};
getBonus();
//# sourceMappingURL=lesson10.js.map