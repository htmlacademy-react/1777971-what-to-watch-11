
import FilmListItem from '../film-list-item/film-list-item';
import { useAppDispatch, useAppSelector} from '../../hooks';
import { IFilm } from '../../mocks/films';
import { useEffect } from 'react';
import { setFilmsList } from '../../store/action';

function FilmsList() {
  const films = useAppSelector((state) => state.films);
  const currentGenre = useAppSelector((state) => state.genre);
  const dispatch = useAppDispatch();

  const filterFilmsListForGenre = ()=>{
    if(currentGenre === 'All genres') {return films;}
    const filteredFilms: IFilm[] = [];

    for (let j = 0; j < films.length; j++) {
      const film = films[j];

      film.genres.forEach((genreItem) => {
        if (genreItem === currentGenre) {
          filteredFilms.push(film);
        }
      });
    }
    return filteredFilms;
  };

  useEffect(()=>{
    dispatch(setFilmsList());
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
