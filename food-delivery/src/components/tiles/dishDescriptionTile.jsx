import { Counter } from "../counter/counter";

export const DishDescriptionTile = ({ name, ingredients, price }) => {
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
      <h2>{name}</h2>
      <h4>{ingredients}</h4>
      <h4>{price}$</h4>
      <Counter />
    </div>
  );
};
