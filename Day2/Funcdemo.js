//string interpolation
// add();
var a = 10;
var b = 20;
// console.log(`
//     Value of A is ${a} ${b}
// `);
// for(let i=0;i<5;i++){
//     console.log("Value of I is "+i);
// }
//How to define Function
function add() {
    console.log("\n    Addition is " + (5 + 5) + "\n    ");
}
function add1(a, b) {
    console.log("\n        Function with Argument " + (a + b) + "\n    ");
}
// add1(2,4);
function add2() {
    return (5 + 8);
}
// console.log("Function without Argument with return type "+add2());
function add3(a, b) {
    return (a + b);
}
var res = add3(4, 9);
// console.log(`
// ---------------------------------------------
// Function with Argument with return type ${res}
// ----------------------------------------------
// `)
var temp1 = function () {
    console.log("Function without name ------");
};
temp1();
var temp2 = function (a, b) {
    return (a + b);
};
var res1 = temp2(10, 20);
console.log("\nFunction with arg & return " + res1 + "\n");
//Fat arrow Function or Arrow Function
var temp3 = function (a, b) {
    console.log("\n    Multiplication is " + a * b + "\n    ");
};
temp3(3, 3);
var temp4 = function (a, b) {
    return (a * b);
};
console.log("\nFunction with arg & return use Arrow Func " + temp4(5, 5) + "\n");
//Optional Parameter Function
function Mul1(a, b, c) {
    console.log("Value of A is " + a);
    console.log("Value of b is " + b);
    console.log("Value of A*B is " + (a * b));
}
// Mul1(6,6);
Mul1(8);
console.log("-----------------------------------");
var temp5 = function (a, b) {
    console.log("Value of A is " + a);
    console.log("Value of b is " + b);
    console.log("Value of A*B is " + (a * b));
};
temp5(9);
//Default Parameter Function
console.log("-----------------------------------");
var temp6 = function (a, b) {
    if (b === void 0) { b = 9; }
    console.log("Value of A is " + a);
    console.log("Value of b is " + b);
    console.log("Value of A*B is " + (a * b));
    console.log("-----------------------------------");
};
temp6(12, 4);
temp6(11);
var temp7 = function (a, b, c) {
    if (c === void 0) { c = 9; }
    console.log("---------Default parametere--------------------------");
    console.log("Value of A is " + a);
    console.log("Value of b is " + b);
    console.log("Value of c is " + c);
    console.log("Value of A*B is " + (a * b * c));
    console.log("-----------------------------------");
};
// temp7(7,8)
temp7(2);
//Function Constructor
var temp8 = new Function("a", "b", "console.log((a-b))");
temp8(5, 4);
console.log("--------------------------------------");
var temp9 = new Function("a", "b", "\nconsole.log(a)\nconsole.log(b)\nconsole.log(a-b)\n");
temp9(11, 1);
