import { TestBed } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { FilmEffects } from './film.effects';

describe('FilmEffects', () => {
  let actions$: Observable<any>;
  let effects: FilmEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        FilmEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<FilmEffects>(FilmEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
