import {PayloadAction} from '../../utils/ngrx-combine-action-reducers';
import {Film} from './film.state';

export class SearchByAutoCompleteFilmsAction extends PayloadAction<{ query: string }> {
  public static readonly TYPE = 'SearchByAutoCompleteFilmsAction';
}

export class SearchFilmsAction extends PayloadAction<{ query: string }> {
  public static readonly TYPE = 'SearchFilmsAction';
}

export class SetFoundedFilmsAction extends PayloadAction<{ films: Film[] }> {
  public static readonly TYPE = 'SetFoundedFilmsAction';
}
