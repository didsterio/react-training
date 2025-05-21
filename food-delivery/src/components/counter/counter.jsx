import { useState } from "react";

export const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <div style={{ marginTop: "auto", padding: "10px" }}>
      <button
        style={{ width: "25px" }}
        onClick={() => {
          setCount(count - 1);
        }}
      >
        -
      </button>
      {count}
      <button
        style={{ width: "25px" }}
        onClick={() => {
          setCount(count + 1);
          console.log("click count" + { count });
        }}
      >
        +
      </button>
    </div>
  );
};
