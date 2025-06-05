import { Review } from "../review/review";
import styles from "./reviews.module.css";

export const Reviews = ({ reviews }) => {
  return (
    <div className={styles.reviewsContainer}>
      <div className={styles.reviewsTitle}>REVIEWS</div>
      <div className={styles.reviewsElements}>
        {reviews.map((review) => (
          <Review review={review} />
        ))}
      </div>
    </div>
  );
};
