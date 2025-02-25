import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import ToggleOnOff from "./ToggleOnOff";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToggleOnOff />
  </StrictMode>
);
