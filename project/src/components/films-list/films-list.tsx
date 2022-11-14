
import { IFilm } from '../../mocks/films';
import FilmListItem from '../film-list-item/film-list-item';

type Props = {
  films: IFilm[];
};

function FilmsList({ films }: Props) {


  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmListItem key={film.name} film={film}/>
      ))}
    </div>
  );
}

export default FilmsList;
