import { useState } from 'react';
import { IFilm } from '../../mocks/films';
import FilmListItem from '../film-list-item/film-list-item';

type Props = {
  films: IFilm[];
};

function FilmsList({ films }: Props) {
  const [isHover, setIsHover] = useState<number>(0);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmListItem key={film.name} name={film.name} previewImage={film.previewImage} id={film.id} isHover={isHover} setIsHover={setIsHover} />
      ))}
    </div>
  );
}

export default FilmsList;
