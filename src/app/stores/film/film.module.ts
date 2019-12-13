import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {FilmEffects} from './film.effects';
import {FILM_FEATURE_NAME} from './film.state';
import {filmReducer} from './film.reducer';
import {FilmService} from './film.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forFeature(FILM_FEATURE_NAME, filmReducer),
    EffectsModule.forFeature([FilmEffects])
  ],
  providers: [
    FilmService
  ]
})
export class FilmStoreModule {
}
