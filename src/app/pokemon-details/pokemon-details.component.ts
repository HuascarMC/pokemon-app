import { Component, OnInit, Input } from '@angular/core';

import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  // @Input() event: Event;
  pokemon;
  images: Array<String> = [];
  imageIndex: number = 2;

  constructor(
    private pokemonService: PokemonService
  ) { }

  ngOnInit() {
  }

  getPokemon(url: string) {
    this.images = [];
    this.pokemon = this.pokemonService.getPokemon(url).subscribe((data: Pokemon) => {
      console.log(data)
      this.pokemon = data;
      this.getImages()
    })
  }

  getImages() {
    for( var name in this.pokemon.sprites ) {
      if(this.pokemon.sprites[name] !== null) {
        this.images.push(this.pokemon.sprites[name]);
      }
    }
    console.log(this.images)
  }

  nextImage() {
    if(this.imageIndex < this.images.length - 1) {
      this.imageIndex++;
    } else {
      this.imageIndex = 0;
    }
  }
}
