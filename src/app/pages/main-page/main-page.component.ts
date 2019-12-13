import {Component, OnDestroy, OnInit} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {Observable, Subject} from 'rxjs';
import {debounceTime, distinctUntilChanged, takeUntil} from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {Film, FilmState} from '../../stores/film/film.state';
import {Store} from '@ngrx/store';
import {SearchByAutoCompleteFilmAction, SearchFilmAction} from '../../stores/film/film.actions';
import {getFoundedFilmsSelector} from '../../stores/film/film.selectors';
import {MatAutocompleteSelectedEvent} from '@angular/material';

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
  destroyed$ = new Subject();


  constructor(
    private filmStore$: Store<FilmState>
  ) {
    this.completions$ = this.filmStore$.select(getFoundedFilmsSelector);
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

  submitSearch($event: Event) {
    console.log(`search `, {$event});
    this.filmStore$.dispatch(new SearchFilmAction({query: ''}));
  }

  selectSearch($event: MatAutocompleteSelectedEvent) {
    console.log(`select `, {$event});
    this.filmStore$.dispatch(new SearchFilmAction({query: ''}));
  }
}
