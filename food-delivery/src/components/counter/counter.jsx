import { useState } from "react";

const minCount = 0;
const maxCount = 5;

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginTop: "auto", padding: "10px" }}>
      <button
        style={{ width: "25px" }}
        onClick={() => {
          if (count > minCount) {
            setCount(count - 1);
          }
        }}
      >
        -
      </button>
      {count}
      <button
        style={{ width: "25px" }}
        onClick={() => {
          if (count < maxCount) {
            setCount(count + 1);
          }
        }}
      >
        +
      </button>
    </div>
  );
};
