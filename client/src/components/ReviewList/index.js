import React from 'react';
import { Link } from 'react-router-dom';


const ReviewList = ({
  reviews,
  title,
  showTitle = true,
  showUsername = true,
}) => {
  if (!reviews.length) {
    return <h3>No Reviews Yet</h3>;
  }

  return (
    <div>
      {showTitle && <h3>{title}</h3>}
      {reviews &&
        reviews.slice(0,3).map((review) => (
          <div key={review._id} className="card mb-3">
            <h4 className="card-header text-light p-2 m-0">
              {showUsername ? (
                <Link
                  className="text-light"
                  to={`/profiles/${review.ReviewAuthor}`}
                >
                  {review.ReviewAuthor} <br />
                  <span style={{ fontSize: '1rem' }}>
                    left this review on {review.createdAt}
                  </span>
                </Link>
              ) : (
                <>
                  <span style={{ fontSize: '1rem' }}>
                    You left this review on {review.createdAt}
                  </span>
                </>
              )}
            </h4>
            <div className="card-body text-dark bg-light p-2">
              <p>{review.ReviewText}</p>
            </div>
            <Link
              className="card-btn btn-block btn-rounded"
              to={`/reviews/${review._id}`}
            >
              Leave a comment on this review!
            </Link>
          </div>
        ))}
    </div>
  );
};

export default ReviewList;
