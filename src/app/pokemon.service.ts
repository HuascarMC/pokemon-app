import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  configUrl = './assets/config.json';

  constructor(
    private http: HttpClient
  ) { }

  getPokemons() {
    return this.http.get(this.configUrl);
  }
}
