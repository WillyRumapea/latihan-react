import { useState } from "react";
import { useReducer } from "react";

const nilaiAwal = { angka: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { angka: state.angka + action.step };
    case "decrement":
      return { angka: state.angka - action.step };
  }
}

export default function CounterDynamic() {
  const [state, dispacth] = useReducer(reducer, nilaiAwal);
  const [step, setStep] = useState(1);

  return (
    <div>
      <label>
        Step:
        <input
          type="number"
          value={step}
          onChange={(e) => setStep(Number(e.target.value))}
        />
      </label>
      <h1>angka: {state.angka}</h1>
      <button onClick={() => dispacth({ type: "increment", step })}>+</button>
      <button onClick={() => dispacth({ type: "decrement", step })}>-</button>
    </div>
  );
}
