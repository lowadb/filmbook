import {Injectable} from '@angular/core';
import {Actions} from '@ngrx/effects';
import {FilmState} from './film.state';
import {Store} from '@ngrx/store';

@Injectable()
export class FilmEffects {
  constructor(
    private actions$: Actions,
    private filmStore: Store<FilmState>
  ) {
  }
}
