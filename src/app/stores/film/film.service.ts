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

  searchFilmsByTitle(query: string): Observable<Film[]> {
    return this.http.get<FilmSearchDTO>(`${environment.apiUrl}`, {
      params: {
        apikey: environment.apiKey,
        s: query.trim().split(' ').join('+').split(':').join('')
      }
    }).pipe(
      map(filmSearchDTO => filmSearchDTO.Search)
    );
  }

  searchSingleFilmByTitle(query: string): Observable<Film[]> {
    return this.http.get<Film>(`${environment.apiUrl}`, {
      params: {
        apikey: environment.apiKey,
        t: query.split(' ').join('+').split(':').join('')
      }
    }).pipe(
      map(film => (film.Response !== 'False') ? [film] : [])
    );
  }

  searchSingleFilmById(id: string): Observable<Film> {
    return this.http.get<Film>(`${environment.apiUrl}`, {
      params: {
        apikey: environment.apiKey,
        i: id
      }
    }).pipe(
      map(film => (film.Response !== 'False') ? film : null)
    );
  }
}
