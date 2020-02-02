import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonAppComponent } from './pokemon-app.component';

describe('PokemonAppComponent', () => {
  let component: PokemonAppComponent;
  let fixture: ComponentFixture<PokemonAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PokemonAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PokemonAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
