import { Component, OnInit } from '@angular/core';
import { IHeroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [`
  mat-card{
    margin-top:20px;
  }
  `
  ]
})
export class ListadoComponent implements OnInit{


  heroes:IHeroe[] = [];

  constructor(private heroesService:HeroesService){

  }
  
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.heroesService.getHeroes().subscribe(res=>this.heroes = res)
} 


}
