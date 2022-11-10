import { useState } from 'react';

function ReviewSendForm(): JSX.Element {
  const [starRating, setStarRating] = useState(0);
  const [reviewText, setReviewText] = useState("");

  return (
    <form action="#" className="add-review__form">
      <div className="rating">
        <div className="rating__stars">
          {Array.from({ length: 10 }, (_, i) => i + 1).map((star) => (
            <>
              <input
                className="rating__input"
                id={`star-${star}`}
                type="radio"
                name="rating"
                value={star}
              />
              <label
                className="rating__label"
                htmlFor={`star-${star}`}
                onClick={() => {
                  setStarRating(star);
                }}
              >
                Rating {star}
              </label>
            </>
          ))}
        </div>
      </div>

      <div className="add-review__text">
        <textarea
          className="add-review__textarea"
          name="review-text"
          id="review-text"
          placeholder="Review text"
          onChange={(e) => {
            setReviewText(e.target.value);
          }}
          value={reviewText}
        />
        <div className="add-review__submit">
          <button
            className="add-review__btn"
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              setStarRating(0);
              setReviewText("");
              return { starRating, reviewText };
            }}
          >
            Post
          </button>
        </div>
      </div>
    </form>
  );
}

export default ReviewSendForm;
