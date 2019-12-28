//Simple Json
//value is stored in key & value format
var ObjJson={
    firstname:"sumit",
    lastname:"Raokhande",
    id:1
};

// console.log("My First Name is "+ObjJson.firstname);
// console.log("My Last Name is "+ObjJson.lastname);
// console.log("My id is "+ObjJson.id);

//Array of object
var objarr=[
    {
        fname:"Sumit",
        lname:"Raokhande",
        id:1
    },
    {
        fname:"Kiran",
        lname:"Raokhande",
        id:2
    },
    {
        fname:"Spruha",
        lname:"Raokhande",
        id:3
    }
];

// console.log("1 st object data "+objarr[0].fname);
// console.log("2nd object data "+objarr[1].fname);
console.log("---------------------Using For Loop-------------------------"); 
// for (let i = 0; i < objarr.length; i++) {
   
//     console.log(`
//             -------------${i}st Object Data--------------
//         First Name is ${objarr[i].fname}
//         Last Name is ${objarr[i].lname}
//         Id Is           ${objarr[i].id}
//     `);
    
// }

var objarr1=[
    {
        fname:"Sumit",
        lname:"Raokhande",
        id:1,
        FullName:(Fname,Lname)=>{
            return (Fname+" "+Lname)
        }
    },
    {
        fname:"Kiran",
        lname:"Raokhande",
        id:2,
        FullName:(Fname,Lname)=>{
            return (Fname+" "+Lname)
        }
    },
    {
        fname:"Spruha",
        lname:"Raokhande",
        id:3,
        FullName:(Fname,Lname)=>{
            return (Fname+" "+Lname)
        }
    }
];

// for (let i = 0; i < objarr.length; i++) {
   
//     console.log(`
//             -------------${i}st Object Data--------------
//         Full Name Is ${objarr1[i].FullName(objarr1[i].fname,objarr1[i].lname)}
//     `);
    
// }

//Industry Json
var IndsJson={
    status:"Success",
    data:[
        {
            prodname:"Shoes",
            company:"Rebok",
            quantity:4,
            description:"shdgahsgkh.."
        },
        {
            prodname:"Shoes",
            company:"Nike",
            quantity:5,
            description:"shdgahsgkh.."
        },
        {
            prodname:"Shoes",
            company:"Additas",
            quantity:2,
            description:"shdgahsgkh.."
        }
    ],
    error:"Data is not Available"
}

console.log("------------------------------Industry Json----------------------");
// console.log("Status is "+IndsJson.status);
// console.log("Error is "+IndsJson.error);

// for (let i = 0; i < IndsJson.data.length; i++) {
   
//     console.log(`
//             -------------${i}st Object Data--------------
//         Product names is ${IndsJson.data[i].prodname}
//         Company is ${IndsJson.data[i].company}
//         Quantity is ${IndsJson.data[i].quantity}
//         Decsription is ${IndsJson.data[i].description} 
//     `);
    
// }



var IndsJson1={
    status:"Success",
    data:[
        {
            name:"Anisha",
            month:["jan","feb","March"],
            examMarks:[50,85,95],
            id:1
        },
        {
            name:"Avanti",
            month:["jan","feb","March"],
            examMarks:[51,45,95],
            id:2
        },
        {
            name:"Kajal",
            month:["jan","feb","March"],
            examMarks:[80,45,85],
            id:1
        }
    ],
    error:"Data is not Available"
}

for (let i = 0; i < IndsJson1.data.length; i++) {
  console.log(`
  -------------------------------------------------------
    Name is ${IndsJson1.data[i].name}    
  `);
     for (let j = 0; j < IndsJson1.data[i].month.length; j++) {
         
         console.log(`
         Month is ${IndsJson1.data[i].month[j]}
         Marks is ${IndsJson1.data[i].examMarks[j]}
         `)
     }
    console.log("-------------------------------------------------");
}