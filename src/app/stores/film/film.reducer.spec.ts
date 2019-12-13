import {filmReducer} from './film.reducer';
import {initialFilmState} from './film.state';

describe('Film Reducer', () => {
  describe('an unknown action', () => {
    it('should return the previous state', () => {
      const action = {} as any;
      const result = filmReducer(initialFilmState, action);
      expect(result).toBe(initialFilmState);
    });
  });
});
