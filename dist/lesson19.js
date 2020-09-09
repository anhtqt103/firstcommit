"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person19 = /** @class */ (function () {
    function Person19(name) {
        console.log(name + " constructor");
    }
    Person19.prototype.getId = function () {
        return 10;
    };
    return Person19;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name) {
        var _this = _super.call(this, name) || this;
        console.log(name + "employee constructor"); // overwrite here
        return _this;
    }
    Employee.prototype.getid = function () {
        return _super.prototype.getId.call(this); // inherit from parent class
    };
    return Employee;
}(Person19));
var emp = new Employee('abe');
console.log(emp.getid());
//# sourceMappingURL=lesson19.js.map