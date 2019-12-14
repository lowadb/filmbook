import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {AddFavoriteFilmAction, GetActiveFilm, UnSetActiveFilm} from '../../stores/film/film.actions';
import {Store} from '@ngrx/store';
import {Field, Film, FILM_FIELDS, FilmState} from '../../stores/film/film.state';
import {getActiveFilmSelector} from '../../stores/film/film.selectors';

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrls: ['./film-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmPageComponent implements OnInit, OnDestroy {
  fields: Field[] = FILM_FIELDS;
  destroyed$ = new Subject();
  film$: Observable<Film>;

  constructor(
    private router: Router,
    private filmStore$: Store<FilmState>,
    private route: ActivatedRoute
  ) {
    this.film$ = this.filmStore$.select(getActiveFilmSelector);
    this.route.params
      .pipe(takeUntil(this.destroyed$))
      .subscribe(params => {
        (params && params.id)
          ? this.filmStore$.dispatch(new GetActiveFilm({id: params.id}))
          : this.router.navigate(['/error']);
      });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
    this.filmStore$.dispatch(new UnSetActiveFilm());
  }

  addToFavorite(film: Film) {
    this.filmStore$.dispatch(new AddFavoriteFilmAction({film}));
  }
}
