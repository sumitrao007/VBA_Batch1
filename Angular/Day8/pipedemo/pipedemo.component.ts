import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipedemo',
  templateUrl: './pipedemo.component.html',
  styleUrls: ['./pipedemo.component.css']
})
export class PipedemoComponent implements OnInit {

  name:string="Hi Sumit Here";
myobj={
  fname:"Sumit",
  lname:"Raokhande",
  id:1
};

mydate=new Date();

  constructor() { }

  ngOnInit() {
  }

}
