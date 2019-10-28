import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-heroes-detail',
  templateUrl: './heroes-detail.component.html',
  styleUrls: ['./heroes-detail.component.css']
})
export class HeroesDetailComponent implements OnInit {
  public students = [];
  
   
constructor(private _heroesservice: HeroesService) { }

  ngOnInit() {
    this._heroesservice.getEmployees()    
    .subscribe (data => this.students = data);
  }

}
