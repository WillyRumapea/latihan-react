export default function TodoList({ todos, dispatch }) {
  return (
    <div>
      <h1>Todo List</h1>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.text}
              <input
                type="checkbox"
                onChange={() =>
                  dispatch({ type: "SWITCH_STATUS", id: todo.id })
                }
              />
              <button
                onClick={() => dispatch({ type: "DELETE_NOTE", id: todo.id })}
              >
                delete
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
