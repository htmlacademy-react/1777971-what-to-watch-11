import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

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
    <App promoFilm={promoFilm} />
  </React.StrictMode>,
);
