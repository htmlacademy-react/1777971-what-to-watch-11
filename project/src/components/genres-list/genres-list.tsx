import {useAppDispatch, useAppSelector} from '../../hooks';
import { IFilm } from '../../mocks/films';
import {setGenre, setFilmsList} from '../../store/action';

type Props = {
  films: IFilm[];
};

function GenresList({ films }: Props): JSX.Element {
  const genre = useAppSelector((state) => state.genre);
  const dispatch = useAppDispatch();

  const getUniqueGenres = ()=>{
    const genresList = ['All genres'];
    films.forEach((filmItem)=>{
      genresList.push(...filmItem.genres);
    });
    return[...new Set(genresList)];
  };

  return (
    <ul className="catalog__genres-list">
      {getUniqueGenres().map((genreItem) => (
        <li onClick={() => {
          dispatch(setGenre(genreItem));
          dispatch(setFilmsList());
        }} key={genreItem} className={`${genreItem === genre ? 'catalog__genres-item catalog__genres-item--active' : 'catalog__genres-item catalog__genres-item'}`}
        >
          <p className="catalog__genres-link" style={{textTransform: 'capitalize'}}>
            {genreItem}
          </p>
        </li>
      ))}

    </ul>
  );
}
export default GenresList;
