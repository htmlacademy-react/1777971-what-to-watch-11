import {createAction} from '@reduxjs/toolkit';

export const setGenre = createAction<string>('films/setGenre');
export const getFilmsList = createAction('films/getFilmsList');
