import { useState } from "react";

export default function FormTodo({ onAddTodo }) {
  const [todo, setTodo] = useState([]); // sebaiknya pakai "" aja

  function handleChange(e) {
    setTodo(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    onAddTodo(todo);
    setTodo("");
  }

  return (
    <div>
      <h1>Todo List Form</h1>
      <form>
        <input type="text" onChange={handleChange} value={todo} />
        <button onClick={handleClick}>Add</button>
      </form>
      <h1>Todo List</h1>
    </div>
  );
}
