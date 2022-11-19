import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';
import { films } from './mocks/films';
import {Provider} from 'react-redux';
import {store} from './store/index';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);

export interface IPromo {
  title: string;
  genre: string;
  year: number;
}

const promoFilm: IPromo = {title: 'The Grand Budapest Hotel', genre: 'Drama', year: 2014};

root.render(
  <React.StrictMode>
    <Provider store={store}><App films={films} promoFilm={promoFilm} /></Provider>

  </React.StrictMode>,
);
