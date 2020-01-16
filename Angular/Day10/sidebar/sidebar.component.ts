import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  moviename=["Bollywood","Punajabi","Marathi","Hollywood","Purani Jeans"];
  mycolor1=['black','red','purple','rosybrown','saddlebrown','seashell'];

  @Output() movieId=new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onclick(i){
    // this.movieId.emit(i);
    this.movieId.emit(this.mycolor1[i]);
  }

}
