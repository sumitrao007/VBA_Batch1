import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stylebinding',
  templateUrl: './stylebinding.component.html',
  styleUrls: ['./stylebinding.component.css']
})
export class StylebindingComponent implements OnInit {

  mycolor:string='red';
  rating:number=6;
  rating1:number=6;
  mycolor1:string='blue';
  mycolor2:string='yellow';

  myobj={
    color:'blueviolet',
    fontFamily: 'cursive',
    fontStyle: 'italic'
  }


  constructor() { }

  ngOnInit() {
  }

}
