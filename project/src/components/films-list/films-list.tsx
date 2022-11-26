
import FilmListItem from '../film-list-item/film-list-item';
import { useAppDispatch, useAppSelector} from '../../hooks';
import { IFilm } from '../../mocks/films';
import { useEffect } from 'react';
import { setFilmsList, setStartPage } from '../../store/action';

function FilmsList() {
  const films = useAppSelector((state) => state.films);
  const page = useAppSelector((state) => state.page);
  const currentGenre = useAppSelector((state) => state.genre);
  const dispatch = useAppDispatch();

  const filterFilmsListForGenre = ()=>{
    if(currentGenre === 'All genres') {return films.slice(8 * page - 8, 8 * page);}
    const filteredFilms: IFilm[] = [];

    for (let j = 0; j < films.length; j++) {
      const film = films[j];

      film.genres.forEach((genreItem) => {
        if (genreItem === currentGenre) {
          filteredFilms.push(film);
        }
      });
    }
    // filteredFilms.slice(-2);
    const inOnePage = filteredFilms.slice(1 * page,3 * page);
    return inOnePage;
  };

  useEffect(()=>{
    dispatch(setFilmsList());
    dispatch(setStartPage());
  }, []);

  return (
    <div className="catalog__films-list">
      {filterFilmsListForGenre().map((film) => (
        <FilmListItem key={film.name} film={film}/>
      ))}
    </div>
  );
}

export default FilmsList;
