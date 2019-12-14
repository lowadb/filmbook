export const FILM_FEATURE_NAME = 'state.film';
export const REQUEST_LIMIT = 10;
export const LOCAL_STORAGE_NAME = 'films';

export interface FilmState {
  films: Film[];
  completeFoundedFilms: Film[];
  searchFoundedFilms: Film[];
  savedFilms: Film[];
  activeFilm: Film;
}

export const initialFilmState: FilmState = {
  films: [],
  completeFoundedFilms: [],
  searchFoundedFilms: [],
  savedFilms: [],
  activeFilm: null,
};

export interface Film {
  imdbID: string;
  Title: string;
  Year: string;
  Rated: string;
  Released: string;
  Runtime: string;
  Genre: string;
  Director: string;
  Writer: string;
  Actors: string;
  Plot: string;
  Language: string;
  Country: string;
  Awards: string;
  Poster: string;
  Ratings: { Source: string; Value: string }[];
  Metascore: string;
  imdbRating: string;
  imdbVotes: string;
  Type: string;
  DVD: string;
  BoxOffice: string;
  Production: string;
  Website: string;
  Response: string;
}


export interface FilmSearchDTO {
  Search: Film[];
  totalResults: number;
  Response: boolean;
}

export interface Field {
  id: string;
  name: string;
}

export const FILM_FIELDS: Field[] = [
  {id: 'Plot', name: 'Описание'},
  {id: 'Runtime', name: 'Продолжительность'},
  {id: 'Director', name: 'Продюссер'},
  {id: 'Writer', name: 'Сценарист'},
  {id: 'Actors', name: 'В главных ролях'},
  {id: 'Year', name: 'Год выпуска'},
  {id: 'Released', name: 'Дата выхода в прокат'},
  {id: 'Genre', name: 'Жанр'},
  {id: 'Language', name: 'Язык'},
  {id: 'Country', name: 'Страна'},
  {id: 'Awards', name: 'Награды'},
  {id: 'imdbRating', name: 'Рейтинг'},
  {id: 'Type', name: 'Тип'},
];
