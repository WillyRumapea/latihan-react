import { useState } from "react";
import { v4 } from "uuid";
import ExpenseForm from "./ExpenseForm";
import ExpenseList from "./ExpenseList";

export default function ExpenseApp() {
  const [expenses, setExpenses] = useState([]);
  const [expenseFiltered, setExpenseFiltered] = useState("");

  function handleAddExpense(expense, cate, price, date) {
    const newExpense = {
      id: v4(),
      expense: expense,
      cate: cate,
      price: Number(price),
      date: date,
    };
    setExpenses((expenseBef) => [...expenseBef, newExpense]);
    console.log(expenses);
  }

  function filteredCate(categories) {
    setExpenseFiltered(categories);
  }

  function catePrice(categories) {
    if (!categories) return 0;
    return expenses
      .filter((expense) => expense.cate === categories)
      .reduce((total, item) => total + item, 0);
  }

  const filteredExpenses = expenseFiltered
    ? expenses.filter((expense) => expense.cate === expenseFiltered)
    : expenses;

  const totalPrice = expenses.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <ExpenseForm onAddExpense={handleAddExpense} />
      <ExpenseList
        expenses={filteredExpenses}
        cateFiltered={filteredCate}
        totalExpense={totalPrice}
        priceCate={catePrice(expenseFiltered)}
      />
    </div>
  );
}
