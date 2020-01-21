import { Component, OnInit } from '@angular/core';
import { MyhttpService } from './myhttp.service';

@Component({
  selector: 'app-http-comp',
  templateUrl: './http-comp.component.html',
  styleUrls: ['./http-comp.component.css']
})
export class HttpCompComponent implements OnInit {

  mypost=[];
  myid:string='';
  mytitle:string='';
  mybody:string='';
  ishidden:boolean=true;

  constructor(private service:MyhttpService) { }

  ngOnInit() {
    this.getAllPosts();
  }

getAllPosts(){
  this.service.getPost()
  .subscribe(response=>{
    console.log(response.json());
    this.mypost=response.json();

  },error=>{
    alert("Unexpected Error Occur!!!!");
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

onUpdate(item){

  this.ishidden=false;
  this.myid=item.id;
  this.mytitle=item.title;
  this.mybody=item.body;

}

UpdateData(){

  let putdata={
    id:this.myid,
    title:this.mytitle,
    body:this.mybody
  };
 // console.log(putdata.title+" "+putdata.body+" "+putdata.id);
  this.service.putPost(putdata)
  .subscribe(response=>{
    console.log(response.json());
  })
}

onDelete(item){

  this.service.deletePost(item.id)
  .subscribe(response=>{
    console.log(response.json());
  });


}

}
