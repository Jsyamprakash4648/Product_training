"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var m = "hi how r u?";
console.log(m);
// let x=10;
// let x=8;
// //which means once we declare then we can change the value but connot decalre same again
// const s="syam";
// const s;//same but it must need decalarations values
var name = "syam";
var sen = "my name is ".concat(name, " i am begginer of ts");
console.log(sen);
var arr = [1, 2, 3, 4];
console.log(arr[2]);
var list2 = [1, 2, 3, 4];
var Colors;
(function (Colors) {
    Colors[Colors["readonly"] = 0] = "readonly";
    Colors[Colors["blue"] = 1] = "blue";
    Colors[Colors["green"] = 2] = "green";
})(Colors || (Colors = {}));
var fav = Colors.blue;
//funstions
function add(number1, number2) {
    return number1 + number2;
}
add(2, 32);
//object
function fullname(person) {
    console.log("".concat(person.fname, " and ").concat(person.lname));
}
var p = { fname: "syam", lname: "prakash" };
fullname(p);
var employee = /** @class */ (function () {
    function employee(name, num) {
        this.ename = name;
        this.ennum = num;
    }
    employee.prototype.greet = function () {
        console.log("hi hw ".concat(this.ename));
    };
    return employee;
}());
var e = new employee("syam", 961789);
console.log(e.ename);
e.greet();
var n;
