import {createFeatureSelector, createSelector} from '@ngrx/store';
import {FILM_FEATURE_NAME, FilmState} from './film.state';

const filmFeature = createFeatureSelector<FilmState>(FILM_FEATURE_NAME);
export const getFilmsSelector = createSelector(filmFeature, filmState => filmState.films);
export const getFoundedFilmsSelector = createSelector(filmFeature, filmState => filmState.films);
export const getSearchedSelector = createSelector(filmFeature, filmState => filmState.films);
