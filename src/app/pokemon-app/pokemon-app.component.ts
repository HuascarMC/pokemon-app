import { Component, OnInit } from '@angular/core';

import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-app',
  templateUrl: './pokemon-app.component.html',
  styleUrls: ['./pokemon-app.component.css']
})
export class PokemonAppComponent implements OnInit {

  pokemons;

  constructor(
    protected pokemonService: PokemonService
  ) {
    this.pokemonService = pokemonService;
   }

  ngOnInit() {
  }
  
  getPokemons(offset: number) {
    this.pokemonService.getPokemons(offset).subscribe((data: Pokemon[]) => {
      console.log(data);
      this.pokemons = data["results"];
    })
  }
}
