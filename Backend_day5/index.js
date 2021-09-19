// const Test = require("./require_test");
var test = require("./require_test");
// fs.mkdirSync("day_1");
// fs.writeFileSync("day_1/hello.txt","Helo");
var fs=require("fs");
fs.mkdirSync("day_1");
fs.writeFileSync("day_1/hello.txt","Hello everyone");

var obj= new Test();

console.log(obj.print());