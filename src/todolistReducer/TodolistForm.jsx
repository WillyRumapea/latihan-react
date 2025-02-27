import { useState } from "react";

export default function TodolistForm({ dispatch }) {
  const [todo, setTodo] = useState("");
  const [cate, setCate] = useState("");

  function handleChange(e) {
    setTodo(e.target.value);
  }

  function handleCate(e) {
    setCate(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "ADD_NOTE",
      text: todo,
      cate: cate,
    });
    setTodo("");
  }

  return (
    <div>
      <h1>Todo Form</h1>
      <form>
        <input type="text" value={todo} onChange={handleChange} />
        <select onChange={handleCate}>
          <option value="important">important</option>
          <option value="slow">slow</option>
        </select>
        <button onClick={handleSubmit}>add</button>
      </form>
    </div>
  );
}
