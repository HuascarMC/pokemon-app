import { Component, OnInit, Input } from '@angular/core';

import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  @Input() event: Event;
  pokemon;

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
  }

  getPokemon(url: string) {
    this.pokemon = this.pokemonService.getPokemon(url).subscribe((data: Pokemon) => {
      console.log(data)
      this.pokemon = data;
    })
  }
}
