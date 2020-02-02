import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

import { Pokemon } from '../pokemon';
import { PokemonService } from '../pokemon.service';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemons;
  @Output() eventClicked = new EventEmitter<Event>();
 
  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.getPokemons();
  }

  onClick(event: Event): void {
    this.eventClicked.emit(event);
  }

  getPokemons() {
    this.pokemonService.getPokemons().subscribe((data: Pokemon[]) => {
      console.log(data);
      this.pokemons = data["results"];
    })
  }
}




 