import "./review.css";
export const Review = ({ review }) => {
  return (
    <div className="review">
      <h4>User: {review.user}</h4>
      <h4>Review: {review.text}</h4>
      <h4>Rating: {review.rating}</h4>
    </div>
  );
};
