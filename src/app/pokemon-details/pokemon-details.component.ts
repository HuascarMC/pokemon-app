import { Component, OnInit, Input } from '@angular/core';

import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../pokemon';
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
  
  constructor(
    protected pokemonService: PokemonService
  ) {
    super(pokemonService)
   }

  getPokemon(url: string) {
    this.images = [];
    this.pokemon = this.pokemonService.getPokemon(url).subscribe((data: Pokemon) => {
      console.log(data)
      this.pokemon = data;
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
      if(this.pokemon.sprites[name] !== null) {
        this.images.push(this.pokemon.sprites[name]);
      }
    }
  }

  nextImage() {
    if(this.imageIndex < this.images.length - 1) {
      this.imageIndex++;
    } else {
      this.imageIndex = 0;
    }
  }
}
