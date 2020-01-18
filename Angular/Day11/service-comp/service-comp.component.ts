import { Component, OnInit } from '@angular/core';
import { MyService } from './course.service';

@Component({
  selector: 'app-service-comp',
  templateUrl: './service-comp.component.html',
  styleUrls: ['./service-comp.component.css']
})
export class ServiceCompComponent implements OnInit {
mycourse=[];
  constructor(private service:MyService) { 
   // let service=new MyService(); 
  //  this.mycourse=service.getcourse();
  }

  ngOnInit() {
    // this.mycourse=this.service.getcourse();
    this.getproduct();
  }

  getproduct(){
    this.mycourse=this.service.getcourse();
  }


}
