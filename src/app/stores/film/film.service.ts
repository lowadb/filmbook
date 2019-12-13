import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Film} from './film.state';
import {environment} from '../../../environments/environment';

@Injectable()
export class FilmService {

  constructor(
    private http: HttpClient
  ) {
  }

  getAutoCompleteVariants(query: string): Observable<Film[]> {
    return this.http.get<Film[]>(`${environment.apiUrl}/?apikey=${environment.apiKey}&t=${query}`);
  }
}
