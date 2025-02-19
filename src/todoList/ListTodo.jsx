export default function ListTodo({ todos, switchStatus, deleteMark }) {
  return (
    <div>
      <ul>
        {todos.map((todo) => {
          return (
            <li key={todo.id}>
              {todo.todo}
              <input
                type="checkbox"
                value={todo.status} //checked = {todo.status}
                onChange={() => switchStatus(todo.id)}
              />
              <button onClick={() => deleteMark(todo.id)}>hapus</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
