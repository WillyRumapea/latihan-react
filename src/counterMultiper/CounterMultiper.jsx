import { useState } from "react";
import { useReducer } from "react";

const nilaiAwal = { angka: 2 };

function reducer(state, action) {
  switch (action.type) {
    case "multiper":
      return { angka: state.angka * action.factor };
    case "reset":
      return nilaiAwal;
  }
}

export default function CounterMultiper() {
  const [state, dispacth] = useReducer(reducer, nilaiAwal);
  const [factor, setFactor] = useState("");

  function handleFactor(e) {
    setFactor(Number(e.target.value));
  }

  return (
    <div>
      <label>
        faktor
        <input type="number" value={factor} onChange={handleFactor} />
      </label>
      <h1>Angka: {state.angka}</h1>
      <div>
        <button onClick={() => dispacth({ type: "multiper", factor })}>
          x2
        </button>
        <button onClick={() => dispacth({ type: "reset" })}>Reset</button>
      </div>
    </div>
  );
}
