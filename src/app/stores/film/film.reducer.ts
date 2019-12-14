import {FilmState, initialFilmState} from './film.state';
import {combineActionReducers, SimpleAction} from '../../utils/ngrx-combine-action-reducers';
import {
  SetActiveFilm,
  SetFavoriteFilmsAction,
  SetFoundedByCompleteFilmsAction,
  SetFoundedBySearchFilmsAction,
  UnSetActiveFilm
} from './film.actions';

export const reducers = combineActionReducers(initialFilmState, {
  [SetFoundedByCompleteFilmsAction.TYPE]: (state: FilmState, action: SetFoundedByCompleteFilmsAction) => {
    console.log('by complete ', action.payload.films);
    return {
      ...state,
      completeFoundedFilms: action.payload.films
    };
  },
  [SetFoundedBySearchFilmsAction.TYPE]: (state: FilmState, action: SetFoundedBySearchFilmsAction) => {
    console.log('by search ', action.payload.films);
    return {
      ...state,
      searchFoundedFilms: action.payload.films
    };
  },
  [SetActiveFilm.TYPE]: (state: FilmState, action: SetActiveFilm) => {
    console.log('active film ', action.payload.film);
    return {
      ...state,
      activeFilm: action.payload.film
    };
  },
  [UnSetActiveFilm.TYPE]: (state: FilmState, action: UnSetActiveFilm) => {
    return {
      ...state,
      activeFilm: null
    };
  },
  [SetFavoriteFilmsAction.TYPE]: (state: FilmState, action: SetFavoriteFilmsAction) => {
    return {
      ...state,
      favoriteFilms: action.payload.films
    };
  },
});

export function filmReducer(state: FilmState, action: SimpleAction): FilmState {
  return reducers(state, action);
}
