import { Component, OnInit } from '@angular/core';
import { MyhttpService } from './myhttp.service';

@Component({
  selector: 'app-http-comp',
  templateUrl: './http-comp.component.html',
  styleUrls: ['./http-comp.component.css']
})
export class HttpCompComponent implements OnInit {

  mypost=[];

  constructor(private service:MyhttpService) { }

  ngOnInit() {
    this.getAllPosts();
  }

getAllPosts(){
  this.service.getPost()
  .subscribe(response=>{
    console.log(response.json());
    this.mypost=response.json();

  })
}

onSendData(inputTitle){

  let postdata={
    title:inputTitle
  }
  this.service.postPost(postdata)
  .subscribe(response=>{
    console.log(response.json());
    console.log("Id is "+response.json().id);

  });
}


}
