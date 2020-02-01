import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { Pokemon } from './pokemon';
import { of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  configUrl = './assets/config.json';

  constructor(
    private http: HttpClient
  ) { }

  getPokemons() {
    return this.http.get<Pokemon[]>(this.configUrl)
      .pipe(
        tap(_ => console.log('fetched pokemons')),
        catchError(this.handleError<Pokemon[]>('getPokemons', []))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      console.error(error);

      return of(result as T);
    }
  }
}
