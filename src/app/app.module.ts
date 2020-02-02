import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    PokemonListComponent,
    PokemonDetailsComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
