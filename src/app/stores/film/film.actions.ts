import {PayloadAction, SimpleAction} from '../../utils/ngrx-combine-action-reducers';
import {Film} from './film.state';

export class SearchByAutoCompleteFilmAction extends PayloadAction<{ query: string }> {
  public static readonly TYPE = 'SearchByAutoCompleteFilmAction';
}

export class SearchFilmAction extends PayloadAction<{ query: string }> {
  public static readonly TYPE = 'SearchFilmAction';
}

export class SearchSingleFilmAction extends PayloadAction<{ query: string }> {
  public static readonly TYPE = 'SearchSingleFilmAction';
}

export class SetFoundedByCompleteFilmsAction extends PayloadAction<{ films: Film[] }> {
  public static readonly TYPE = 'SetFoundedByCompleteFilmsAction';
}

export class SetFoundedBySearchFilmsAction extends PayloadAction<{ films: Film[] }> {
  public static readonly TYPE = 'SetFoundedBySearchFilmsAction';
}

export class GetActiveFilm extends PayloadAction<{ id: string }> {
  public static readonly TYPE = 'GetActiveFilm';
}

export class SetActiveFilm extends PayloadAction<{ film: Film }> {
  public static readonly TYPE = 'SetActiveFilm';
}

export class UnSetActiveFilm extends SimpleAction {
  public static readonly TYPE = 'UnSetActiveFilm';
}

