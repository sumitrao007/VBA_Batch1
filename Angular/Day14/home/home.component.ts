import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  myid:number=9;
  myusername:string="Sumit";

  product={
    name:"Renuka Group",
    rank:1,
    rating:5
  };
  constructor(private router:Router) { }

  ngOnInit() {
  }

  onPage1(){
    this.router.navigate(['/page1',this.myid]);
  }
  onPage2(){
    this.router.navigate(['/page2',this.myid,this.myusername]);
  }

  onFollower(){
    this.router.navigate(['/follower']);
  }

  onQueryparam(){
    this.router.navigate(['/Queryparameter'],{queryParams:this.product});
  }

}
