import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding2',
  templateUrl: './eventbinding2.component.html',
  styleUrls: ['./eventbinding2.component.css']
})
export class Eventbinding2Component implements OnInit {

  mycolor:string='black';
  mycolor1:string='black';

  constructor() { }

  ngOnInit() {
  }

  OnChange(){
    console.log("Change event Occur!!!!");
  }

  onKeyUP(){
    console.log("Key Up Event Occur!!!");
  }

  onKeyDown(){
    console.log("Key Down Event Ocuur!!!");
  }
  onClick(myevent){
    console.log(myevent);
    console.log("Access value is "+myevent.target.value);
  }

  OnTemplateclick(value){
    console.log("Using Template Ref  "+value);
  }
  OnTemplateclick2(event){
     console.log(event.value);
    event.style.background='red';
    event.style.color='white';
  }

  OnRed(){
    this.mycolor='red';
  }
  OnGreen(){
    this.mycolor='green';
  }

  OnBlue(){
    this.mycolor='blue';
  }

  Oncolor(color1){
    this.mycolor1=color1;

  }
  

}
