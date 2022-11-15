import { IFilm } from '../../mocks/films';

type Props = {
  selectedFilm:IFilm;
};
function Details({selectedFilm}: Props): JSX.Element {
  return (
    <div className="film-card__text film-card__row">
      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Director</strong>
          <span className="film-card__details-value">
            {selectedFilm.director}
          </span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Starring</strong>
          {selectedFilm.starring.map((star) => (
            <span className="film-card__details-value" key={star}>
              {star}, <br />
            </span>
          ))}
        </p>
      </div>

      <div className="film-card__text-col">
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Run Time</strong>
          <span className="film-card__details-value">
            {Math.floor(selectedFilm.runTime / 60)}h {selectedFilm.runTime % 60}
            m
          </span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Genre</strong>
          <span className="film-card__details-value">
            {selectedFilm.genres[0]}
          </span>
        </p>
        <p className="film-card__details-item">
          <strong className="film-card__details-name">Released</strong>
          <span className="film-card__details-value">{selectedFilm.date}</span>
        </p>
      </div>
    </div>
  );
}

export default Details;
