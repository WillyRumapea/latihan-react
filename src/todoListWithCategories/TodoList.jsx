import { useState } from "react";

export default function TodoList({ todos, switchStat, markDel }) {
  const [cates, setCates] = useState("");

  function handleCates(e) {
    setCates(e.target.value);
  }

  return (
    <div>
      <h1>Todo List</h1>
      <label onChange={handleCates}>
        <select>
          <option value="Work">Work</option>
          <option value="Personal">Personal</option>
          <option value="Study">Study</option>
        </select>
      </label>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.todo}
              <input
                type="checkbox"
                onChange={() => switchStat(todo.id)}
                checked={todo.status}
              />
              <button onClick={() => markDel(todo.id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
