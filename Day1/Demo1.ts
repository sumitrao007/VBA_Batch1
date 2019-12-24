var a_b;
var ab1;
 var a$b;
 
 var a=10;
 //number,string,boolean,any,void,undefined & null
 var a1:number=10;
 var a2:string="Sumit";
 var a3='gskdjfh';
 var a4:boolean=true;
 var a5;
var a6:any;
var b1:number;
console.log("Value of B1 is "+b1);
//Type Assertion
var c:any;
//1 Angle Bracket <>
// 2 as syntax
 
// ( <string> c ).

//(c as string).

//operator
//arithematic,logical,bitwise,ternery,conditional,post-inrement, pre-increment

var res1=5+5;
console.log("Additipn is "+res1);
var rate:number=14;
var res2=rate<5?(rate+rate):(rate-1);
console.log("Additipn is "+res2);
res2++,++res2,res2--,--res2;

var temp=10;
if(temp<=10 && rate>12){
    console.log("value is temp if part"+temp);
}else{
    console.log("value is temp "+temp);
}

const temp1:number=3.14;
var rate1=12;
if(rate1<3){
    let a=1;
    console.log("Value of a is let "+a);
}else{
    let a=3;
    console.log("Value of a is let "+a);
}
console.log("Value of A is global scope is "+a);
