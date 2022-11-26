import { createReducer } from '@reduxjs/toolkit';
import { setGenre, setFilmsList, setNextPage, setStartPage } from './action';
import { films, IFilm } from '../mocks/films';

const initialState: { genre: string; films: IFilm[]; page: number } = {
  genre: 'All genres',
  films: [],
  page: 1
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      const genre = action.payload;
      state.genre = genre;
    })
    .addCase(setFilmsList, (state) => {
      state.films = films;
    })
    .addCase(setNextPage, (state) => {
      state.page += 1;
    })
    .addCase(setStartPage, (state) => {
      state.page = 1;
    });
});

export { reducer };
