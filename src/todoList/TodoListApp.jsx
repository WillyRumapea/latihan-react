import { useState } from "react";
import FormTodo from "./FormTodo";
import ListTodo from "./ListTodo";
import { v4 } from "uuid";

export default function TodoListApp() {
  const [todos, setTodos] = useState([]);

  function handleAddTodos(todo) {
    const newTodos = {
      id: v4(),
      todo: todo,
      status: false,
    };
    setTodos((todosBef) => [...todosBef, newTodos]);
    console.log(todos);
  }

  function handleStatus(id) {
    setTodos((todosBef) =>
      todosBef.map(
        (todo) => (todo.id === id ? { ...todo, status: true } : todo) //seharusnya !todo.status
      )
    );
  }

  function handleDeleteTodo(id) {
    setTodos((todosBef) => todosBef.filter((todo) => todo.id !== id));
  }

  return (
    <div>
      <FormTodo onAddTodo={handleAddTodos} />
      <ListTodo
        todos={todos}
        switchStatus={handleStatus}
        deleteMark={handleDeleteTodo}
      />
    </div>
  );
}
