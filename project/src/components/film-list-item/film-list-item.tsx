import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';
import VideoPlayer from '../video-player/video-player';
import { useRef, useEffect } from 'react';
import { IFilm } from '../../mocks/films';
import { useState } from 'react';


type Props = {
  film: IFilm;
};

function FilmListItem({ film }: Props) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHover, setIsHover] = useState<boolean>(false);

  const handlePlayVideo = () => {
    videoRef?.current?.play();
  };

  useEffect(() => {
    if (isHover) {
      const timer = setTimeout(handlePlayVideo, 1000);

      return () => clearTimeout(timer);
    }
  }, [isHover]);

  return (
    <article
      className="small-film-card catalog__films-card"
      onMouseEnter={() => {
        setIsHover(true);
      }}
      onMouseLeave={() => {
        setIsHover(false);
      }}
    >
      <div className="small-film-card__image">
        {isHover ? (
          <VideoPlayer
            trailer={film.trailer}
            poster={film.previewImage}
            videoRef={videoRef}
          />
        ) : (
          <img
            src={film.previewImage}
            alt="Fantastic Beasts: The Crimes of Grindelwald"
            width="280"
            height="175"
          />
        )}

      </div>
      <h3 className="small-film-card__title">
        <Link
          className="small-film-card__link"
          to={`${AppRoute.Films}${film.id}`}
        >
          {film.name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmListItem;
