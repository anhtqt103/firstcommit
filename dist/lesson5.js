"use strict";
for (var i = 1; i <= 5; i++) {
    (function (x) {
        setTimeout(function () {
            console.log(x);
        }, 1000);
    })(i);
}
//# sourceMappingURL=lesson5.js.map