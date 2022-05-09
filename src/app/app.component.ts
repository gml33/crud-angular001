import { Component } from '@angular/core';
import { PokemonesService } from './servicios/pokemones.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'rangular';

  constructor(
    private pokemonesService:PokemonesService
  ){
this.pokemonesService.getPokemones().subscribe((resp:any)=>{
  this.pokemonesService = resp
})
  }
}
