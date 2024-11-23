import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function updateCount() {
    setCount(count + 1);
  }

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={updateCount} >+</button>
    </div>
  );
}

export default Counter;
