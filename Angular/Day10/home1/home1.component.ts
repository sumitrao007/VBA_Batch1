import { Component, OnInit, ViewChild } from '@angular/core';
import { SonglistComponent } from '../songlist/songlist.component';

@Component({
  selector: 'app-home1',
  templateUrl: './home1.component.html',
  styleUrls: ['./home1.component.css']
})
export class Home1Component implements OnInit {

  @ViewChild(SonglistComponent) songId:SonglistComponent;
  constructor() { }

  ngOnInit() {
  }
  onFilter(id){
    console.log("In Home Comp "+id);
    this.songId.songlist(id);
  }

}
