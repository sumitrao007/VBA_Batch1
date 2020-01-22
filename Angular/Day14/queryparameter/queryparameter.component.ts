import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-queryparameter',
  templateUrl: './queryparameter.component.html',
  styleUrls: ['./queryparameter.component.css']
})
export class QueryparameterComponent implements OnInit {

  name:string='';
  rank:number;
  rating:number;
  constructor(private route:ActivatedRoute) { }

  ngOnInit() {

    this.route.queryParamMap
    .subscribe(param=>{
      this.name=param.get("name");
      this.rank=+param.get("rank"); //+ it is used to convert it into number
      this.rating=+param.get("rating");
    })

  }

}
