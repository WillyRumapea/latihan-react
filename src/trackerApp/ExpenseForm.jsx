import { useState } from "react";

export default function ExpenseForm({ onAddExpense }) {
  const [expense, setExpense] = useState("");
  const [cate, setCate] = useState("");
  const [price, setPrice] = useState("");
  const [date, setDate] = useState("");

  function handleName(e) {
    setExpense(e.target.value);
  }

  function handleCate(e) {
    setCate(e.target.value);
  }

  function handlePrice(e) {
    setPrice(e.target.value);
  }

  function handleDate(e) {
    setDate(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    onAddExpense(expense, cate, price, date);
    setExpense("");
    setCate("");
    setPrice("");
    setDate("");
  }

  const style = {
    marginRight: "10px",
  };

  return (
    <div>
      <h1>Expense Tracker App</h1>
      <h2>Expense Form</h2>
      <form>
        <input
          type="text"
          value={expense}
          onChange={handleName}
          placeholder="your expense name"
          style={style}
        />
        <select onChange={handleCate} style={style}>
          <option value="Bills_&_Utilities">Bills & Utilities</option>
          <option value="Education">Education</option>
          <option value="Food_&_Drinks">Food & Drinks</option>
          <option value="Health">Health</option>
          <option value="Savings_&_Investment">Savings & Investment</option>
          <option value="Transport">Transport</option>
        </select>
        <input
          type="number"
          value={price}
          placeholder="type ur expense price"
          onChange={handlePrice}
          style={style}
        />
        <label style={style}>
          date
          <span> </span>
          <input type="datetime-local" value={date} onChange={handleDate} />
        </label>
        <button onClick={handleSubmit} style={style}>
          add
        </button>
      </form>
    </div>
  );
}
