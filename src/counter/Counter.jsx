import { useState } from "react";

export default function Counter() {
  const [counter, setCounter] = useState(0);

  function handleCounter(type) {
    if (type === "incre") {
      setCounter(counter + 1);
    } else if (type === "decre") {
      setCounter(counter - 1);
    } else {
      setCounter(0);
    }
  }

  return (
    <div>
      <h1>Counter Angka</h1>
      <div>
        <button onClick={() => handleCounter("incre")}>increment</button>
        <p>{counter}</p>
        <button onClick={() => handleCounter("decre")}>decrement</button>
      </div>
      <div>
        <button onClick={() => handleCounter("reset")}>reset</button>
      </div>
    </div>
  );
}
