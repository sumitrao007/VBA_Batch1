import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent2',
  templateUrl: './parent2.component.html',
  styleUrls: ['./parent2.component.css']
})
export class Parent2Component implements OnInit {

  msg:string="Send data from Parent";

  myobj={
    fname:"VBA",
    lname:"PVT LTD",
    id:1  
  };

  myarrobj=[
    {
      fname:"VBA",
      lname:"PVT LTD",
      id:1  
    },
    {
      fname:"Mind",
      lname:"PVT LTD",
      id:2  
    },
    {
      fname:"Google",
      lname:"PVT LTD",
      id:3  
    }
  ];

  childtoparentmsg;
  childtoparentobj;

  childtoparentArrobj;

  constructor() { }

  ngOnInit() {
  }

}
