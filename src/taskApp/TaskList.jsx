export default function TaskList({ items, onToggleTask }) {
  return (
    <div>
      <h1>Task List</h1>
      <ul>
        {items.map((item) => {
          return (
            <li key={item.id}>
              {item.text}
              <input
                type="checkbox"
                checked={item.completed}
                onChange={() => onToggleTask(item.id)}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
}
