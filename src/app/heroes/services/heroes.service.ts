import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IHeroe } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor(private http:HttpClient) { }

  getHeroes():Observable<IHeroe[]>{
    return this.http.get<IHeroe[]>('http://localhost:3000/heroes');
  }

  getHeroexId(id:string):Observable<IHeroe>{
    return this.http.get<IHeroe>(`http://localhost:3000/heroes/${id}`)
  }
}
