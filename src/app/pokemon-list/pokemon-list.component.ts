import { Component, OnInit } from '@angular/core';
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

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
    this.getPokemons();
  }

  getPokemons() {
    this.pokemonService.getPokemons().subscribe((data: Pokemon[]) => {
      console.log(data);
      this.pokemons = data["results"];
    })
  }
}




  // pokemon: Pokemon = {
  //   id: 1,
  //   name: "bulbasaur",
  //   species: "bulbasaur",
  //   height: 7,
  //   weight: 69, 
  //   baseExperience: 64,
  //   imageURI: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
  // }