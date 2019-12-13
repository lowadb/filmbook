import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Film, FilmSearchDTO} from './film.state';
import {environment} from '../../../environments/environment';
import {map} from 'rxjs/operators';

@Injectable()
export class FilmService {

  constructor(
    private http: HttpClient
  ) {
  }

  getAutoCompleteVariants(query: string): Observable<Film[]> {
    return this.http.get<FilmSearchDTO>(`${environment.apiUrl}`, {
      params: {
        apikey: environment.apiKey,
        s: query
      }
    }).pipe(
      map(filmSearchDTO => filmSearchDTO.Search)
    );
  }
}
