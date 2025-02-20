import { v4 } from "uuid";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { useState } from "react";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);

  function handleAddTodo(todo, cate) {
    let newTodo = {
      id: v4(),
      todo: todo,
      status: false,
      categories: cate,
    };
    setTodos((befTodos) => [...befTodos, newTodo]);
    console.log(todos);
  }

  function handleStatChange(id) {
    setTodos((befTodos) =>
      befTodos.map((todo) =>
        todo.id === id ? { ...todo, status: !todo.status } : todo
      )
    );
  }

  function handleDelTodo(id) {
    setTodos((befTodo) => befTodo.filter((todo) => todo.id !== id));
  }

  return (
    <>
      <TodoForm onAddTodo={handleAddTodo} addCate={handleAddTodo}></TodoForm>
      <TodoList
        todos={todos}
        switchStat={handleStatChange}
        markDel={handleDelTodo}
      />
    </>
  );
}
