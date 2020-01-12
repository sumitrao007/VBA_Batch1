import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent1',
  templateUrl: './parent1.component.html',
  styleUrls: ['./parent1.component.css']
})
export class Parent1Component implements OnInit {

  msg:string="Send data from Parent";
  myobj={
    fname:"sumit",
    lname:"raokhande",
    id:1
  };

  myarrobj=[
    {
      fname:"sumit",
      lname:"raokhande",
      id:1
    },
    {
      fname:"Kiran",
      lname:"raokhande",
      id:1
    },
    {
      fname:"Spruha",
      lname:"raokhande",
      id:1
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
