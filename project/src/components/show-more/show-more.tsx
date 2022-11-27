import { useAppDispatch, useAppSelector } from '../../hooks';
import { setNextPage } from '../../store/action';

function ShowMore(): JSX.Element {
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state.page);
  const currentCountFilms = useAppSelector((state) => state.currentCountFilms);

  return (
    <div className="catalog__more">
      {currentCountFilms > 8 * page ? (
        <button
          className="catalog__button"
          type="button"
          onClick={() => {
            dispatch(setNextPage());
          }}
        >
          Show more {page}
        </button>
      ) : (
        <div></div>
      )}
    </div>
  );
}
export default ShowMore;
