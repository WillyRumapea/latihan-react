import { useState } from "react";

export default function FormName() {
  const [name, setName] = useState("");
  const [inputValue, setInputValue] = useState("buddy");

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    setInputValue(name);
    setName("");
  }

  return (
    <div>
      <h1>Form Name</h1>
      <form>
        <input type="text" onChange={handleChange} value={name} />
        <button onClick={handleClick}>Add</button>
      </form>
      <br />
      <p>halo bro {inputValue}</p>
    </div>
  );
}
