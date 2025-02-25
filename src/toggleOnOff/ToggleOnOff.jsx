import { useReducer } from "react";

const initialState = { isOn: false };

function reducer(state, action) {
  switch (action.type) {
    case "toggle":
      return { isOn: !state.isOn };
    default:
      return state;
  }
}

export default function ToggleOnOff() {
  const [state, dispacth] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>{state.isOn ? "🟢 menyala" : "🔴 padam"}</h1>
      <button onClick={() => dispacth({ type: "toggle" })}>toggle</button>
    </div>
  );
}
