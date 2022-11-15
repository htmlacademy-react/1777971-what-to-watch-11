import { AppRoute } from '../../const';
import { Link } from 'react-router-dom';
import { films, IFilm } from '../../mocks/films';

type Props = {
  currentGenres: string[];
  currentId: number;
};

function MoreLikeList({ currentGenres,currentId }: Props): JSX.Element {

  const getSimilarFilms = () => {
    const similarFilms: IFilm[] = [];
    for (let i = 0; i < currentGenres.length; i++) {
      const genre = currentGenres[i];
      for (let j = 0; j < films.length; j++) {
        const film = films[j];

        film.genres.map((genreItem) => {
          if (genreItem === genre && film.id !== currentId) {
            similarFilms.push(film);
          }
        });
      }
    }
    const unuqFilms = [...new Set(similarFilms)];
    return unuqFilms.splice(0, 4);
  };

  return (
    <div className="catalog__films-list">
      {getSimilarFilms()?.map((filmItem, index) => (
        <article
          key={filmItem?.name}
          className="small-film-card catalog__films-card"
        >
          <div className="small-film-card__image">
            <img
              src={filmItem?.previewImage}
              alt={filmItem?.name}
              width="280"
              height="175"
            />
          </div>
          <h3 className="small-film-card__title">
            <Link
              className="small-film-card__link"
              to={`${AppRoute.Films}/${filmItem?.id || '1'}`}
            >
              {filmItem?.name}
            </Link>
          </h3>
        </article>
      ))}
    </div>
  );
}

export default MoreLikeList;
