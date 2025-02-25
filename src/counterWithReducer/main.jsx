import { createRoot } from "react-dom/client";
import CounterReducer from "./CounterReducer";

createRoot(document.getElementById("root")).render(
  <CounterReducer></CounterReducer>
);
