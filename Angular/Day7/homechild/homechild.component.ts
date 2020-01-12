import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homechild',
  templateUrl: './homechild.component.html',
  styleUrls: ['./homechild.component.css']
})
export class HomechildComponent implements OnInit {

  count:number=0;
  mycolor1:string='';

  constructor() { }

  ngOnInit() {
  }

  IncrementByone(){
    this.count=this.count+1;
    this.mycolor1='green';
  }

  DecrementByone(){
    this.count=this.count-1;
    this.mycolor1='red';
  }



}
