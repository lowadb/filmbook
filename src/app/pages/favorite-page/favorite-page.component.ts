import {Component, OnDestroy, OnInit} from '@angular/core';
import {Film, FilmState} from '../../stores/film/film.state';
import {Observable, Subject} from 'rxjs';
import {InitFavoriteFilmsAction, RemoveFavoriteFilmAction} from '../../stores/film/film.actions';
import {Store} from '@ngrx/store';
import {getFavoriteFilmsSelector} from '../../stores/film/film.selectors';

@Component({
  selector: 'app-favorite-page',
  templateUrl: './favorite-page.component.html',
  styleUrls: ['./favorite-page.component.scss']
})
export class FavoritePageComponent implements OnInit, OnDestroy {
  films$: Observable<Film[]>;

  destroyed$ = new Subject();

  constructor(
    private filmStore$: Store<FilmState>) {
    this.films$ = this.filmStore$.select(getFavoriteFilmsSelector);
  }

  ngOnInit() {
    this.filmStore$.dispatch(new InitFavoriteFilmsAction());
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
  }

  deleteFromFavorite($event: MouseEvent, film: Film) {
    this.filmStore$.dispatch(new RemoveFavoriteFilmAction({film}));
    $event.preventDefault();
    $event.stopPropagation();
  }
}
