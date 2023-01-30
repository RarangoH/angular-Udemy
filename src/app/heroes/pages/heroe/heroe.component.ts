import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

import { switchMap } from 'rxjs';
import { IHeroe } from '../../interfaces/heroes.interface';
import { HeroesService } from '../../services/heroes.service';
import { Router } from 'express';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styles: [`
  img{
    width:100%;
    border-radius:5px;
  }
  `
  
  ]
})
export class HeroeComponent  {


heroe!:IHeroe;

constructor(private ac:ActivatedRoute, private heroesService:HeroesService){}

  ngOnInit(): void {
    
    this.ac.params.subscribe(({id})=>this.heroesService.getHeroexId(id).subscribe(res=>this.heroe=res)
    );
    
    //Forma mas abreviada de hacerlo usando el switchMap 
  //   this.ac.params.pipe(switchMap(({id})=>this.heroesService.getHeroexId(id))).subscribe(res=> this.heroe=res)
  }
  
}
