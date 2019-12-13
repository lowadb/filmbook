import {PayloadAction} from '../../utils/ngrx-combine-action-reducers';
import {Film} from './film.state';

export class SearchByAutoCompleteFilmAction extends PayloadAction<{ query: string }> {
  public static readonly TYPE = 'SearchByAutoCompleteFilmAction';
}

export class SearchFilmAction extends PayloadAction<{ query: string }> {
  public static readonly TYPE = 'SearchFilmAction';
}

export class SetFoundedByCompleteFilmsAction extends PayloadAction<{ films: Film[] }> {
  public static readonly TYPE = 'SetFoundedByCompleteFilmsAction';
}

export class SetFoundedBySearchFilmsAction extends PayloadAction<{ films: Film[] }> {
  public static readonly TYPE = 'SetFoundedBySearchFilmsAction';
}
