import { IFilm } from '../../mocks/films';

type Props = {
  selectedFilm: IFilm;
};
function Overview({ selectedFilm }: Props): JSX.Element {
  return (
    <>
      <div className="film-rating">
        <div className="film-rating__score">{selectedFilm.rating}</div>
        <p className="film-rating__meta">
          <span className="film-rating__level">{selectedFilm.ratingStatus}</span>
          <span className="film-rating__count">
            {selectedFilm.ratings} ratings
          </span>
        </p>
      </div>

      <div className="film-card__text">
        <p>{selectedFilm.firstDescription}</p>

        <p>{selectedFilm.secondDescription}</p>

        <p className="film-card__director">
          <strong>Director: {selectedFilm.director}</strong>
        </p>

        <p className="film-card__starring">
          <strong>
            Starring:{' '}
            {selectedFilm.starring.map((starPeople) => `${starPeople}, `)}
          </strong>
        </p>
      </div>
    </>
  );
}

export default Overview;
