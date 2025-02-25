import { useState } from "react";

export default function ExpenseList({
  expenses,
  cateFiltered,
  totalExpense,
  priceCate,
  markDel,
  markUpd,
}) {
  const [editId, setEditId] = useState("");
  const [newText, setNewText] = useState("");

  function filteredCate(e) {
    cateFiltered(e.target.value);
  }

  function startEdit(expense) {
    setEditId(expense.id);
    setNewText(expense.expense);
  }

  function handleSubmitUpdate() {
    markUpd(editId, newText);
    setEditId("");
    setNewText("");
  }

  return (
    <div>
      <h2>Expense List</h2>
      <select onChange={filteredCate}>
        <option value="Bills_&_Utilities">Bills & Utilities</option>
        <option value="Education">Education</option>
        <option value="Food_&_Drinks">Food & Drinks</option>
        <option value="Health">Health</option>
        <option value="Savings_&_Investment">Savings & Investment</option>
        <option value="Transport">Transport</option>
      </select>
      <ul>
        {expenses.map((expense) => {
          return (
            <li key={expense.id}>
              {editId === expense.id ? (
                <>
                  <input
                    type="text"
                    value={newText}
                    onChange={(e) => setNewText(e.target.value)}
                  />
                  <button onClick={handleSubmitUpdate}>update</button>
                </>
              ) : (
                <>
                  {expense.expense} - {expense.cate}
                  <button onClick={() => startEdit(expense)}>edit</button>
                  <button onClick={() => markDel(expense.id)}>delete</button>
                </>
              )}
            </li>
          );
        })}
      </ul>
      <h2>Detail Price</h2>
      <p>Categories Price: {Number(priceCate) || 0} </p>
      <p>Total Price: {totalExpense}</p>
    </div>
  );
}
