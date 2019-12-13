import {Injectable} from '@angular/core';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {FilmState} from './film.state';
import {Store} from '@ngrx/store';
import {SearchByAutoCompleteFilmsAction, SetFoundedFilmsAction} from './film.actions';
import {debounceTime, distinctUntilChanged, map, switchMap} from 'rxjs/operators';
import {FilmService} from './film.service';

@Injectable()
export class FilmEffects {
  constructor(
    private actions$: Actions,
    private filmStore: Store<FilmState>,
    private filmService: FilmService
  ) {
  }

  @Effect({dispatch: false})
  foundedFilmsEffect = this.actions$.pipe(
    ofType<SearchByAutoCompleteFilmsAction>(SearchByAutoCompleteFilmsAction.TYPE),
    debounceTime(100),
    distinctUntilChanged(),
    switchMap(action => this.filmService.getAutoCompleteVariants(action.payload.query)),
    map(films => new SetFoundedFilmsAction({films}))
  );
}
