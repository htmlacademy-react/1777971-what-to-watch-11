import { Link, useParams } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import { AppRoute } from '../../const';
import { IFilm } from '../../mocks/films';
import { useState } from 'react';
import Tabs from '../../components/tabs/tabs';
import MoreLikeList from '../../components/more-like-list/more-like-list';

type Props = {
  films: IFilm[];
};
function MoviePageDetails({ films }: Props) {
  const { id } = useParams();
  const [selectedTab, setSelectedTab] = useState(0);
  const selectedFilm = films.find((film) => id && film.id === +id);
  const navList = ['Overview', 'Details', 'Reviews'];

  return selectedFilm ? (
    <div>
      <section key={selectedFilm.name} className="film-card film-card--full">
        <div className="film-card__hero">
          <div className="film-card__bg">
            <img
              src="img/bg-the-grand-budapest-hotel.jpg"
              alt="The Grand Budapest Hotel"
            />
          </div>

          <h1 className="visually-hidden">WTW</h1>

          <Header />

          <div className="film-card__wrap">
            <div className="film-card__desc">
              <h2 className="film-card__title">{selectedFilm.name}</h2>
              <p className="film-card__meta">
                {selectedFilm.genres.map((genre) => (
                  <span key={genre} className="film-card__genre">
                    {genre}
                  </span>
                ))}

                <span className="film-card__year">{selectedFilm.date}</span>
              </p>

              <div className="film-card__buttons">
                <button
                  className="btn btn--play film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 19" width="19" height="19">
                    <use xlinkHref="#play-s"></use>
                  </svg>
                  <span>Play</span>
                </button>
                <button
                  className="btn btn--list film-card__button"
                  type="button"
                >
                  <svg viewBox="0 0 19 20" width="19" height="20">
                    <use xlinkHref="#add"></use>
                  </svg>
                  <span>My list</span>
                  <span className="film-card__count">9</span>
                </button>
                <Link to={AppRoute.Review} className="btn film-card__button">
                  Add review
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="film-card__wrap film-card__translate-top">
          <div className="film-card__info">
            <div className="film-card__poster film-card__poster--big">
              <img
                src={selectedFilm.previewImage}
                alt={selectedFilm.name}
                width="218"
                height="327"
              />
            </div>

            <div className="film-card__desc">
              <nav className="film-nav film-card__nav">
                <ul className="film-nav__list">
                  {navList.map((navItem, index) => (
                    <li className={index === selectedTab ? 'film-nav__item film-nav__item--active' : 'film-nav__item'} key={navItem} onClick={()=>{setSelectedTab(index);}}>
                      <a className="film-nav__link">
                        {navItem}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>

              <Tabs selectedTab={selectedTab} selectedFilm={selectedFilm} />
            </div>
          </div>
        </div>
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>

          <MoreLikeList currentGenres={selectedFilm.genres} currentId={selectedFilm.id}/>
        </section>

        <Footer />
      </div>
    </div>
  ) : (
    <div></div>
  );
}
export default MoviePageDetails;
