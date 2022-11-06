import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

type Props = {
  name: string;
  previewImage: string;
  id: number;
  isHover: number;
  setIsHover: (isHover: number) => void;
};

function FilmListItem({ name, previewImage, id,isHover, setIsHover }: Props) {
  return (
    <article className="small-film-card catalog__films-card" onMouseEnter={()=>{setIsHover(id);}} onMouseLeave={()=>{setIsHover(0);}}>
      <div className="small-film-card__image">
        <img
          src={previewImage}
          alt="Fantastic Beasts: The Crimes of Grindelwald"
          width="280"
          height="175"
        />
      </div>
      <h3 className="small-film-card__title">
        <Link className="small-film-card__link" to={`${AppRoute.Films}${id}`}>
          {name}
        </Link>
      </h3>
    </article>
  );
}

export default FilmListItem;
