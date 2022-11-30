
import FilmListItem from '../film-list-item/film-list-item';
import { useAppDispatch, useAppSelector} from '../../hooks';
import { IFilm } from '../../mocks/films';
import { useEffect, useState } from 'react';
import { setFilmsList, setFilmsListLength, setStartPage } from '../../store/action';

function FilmsList() {
  const films = useAppSelector((state) => state.films);
  const page = useAppSelector((state) => state.page);
  const currentGenre = useAppSelector((state) => state.genre);
  const dispatch = useAppDispatch();
  const [filteredFilms, setFilterdFilms] = useState<IFilm[]>([]);

  const filterFilmsListForGenre = ()=>{

    if(currentGenre === 'All genres') {
      setFilterdFilms(films);
      dispatch(setFilmsListLength(films.length));
      return;
    }
    const copy: IFilm[] = [];

    for (let j = 0; j < films.length; j++) {
      const film = films[j];

      film.genres.forEach((genreItem) => {
        if (genreItem === currentGenre) {
          copy.push(film);
        }
      });
    }
    setFilterdFilms(copy);
    dispatch(setFilmsListLength(copy.length));
  };

  useEffect(()=>{
    dispatch(setFilmsList());

  }, [dispatch]);

  useEffect(()=>{
    filterFilmsListForGenre();
    return ()=> {dispatch(setStartPage());};
  }, [currentGenre, films]);

  return (
    <div className="catalog__films-list">
      {filteredFilms.slice(0, 8 * page).map((film) => (
        <FilmListItem key={film.name} film={film}/>
      ))}
    </div>
  );
}

export default FilmsList;
