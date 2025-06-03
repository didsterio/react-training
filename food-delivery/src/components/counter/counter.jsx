import { useState } from "react";

export const Counter = ({ value, increment, decrement }) => {
  return (
    <div style={{ marginTop: "auto", padding: "10px" }}>
      <button style={{ width: "25px" }} onClick={decrement}>
        -
      </button>
      {value}
      <button style={{ width: "25px" }} onClick={increment}>
        +
      </button>
    </div>
  );
};
