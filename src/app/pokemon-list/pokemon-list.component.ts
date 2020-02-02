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
  offset: number = 0;

  ngOnInit() {
    this.getPokemons(this.offset);
  }

  onPokemonClick(event: Event): void {
    this.pokemonClicked.emit(event);
  }

  onNextClick() {
    this.offset++;
    this.getPokemons(this.offset);
  } 
}




 