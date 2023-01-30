import { Component, Input } from '@angular/core';
import { IHeroe } from '../../interfaces/heroes.interface';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styles: [
  ]
})
export class HeroeTarjetaComponent {


  @Input() heroe!:IHeroe;
}
