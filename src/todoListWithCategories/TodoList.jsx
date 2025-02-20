export default function TodoList({ todos, switchStat, markDel, onFiltered }) {
  function handleCates(e) {
    onFiltered(e.target.value);
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
              {todo.todo} - {todo.categories}
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
