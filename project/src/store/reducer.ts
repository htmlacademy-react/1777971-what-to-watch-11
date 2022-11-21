import {createReducer} from '@reduxjs/toolkit';
import {setGenre, setFilmsList} from './action';
import {films, IFilm} from '../mocks/films';

const initialState: {genre: string; films: IFilm[]} = {
  genre: 'All genres',
  films: [],
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      const genre = action.payload;
      state.genre = genre;
    })
    .addCase(setFilmsList, (state) => {
      state.films = films;

    });
});

export {reducer};
