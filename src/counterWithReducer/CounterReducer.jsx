import { useReducer } from "react";

const initialValue = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return initialValue;
  }
}

export default function CounterReducer() {
  const [state, dispacth] = useReducer(reducer, initialValue);

  return (
    <div>
      <button onClick={() => dispacth({ type: "increment" })}>increment</button>
      <p>count: {state.count}</p>
      <button onClick={() => dispacth({ type: "decrement" })}>decrement</button>
      <div>
        <button onClick={() => dispacth({ type: "reset" })}>reset</button>
      </div>
    </div>
  );
}
