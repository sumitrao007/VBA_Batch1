import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child2',
  templateUrl: './child2.component.html',
  styleUrls: ['./child2.component.css']
})
export class Child2Component implements OnInit {

 @Input() parenttochild:string;

 @Input() parentobj;

 @Input() parentarrobj=[];

  @Output() childtoparent=new EventEmitter();

  childmsg="Data from Child";

  @Output() childtoparentobj=new EventEmitter();
  childobj={
    fname:"Sumit",
    lname:"Raokhande",
    cellno:9960556397
  };


  @Output() childtoparentArrObj=new EventEmitter();
  childarrobj=[
    {
      fname:"Sumit",
      lname:"Raokhande",
      cellno:9960556397
    },
    {
      fname:"Kiran",
      lname:"Raokhande",
      cellno:9960556397
    },
    {
      fname:"Spruha",
      lname:"Raokhande",
      cellno:9960556397
    }
  ];

  constructor() { }

  ngOnInit() {
  }

  onSendData(){
    this.childtoparent.emit(this.childmsg);
  }

  OnSendArrObj(){

    this.childtoparentArrObj.emit(this.childarrobj);
  }

  OnSendOBJ(){
    this.childtoparentobj.emit(this.childobj);
  }

}
