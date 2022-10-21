import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './components/app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement,
);
const title = 'The Grand Budapest Hotel';
const genre = 'Drama';
const releaseDate = 2014;

root.render(
  <React.StrictMode>
    <App title={title} genre={genre} releaseDate={releaseDate} />
  </React.StrictMode>,
);
