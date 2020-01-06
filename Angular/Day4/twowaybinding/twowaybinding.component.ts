import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybinding',
  templateUrl: './twowaybinding.component.html',
  styleUrls: ['./twowaybinding.component.css']
})
export class TwowaybindingComponent implements OnInit {

  myname:string='';
  myname2:string='';
  ishidden:boolean=true;
  myname3:string='';

  ishidden1:boolean=true;
  username:string='';

  constructor() { }

  ngOnInit() {
  }
  OnShowMe(){
    this.ishidden=false;
  }

  onChange(){
    this.ishidden1=false;
  }

  OnSubmit(){
    if(this.username===''){
      alert('Please Enter the Name...')
    }else{
      alert("Username is "+this.username)
    }
  }

  OnSubmit1(user){
    console.log(user.value);
    if(user.value == ''){
      alert('Please Enter the Name...')
    }
    else{
      alert("Username is "+user.value)
    }
  }
  

}
