import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h1>Counter: {count}</h1>
      {/* increase when Click */}
      <button onClick={increment}>Increment</button>

      {/*decrease by one when click*/}
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
