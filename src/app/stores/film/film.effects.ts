import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {FilmState} from './film.state';
import {Store} from '@ngrx/store';
import {filter, map, switchMap, withLatestFrom} from 'rxjs/operators';
import {FilmService} from './film.service';
import {
  AddFavoriteFilmAction,
  GetActiveFilm,
  InitFavoriteFilmsAction,
  InitFilmsAction,
  RemoveFavoriteFilmAction,
  SearchByAutoCompleteFilmAction,
  SearchFilmAction,
  SearchSingleFilmAction,
  SetActiveFilm,
  SetFavoriteFilmsAction,
  SetFoundedByCompleteFilmsAction,
  SetFoundedBySearchFilmsAction
} from './film.actions';
import {getFavoriteFilmsSelector} from './film.selectors';

@Injectable()
export class FilmEffects {
  constructor(
    private actions$: Actions,
    private filmStore$: Store<FilmState>,
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
    map(films => {
      this.filmService.setFilmsToLocalStorage(films);
      return new SetFoundedBySearchFilmsAction({films});
    })
  );

  @Effect()
  searchSingleFilmEffect = this.actions$.pipe(
    ofType<SearchSingleFilmAction>(SearchSingleFilmAction.TYPE),
    switchMap(action => this.filmService.searchSingleFilmByTitle(action.payload.query)),
    map(films => {
      this.filmService.setFilmsToLocalStorage(films);
      return new SetFoundedBySearchFilmsAction({films});
    })
  );

  @Effect()
  searchActiveFilmEffect = this.actions$.pipe(
    ofType<GetActiveFilm>(GetActiveFilm.TYPE),
    switchMap(action => this.filmService.searchSingleFilmById(action.payload.id)),
    map(film => new SetActiveFilm({film}))
  );

  @Effect()
  initFilmsEffect = this.actions$.pipe(
    ofType<InitFilmsAction>(InitFilmsAction.TYPE),
    switchMap(() => this.filmService.getFilmsFromLocalStorage()),
    map(films => new SetFoundedBySearchFilmsAction({films}))
  );

  @Effect()
  initFavoriteFilmsEffect = this.actions$.pipe(
    ofType<InitFavoriteFilmsAction>(InitFavoriteFilmsAction.TYPE),
    switchMap(() => this.filmService.getFavoriteFilmsFromLocalStorage()),
    map(films => new SetFavoriteFilmsAction({films}))
  );

  @Effect()
  addFavoriteFilmEffect = this.actions$.pipe(
    ofType<AddFavoriteFilmAction>(AddFavoriteFilmAction.TYPE),
    withLatestFrom(this.filmStore$.select(getFavoriteFilmsSelector)),
    filter(state => !!(state[0] && state[1])),
    map(state => {
      const films = state[1];
      const film = state[0].payload.film;
      if (films && !films.map(fil => fil.imdbID).includes(film.imdbID)) {
        films.push(film);
      }
      return this.filmService.setFavoriteFilmsToLocalStorage(films);
    }),
    map(() => new InitFavoriteFilmsAction())
  );

  @Effect()
  removeFavoriteFilmEffect = this.actions$.pipe(
    ofType<RemoveFavoriteFilmAction>(RemoveFavoriteFilmAction.TYPE),
    withLatestFrom(this.filmStore$.select(getFavoriteFilmsSelector)),
    filter(state => !!(state[0] && state[1])),
    map(state => {
      return this.filmService.setFavoriteFilmsToLocalStorage(state[1].filter(film => film.imdbID !== state[0].payload.film.imdbID));
    }),
    map(() => new InitFavoriteFilmsAction())
  );
}
