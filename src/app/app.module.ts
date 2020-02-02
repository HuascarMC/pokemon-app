import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 

import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { PokemonDetailsComponent } from './pokemon-details/pokemon-details.component';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { PokemonAppComponent } from './pokemon-app/pokemon-app.component';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    PokemonListComponent,
    PokemonDetailsComponent,
    SearchBarComponent,
    PokemonAppComponent
  ],
  imports: [
    BrowserModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
