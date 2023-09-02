import React, { useState } from "react";


function Counter(props) {
  const [count, setCount] = useState(props.initialValue);

  const decrement = () => {
    setCount(count - 1);
  };

  const increment = () => {
    setCount(count + 1);
  };

  const reset = () => {
    setCount(props.initialValue);
  };

  return (
    <div>
      <h1>ДЗ 29. Counter</h1>
      <div className="counter">
        <h2>Counter App</h2>
        <div className="count">{count}</div>
        <button onClick={decrement}>-</button>
        <button onClick={increment}>+</button>
        <button onClick={reset} className="reset">Reset</button>
      </div>
    </div>
  );
}
export default Counter;

