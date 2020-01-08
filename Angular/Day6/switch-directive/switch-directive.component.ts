import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch-directive',
  templateUrl: './switch-directive.component.html',
  styleUrls: ['./switch-directive.component.css']
})
export class SwitchDirectiveComponent implements OnInit {
  mycolor:string='';
  mycolor1:string='black';
  constructor() { }

  ngOnInit() {
  }

  onColor(input){
    this.mycolor1=input;
  }

}
