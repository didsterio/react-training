import { useSelector } from "react-redux";
import "./review.css";
import { selectReviewById } from "../../redux/entities/review/slice";
import { selectUserById } from "../../redux/entities/user/slice";
export const Review = ({ reviewId }) => {
  const review = useSelector(
    (state) => selectReviewById(state, reviewId) || {}
  );
  const user = useSelector(
    (state) => selectUserById(state, review.userId) || {}
  );

  return (
    <div className="review">
      <h4>User: {user.name}</h4>
      <h4>Review: {review.text}</h4>
      <h4>Rating: {review.rating}</h4>
    </div>
  );
};
