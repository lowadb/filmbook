import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {FilmState} from './film.state';
import {Store} from '@ngrx/store';
import {map, switchMap} from 'rxjs/operators';
import {FilmService} from './film.service';
import {
  GetActiveFilm,
  SearchByAutoCompleteFilmAction,
  SearchFilmAction,
  SearchSingleFilmAction,
  SetActiveFilm,
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
    switchMap(action => this.filmService.searchFilmsByTitle(action.payload.query)),
    map(films => new SetFoundedByCompleteFilmsAction({films}))
  );

  @Effect()
  searchFilmEffect = this.actions$.pipe(
    ofType<SearchFilmAction>(SearchFilmAction.TYPE),
    switchMap(action => this.filmService.searchFilmsByTitle(action.payload.query)),
    map(films => new SetFoundedBySearchFilmsAction({films}))
  );

  @Effect()
  searchSingleFilmEffect = this.actions$.pipe(
    ofType<SearchSingleFilmAction>(SearchSingleFilmAction.TYPE),
    switchMap(action => this.filmService.searchSingleFilmByTitle(action.payload.query)),
    map(films => new SetFoundedBySearchFilmsAction({films}))
  );

  @Effect()
  searchActiveFilmEffect = this.actions$.pipe(
    ofType<GetActiveFilm>(GetActiveFilm.TYPE),
    switchMap(action => this.filmService.searchSingleFilmById(action.payload.id)),
    map(film => new SetActiveFilm({film}))
  );
}
