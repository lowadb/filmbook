export const FILM_FEATURE_NAME = 'state.film';
export const REQUEST_LIMIT = 10;

export interface FilmState {
  films: Film[];
  completeFoundedFilms: Film[];
  searchFoundedFilms: Film[];
  savedFilms: Film[];
}

export const initialFilmState: FilmState = {
  films: [],
  completeFoundedFilms: [],
  searchFoundedFilms: [],
  savedFilms: [],
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
