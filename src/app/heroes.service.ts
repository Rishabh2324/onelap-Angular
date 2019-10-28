import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Istudent } from './employee';
import { Observable } from 'rxjs/observable';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {
  private _url: string = "/assets/data/employees.json";

  constructor(private http: HttpClient) {}

  getEmployees(): Observable<Istudent[]>
  {
    return this.http.get<Istudent[]>(this._url);
  
    
  }
}
