import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.css']
})
export class PokemonListComponent implements OnInit {

  pokemon: Pokemon = {
    id: 1,
    name: "bulbasaur",
    species: "bulbasaur",
    height: 7,
    weight: 69, 
    baseExperience: 64,
    imageURI: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/1.png"
  }

  constructor() { }

  ngOnInit() {
  }

}

