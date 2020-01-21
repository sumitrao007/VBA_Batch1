import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class MyhttpService {

  url="https://jsonplaceholder.typicode.com/posts";
  constructor(private http:Http) { }


  getPost(){
    return (this.http.get(this.url));
  }

  postPost(postdata){
    return  this.http.post(this.url,JSON.stringify(postdata))
  }

  putPost(updatedata){
     return (this.http.put(this.url+"/"+updatedata.id,JSON.stringify(updatedata)))
  }
deletePost(id){
  return (this.http.delete(this.url+"/"+id));
}


}
