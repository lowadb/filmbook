export const FILM_FEATURE_NAME = 'state.film';
export const REQUEST_LIMIT = 10;

export interface FilmState {
  films: Film[];
  foundedFilms: Film[];
  savedFilms: Film[];
}

export const initialFilmState: FilmState = {
  films: [],
  foundedFilms: [],
  savedFilms: [],
};

export interface Film {
  id: number;
  name: string;
}
