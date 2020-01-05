import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-propertybinding',
  templateUrl: './propertybinding.component.html',
  styleUrls: ['./propertybinding.component.css']
})
export class PropertybindingComponent implements OnInit {

  name:string='Vibrant Minds';
  imgurl:string='../../assets/Desert.jpg';
  ishidden:boolean=false;
  ishideen1:boolean=false;
  constructor() { }

  ngOnInit() {
  }

}
