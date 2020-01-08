import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fordirective',
  templateUrl: './fordirective.component.html',
  styleUrls: ['./fordirective.component.css']
})
export class FordirectiveComponent implements OnInit {

  course:string[]=["Angular 7","React js","Vue Js","Ember Js","Node Js","MEAN stack"];

  product=[
    {
      productname:"Shahi Utane",
      quantity:"30gm",
      price:30
    },
    {
      productname:"Gulab Utane",
      quantity:"30gm",
      price:30
    },
    {
      productname:"Royal Mirrage Perfume",
      quantity:"30ml",
      price:120
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
