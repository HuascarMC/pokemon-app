import { Component, OnInit } from "@angular/core";

import { Pokemon } from "../models/pokemon";
import { PokemonAppComponent } from "../pokemon-app/pokemon-app.component";

@Component({
  selector: "app-pokemon-details",
  templateUrl: "./pokemon-details.component.html",
  styleUrls: ["./pokemon-details.component.css"],
})
export class PokemonDetailsComponent
  extends PokemonAppComponent
  implements OnInit {
  pokemon;
  images: Array<String> = [];
  imageIndex: number = 2;
  interval;

  loopImages() {
    this.interval = setInterval(() => {
      if (this.imageIndex >= this.images.length - 1) {
        this.imageIndex = 0;
      } else {
        this.imageIndex++;
      }
    }, 1000);
  }

  getPokemon(url: string) {
    this.images = [];
    this.pokemon = this.pokemonService
      .getPokemon(url)
      .subscribe((data: Pokemon) => {
        this.pokemon = data;
        this.getImages();
      });
  }

  getPokemonByName(name) {
    this.images = [];
    this.pokemon = this.pokemonService
      .getPokemonByName(name)
      .subscribe((data: Pokemon[]) => {
        this.pokemon = data;
        this.getImages();
      });
  }

  getImages() {
    for (let [key, value] of Object.entries(this.pokemon.sprites)) {
      if (value !== undefined && value !== null && typeof value === "string") {
        this.images.push(value);
      }
    }
    clearInterval(this.interval);
    this.loopImages();
  }

  nextImage() {
    if (this.imageIndex < this.images.length - 1) {
      this.imageIndex++;
    } else {
      this.imageIndex = 0;
    }
  }

  getImageIndexUrl(imageIndex) {
    return `url(${this.images[imageIndex]})`;
  }
}
