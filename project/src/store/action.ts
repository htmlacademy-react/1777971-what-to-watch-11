import {createAction} from '@reduxjs/toolkit';

export const setGenre = createAction<string>('films/setGenre');
export const setFilmsList = createAction('films/setFilmsList');
export const setNextPage = createAction('films/setNextPage');
export const setStartPage = createAction('films/setStartPage');
