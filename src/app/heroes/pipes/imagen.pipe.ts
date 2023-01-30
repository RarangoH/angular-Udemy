import { Pipe, PipeTransform } from '@angular/core';
import { IHeroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(heroe: IHeroe): string {
    
    
    return `assets/heroes/${heroe.id}.jpg`;
  }

}
