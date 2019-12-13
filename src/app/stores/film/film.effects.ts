import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {FilmState} from './film.state';
import {Store} from '@ngrx/store';
import {map, switchMap} from 'rxjs/operators';
import {FilmService} from './film.service';
import {
  SearchByAutoCompleteFilmAction,
  SearchFilmAction,
  SetFoundedByCompleteFilmsAction,
  SetFoundedBySearchFilmsAction
} from './film.actions';

@Injectable()
export class FilmEffects {
  constructor(
    private actions$: Actions,
    private filmStore: Store<FilmState>,
    private filmService: FilmService
  ) {
  }

  @Effect()
  completeFilmEffect = this.actions$.pipe(
    ofType<SearchByAutoCompleteFilmAction>(SearchByAutoCompleteFilmAction.TYPE),
    switchMap(action => this.filmService.searchFilmByTitle(action.payload.query)),
    map(films => new SetFoundedByCompleteFilmsAction({films}))
  );

  @Effect()
  searchFilmEffect = this.actions$.pipe(
    ofType<SearchFilmAction>(SearchFilmAction.TYPE),
    switchMap(action => this.filmService.searchFilmByTitle(action.payload.query)),
    map(films => new SetFoundedBySearchFilmsAction({films}))
  );
}
