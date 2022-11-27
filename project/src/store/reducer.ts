import { createReducer } from '@reduxjs/toolkit';
import { setGenre, setFilmsList, setNextPage, setStartPage, setFilmsListLength } from './action';
import { films, IFilm } from '../mocks/films';

const initialState: { genre: string; films: IFilm[]; page: number;currentCountFilms: number } = {
  genre: 'All genres',
  films: [],
  currentCountFilms: 0,
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
    .addCase(setFilmsListLength, (state, action) => {
      const count = action.payload;
      state.currentCountFilms = count;
    })
    .addCase(setNextPage, (state) => {
      state.page += 1;
    })
    .addCase(setStartPage, (state) => {
      state.page = 1;
    });

});

export { reducer };
