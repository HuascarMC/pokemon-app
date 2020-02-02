import { Component, OnInit, Output, EventEmitter } from '@angular/core';

import { Pokemon } from '../pokemon';
import { PokemonAppComponent } from '../pokemon-app/pokemon-app.component';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent extends PokemonAppComponent implements OnInit{

  @Output() pokemonClicked = new EventEmitter<Event>();

  ngOnInit() {
    this.getPokemons();
  }

  onClick(event: Event): void {
    this.pokemonClicked.emit(event);
  }
}




 