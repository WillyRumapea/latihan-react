import { useState } from "react";

export default function FormTask({ onAddTask }) {
  const [task, setTask] = useState([]);

  function handleChange(e) {
    setTask(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    onAddTask(task);
    setTask("");
  }

  return (
    <div>
      <h1>Form Task</h1>
      <form>
        <input type="text" onChange={handleChange} />
        <button onClick={handleClick}>add!!</button>
      </form>
    </div>
  );
}
