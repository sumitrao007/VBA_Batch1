import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mouse-event',
  templateUrl: './mouse-event.component.html',
  styleUrls: ['./mouse-event.component.css']
})
export class MouseEventComponent implements OnInit {


  productarr=[
    {
      prodname:"Perfume",
      quantity:1,
      price:100
    },
    {
      prodname:"Shahi Utane",
      quantity:1,
      price:30
    },
    {
      prodname:"Gulab Utane",
      quantity:1,
      price:30
    },
    {
      prodname:"Utane",
      quantity:1,
      price:25
    }
  ];


  constructor() { }

  ngOnInit() {
  }

  onMouseHover(item){
   // console.log("Mouse Over Event Occur!!!");
    //alert("Mouse Over Event Occur");

    this.selected=item.prodname;
  }

  OnMouseout(){
    this.selected='';
  }

}
