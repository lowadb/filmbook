import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, takeUntil} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {Film, FilmState} from '../../stores/film/film.state';
import {Store} from '@ngrx/store';
import {SearchByAutoCompleteFilmAction, SearchFilmAction} from '../../stores/film/film.actions';
import {getFoundedByCompleteFilmsSelector, getFoundedBySearchFilmsSelector} from '../../stores/film/film.selectors';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit, OnDestroy {
  autoCompleteForm = new FormGroup({
    query: new FormControl('')
  });
  completions$: Observable<Film[]>;
  foundedFilms$: Observable<Film[]>;
  destroyed$ = new Subject();
  imgUrl: string;


  constructor(
    private filmStore$: Store<FilmState>
  ) {
    // this.imgUrl = `${environment.apiPosterUrl}?apikey=${environment.apiKey}&i=`;
    this.completions$ = this.filmStore$.select(getFoundedByCompleteFilmsSelector);
    this.foundedFilms$ = this.filmStore$.select(getFoundedBySearchFilmsSelector);
    this.autoCompleteForm.valueChanges
      .pipe(
        takeUntil(this.destroyed$),
        debounceTime(500),
        distinctUntilChanged(),
      )
      .subscribe(changes => {
        if (!changes || !changes.query || changes.query.length < environment.minQueryLength) {
          this.filmStore$.dispatch(new SearchByAutoCompleteFilmAction({query: ''}));
          return;
        }
        this.filmStore$.dispatch(new SearchByAutoCompleteFilmAction(changes));
      });
  }

  ngOnInit() {
  }

  ngOnDestroy(): void {
    this.destroyed$.next();
  }

  search() {
    const {query} = this.autoCompleteForm.getRawValue();
    this.filmStore$.dispatch(new SearchFilmAction({query}));
  }
}
