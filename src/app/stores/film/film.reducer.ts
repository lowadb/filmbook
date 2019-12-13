import {FilmState, initialFilmState} from './film.state';
import {combineActionReducers, SimpleAction} from '../../utils/ngrx-combine-action-reducers';
import {SetFoundedFilmsAction} from './film.actions';

export const reducers = combineActionReducers(initialFilmState, {
  [SetFoundedFilmsAction.TYPE]: (state: FilmState, action: SetFoundedFilmsAction) => {
    return {
      ...state,
      foundedFilms: action.payload.films
    };
  },
});

export function filmReducer(state: FilmState, action: SimpleAction): FilmState {
  return reducers(state, action);
}
