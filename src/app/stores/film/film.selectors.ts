import {createFeatureSelector, createSelector} from '@ngrx/store';
import {FILM_FEATURE_NAME, FilmState} from './film.state';

const filmFeature = createFeatureSelector<FilmState>(FILM_FEATURE_NAME);
export const getFilmsSelector = createSelector(filmFeature, filmState => filmState.films);
export const getFoundedByCompleteFilmsSelector = createSelector(filmFeature, filmState => filmState.completeFoundedFilms);
export const getFoundedBySearchFilmsSelector = createSelector(filmFeature, filmState => filmState.searchFoundedFilms);
export const getSavedSelector = createSelector(filmFeature, filmState => filmState.savedFilms);
