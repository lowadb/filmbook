import {PayloadAction, SimpleAction} from '../../utils/ngrx-combine-action-reducers';
import {Film} from './film.state';

export class InitFilmsAction extends SimpleAction {
  public static readonly TYPE = 'InitFilmsAction';
}

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

export class SetLastSearchFilmsAction extends PayloadAction<{ films: Film[] }> {
  public static readonly TYPE = 'SetLastSearchFilmsAction';
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

export class InitFavoriteFilmsAction extends SimpleAction {
  public static readonly TYPE = 'InitFavoriteFilmsAction';
}

export class SetFavoriteFilmsAction extends PayloadAction<{ films: Film[] }> {
  public static readonly TYPE = 'SetFavoriteFilmsAction';
}

export class AddFavoriteFilmAction extends PayloadAction<{ film: Film }> {
  public static readonly TYPE = 'AddFavoriteFilmAction';
}

export class RemoveFavoriteFilmAction extends PayloadAction<{ film: Film }> {
  public static readonly TYPE = 'RemoveFavoriteFilmAction';
}

