import {createReducer} from '@reduxjs/toolkit';
import {setGenre, getFilmsList} from './action';
import {films, IFilm} from '../mocks/films';

const initialState: {genre: string; films: IFilm[]} = {
  genre: 'All genres',
  films,
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setGenre, (state, action) => {
      const genre = action.payload;
      state.genre = genre;
    })
    .addCase(getFilmsList, (state) => {
      if(state.genre === 'All genres') {state.films = films; return;}
      const filteredFilms: IFilm[] = [];

      for (let j = 0; j < films.length; j++) {
        const film = films[j];

        film.genres.forEach((genreItem) => {
          if (genreItem === state.genre) {
            filteredFilms.push(film);
          }
        });
      }
      state.films = filteredFilms;

    });
});

export {reducer};
