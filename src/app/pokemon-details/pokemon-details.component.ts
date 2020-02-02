import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css']
})
export class PokemonDetailsComponent implements OnInit {

  @Input() event: Event;

  constructor() { }

  ngOnInit() {
  }
}
