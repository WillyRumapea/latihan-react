import { useState } from "react";

export default function FormItem({ onAddItem }) {
  const [item, setItem] = useState("");

  function handleChange(e) {
    setItem(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    onAddItem(item);
    setItem("");
  }

  return (
    <div>
      <h1>Form Task</h1>
      <form>
        <input type="text" onChange={handleChange} value={item} />
        <button onClick={handleClick}>add</button>
      </form>
    </div>
  );
}
