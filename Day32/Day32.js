"use strict";
exports.__esModule = true;

var s = ["a", "b", "c"];
var a = [4, 5, 9];
a.push("hello");

var users = {
    name: "simran",
    age: 19
};
var user = {
    name: "John",
    age: 30
};
console.log(user);
// typescript in object oriented programming
var App = /** @class */ (function () {
    function App() {
    }
    App.prototype.printHello = function () {
        console.log("hello");
    };
    return App;
}());
var app = new App();
app.printHello();
var uusername = "";
console.log(uusername);
var door = "open";
console.log(door);
var aa;
aa = 10;
aa = "hello";
aa = false;
console.log(aa);
//function
function add(a, b) {
    return a + b;
}
console.log(add(1, 2));
console.log(add(1, "2"));
