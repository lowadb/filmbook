import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationCancel, NavigationEnd, Router} from '@angular/router';
import {Observable, Subject} from 'rxjs';
import {filter, takeUntil} from 'rxjs/operators';
import {GetActiveFilm, UnSetActiveFilm} from '../../stores/film/film.actions';
import {Store} from '@ngrx/store';
import {Film, FilmState} from '../../stores/film/film.state';
import {getActiveFilmSelector} from '../../stores/film/film.selectors';

@Component({
  selector: 'app-film-page',
  templateUrl: './film-page.component.html',
  styleUrls: ['./film-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FilmPageComponent implements OnInit, OnDestroy {
  destroyed$ = new Subject();
  film$: Observable<Film>;

  constructor(
    private router: Router,
    private filmStore$: Store<FilmState>,
    private route: ActivatedRoute
  ) {
    this.film$ = this.filmStore$.select(getActiveFilmSelector);
    this.film$.subscribe(film => console.log(JSON.stringify(film, null, 2)));
    // this.router.events
    //   .pipe(
    //     takeUntil(this.destroyed$),
    //     filter(event => event instanceof NavigationEnd || event instanceof NavigationCancel))
    //   .subscribe((event: RouterRedirectEvent) => {
    //     const url = (event.urlAfterRedirects || event.url);
    //     console.log({url});
    //     // this.filmStore$.dispatch(new GetActiveFilm({id: ''}))
    //   });

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
}
