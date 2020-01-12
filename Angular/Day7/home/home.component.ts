import { Component, OnInit, ViewChild } from '@angular/core';
import { HomechildComponent } from '../homechild/homechild.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  @ViewChild(HomechildComponent) childinstance:HomechildComponent;

  constructor() { }

  ngOnInit() {
  }
  onIncrement(){
    this.childinstance.IncrementByone();
  }

  onDecrement(){
    this.childinstance.DecrementByone();
  }

}
