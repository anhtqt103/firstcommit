"use strict";
var Person1 = /** @class */ (function () {
    function Person1(name) {
        this.name = name;
        console.log(this.name + " constructor");
    }
    Person1.talk = function () {
        console.log("this static method is talking");
    };
    Person1.prototype.run = function () {
        console.log("running");
    };
    return Person1;
}());
var p2 = new Person1('tedu');
Person1.talk();
p2.run();
//# sourceMappingURL=lesson18.js.map