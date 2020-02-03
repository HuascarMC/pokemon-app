import { Component, OnInit } from '@angular/core';

import { PokemonService } from '../services/pokemon.service';
import { Pokemon } from '../models/pokemon';
import { PokemonAppComponent } from '../pokemon-app/pokemon-app.component';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent extends PokemonAppComponent implements OnInit {

  images: Array<String> = [];
  imageIndex: number = 2;
  pokemon;
  interval;
  
  constructor(
    protected pokemonService: PokemonService
  ) {
    super(pokemonService)
   }

  loopImages() {
    this.interval = setInterval(() => {
      if(this.imageIndex >= (this.images.length - 1)) {
        this.imageIndex = 0;
      } else {
        this.imageIndex++;
      }
    }, 1000)
  }

  getPokemon(url: string) {
    this.images = [];
    this.pokemon = this.pokemonService.getPokemon(url).subscribe((data: Pokemon) => {
      console.log(data)
      this.pokemon = data;
      clearInterval(this.interval)
      this.getImages()
    })
  }
    
  getPokemonByName(name) {
    this.images = [];
    this.pokemon = this.pokemonService.getPokemonByName(name).subscribe((data: Pokemon[]) => {
      console.log(data)
      this.pokemon = data;
      this.getImages();
    })
  }

  getImages() {
    for( var name in this.pokemon.sprites ) {
      if(this.pokemon.sprites[name] !== undefined && this.pokemon.sprites[name] !== null) {
        this.images.push(this.pokemon.sprites[name]);
      }
    }
    this.loopImages();
  }

  nextImage() {
    if(this.imageIndex < this.images.length - 1) {
      this.imageIndex++;
    } else {
      this.imageIndex = 0;
    }
  }
}
