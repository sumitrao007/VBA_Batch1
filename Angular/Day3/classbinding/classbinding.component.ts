import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-classbinding',
  templateUrl: './classbinding.component.html',
  styleUrls: ['./classbinding.component.css']
})
export class ClassbindingComponent implements OnInit {
  myclass1:string='success';
  rating:number=13;
  myclass2:string='warning';
  rating1:number=2;
  iserror1:boolean=true;
  iserror2:boolean=false;

  myobj={
    'success':!this.iserror1,
    'danger' : this.iserror1,
    'special': this.iserror2
  }
  constructor() { }

  ngOnInit() {
  }

}
