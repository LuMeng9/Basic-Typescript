"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
/**
 * About Typescript
 */
console.log("/************************ About Typescript *******************/");
var message = "Oh! my god!";
console.log(message);
var name = "Meng Lu";
var sentence = "My name is " + name + ". I'm beginnner in Typescript";
var num = 456;
// console.log(sentence);
var numString = num.toString();
console.log(num);
console.log(numString);
console.log("/************************ Typescript variable type *******************/");
/**
 * Typescript variable type
 */
var n = null;
var u = undefined;
var isNew = n;
var myName = u;
var list1 = [1, 2, 3];
var list2 = [1, 2, 3];
console.log(list1);
console.log(list2);
var person1 = ["Jhon", 25];
console.log(person1);
var color;
(function (color) {
    color[color["Red"] = 3] = "Red";
    color[color["blue"] = 4] = "blue";
    color[color["black"] = 5] = "black";
})(color || (color = {}));
var c = color.black;
console.log(color);
console.log(c);
var randomValue = 10;
console.log(randomValue);
randomValue = [2, 3];
console.log(randomValue);
randomValue = "Hello";
console.log(randomValue);
console.log(randomValue.name);
// console.log(randomValue());
// console.log(randomValue.toUpperCase());
console.log("/************************ Function define *******************/");
/**
 * Function define
 */
function add(num1, num2) {
    //   return num1 + num2;
    if (num2) {
        return num1 + num2;
    }
    else {
        return num1;
    }
}
// console.log(add(5, "10"));
console.log(add(5));
console.log("/************************ Class *******************/");
/**
 * Class
 */
function fullName(person) {
    return person.firstName + " " + person.lastName;
}
var p = {
    firstName: "Meng",
    lastName: "Lu"
};
console.log(fullName(p));
function detail(person) {
    return "Name: " + person.firstName + " " + person.lastName + " \nEmail: " + person.email + " \nAddress: " + person.address;
}
var human = {
    firstName: "Meng",
    lastName: "Lu",
    email: "MengLu@outlook.com",
    address: "Los angeles"
};
console.log(detail(human));
console.log("/************************ Access Modifiers *******************/");
/**
 * Access Modifiers
 */
var Employee = /** @class */ (function () {
    function Employee(name) {
        this.employeeName = name;
    }
    Employee.prototype.greet = function () {
        console.log("Good Morning " + this.employeeName);
    };
    return Employee;
}());
var emp1 = new Employee("Meng Lu");
console.log(emp1.employeeName);
emp1.greet();
var Manager = /** @class */ (function (_super) {
    __extends(Manager, _super);
    function Manager(managerName) {
        return _super.call(this, managerName) || this;
    }
    Manager.prototype.delegateWork = function () {
        console.log("Manager delegating tasks " + this.employeeName);
    };
    return Manager;
}(Employee));
var m1 = new Manager("Bruce");
m1.delegateWork();
m1.greet();
console.log(m1.employeeName);
