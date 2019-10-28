import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { HeroesService } from '../heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  public name = "SAE Society Of  Automoblie Engineers";
  public name2 = "Rishabh is a rockstar";
  public myid = "testid";
  public isdisabled= true; 
  public haserror= true;
  public messages = {
    "class1" :!this.haserror,
    "class2" :this.haserror,
    "class3" :this.isdisabled 
   }
  public abcd; 
  public value="Rishabh";
  public mvp;
  public date = new Date();
    @Input() public parentdata;
  @Output() public childevent = new EventEmitter();
  
  public students = [
  ];
  
   constructor(private _HeroesService: HeroesService) { }

   
  ngOnInit() {
  this._HeroesService.getEmployees()
    .subscribe(data => this.students=data);
  }
greetuser()
  {return "Hey" + this.name;
    } 
 onClick()
     {console.log('Rishabh is a Rockstar');
    this.abcd ='Rishabh is a Rockstar'}
  logmessage(value)
  {
    console.log(value);
    this.value
  }
fireEvent()
{
  this.childevent.emit('Hey Automobiii Engineers');
}
}
