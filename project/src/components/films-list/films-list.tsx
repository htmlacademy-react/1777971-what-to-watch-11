
import FilmListItem from '../film-list-item/film-list-item';
import { useAppSelector} from '../../hooks';

function FilmsList() {
  const films = useAppSelector((state) => state.films);

  return (
    <div className="catalog__films-list">
      {films.map((film) => (
        <FilmListItem key={film.name} film={film}/>
      ))}
    </div>
  );
}

export default FilmsList;
