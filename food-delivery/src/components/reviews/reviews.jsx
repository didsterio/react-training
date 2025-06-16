import { Review } from "../review/review";
import styles from "./reviews.module.css";

export const Reviews = ({ reviewIds }) => {
  return (
    <div className={styles.reviewsContainer}>
      <div className={styles.reviewsTitle}>REVIEWS</div>
      <div className={styles.reviewsElements}>
        {reviewIds.map((id) => (
          <Review reviewId={id} />
        ))}
      </div>
    </div>
  );
};
