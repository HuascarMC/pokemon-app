import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { PokemonAppComponent } from '../pokemon-app/pokemon-app.component';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent extends PokemonAppComponent implements OnInit {

  @Output() searchSubmit = new EventEmitter<any>();

  ngOnInit() {
  }

  searchPokemon(event) {
    const name = new FormData(event.target).get('name');
    this.searchSubmit.emit(name);
  }
    
}
