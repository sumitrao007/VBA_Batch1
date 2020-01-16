import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-custompipe',
  templateUrl: './custompipe.component.html',
  styleUrls: ['./custompipe.component.css']
})
export class CustompipeComponent implements OnInit {

  productDetails:string="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nobis delectus rerum placeat quod deleniti libero necessitatibus odio, fugiat neque asperiores, veniam, expedita saepe sit illum aliquam itaque at quaerat.Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia nobis delectus rerum placeat quod deleniti libero necessitatibus odio, fugiat neque asperiores, veniam, expedita saepe sit illum aliquam itaque at quaerat.";
  constructor() { }

  ngOnInit() {
  }

}
