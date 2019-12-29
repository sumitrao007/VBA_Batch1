//string interpolation
// add();
var a:number=10;
var b:number=20;
// console.log(`
//     Value of A is ${a} ${b}
// `);

// for(let i=0;i<5;i++){
//     console.log("Value of I is "+i);
// }

//How to define Function
function add(){
    console.log(`
    Addition is ${5+5}
    `);
}

function add1(a:number,b:number){
    console.log(`
        Function with Argument ${a+b}
    `);
}
// add1(2,4);

function add2():number
{
    return (5+8);
}

// console.log("Function without Argument with return type "+add2());

function add3(a:number,b:number){
    return (a+b);
}

var res=add3(4,9);
// console.log(`
// ---------------------------------------------
// Function with Argument with return type ${res}
// ----------------------------------------------
// `)

var temp1=function(){
    console.log(`Function without name ------`);
}

temp1();
var temp2=function(a:number,b:number){
    return (a+b);
}
var res1=temp2(10,20);
console.log(`
Function with arg & return ${res1}
`)

//Fat arrow Function or Arrow Function

var temp3=(a:number,b:number)=>{
    console.log(`
    Multiplication is ${a*b}
    `)
}

temp3(3,3);

var temp4=(a:number,b:number):number=>{
    return (a*b);
}

console.log(`
Function with arg & return use Arrow Func ${temp4(5,5)}
`);

//Optional Parameter Function

function Mul1(a:any,b?:any,c?:any){
    console.log("Value of A is "+a);
    console.log("Value of b is "+b);
    console.log("Value of A*B is "+(a*b));
}

// Mul1(6,6);
Mul1(8);
console.log("-----------------------------------");
var temp5=(a:any,b?:any)=>{
    console.log("Value of A is "+a);
    console.log("Value of b is "+b);
    console.log("Value of A*B is "+(a*b));
}

temp5(9);

//Default Parameter Function
console.log("-----------------------------------");
var temp6=(a:any,b:any=9)=>{
    console.log("Value of A is "+a);
    console.log("Value of b is "+b);
    console.log("Value of A*B is "+(a*b));
    console.log("-----------------------------------");
}

temp6(12,4);
temp6(11);

var temp7=(a:any,b?:any,c:any=9)=>{
    console.log("---------Default parametere--------------------------");
    console.log("Value of A is "+a);
    console.log("Value of b is "+b);
    console.log("Value of c is "+c);
    console.log("Value of A*B is "+(a*b*c));
    console.log("-----------------------------------");
}
// temp7(7,8)
temp7(2);

//Function Constructor
var temp8=new Function("a","b","console.log((a-b))");
temp8(5,4);
console.log("--------------------------------------");
var temp9=new Function("a","b",`
console.log(a)
console.log(b)
console.log(a-b)
`);

temp9(11,1);