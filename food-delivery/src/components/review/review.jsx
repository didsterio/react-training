export const Review = ({ review }) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        borderRadius: "8px",
        border: "1px solid black",
        padding: "10px",
      }}
    >
      <h4>User: {review.user}</h4>
      <h4>Review: {review.text}</h4>
      <h4>Rating: {review.rating}</h4>
    </div>
  );
};
