export default function ExpenseList({
  expenses,
  cateFiltered,
  totalExpense,
  priceCate,
}) {
  function filteredCate(e) {
    cateFiltered(e.target.value);
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
              {expense.expense} - {expense.cate}
              <button>delete</button>
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
