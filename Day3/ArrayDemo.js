var a = 10;
console.log("Type of Operator " + typeof a);
var arr1 = [1, 2, 3, 4];
var arr2 = [10, 20, 30, 40];
// for (let i = 0; i < arr1.length; i++) {
//    console.log("Element is "+arr1[i]);    
// }
// arr1.forEach(myelement => {
//     console.log("value is  "+myelement);
// });
// arr2.forEach((myelement,i) => {
//     console.log("index is"+i+" value is"+myelement);
// });
// console.log("Array is "+arr1);
// console.log("Array print using join method "+arr2.join(' '));
// console.log("Array print using join method "+arr2.join(' @ '));
// console.log("Array print using join method "+arr2.join());
var arr3 = [];
arr3.push(10);
arr3.push(20);
arr3.push(30);
// console.log("Value is pushed "+arr3.join(' '));
// var temp=arr3.pop();
// console.log("Poped value is "+temp);
// console.log("Poped Value from array "+arr3.join(' '));  
// var temp1=arr3.pop();
// console.log("Poped value is "+temp1);
// console.log("Poped Value from array "+arr3.join(' '));  
console.log("-----------------------");
//splice method
var arr4 = [];
// arr4.splice(0,0,10,20,30);
// console.log("Array is "+arr4);
// arr4.splice(1,0,55);
// console.log("Array is "+arr4);
// arr4.splice(1,1);
// console.log("Array one element deleted is "+arr4);
// arr4.splice(1,1,40);
// console.log("Array one element Replaced is "+arr4);
// arr4.splice(1,1,60,50,80);
// console.log("Array one element Replaced is "+arr4);
// var del=arr4.splice(1,1);
// console.log("Delete value is "+del.join(' '));
// console.log("Array one element Replaced is "+arr4);
// var del1=arr4.splice(1,2);
// console.log("Deleted Array is "+del1.join(' '));
// console.log("Array Deleted  is "+arr4);
//slice method
var arr5 = [77, 88, 99, 100, 110, 120];
console.log("Array is " + arr5);
var res = arr5.slice(1, 3);
console.log("Array is " + arr5);
console.log("Using Slice Method it excludex end index" + res.join(' '));
//Map Function
var arr6 = [1, 2, 3, 4];
var res1 = arr6.map(function (v) {
    return (v * v);
});
console.log("Using map Function perform Operation " + res1.join(' # '));
console.log("Original array is " + arr6);
var res2 = arr6.map(function (value, i) {
    if (i == 2 || i == 3) {
        return (value * value);
    }
});
console.log("-------------------------------------------\nUsing map Function perform Operation " + res2.join(' # ') + "\n");
var res3 = arr6.slice(1, 3).map(function (value) {
    return (value * value);
});
console.log("-------------------------------------------\nUsing map Function perform Operation " + res3.join(' # ') + "\n");
//Rest parameter Function
function myrest() {
    var item = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        item[_i] = arguments[_i];
    }
    console.log("Rest parameter Function " + item);
}
myrest(10);
myrest(10, 20, 30);
