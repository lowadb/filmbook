import {FilmState, initialFilmState} from './film.state';
import {combineActionReducers, SimpleAction} from '../../utils/ngrx-combine-action-reducers';
import {SetFoundedByCompleteFilmsAction, SetFoundedBySearchFilmsAction} from './film.actions';

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
});

export function filmReducer(state: FilmState, action: SimpleAction): FilmState {
  return reducers(state, action);
}
