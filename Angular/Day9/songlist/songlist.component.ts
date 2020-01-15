import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-songlist',
  templateUrl: './songlist.component.html',
  styleUrls: ['./songlist.component.css']
})
export class SonglistComponent implements OnInit {
mycolor:string='black';

mycolor1=['black','red','purple','rosybrown','saddlebrown','seashell'];
index:number=0;
  constructor() { }

  ngOnInit() {
  }

  songlist(id){
    // if(id==1){
    //   this.mycolor='red';
    // }else if(id==2){
    //   this.mycolor='purple';
    // }else if(id==3){
    //   this.mycolor='rosybrown';
    // }else if(id==4){
    //   this.mycolor='saddlebrown';
    // }else if(id==5){
    //   this.mycolor='seashell';
    // }

    this.index=id;

  }

}
