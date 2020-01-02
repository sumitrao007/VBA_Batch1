export class Demo{
    //  name:string;
    //  rollno:number;

    //  constructor(){
    //      this.name="Sumit";
    //      this.rollno=12;
    //  }

    // constructor(n:string,rNo:number){
    //     this.name=n;
    //     this.rollno=rNo;
    // }

    constructor(private name:string,private rollno:number){

    }

     Display(){
         console.log(`
         -----------------------------------
         Name is ${this.name}
         Roll No ${this.rollno}
         `);
     }
}

// var obj=new Demo("Vibrant1",54);
// obj.Display();

export function add(a:number,b:number){
    return (a+b);
}
// console.log("Addition is "+add(4,5));
