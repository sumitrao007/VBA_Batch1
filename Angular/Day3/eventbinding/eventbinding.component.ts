import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventbinding',
  templateUrl: './eventbinding.component.html',
  styleUrls: ['./eventbinding.component.css']
})
export class EventbindingComponent implements OnInit {

  count:number=0;
  name:string='';
  name2:string='VBA';
  ishidden:boolean=true;
  name3:string='';
  constructor() { }

  ngOnInit() {
  }

  myclick(){
    if(this.count==0){
      console.log("Click Event Occurs!!");
      this.count++;
    }
    
  }

  myclick2(){
    this.name="Sumit Raokhande";
  }
  myclick3(){
      this.ishidden=false;
  }

  myclick4(){
    this.name3="Sumit Raokhande....";
  }

}
