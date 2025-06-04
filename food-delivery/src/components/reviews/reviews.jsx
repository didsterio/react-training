import { Review } from "../review/review";

export const Reviews = ({ reviews }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        borderRadius: "10px",
        padding: "16px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", // n колонок
        gap: "16px", // отступ между элементами
      }}
    >
      REVIEWS
      {reviews.map((review) => (
        <Review review={review} />
      ))}
    </div>
  );
};
