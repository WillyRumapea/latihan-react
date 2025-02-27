import { useState } from "react";
import { useReducer } from "react";

const nilaiAwal = { angka: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { angka: state.angka + action.step };
    case "decrement":
      return { angka: state.angka - action.step };
    case "reset":
      return nilaiAwal;
  }
}

export default function CounterFactor() {
  const [state, dispacth] = useReducer(reducer, nilaiAwal);
  const [step, setStep] = useState(1);

  function handleStep(e) {
    setStep(Number(e.target.value));
  }

  return (
    <div>
      <label>
        Step:
        <input type="number" value={step} onChange={handleStep} />
      </label>
      <h1>Angka: {state.angka}</h1>
      <div>
        <button onClick={() => dispacth({ type: "increment", step })}>+</button>
        <button onClick={() => dispacth({ type: "decrement", step })}>-</button>
        <button onClick={() => dispacth({ type: "reset" })}>reset</button>
      </div>
    </div>
  );
}
