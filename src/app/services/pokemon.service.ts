import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError, map, tap } from 'rxjs/operators';

import { Observable, throwError } from 'rxjs';
import { Pokemon } from '../models/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(
    private http: HttpClient
  ) { }

  getPokemon(url: string) {
    return this.http.get<Pokemon>(url)
      .pipe(
        catchError(this.handleError)
      );
  }

  getPokemons(offset: number): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`https://pokeapi.co/api/v2/pokemon/?offset=` + offset + `&limit=10`)
    .pipe(
     catchError(this.handleError)
    );
  }

  getPokemonByName(name: string): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`https://pokeapi.co/api/v2/pokemon/` + name)
    .pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent ) {
      console.error('An error ocurred', error.error.message);
    } else {
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was ${error.error}`);
    }
    return throwError(
      'Something bad happened; please try again later.'
    );
  }
}
