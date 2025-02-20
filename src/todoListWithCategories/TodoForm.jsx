import { useState } from "react";

export default function TodoForm({ onAddTodo }) {
  const [todo, setTodo] = useState("");
  const [cate, setCate] = useState("");

  function handleTodoChange(e) {
    setTodo(e.target.value);
  }

  function handleCateChange(e) {
    setCate(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    onAddTodo(todo, cate);
    setCate("");
    setTodo("");
  }

  return (
    <div>
      <h1>Todo List Form</h1>
      <form>
        <div>
          <input type="text" onChange={handleTodoChange} />
          <label>Categories</label>
          <select onChange={handleCateChange}>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="Study">Study</option>
          </select>
        </div>
        <button onClick={handleClick}>add</button>
      </form>
    </div>
  );
}
