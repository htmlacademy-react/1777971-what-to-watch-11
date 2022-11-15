import { IReview } from '../../mocks/films';

type Props = {
  reviews: IReview[];
};
function Reviews({ reviews }: Props): JSX.Element {
  const isEven = (index: number) => index % 2 === 0;
  return (
    <div className="film-card__reviews film-card__row">
      <div className="film-card__reviews-col">
        {reviews.map(
          (reviewItem, index) =>
            isEven(index) && (
              <div className="review">
                <blockquote className="review__quote">
                  <p className="review__text">
                    {reviewItem.text}
                  </p>

                  <footer className="review__details">
                    <cite className="review__author">Kate Muir</cite>
                    <time className="review__date" dateTime="2016-12-24">
                      {reviewItem.date}
                    </time>
                  </footer>
                </blockquote>

                <div className="review__rating">{reviewItem.rating}</div>
              </div>
            )
        )}
      </div>
      <div className="film-card__reviews-col">
        {reviews.map(
          (reviewItem, index) =>
            !isEven(index) && (
              <div key={reviewItem.id} className="review">
                <blockquote className="review__quote">
                  <p className="review__text">
                    {reviewItem.text}
                  </p>

                  <footer className="review__details">
                    <cite className="review__author">Kate Muir</cite>
                    <time className="review__date" dateTime="2016-12-24">
                      {reviewItem.date}
                    </time>
                  </footer>
                </blockquote>

                <div className="review__rating">{reviewItem.rating}</div>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Reviews;
