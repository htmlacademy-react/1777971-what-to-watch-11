
import FilmListItem from '../film-list-item/film-list-item';
import { useAppDispatch, useAppSelector} from '../../hooks';
import { IFilm } from '../../mocks/films';
import { useEffect } from 'react';
import { setFilmsList, setFilmsListLength, setStartPage } from '../../store/action';

function FilmsList() {
  const films = useAppSelector((state) => state.films);
  const page = useAppSelector((state) => state.page);
  const currentGenre = useAppSelector((state) => state.genre);
  const dispatch = useAppDispatch();

  const filterFilmsListForGenre = ()=>{
    let filteredFilms: IFilm[] = [];
    if(currentGenre === 'All genres') {
      filteredFilms = [...films];
      dispatch(setFilmsListLength(filteredFilms.length));
      return filteredFilms.slice(0, 8 * page);}

    for (let j = 0; j < films.length; j++) {
      const film = films[j];

      film.genres.forEach((genreItem) => {
        if (genreItem === currentGenre) {
          filteredFilms.push(film);
        }
      });
    }
    // filteredFilms.slice(-2);
    const inOnePage = filteredFilms.slice(0, 8 * page);
    dispatch(setFilmsListLength(filteredFilms.length));
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
